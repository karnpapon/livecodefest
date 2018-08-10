import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'


const orangeDark = colors.orangeDark
const orangeLight  = colors.orangeLight

class Header extends React.Component {
  
  render () {
    const { setInfoHide, setInfoShow } = this.props

    return (
      <HeaderContainer onClick={setInfoShow} >
       <HeaderText>INFO</HeaderText>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  border-bottom: 1px solid black;
  background-color: ${ orangeLight } ;
  border-right: 2px solid black;
  transition: .15s;

   cursor: pointer;
   .no-touch &:hover,
  .touch &.touch {
    color: black;
    background: ${ orangeDark };
  }
`

const HeaderText = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  transform: rotate(-90deg);
`