import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import { Icon } from '<UI>'
import StackGrid from "react-stack-grid";

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

        <Footer setInfoShow={setInfoShow} setInfoHide={setInfoHide} show={show} evalCode={true}/>
        <MainBackground>


          <SectionHeader>
            <Link href="/">
              <IconHeader style={{ backgroundImage: `url("static/images/logo-copy@3x.png")` }} />
            </Link>
          </SectionHeader>

          <ImageWrapper>
            <TitleImg style={{ backgroundImage: `url("static/images/computer.jpg")` }} />
            <TitleBwWrapper>
              <a target="_blank" href="https://algorave.com"/>
              <TitleImgBW style={{ backgroundImage: `url("static/images/logo-algorave.png")` }} />
            </TitleBwWrapper>
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

          <GridWrapper>
            <StackGrid 
              columnWidth={150} 
              columnWidth="25%" 
              gutterWidth={20} 
              gutterHeight={20}
            >
              { 
                Array.from(new Array(24)).map(( item, index ) => 
                <ArtistCardWrapper key={ index }>
                    <ArtistDetailCardHeadBar> 
                      Programme name
                    </ArtistDetailCardHeadBar>
                    <ArtistInProgramme >
                    <NameAndProfileImgWrapper>
                      <Link href="/artist-profile">
                      <ArtistNameBox>
                        <ArtistName>Name's Artist</ArtistName> 
                        <IconWrapper>
                          <Icon name="arrow" className="hashtag-arrow" />
                        </IconWrapper> 
                      </ArtistNameBox>
                      </Link>
                      <CardArtistProfile style={{ backgroundImage: `url("static/images/artistprofile.jpg")` }}/>
                    </NameAndProfileImgWrapper>

                        <CardArtistDetail>
                          <ProgrammeTitle> Programme Title </ProgrammeTitle>
                          Probably the world's first two-room Algorave, 
                          with an international line-up of top notch live coders and algorithmic producers, 
                          including Renick Bell + Chiho Oka, Atsushi Tadokoro, Akihiro Kubota, 
                        </CardArtistDetail>
                    </ArtistInProgramme>
                </ArtistCardWrapper>
                )
              }
            </StackGrid>
          </GridWrapper>

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
  width: 730px;
  background: ${ orangeLight};
  border: 2px solid black;
  align-self: flex-end;
  margin-right: 130px;
  z-index: 3;
  padding: 50px;
  margin-top: 200px;
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
    width: 400px;
    height: 250px;
    margin-left: 20%;
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
    margin-right: 18%;
    margin-top: -9%;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    z-index: 1;
    cursor: pointer;

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`

const TitleBwWrapper = styled.div`
  
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
  margin-left: auto;
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

const ArtistInProgramme = styled.div`
  background: ${ orangeDark };
  border: 2px solid black;
  padding: 20px;
`

const GridWrapper = styled.div`
  width: 100%;
  padding: 0 130px;
`

const CardArtistDetail = styled.div`
  font-family: ${ fonts.systemRegular};
  width: 100%;
  font-size: 14px;
`

const ProgrammeTitle = styled.p`
  font-size: 20px;
  font-weight: bolder;
`

const CardArtistProfile = styled.div`
  background: ${ orangeLight};
  height: 130px;
  margin-bottom: 10px;
  border: 2px solid;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const ArtistNameBox = styled.div`
  background: ${ orangeLight};
  border: 2px solid;
  width: fit-content;
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;

  &:hover{
    background: ${ orangeDark };
  }
`

const ArtistName = styled.p`
  font-family: ${ fonts.systemRegular};
  font-weight: bolder;
  margin: 0;
  padding: 10px;
  padding-right: 25px;
  padding-bottom: 0;
`

const ArtistCardWrapper = styled.div`
  width: 100%;
`

const ArtistDetailCardHeadBar = styled.div`
  background: ${ orangeDark };
  border-top: 2px solid;
  border-left: 2px solid;
  border-right: 2px solid;
  font-family: ${ fonts.systemRegular};
  font-weight: bolder;
  font-size: 12px;
  padding: 10px;
  
`

const NameAndProfileImgWrapper = styled.div`
  position: relative;
`
