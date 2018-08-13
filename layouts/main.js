import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import Router from 'next/router'
import styled, { injectGlobal } from 'styled-components'

import colors from '<Styles>/colors'
// import Header from '<Features>/Header'
import Footer from '<Features>/Footer'
import NProgress from 'nprogress'


Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    const { children } = this.props

    return (
      <MainContainerStyled >
        <Head>
          <title>Livecode Festival 2018, UK</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" type="image/png" href="/static/images/favicon/favicon-32-x-32-n.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="LivecodingFest" />
          <meta property="og:type" content="article" />
          {/* <meta property="og:image" content={`${basePath}/static/images/cover-sharing.png`} /> */}
          {/* <meta property="og:url" content={basePath} /> */}
          <meta property="og:description" content="Livecode Festival 2018, UK" />

          <script defer src='/static/scripts/html-touch-class.js' />
          <script defer src='/static/scripts/detected-mobile-devices.js' />

          <link href="https://fonts.googleapis.com/css?family=Heebo:100,400,700,900" rel="stylesheet"/>
          <link rel='stylesheet' type='text/css' href='/static/styles/normalize.css' />
          <link rel='stylesheet' type='text/css' href='/static/fonts/icons-livecoding/style.css' />
          <link rel='stylesheet' type='text/css' href='/static/styles/nprogress.css' />
        </Head>

        {children}

      </MainContainerStyled>
    )
  }
}

export default Main

const MainContainerStyled = styled.div`

`

// const BackToTop = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 2px;
//   background-color: #222222;
//   color: white;
//   transition: 0.3s;
//   transform: translate3d(0, 10px, 0);
//   opacity: 0;
//   z-index: 500;

//   ${props => props.show ? `
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//     `: ``}
// `

injectGlobal`
  .touch {
    a,
    button,
    .btn,
    .button,
    select {
      cursor: default;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      user-select: none;
    }

    label {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      user-select: none;
      span {cursor: default;}
    }
  }

  .no-touch {
    a,
    button,
    .btn,
    .button,
    select {
      cursor: pointer;
      user-select: none;
    }

    label {
      user-select: none;
      span {cursor: pointer;}
    }
  }

  * {
    box-sizing: border-box;
    &:focus { outline: none; }
  }

  html {
    -webkit-font-smoothing: antialiased
  }

  // Slick: Over Write styles
  .slick-dots {
    li {
      width: 50px;
      height: 4px;

      @media (max-width: 767px) {
        width: 30px;
      }

      @media (max-width: 320px) {
        width: 20px;
      }

      &.slick-active {
        background-color: transparent;

        button::before {
          opacity: 1;
        }
        button::after {
          transform: scale(1, 1);
          transition: transform 3s;
        }
      }

      button {
        position: relative;
        width: 50px;
        height: 4px;
        padding: 0;
        background-color: transparent;

        @media (max-width: 767px) {
          width: 30px;
        }

        @media (max-width: 320px) {
          width: 20px;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 4px;
          opacity: 1;

          @media (max-width: 767px) {
            width: 30px;
          }

          @media (max-width: 320px) {
            width: 20px;
          }
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          transform: scale(0, 1);
          transform-origin: left center;
        }
      }
    }
  }
`
