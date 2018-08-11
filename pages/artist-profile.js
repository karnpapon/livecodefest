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


class ArtistProfile extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  setInfoShow = () => {
    this.setState({ show: true })
  }
  setInfoHide = () => {
    this.setState({ show: false })
  }


  render() {

    const { show } = this.state
    const { setInfoHide, setInfoShow } = this

    return (
      <Main>

        {/* <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head> */}

        <Footer setInfoShow={setInfoShow} setInfoHide={setInfoHide} show={show} />
        <MainBackground>


          <SectionHeader>
            <IconHeader style={{ backgroundImage: `url("static/images/logo-copy@3x.png")` }} />
          </SectionHeader>
          <EventDate> Chiho Oka and Renick Bell </EventDate>

          <ImageWrapper>
            <TitleImg style={{ backgroundImage: `url("static/images/artistprofile.jpg")` }}/>
            <TitleImgBW style={{ backgroundImage: `url("static/images/artistprofile-bit.jpg")` }}/>
          </ImageWrapper>

          <DetailBox> 
            <DetailText>Lucy Cheesman is a major live code agitator in Sheffield, 
              performing widely solo as Heavy Lifting and in a diversity of bands 
              including TYPE and the Trve Yorkshire Kvlt Ensemble. 
              She also co-runs the SONA network for women and girls in music technology 
              and the monthly(ish) Tidal club meetings in Sheffield.
            </DetailText>
            <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/MkU3CVCYyNU" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            />
            <DetailText>
              <Website>https://heavy-lifting.github.io/</Website>
              <Social>Twitter: @abelstaites</Social>
            </DetailText>
          </DetailBox>
             
        </MainBackground>

        <Programme />
        <CollabAndSponsor />
      </Main> 
    )
  }
}

export default ArtistProfile;


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
  width: 530px;
  background: ${ orangeLight };
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
    background-position: center;
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
    width: 480px;
    height: 240px;
    margin-left: 40%;
    margin-top: -2%;
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
