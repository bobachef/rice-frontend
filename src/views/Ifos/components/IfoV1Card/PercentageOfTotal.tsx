import React from 'react'
import BigNumber from 'bignumber.js'
import { Text } from '@ricefarm/uikit'
import { UserInfo } from 'hooks/ifo/v1/types'
import useI18n from 'hooks/useI18n'

interface PercentageOfTotalProps {
  userAmount: UserInfo['amount']
  totalAmount: BigNumber
}

const PercentageOfTotal: React.FC<PercentageOfTotalProps> = ({ userAmount, totalAmount }) => {
  const TranslateString = useI18n()
  const percentOfUserContribution = userAmount.div(totalAmount).times(100).toNumber()
  const percentOfUserDisplay = Number.isNaN(percentOfUserContribution)
    ? '-'
    : percentOfUserContribution.toLocaleString(undefined, { maximumFractionDigits: 5 })

  return (
    <Text fontSize="14px" color="textSubtle">
      {TranslateString(999, `${percentOfUserDisplay}% of total`, { num: percentOfUserDisplay })}
    </Text>
  )
}

export default PercentageOfTotal
