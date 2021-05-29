import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@ricefarm/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

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

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <Box mb="32px">
      <StyledHero>
        <Container>
          <Heading as="h1" size="xl" mb="24px">
            {TranslateString(500, 'IFO: Initial RiceFarm Offerings')}
          </Heading>
          <Text bold fontSize="20px">
            {TranslateString(502, 'Buy new tokens with a brand new token sale model.')}
          </Text>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero
