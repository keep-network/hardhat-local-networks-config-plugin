import "../../../../../src/index";

import { networks as commonNetworksConfig } from '../project-networks-config'

module.exports = {
  solidity: '0.7.3',
  localNetworksConfig: __dirname + '/../../local/networks.json',
  networks: commonNetworksConfig,
}