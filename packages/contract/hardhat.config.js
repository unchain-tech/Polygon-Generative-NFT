require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API, POLYGON_URL } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    sepolia: {
      url: API_URL || '',
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : ['0'.repeat(64)],
    },
    mumbai: {
      url: POLYGON_URL || '',
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : ['0'.repeat(64)],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};
