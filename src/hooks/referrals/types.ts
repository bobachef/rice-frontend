import BigNumber from 'bignumber.js'

export interface ReferralState {
  totalReferrals: BigNumber
  totalReferralCommissions: BigNumber
}

export interface ReferralData extends ReferralState {
  setTotalReferrals: (numReferrals: BigNumber) => void
  setTotalCommissions: (commissionsEarned: BigNumber) => void
}