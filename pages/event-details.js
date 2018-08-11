import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import { Icon } from '<UI>'

import Footer from '<Features>/Footer'

import Programme from './programme'
import CollabAndSponsor from './collabAndSponsor';

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark
const orangeLight = colors.orangeLight
const orangeVeryLight = colors.orangeVeryLight


class EventDetails extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      isOpen: false
    }
  }

  setInfoShow = () => {
    this.setState({ show: true })
  }
  setInfoHide = () => {
    this.setState({ show: false })
  }

  setCardClose = () => {

  }

  setCardOpen = () => {

  }


  render() {

    const { show, isOpen } = this.state
    const { setInfoHide, setInfoShow } = this
    const { setCardClose, setCardOpen } = this

    return (
      <Main>

        {/* <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head> */}

      <TicketWrapper>
        <InfoWrapper>
          <TicketInfo>
            <Icon name="ticket" className="ticket-icon" />
            <a target="_blank" href="">Booking</a>
          </TicketInfo>
          {!isOpen ?
            (<MoreInfo isOpen={isOpen} onClick={setCardOpen}>
              <Icon name="arrow-down" />
            </MoreInfo>) :
            (<MoreInfo isOpen={isOpen} onClick={setCardClose}>
              <Icon name="close-btn" className="close-btn" />
            </MoreInfo>)
          }
        </InfoWrapper>
      </TicketWrapper>

        <Footer setInfoShow={setInfoShow} setInfoHide={setInfoHide} show={show} />
        <MainBackground>


          <SectionHeader>
            <Link href="/">
              <IconHeader style={{ backgroundImage: `url("static/images/logo-copy@3x.png")` }} />
            </Link>
          </SectionHeader>

          <ImageWrapper>
            <TitleImg style={{ backgroundImage: `url("static/images/computer.jpg")` }} />
            <TitleImgBW style={{ backgroundImage: `url("static/images/logo-algorave.png")` }} />
          </ImageWrapper>

          <DetailBox>
            <DetailText>Probably the world's first two-room Algorave, 
              with an international line-up of top notch live coders and algorithmic producers, 
              including Renick Bell + Chiho Oka, Atsushi Tadokoro, Akihiro Kubota, 
              Linux Lewis, Yaxu, Alexandra Cardenas, LiveDog Inc., 
              Heavy Lifting, ALGOBABEZ, Qirky, Neil C Smith, Innocent, 
              Thorsten Sideboard, Alejandro Albornoz, tedthetrumpet, Digital Selves + more ..
            </DetailText>
          </DetailBox>

        </MainBackground>

        <CollabAndSponsor />
      </Main>
    )
  }
}

export default EventDetails;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  background-color: ${ primaryBackground};
  flex-direction: column;
  /* justify-content: center; */
  .toplap-logo{
    font-size: 60px;
  }
`

const DetailBox = styled.div`
  width: 830px;
  background: ${ orangeLight};
  border: 2px solid black;
  align-self: flex-end;
  margin-right: 130px;
  z-index: 3;
  padding: 50px;
  margin-top: 300px;
  margin-bottom: 100px;
`

const DetailText = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: 16px;
  line-height: 1.4;
`

const Website = styled.p`
`

const Social = styled.p`

`

const SectionHeader = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 60px;
  font-weight: bolder;
  padding-left: 130px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  cursor: pointer;
`

const EventDate = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 42px;
  font-weight: bolder;
  padding-left: 130px;
  line-height: 1.5;
`

const EventDesc = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 18px;
  padding-left: 130px; 
  margin-top: auto;
  line-height: 1.5;
  display: flex;
`

const EventPromo = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 42px;
  font-weight: bolder;
  padding-left: 130px; 
  margin-top: auto;
  margin-top: 54px;
  margin-bottom: 50px;
`

const PolicyText = styled.span`
  padding-left: 5px;
  text-decoration: underline;
  color: black;
`

const VerticalLine = styled.div`
  content: '';
  bottom: -9px;
  right: 0;
  left: 17px;
  width: 2px;
  background-color: white;
`

const DescWrapper = styled.div`
  flex-direction: column;
  padding-left: 20px;
`

const IconHeader = styled.div`
    width: 150px;
    height: 50px;
    margin-bottom: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  margin-left: 130px;
  margin-top: 40px;
`


const TitleImg = styled.span`
    position: absolute;
    border: 2px solid black;
    background-repeat: no-repeat;
    background-size: cover;
    width: 600px;
    height: 350px;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    z-index: 2;

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`

const TitleImgBW = styled.span`
    position: absolute;
    border: 2px solid black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 280px;
    right: 0;
    margin-right: 20%;
    margin-top: -5%;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    z-index: 1;

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

const InfoWrapper = styled.div`
 display: flex;
  width: 600px;
  position: fixed;
  z-index: 10;
  padding-top: 20px;

 .ticket-icon{
   padding-right: 10px;
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
  border-top: 2px solid black;
  color: black;
  display: flex;
  width: 100%;
  justify-content: center;

  a{
    color: black;
    text-decoration: none;
  }

  a:hover{
    color: ${ orangeDark};
  }

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
  background-color: ${props => props.isOpen ? `${orangeDark}` : `${orangeVeryLight}`};
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid black;
  color: black;
  display: flex;
  justify-content: center;
  width: 8%;
  transition: .15s;
  &:hover{
    cursor: pointer;
    background: ${orangeDark};
  }
`

const TicketWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50px;
`