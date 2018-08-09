import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'
import { Icon } from '<UI>'

const orangeLight = colors.orangeLight
const orangeDark = colors.orangeDark

class CardDetails extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <CardWrapper>
        <HeaderContainer >
          <HeaderText> 
            <DateInfo> 1 September 2018, 11 am - 4 pm</DateInfo>
            <TitleInfo>Beginners' Workshop</TitleInfo>
            <DescInfo>For Women and Non-Binary people</DescInfo>
            <AvenueInfo>
              <Icon name="location" className="location"/>
              Access Space Labs
            </AvenueInfo>
          </HeaderText>
        </HeaderContainer>
        <InfoWrapper>
          <TicketInfo>
            <Icon name="arrow" className="ticket-icon" />
            Sign up here
          </TicketInfo>
          <MoreInfo>
            <Icon name="arrow-down" />
          </MoreInfo>
        </InfoWrapper>
      </CardWrapper>
    )
  }
}

export default withRouter(CardDetails)

const CardWrapper = styled.div`
 width: 487px;
  height: 252px;
  display: flex;
  margin-left: 130px;
  flex-direction: column;
  margin-bottom: 20px;
  :nth-child(2){ margin-left: auto; margin-right: 10%;}
  :nth-child(3){ margin-left: auto; margin-right: 20%;}
  :nth-child(4){ margin-left: auto; margin-right: 26%;}
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${ orangeLight};
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const HeaderText = styled.div`
  height: 100%;
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  .location{
    padding-right: 5px;
  }
`

const TicketInfo = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  padding: 12px 0;
  background-color: ${orangeLight};
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const MoreInfo = styled.div`
  padding: 12px 0;
  background-color: ${orangeLight};
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  justify-content: center;
  width: 8%;
  transition: .15s;
 
  }
  &:hover{
    cursor: pointer;
    background: ${orangeDark};
  }
`

const InfoWrapper = styled.div`
 display: flex;
 height: 45px;

 .ticket-icon{
   padding-right: 10px;
 }
`


const DateInfo = styled.p`
  font-size: 12px;
`

const TitleInfo = styled.p`
  font-size: 30px;
  margin-bottom: 5px;
`

const DescInfo = styled.p`
  font-size: 12px;
`

const AvenueInfo = styled.p`
  font-size: 12px;
`