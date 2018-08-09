import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render () {
    return (
      <HeaderContainer >
       <HeaderText>INFO</HeaderText>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  border-bottom: 1px solid black;
  background-color: white;
  transition: .3s;
  border-right: 2px solid black;
`

const HeaderText = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  transform: rotate(-90deg);
`