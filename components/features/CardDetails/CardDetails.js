import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'
import { Icon } from '<UI>'
import { Collapse } from 'react-collapse';
import renderHTML from 'react-render-html';
import CardDesc from '<Features>/CardDesc'

const orangeLight = colors.orangeLight
const orangeDark = colors.orangeDark
const orangeVeryLight = colors.orangeVeryLight

class CardDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  setCardOpen = () => {
    this.setState({ isOpen: true})
  }

  setCardClose = () => {
    this.setState({ isOpen: false})
  }


  render() {

    const { setCardClose, setCardOpen, setCardDescOpen } = this
    const { isOpen, isCardDescOpen } = this.state
    const { eventInfo, seemore } = this.props
    const { 
      date, 
      title, 
      description, 
      detail, 
      location, 
      booking, 
      locationDetail, 
      testimonial,
      slug,
      bookingLink } = eventInfo

    return (
      <CardWrapper>
          <HeaderContainer >
            <HeaderText> 
              <DateInfo> { date } </DateInfo>
              <TitleInfo> { title} </TitleInfo>
              <DescInfo>{ description }</DescInfo>
            <Collapse isOpened={isOpen} springConfig={{ stiffness: 200 }}  >
                <DescInfoCollapsed>{ detail}</DescInfoCollapsed>
              <CardDesc show={isOpen} programme={slug}/>
                <DescInfoCollapsed>{renderHTML( testimonial )}</DescInfoCollapsed>
              {seemore ? (
                <HashtagWrapper>
                  <Link href="/event-details">
                    <Hashtag>see more</Hashtag>
                  </Link>
                  <IconWrapper>
                    <Icon name="arrow" className="hashtag-arrow" />
                  </IconWrapper>
                </HashtagWrapper>
              ) : ''
              }

              </Collapse>
              <AvenueInfo>
                <Icon name="location" className="location"/>
                { location }
                <LocationDetail>{ locationDetail } </LocationDetail>
              </AvenueInfo>
            </HeaderText>
          </HeaderContainer>

          <InfoWrapper>
            <TicketInfo>
              <Icon name="ticket" className="ticket-icon" />
                <a target="_blank" href={bookingLink}>{ booking }</a>
            </TicketInfo>
            { !isOpen ? 
              ( <MoreInfo isOpen={isOpen} onClick={setCardOpen }>
                <Icon name="arrow-down" />
              </MoreInfo> ):
              (<MoreInfo isOpen={isOpen} onClick={setCardClose}>
                <Icon name="close-btn" className="close-btn"/>
              </MoreInfo>) 
            }
          </InfoWrapper>

      </CardWrapper>
    )
  }
}

export default withRouter(CardDetails)

const CardWrapper = styled.div`
  width: 487px;
  min-height: 252px;
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
  background: ${ orangeLight};
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const HeaderText = styled.div`
  height: auto;
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  .location{
    padding-right: 5px;
  }
`

const TicketInfo = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  padding: 12px 0;
  background-color: ${orangeLight};
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  width: 100%;
  justify-content: center;

  a{
    color: black;
    text-decoration: none;
  }

  a:hover{
    color: ${ orangeDark };
  }

  @media (max-width: 991px) {
    /* padding-bottom: 50px; */
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const MoreInfo = styled.div`
  padding: 12px 0;
  background-color: ${props => props.isOpen ? `${orangeDark}` :`${orangeVeryLight}` };
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  justify-content: center;
  width: 8%;
  &:hover{
    cursor: pointer;
    background: ${orangeDark};
  }
`

const InfoWrapper = styled.div`
 display: flex;
 height: 40px;

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
  font-weight: bolder;
`

const DescInfo = styled.p`
  font-size: 16px;
`

const DescInfoCollapsed = styled.div`
  font-size: 16px;
  line-height: 1.5;
  padding: 50px;
  padding-bottom: 20px;
  text-align: left;
`

const AvenueInfo = styled.div`
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 10px;
`

const HashtagWrapper = styled.div`
  width: 180px;
  height: 50px;
  border: 2px solid black;
  background: ${orangeLight};
  align-items: flex-end;
  display: inline-flex;
  cursor: pointer;

  &:hover{
    background: ${ orangeDark };
  }
`

const Hashtag = styled.p`
  font-size: 18px;
  font-weight: bolder;
  margin: auto;
  padding-left: 10px;
`

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: ${orangeLight};
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


const LocationDetail = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`