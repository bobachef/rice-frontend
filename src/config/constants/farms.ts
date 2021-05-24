import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'RICE-BUSD RLP',
    lpAddresses: {
      97: '0x53d1B403bF26A83c31cDb421d98cBb69925A20B6',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.rice,
    quoteToken: tokens.busd,
    depositFee: 0,
    harvestInterval: 7200,
    lpType: 'CAKE LP v2',
  },
  {
    pid: 1,
    lpSymbol: 'RICE-BNB RLP',
    lpAddresses: {
      97: '0x5228A336C50c92e4d605B66F333175E7630d09Ac',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.rice,
    quoteToken: tokens.wbnb,
    depositFee: 0,
    harvestInterval: 7200,
    lpType: 'CAKE LP v2',
  },
  {
    pid: 2,
    lpSymbol: 'TeslaSafe-BNB RLP',
    lpAddresses: {
      97: '0xC9dbefe1179f9BeD3A0AFFAF124C0A641666d1b4',
      56: '0x6Ff75C20656A0E4745E7c114972D361F483AFa5f',
    },
    token: tokens.teslasafe,
    quoteToken: tokens.wbnb,
    depositFee: 0,
    harvestInterval: 7200,
    lpType: 'CAKE LP v2',
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB RLP',
    lpAddresses: {
      97: '0x23Ec7009caBA76d3a0756c98dF6a650a3B0eAC8E',
      56: '0x9e6f9f3382f9edc683203b528222c554c92382c2',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    depositFee: 0,
    harvestInterval: 28800,
    lpType: 'CAKE LP v2',
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB RLP',
    lpAddresses: {
      97: '0x01be7733edEE5f03294858B044A9e89a93047306',
      56: '0xee4ca18e91012bf87fefde3dd6723a8834347a4d',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
    depositFee: 0,
    harvestInterval: 28800,
    lpType: 'CAKE LP v2',
  },
  {
    pid: 5,
    lpSymbol: 'ETH-BNB RLP',
    lpAddresses: {
      97: '0x99BD785146aed59e179E839b01e57e7031f48a01',
      56: '0x837cd42282801e340f1f17aadf3166fee99fb07c',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    depositFee: 0,
    harvestInterval: 28800,
    lpType: 'CAKE LP v2',
  },
]

export default farms
