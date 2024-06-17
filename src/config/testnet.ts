import { ChainId } from "@layerzerolabs/lz-sdk";
import { Token } from "@layerzerolabs/x-trader-joe-bridge";
import { baseChain } from "./constants";

const tokens = [
  new Token(
    ChainId.ARBITRUM,
    "0xcc14EcF814aAC6015bb38bc87296F28f8470eE13",
    18,
    "SEED"
  ),
  new Token(
    baseChain,
    "0x91d1043a63c8ad0fadd52a20ab1bbaf14c1bd1d0",
    18,
    "SEED"
  ),
];

const proxy = [
  {
    chainId: ChainId.ARBITRUM,
    address: "0x91d1043a63c8ad0fadd52a20ab1bbaf14c1bd1d0",
  },
];

export const testnet = { tokens, proxy };
