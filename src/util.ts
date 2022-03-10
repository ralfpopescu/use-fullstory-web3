import { ethers, BigNumber } from "ethers";

type DecodedParam = { name: string; value: string; type: string };

export const formatEther = (amount: string | undefined) =>
  parseFloat(ethers.utils.formatEther(BigNumber.from(amount || "0")));

export const formatGwei = (amount: string | undefined) =>
  parseFloat(ethers.utils.parseUnits(amount || "0", "gwei").toString());

export const normalizeParams = (params: DecodedParam[]) => {
  return params
    .map((param, i) => ({
      [`paramName${i}_str`]: param.name,
      [`paramValue${i}_str`]: param.value,
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
