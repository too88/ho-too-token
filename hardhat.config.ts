import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "solidity-coverage"

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ropsten: {
      url: "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    "harmony-testnet": {
      url: "https://api.s1.b.hmny.io",
      accounts: ['fbefd106de8c71c86215c31f4d9e01b0dcc32c3f831d07a43960ae6b48f9f06e'],
      chainId: 1666700001,
      gasMultiplier: 2
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  }
};

export default config;
