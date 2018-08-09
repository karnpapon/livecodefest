import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render () {
    return (
      <HeaderContainer >
       sjflksdjf
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
  height: 50px;
  border-bottom: 1px solid black;
  background-color: white;
  transition: .3s;
  opacity: 0.2;
`