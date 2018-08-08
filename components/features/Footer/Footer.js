import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'


const Footer = ({ lastIssue }) => {
  return (
    <FooterContainer>
     fsldkjflsdk
    </FooterContainer>
  )
}

export default Footer

// const PolicyText = styled.span`
//   .no-touch &:hover,
//   .touch &.touch {
//     text-decoration: underline;
//   }
// `

const FooterContainer = styled.div`
  min-height: 210px;
  padding: 20px 0;
  background-color: green;
  color: white;

  @media (max-width: 991px) {
    padding-bottom: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`

// const ContainerStyled = styled(Container)`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100%;

//   @media (max-width: 991px) {
//     width: 530px;
//   }

//   @media (max-width: 767px) {
//     width: 100%;
//   }
// `

// const Socials = styled.div`
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
// `

// const Social = styled.a`
//   margin-right: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50px;
//   height: 50px;
//   color: white;
//   text-decoration: none;

//   &:last-child { margin-right: 0; }
// `

// const Divider = styled.div`
//   margin: 10px 0;
//   width: 100%;
//   max-width: 900px;
//   height: 1px;
//   background-color: #4a4a4a;
//   position: relative;
//   left: -47px;

//   @media (max-width: 991px) {
//     left: 0;
//   }
// `

// const Navs = styled.div`
//   margin-top: 15px;
//   margin-bottom: 65px;
//   display: flex;
//   justify-content: center;

//   @media (max-width: 991px) {
//     position: relative;
//     display: block;
//     width: 100%;
//   }
// `

// const Nav = styled.div`
//   margin-left: 80px;
//   font-family: ${fonts.thaiBold};
//   font-size: 12px;
//   letter-spacing: 2px;
//   color: white;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   &:first-child { margin-left: 0; }

//   @media (max-width: 991px) {
//     margin-left: 0;
//     padding: 10px 0;
//     margin-bottom: 5px;
//   }
// `

// const Copyright = styled.p`
//   margin: 0;
//   font-family: ${fonts.thaiRegular};
//   font-size: 12px;
//   color: ${colors.textGrayLight};
//   letter-spacing: 1px;

//   @media (max-width: 991px) {
//     line-height: 1.8em;
//   }
// `

// const IssueThumnail = styled.a`
//   display: block;
//   position: absolute;
//   top: -30px;
//   right: 25px;
//   text-decoration: none;
//   width: 90px;
//   height: 125px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;

//   @media (max-width: 991px) {
//     top: 0;
//     right: 0;
//   }
// `
