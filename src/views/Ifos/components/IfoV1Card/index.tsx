import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardRibbon, Box, Progress, Text } from '@ricefarm/uikit'
import { Ifo, IfoStatus } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import useGetPublicIfoData from 'hooks/ifo/v1/useGetPublicIfoData'
import useGetWalletIfoData from 'hooks/ifo/v1/useGetWalletIfoData'
import IfoCardHeader from './IfoCardHeader'
import IfoCardDetails from './IfoCardDetails'
import IfoCardActions from './IfoCardActions'
import IfoCardTime from './IfoCardTime'

export interface IfoCardProps {
  ifo: Ifo
}

const StyledIfoCard = styled(Card)<{ ifoId: string }>`
  background-image: ${({ ifoId }) => `url('/images/ifos/${ifoId}-bg.png')`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 112px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`
const getRibbonComponent = (status: IfoStatus, TranslateString: (translationId: number, fallback: string) => any) => {
  if (status === 'coming_soon') {
    return <CardRibbon variantColor="textDisabled" text={TranslateString(999, 'Coming Soon')} />
  }

  if (status === 'live') {
    return <CardRibbon variantColor="primary" text={TranslateString(999, 'LIVE NOW!')} />
  }

  return null
}

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`


const IfoCard: React.FC<IfoCardProps> = ({ ifo }) => {
  const publicIfoData = useGetPublicIfoData(ifo)
  const walletIfoData = useGetWalletIfoData(ifo)
  const TranslateString = useI18n()

  const { id, name, subTitle } = ifo
  const Ribbon = getRibbonComponent(publicIfoData.status, TranslateString)
  return (
    <StyledIfoCard ifoId={id} ribbon={Ribbon} isActive={publicIfoData.status === 'live'}>
      <CardBody>
        <IfoCardHeader ifoId={id} name={name} subTitle={subTitle} />
        <Box mb="16px">
          <Progress primaryStep={publicIfoData.progress} />
        </Box>
        <Box mb="16px">
          <IfoCardActions ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
        </Box>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Launch Time:')}</Text>
          <IfoCardTime
              status={publicIfoData.status}
              secondsUntilStart={publicIfoData.secondsUntilStart}
              secondsUntilEnd={publicIfoData.secondsUntilEnd}
              block={publicIfoData.startBlockNum}
            />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'For Sale:')}</Text>
          <Text fontSize="14px">{TranslateString(999, '0')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'To raise (USD):')}</Text>
          <Text fontSize="14px">{TranslateString(999, '0')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Teslasafe to pledge:')}</Text>
          <Text fontSize="14px">{TranslateString(999, '0')}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Total raised (% of target):')}</Text>
          <Text fontSize="14px">{TranslateString(999, '0')}</Text>
        </Row>
        {/*  
        {publicIfoData.status !== 'finished' && ifo.isActive && (
          <>

            <IfoCardTime
              status={publicIfoData.status}
              secondsUntilStart={publicIfoData.secondsUntilStart}
              secondsUntilEnd={publicIfoData.secondsUntilEnd}
              block={publicIfoData.startBlockNum}
            />
          </>
        )}
        */}
        
      </CardBody>
      <IfoCardDetails ifo={ifo} publicIfoData={publicIfoData} />
    </StyledIfoCard>
  )
}

export default IfoCard
