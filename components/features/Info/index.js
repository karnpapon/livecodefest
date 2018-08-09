import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'

const orangeLight = colors.orangeLight
const orangeDark = colors.orangeDark

class Info extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <HeaderContainer >
        <TextWrapper>
          <HeaderText>
            <Title first={true}>PROGRAMME</Title>
          </HeaderText>
          <HeaderText>
            <Title>ACCOMODATION</Title>
          </HeaderText>
          <HeaderText>
            <Title>CONTACT <br/> & COMMUNITY</Title>
          </HeaderText>
          <HeaderText>
            <Title>COLLABORATORS <br/> & SPONSORS</Title>
          </HeaderText>
          <InfoText>
            <InfoDesc>Sheffield hosted the 
              <Link href="/policy">
                <DescLink >first livecode fest in 2007, </DescLink>
              </Link>
              with others organising+hosting many lovely events since then 
              (e.g. <Link href="/policy"><DescLink > live.code.fest </DescLink></Link> 
              Karlsruhe,<Link href="/policy"><DescLink > ICLC </DescLink></Link>  in Leeds, Canada, 
              Morelia and next <Link href="/policy"><DescLink> Madrid </DescLink></Link> ).. 
              Now 11 years later we're back in Sheffield for three days of music, 
              visuals, talks, demos and workshops. <br/>
              <br/>
              Day one will kick off with a 
              <Link href="/policy"><DescInfoLink > beginners' live coding music workshop 1. </DescInfoLink></Link>  
              for women and non-binary people, plus a 
              <Link href="/policy"><DescInfoLink> live code visualists meetup 2. </DescInfoLink></Link>
              Then going into the night with a club event 
              with 24 top algorithmic producers over two rooms, 
              one with full-on 
              <Link href="/policy"><DescInfoLink>algorave 3 </DescInfoLink></Link>
              and another for more chilled experiments. <br/>
              <br/>
              Day two and three will be the  
              <Link href="/policy"><DescInfoLink>"toplap moot" 4 </DescInfoLink></Link>
              - two days of talks and hands-on workshops 
              aimed at live coders at any stage of their career.<br/>
              <br/>
              <b>Get involved!</b>
            </InfoDesc>
          </InfoText>
        </TextWrapper>
        <GoBackBtn> BACK </GoBackBtn>
      </HeaderContainer>
    )
  }
}

export default withRouter(Info)

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 710px;
  height: inherit;
  border-bottom: 2px solid black;
  background-color: ${ orangeLight };
  transition: .3s;
  border-right: 2px solid black;
`

const TextWrapper = styled.div`
  
`

const DescLink = styled.span`
  text-decoration: underline;
  padding-left: 5px;
  cursor: pointer;
   .no-touch &:hover,
  .touch &.touch {
    color: ${ orangeDark };
  }
`
const DescInfoLink = styled.span`
  text-decoration: underline;
  background: black;
  padding-left: 5px;
  color: ${ orangeLight};
  cursor: pointer;
   .no-touch &:hover,
  .touch &.touch {
    color: ${ orangeDark };
  }
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
 

  &::after{
    content: '';
    bottom: -9px;
    right: 0;
    left: 17px;
    height: 2px;
    background-color: black;
  }
`


const InfoText = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 20px;
`

const Title = styled.p`
  font-family: ${fonts.systemRegular};
  font-size: 24px;
  font-weight: bolder;
  margin-top: ${ props => props.first? '50px':'auto'};

  cursor: pointer;
  .no-touch &:hover,
  .touch &.touch {
    color: ${ orangeDark };
  }
`

const InfoDesc = styled.div`
  font-family: ${fonts.systemRegular}; 
  font-size: 16px;
  line-height: 1.35;
`

const GoBackBtn = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 12px;
  font-weight: bolder;
  width: 100%;
  height: 100%;
  justify-content: center;
  border-top: 2px solid black;
  display: flex;
  align-items: center;
  transition: .15s;

   cursor: pointer;
   .no-touch &:hover,
  .touch &.touch {
    color: black;
    background: ${ orangeDark };
  }
`