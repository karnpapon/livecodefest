import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '<Styles>/colors'

import { Container, Icon } from '<UI>'
import fonts from '<Styles>/fonts'

const orangeDark = colors.orangeDark
const text = colors.textGray

const Footer = ({ lastIssue }) => {
  return (

    <GridWrapper>

      <GridContainer>
        { [0,1,2,3,4,5].map(item => <GridColumn/>)}
     
      </GridContainer>
    </GridWrapper>
  )
}

export default Footer

const GridWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 0.2;
  z-index: 999;
`

const GridContainer = styled.div`
  background-color: ${orangeDark};
  border-top: 2px solid black;
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

const GridColumn = styled.div`
  width: 130px;
  background: black;
  margin-left: 20px;
`