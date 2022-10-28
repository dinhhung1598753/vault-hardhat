import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

export default config;
