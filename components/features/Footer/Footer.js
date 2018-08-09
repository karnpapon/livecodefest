import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '<Styles>/colors'

import { Container , Icon } from '<UI>'
import fonts from '<Styles>/fonts'

const orangeLight = colors.orangeLight
const text = colors.textGray

const Footer = ({ lastIssue }) => {
  return (

    <FooterWrapper>

    <FooterContainerInfo>
      <ContainerInfo>
          <Info>INFO</Info>
      </ContainerInfo>
    </FooterContainerInfo>

    <FooterContainer>
      <ContainerStyled>
        <CopyrighAndIcon>
          <Icon name="toplap-logo" className="toplap-logo"/>
          <Copyright>
            For the love of Coding, Copyright © 2018 | Livecoding Festival, UK
          </Copyright>
        </CopyrighAndIcon>
      </ContainerStyled>
    </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  display: flex;
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

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const ContainerStyled = styled(Container)`
  position: relative;
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
  }
`

const Copyright = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: ${ fonts.systemRegular};
  color: ${text};
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
  .toplap-logo{
    display: flex;
    font-size: 40px;
  }
`

const Info = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: ${ fonts.systemRegular};
  color: ${text};
`