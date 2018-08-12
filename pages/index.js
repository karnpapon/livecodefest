import React from 'react';
import Link from 'next/link'
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import { Icon } from '<UI>'

import Programme from './programme'
import Accomodation from './accomodation';
import ContactAndCommunity from './contactCommunity';
import CollabAndSponsor from './collabAndSponsor';
import Info from '<Features>/Info'
import Header from '<Features>/Header'
import Footer from '<Features>/Footer'
import Scroll from 'react-scroll';
import ReactTooltip from 'react-tooltip'

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark

const LinkScroll = Scroll.Link;
const Element = Scroll.Element;

class Index extends React.Component {
  static async getInitialProps ({ query, res }) {
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


  render () {

    const { show } = this.state
    const { setInfoHide, setInfoShow } = this

    return (
      <Element name="home" data-tip data-for='global'>
        <Main >
          {/* <Grid/> */}

          {/* <Header setInfoShow={ setInfoShow }/> */}
          <Footer setInfoShow={setInfoShow} setInfoHide={setInfoHide} show={show}/>

          <MainBackground>
          <ReactTooltip id='global' aria-haspopup='true' role='example' place="bottom" className="keyboard-button">
            <KeyboardWrapper>
              <KeyboardButton> Ctrl </KeyboardButton> 
              <KeyboardButton> Enter </KeyboardButton>
            </KeyboardWrapper>
          </ReactTooltip>

            {/* <Info show={show}/> */}
              <TitleImg style={{ backgroundImage: `url("static/images/computer.jpg")` }}>
                <LinkScroll
                  activeClass="active"
                  to="programme"
                  spy={true}
                  smooth={true}
                  duration={250}
                >
                  <IconWrapper>
                    <Icon name="arrow-down" className="hashtag-arrow" />
                  </IconWrapper> 
                </LinkScroll>
              </TitleImg>
  
            <SectionHeader >
              <IconHeader style={{ backgroundImage: `url("static/images/logo-copy@3x.png")` }} />
                <TitleEvent >Livecode Festival</TitleEvent>  
            </SectionHeader>
            <EventDate>
              1 - 3rd September 2018 <br/>
              at Sheffield UK
            </EventDate>

            <EventDesc>
              <VerticalLine/>
              <DescWrapper>
                Sheffield hosted 
                <a target="_blank" href="https://web.archive.org/web/20160409053149/http://livecode.access-space.org">
                  <PolicyText className="button">
                    the first livecode fest in 2007, 
                  </PolicyText>
                </a><br/>
                now we're back with part two.. 
              </DescWrapper>
            </EventDesc>

            <EventPromo>
              Three days of music <br/>
              visuals <br/>
              talks <br/>
              demos <br/>
              and workshops.
            </EventPromo>
          </MainBackground>



          <Programme/>
          <Accomodation/>
          <ContactAndCommunity/>
          <CollabAndSponsor/>
        </Main> 
      </Element>
    )
  }
}

export default Index;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  height: 140vh;
  background-color: ${ primaryBackground};
  flex-direction: column;
  justify-content: center;
  .toplap-logo{
    font-size: 60px;
  }

  .keyboard-button{
    color: initial;
    background-color: transparent;
  }

  .place-bottom{
    &::after{
      border-bottom-color: transparent !important; 
    }
  }
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
  font-size: 18px;
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


const TitleImg = styled.div`
    position: absolute;
    margin-bottom: 25px;
    border: 2px solid black;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 200px;
    height: 200px;
    align-self: center;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    margin-top: -8%;

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
      background: ${ orangeDark }
    }
`
const TitleEvent = styled.div`
  width: fit-content;
  transition: .2s;

  &.keyDown{
    background: green;
  }
`

const KeyboardWrapper = styled.div`
  display: flex;
  align-items: center;
`

const KeyboardButton = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border: 2px solid;
  border-radius: 7px;
  font-size: 20px;
  font-weight: bolder;
  padding: 5px;
  margin-left: 10px;
  font-family: ${ fonts.systemRegular};
  margin-top: 0;
`
