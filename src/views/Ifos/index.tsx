import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

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
  BaseLayout,
  OpenNewIcon,
} from '@ricefarm/uikit'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import IfoTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const walletId = ''

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

const StepCardBody = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`

const Ifos = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <>
      <Hero />
      <Container>
        <IfoTabButtons />
        <Route exact path={`${path}`}>
          <CurrentIfo />

          <Cards>
            {/* steps wrapper */}
            <Card>
              <CardHeader>
                <Heading size="lg" color="secondary">
                  {TranslateString(999, 'How To Take Part ?')}
                </Heading>
              </CardHeader>
              <CardBody>
                {/* steps */}
                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 1')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'Before Sale')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" mb="16px">
                      <ul>
                        <li>Buy TeslaSafe and BNB tokens</li>
                        <li>Get TeslaSafe-BNB LP tokens by adding TeslaSafe and BNB liquidity</li>
                      </ul>
                    </Text>
                    <Link external href="https://teslasafe.ricefarm.fi/#/swap">
                      Buy TeslaSafe <OpenNewIcon ml="6px" />
                    </Link>
                    <Link
                      external
                      href="https://teslasafe.ricefarm.fi/#/add/BNB/0x3504de9e61FDFf2Fc70f5cC8a6D1Ee493434C1Aa"
                    >
                      Get LP tokens <OpenNewIcon ml="6px" />
                    </Link>
                  </StepCardBody>
                </Card>

                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 2')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'During Sale')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" mb="16px">
                      <ul>
                        <li>While the sale is live, commit your TeslaSafe-LP tokens to buy the IFO tokens</li>
                      </ul>
                    </Text>
                  </StepCardBody>
                </Card>

                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 3')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'After Sale')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" mb="16px">
                      <ul>
                        <li>Claim the tokens you purchased, along with any unspent funds.</li>
                        <li>Done</li>
                      </ul>
                    </Text>
                    <Button as={Link} href="https://docs.ricefarm.fi/products/ifo" target="_blank">
                      {TranslateString(999, 'Read More')}
                    </Button>
                  </StepCardBody>
                </Card>
              </CardBody>
            </Card>
            {/* launch IPO */}
            <div>
              <Card mb="24px">
                <CardHeader>
                  <Heading size="lg" color="secondary">
                    {TranslateString(999, 'Want To Launch Your Own IPO?')}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text color="textSubtle" mb="16px">
                    Launch your project with RiceFarm, Binance Smart Chain’s fastest growing AMM project and liquidity
                    provider, to bring your token directly to the most active and rapidly growing community on BSC.
                  </Text>
                  <Button as={Link} href="https://docs.ricefarm.fi/others/media" target="_blank">
                    {TranslateString(999, 'Apply to Launch')}
                  </Button>
                </CardBody>
              </Card>
              <Image mx="auto" src="/images/logo.png" alt="Rice Farm" width={128} height={128} />
            </div>
          </Cards>
        </Route>
        <Route path={`${path}/history`}>
          <PastIfo />
        </Route>
      </Container>
    </>
  )
}

export default Ifos
