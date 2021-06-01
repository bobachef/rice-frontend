import React from 'react'
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
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'

import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import useWeb3 from 'hooks/useWeb3'
import farms from '../../config/constants/farms'

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

const StyledHero = styled.div`
  background: ${({ theme }) => getGradient(theme.isDark)};
  padding-bottom: 40px;
  padding-top: 40px;
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

const Referrals = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()

  const lpAddress = getAddress(farms[2].lpAddresses)
  const web3 = useWeb3()
  const lpContract = getBep20Contract(lpAddress, web3)

  // console.log(lpContract);
  if (!account) {
    return  (
      <>
        <Box mb="32px">
          <StyledHero>
            <Container>
              <Heading as="h1" size="xl" mb="24px">
                {TranslateString(500, 'RiceSwap Referral Program')}
              </Heading>
              <Text bold fontSize="20px">
                {TranslateString(502, 'Share the referral link below to invite your friends and earn 1% of your friends\' earnings FOREVER!')}
              </Text>
            </Container>
          </StyledHero>
          <CurtainBottom />
        </Box>
        <Container>
          <Card>
            <CardBody>
              <Text textAlign="center" mb="16px">
                <UnlockButton mx="auto" />
              </Text>
              <Text textAlign="center" bold fontSize="20px">Unlock wallet to get your unique referral link</Text>
            </CardBody>
          </Card>
        </Container>
      </>
    )
  }

  return (
    <>
      <Box mb="32px">
        <StyledHero>
          <Container>
            <Heading as="h1" size="xl" mb="24px">
              {TranslateString(500, 'RiceSwap Referral Program')}
            </Heading>
            <Text bold fontSize="20px">
              {TranslateString(502, 'Share the referral link below to invite your friends and earn 1% of your friends\' earnings FOREVER!')}
            </Text>
          </Container>
        </StyledHero>
        <CurtainBottom />
      </Box>
      <Container>
        <Cards>
          <Card>
            <CardHeader>
              <Heading size="lg" color="secondary">
                {TranslateString(999, `Total Referrals`)}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="left" mb="16px">
                0
              </Text>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Heading size="lg" color="secondary">
                {TranslateString(999, `Total Referral Commission`)}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="left" mb="16px">
                0
              </Text>
            </CardBody>
          </Card>
        </Cards>
          <Card>
            <CardHeader>
              <Heading size="lg" color="secondary">
                {TranslateString(999, `Your Referral Link`)}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center" mb="16px">
                0
              </Text>
            </CardBody>
          </Card>
      </Container>
    </>
  )
}

export default Referrals
