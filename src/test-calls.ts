export const testCall = {
  method: "eth_call",
  params: [
    {
      to: "0xe9fbedec2eafc89c926ded0bb7632ce221d7d2e6",
      data: "0xb045ae6b000000000000000000000000252f04e47150540c1dc63fa56f602e55eaa89547",
    },
    "latest",
  ],
};

export const testTransaction = {
  method: "eth_sendTransaction",
  params: [
    {
      gas: "0x51B660CDD58000",
      from: "0x252f04e47150540c1dc63fa56f602e55eaa89547",
      to: "0xe9fbedec2eafc89c926ded0bb7632ce221d7d2e6",
      data: "0x5f7c7af10000000000000000000000000000000000000000000000000000000000000890",
      value: "0x9184e72a2909ef2",
      gasPrice: "0x9184e72a00325",
    },
  ],
};
