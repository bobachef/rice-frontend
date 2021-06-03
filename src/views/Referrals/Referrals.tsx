import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardRibbon,
  Image,
  Button,
  Link,
  Box,
  BaseLayout,
  OpenNewIcon,
} from '@ricefarm/uikit'
import { formatNumber } from 'utils/formatBalance'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import { BASE_URL } from '../../config'
import useGetReferralData from '../../hooks/referrals/useGetReferralData'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #3b5324, #3b5324 40px, #24441d 40px, #24441d 80px)'
  }

  return 'repeating-linear-gradient(to right, #6ee221, #6ee221 40px, #7ae953 40px, #7ae953 80px)'
}

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Referrals = () => {
  const referralData = useGetReferralData()
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <>
        <Header>
          <Heading as="h1" size="lg" textAlign="center" color="secondary" mb="24px">
            {TranslateString(674, 'RiceFarm Referral Program')}
          </Heading>
          <Heading size="md" textAlign="center" color="text">
            {TranslateString(
              999,
              "Share the referral link below to invite your friends and earn 1% of your friends' earnings FOREVER!",
            )}
          </Heading>
        </Header>
        <Container>
          <Card>
            <CardBody>
              <Text textAlign="center" mb="16px">
                <UnlockButton mx="auto" />
              </Text>
              <Text textAlign="center" bold fontSize="20px">
                Unlock wallet to get your unique referral link
              </Text>
            </CardBody>
          </Card>
        </Container>
      </>
    )
  }

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" textAlign="center" color="secondary" mb="24px">
          {TranslateString(674, 'RiceFarm Referral Program')}
        </Heading>
        <Heading size="md" textAlign="center" color="text">
          {TranslateString(
            999,
            "Share the referral link below to invite your friends and earn 1% of your friends' earnings FOREVER!",
          )}
        </Heading>
      </Header>
      <Container>
        <Cards>
          <Card>
            <CardHeader>
              <Heading size="lg" textAlign="center" color="secondary">
                {TranslateString(999, `Total Referrals`)}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center" mb="16px">
                {referralData.totalReferrals ? referralData.totalReferrals : '-'}
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Heading size="lg" textAlign="center" color="secondary">
                {TranslateString(999, `Total Referral Commission`)}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center" mb="16px">

                {referralData.totalReferralCommissions ? parseFloat(referralData.totalReferralCommissions).toLocaleString(undefined, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                }) : '-' }{' '}
                RICE
              </Text>
            </CardBody>
          </Card>
        </Cards>
        <Card>
          <CardHeader>
            <Heading size="lg" textAlign="center" color="secondary">
              {TranslateString(999, `Your Referral Link`)}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign="center" mb="16px">
              {`${BASE_URL}/?ref=${account}`}
            </Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default Referrals
