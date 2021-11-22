const mockedInit = jest.fn();
const mockedEvent = jest.fn();
const mockedSetUserVars = jest.fn();

jest.mock("@fullstory/browser", () => ({
  init: (args: any) => mockedInit(args),
  setUserVars: (args: any) => mockedSetUserVars(args),
  event: (eventName: any, eventData: any) => mockedEvent(eventName, eventData),
}));

import { useFullStoryWeb3 } from "./";
import { renderHook, act } from "@testing-library/react-hooks";
import { abi } from "./test.abi";
import { testCall, testTransaction } from "./test-calls";

window.ethereum = window.ethereum || {};

describe("useFullStoryWeb3", () => {
  it("captures web3 events", () => {
    const mockRequest = jest.fn();
    window.ethereum = { request: mockRequest };

    renderHook(() => useFullStoryWeb3({ orgId: "123", abi: abi.abi }));

    expect(mockedInit).toHaveBeenCalledWith({ orgId: "123" });
    expect(mockedSetUserVars).toHaveBeenCalledWith({ hasWeb3: true });

    act(() => {
      window.ethereum.request(testCall);
    });

    expect(mockRequest).toHaveBeenCalledWith(testCall);
    expect(mockedEvent).toHaveBeenCalledWith("isMpunkOwner", {
      from: undefined,
      gas: undefined,
      paramName0: "sender",
      paramValue0: "0x252f04e47150540c1dc63fa56f602e55eaa89547",
      to: "0xe9fbedec2eafc89c926ded0bb7632ce221d7d2e6",
      value: undefined,
    });

    act(() => {
      window.ethereum.request(testTransaction);
    });

    expect(mockRequest).toHaveBeenCalledWith(testTransaction);
    expect(mockedEvent).toHaveBeenCalledWith("mint", {
      from: "0x252f04e47150540c1dc63fa56f602e55eaa89547",
      gas: "0x2800e",
      paramName0: "nonce",
      paramValue0: "2192",
      to: "0xe9fbedec2eafc89c926ded0bb7632ce221d7d2e6",
      value: undefined,
    });
  });
});
