import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '<Styles>/colors'

import { Container , Icon } from '<UI>'
import Info from '<Features>/Info'
import fonts from '<Styles>/fonts'
import Scroll from 'react-scroll'

const orangeLight = colors.orangeLight
const orangeDark = colors.orangeDark
const text = colors.textGray

const LinkScroll = Scroll.Link;

class Footer extends React.Component {

  render(){
    const { show, setInfoShow, setInfoHide } = this.props

    return (
  
      <FooterWrapper>

  
        <FooterContainerInfo>
            <Info show={show} setInfoHide={setInfoHide} />
          {
            !show ?
              (<GoBackBtn onClick={setInfoShow}> INFO </GoBackBtn>) :
              (<GoBackBtn onClick={setInfoHide} > BACK </GoBackBtn>)
          }
        </FooterContainerInfo>
  
      <FooterContainer>
        <ContainerStyled>
          <CopyrighAndIcon>
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={250}
            >
              <Icon name="toplap-logo" className="toplap-logo"/>
            </LinkScroll>
            <Copyright>
              For the love of Coding | Livecode Festival, 2018
            </Copyright>
          </CopyrighAndIcon>
        </ContainerStyled>
      </FooterContainer>
      </FooterWrapper>
      
    )


  }
}

export default Footer


const FooterWrapper = styled.div`
  position: fixed;
  height: 40px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${ orangeLight} ;
  transition: .15s;
  padding: 12px 0;
  bottom: 0;

  
`

const FooterContainer = styled.div`
  height: 40px;
  padding: 12px 0;
  background-color: ${orangeLight};
  border-top: 2px solid black;
  color: black;
  display: flex;
  width: 100%;

   @media (max-width: 991px) {
     padding-bottom: 50px;
   }

   @media (max-width: 767px) {
     padding-top: 10px;
     padding-bottom: 30px;
   }
`

const FooterContainerInfo = styled.div`
  height: 40px;
  padding: 12px 0;
  background-color: ${orangeLight};
  border-top: 2px solid black;
  border-right: 2px solid black;
  color: black;
  display: flex;
  width: 20vw;

  cursor: pointer;
  .no-touch &:hover,
  .touch &.touch {
    color: black;
    background: ${ orangeDark};
  }

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const ContainerStyled = styled(Container)`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* width: 70%; */
  height: 100%;

  @media (max-width: 991px) {
    width: 530px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
  .toplap-logo{
    display: flex;
    font-size: 40px;
    padding-left: 20px;
  }
`

const Copyright = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: ${ fonts.systemRegular};
  color: black;
  margin-left: auto;

  @media (max-width: 991px) {
    line-height: 1.8em;
  }
`
const CopyrighAndIcon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ContainerInfo = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  

  @media (max-width: 991px) {
    width: 530px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

const GoBackBtn = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: .15s;

   cursor: pointer;
  .no-touch &:hover,
  .touch &.touch {
    color: black;
    background: ${ orangeDark};
  }
`