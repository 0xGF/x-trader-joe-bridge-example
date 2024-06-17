// import baseIcon from "./icons/base.webp";
export const baseChain = {
  id: 1,
  name: "Base",
  network: "basechain",
  iconUrl: "",
  iconBackground: "#000",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"],
    },
    public: {
      http: ["https://mainnet.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api",
    },
  },
  testnet: false,
};
