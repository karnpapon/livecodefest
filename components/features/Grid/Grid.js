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
        { [0,1,2,3,4,5,6,7].map(( item , i) => <GridColumn key={i}/>)}
     
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
  opacity: 0.1;
  z-index: 999;
`

const GridContainer = styled.div`
  background-color: ${orangeDark};
  border-top: 2px solid black;
  color: black;
  display: flex;
  width: 100%;
  padding: 0 130px;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

const GridColumn = styled.div`
  width: 100%;
  background: black;
  margin-right: 20px;
`