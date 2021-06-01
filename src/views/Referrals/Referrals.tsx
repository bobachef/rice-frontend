import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@ricefarm/uikit'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import useI18n from 'hooks/useI18n'
import { useLottery, useReferralContract } from 'hooks/useContract'
import Page from 'components/layout/Page'
// import Hero from './components/Hero'
// import Divider from './components/Divider'
// import NextDrawPage from './NextDrawPage'
// import PastDrawsPage from './PastDrawsPage'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const Referrals: React.FC = () => {
  const referralContract = useReferralContract()
  const TranslateString = useI18n()

  useEffect(() => {
    const getReferralNumber = async () => {
      // const index = await getLotteryIssueIndex(lotteryContract)
      // const previousLotteryNumber = index - 1
      //
      // setCurrentLotteryNumber(index)
      // setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (referralContract) {
      // getInitialLotteryIndex()
    }
  }, [referralContract])

  return (
    <>
      {/* <Hero /> */}
      <Page>
        {/* <Wrapper>
                    <ButtonMenu activeIndex={activeIndex} onItemClick={handleClick} scale="sm" variant="subtle">
                        <ButtonMenuItem>{TranslateString(716, 'Next draw')}</ButtonMenuItem>
                        <ButtonMenuItem>{TranslateString(718, 'Past draws')}</ButtonMenuItem>
                    </ButtonMenu>
                </Wrapper>
                <Divider />
                <PastLotteryDataContext.Provider
                    value={{ historyError, historyData, mostRecentLotteryNumber, currentLotteryNumber }}
                >
                    {activeIndex === 0 ? <NextDrawPage /> : <PastDrawsPage />}
                </PastLotteryDataContext.Provider> */}
      </Page>
    </>
  )
}

export default Referrals
