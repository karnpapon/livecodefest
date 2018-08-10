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

class CardDesc extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <CardWrapper>

        <InfoWrapper>
          <TicketInfo>
            Who's in ?
          </TicketInfo>
        </InfoWrapper>

        <HeaderContainer >
          <ProfileWrapper>
            { [0,1,2,3,4,5,6].map( ( item , index) => (
              <PeopleWrapper>
                <PeopleProfile>
                  <IconWrapper>
                    <Icon name="arrow" className="hashtag-arrow" />
                  </IconWrapper> 
                </PeopleProfile>
                <DateInfo> CARD DESC </DateInfo>
              </PeopleWrapper>
            )) 
          }
          </ProfileWrapper>
        </HeaderContainer>

      </CardWrapper>
    )
  }
}

export default withRouter(CardDesc)

const CardWrapper = styled.div`
 width: 340px;
  height: 185px;
  display: flex;
  margin-left: 130px;
  flex-direction: column;
  margin-bottom: 20px;
  position: absolute;
  :nth-child(2){ margin-left: auto; margin-right: 10%;}
  :nth-child(3){ margin-left: auto; margin-right: 20%;}
  :nth-child(4){ margin-left: auto; margin-right: 26%;}
`

const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background: ${ orangeDark};
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const ProfileWrapper = styled.div`
  height: auto; 
  width: 100%;
  flex-wrap: wrap;
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  justify-content: center;
  display: flex;
  padding: 20px 10px;
  .location{
    padding-right: 5px;
  }
`

const TicketInfo = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  align-items: center;
  background-color: ${orangeDark};
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  width: 100%;
  padding-left: 10px;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const MoreInfo = styled.div`

  background-color: ${orangeDark};
  border-top: 2px solid black;
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

  .arrow-down{
    align-self: center;
  }
`

const InfoWrapper = styled.div`
 display: flex;
 height: 25px;

 .ticket-icon{
   padding-right: 10px;
 }
`


const DateInfo = styled.p`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  transition: .15s;
  &:hover{
    color: ${orangeLight};
  }
`

const TitleInfo = styled.p`
  font-size: 30px;
  margin-bottom: 5px;
  font-weight: bolder;
`

const DescInfo = styled.p`
  font-size: 12px;
`

const AvenueInfo = styled.p`
  font-size: 12px;
`

const PeopleProfile = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  align-self: center;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-left: 2px solid black;
  border-top: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .15s;
  cursor: pointer;
    &:hover{
      background: ${ orangeDark}
    }
`


const PeopleWrapper = styled.div`

  :nth-child(even){ margin-right: 10px; margin-left: 10px; }
`