import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

import { Text, Heading, Card, CardHeader, CardBody, CardRibbon, Image, Button, Link, BaseLayout } from '@ricefarm/uikit'
import { Route, useRouteMatch } from 'react-router-dom'
import Container from 'components/layout/Container'
import IfoTabButtons from './components/IfoTabButtons'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

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
                      {TranslateString(999, 'Activate your Profile')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" small mb="16px">
                      You’ll need an active RiceFarm Profile to take part in an IFO!
                    </Text>
                    <Button as={Link} href="/profile">
                      {TranslateString(999, 'Activate you profile')}
                    </Button>
                  </StepCardBody>
                </Card>

                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 2')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'Get CAKE-BNB LP Tokens')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" small mb="16px">
                      Stake CAKE and BNB in the liquidity pool to get LP tokens. You’ll spend them to buy IFO sale
                      tokens.
                    </Text>
                    <Button as={Link} href="/profile">
                      {TranslateString(999, 'Get LP tokens')}
                    </Button>
                  </StepCardBody>
                </Card>

                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 3')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'Get CAKE-BNB LP Tokens')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" small>
                      When the IFO sales are live, you can “commit” your LP tokens to buy the tokens being sold. We
                      recommend committing to the Basic Sale first, but you can do both if you want.
                    </Text>
                  </StepCardBody>
                </Card>
                <Card mb="24px">
                  <CardRibbon variantColor="primary" ribbonPosition="right" text={TranslateString(999, 'Step 4')} />
                  <CardHeader>
                    <Heading size="md" color="primary">
                      {TranslateString(999, 'Claim your tokens and achievement')}
                    </Heading>
                  </CardHeader>
                  <StepCardBody>
                    <Text color="textSubtle" small>
                      After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB
                      LP tokens will be returned to your wallet.
                    </Text>
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
                  <Text color="textSubtle" small mb="16px">
                    Launch your project with PantherSwap, Binance Smart Chain’s fastest growing AMM project and
                    liquidity provider, to bring your token directly to the most active and rapidly growing community on
                    BSC.
                  </Text>
                  <Button as={Link} href="#">
                    {TranslateString(999, 'Apply to Launch')}
                  </Button>
                </CardBody>
              </Card>
              <Image mx="auto" src="/images/logo.png" alt="RICE Farm" width={128} height={128} />
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
