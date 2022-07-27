require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/yGIW-baUGghKnE1zvmQY77X4e1jqkzz3",
      accounts: ['16cd20a057bc9f7896fe1123be4808e26e255058fee3cffc1f6a75430f3abd25']
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};