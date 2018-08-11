import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'
import { Collapse } from 'react-collapse';
import Scroll from 'react-scroll';

const orangeLight = colors.orangeLight
const orangeDark = colors.orangeDark

const LinkScroll = Scroll.Link;

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  setInfoOpen = () => {
    this.setState({ isOpen: true })
  }

  setInfoClose = ( ) => {
    this.setState({ isOpen: false})
  }

  handleSetActive = () => {
    const { setInfoHide } = this.props
    setInfoHide()
  }


  render() {

    const { show } = this.props

    return (
      <HeaderContainer  >
      <Collapse isOpened={show} >
        <TextWrapper>
          <HeaderText>
            <LinkScroll 
              activeClass="active" 
              to="programme" 
              onSetActive={this.handleSetActive}
              spy={true} 
              smooth={true} 
              duration={250} 
            >
              <Title>PROGRAMME</Title>
            </LinkScroll>
          </HeaderText>
          <HeaderText>
            <LinkScroll
              activeClass="active"
              to="accommodation"
              onSetActive={this.handleSetActive}
              spy={true}
              smooth={true}
              duration={250}
            >
              <Title>ACCOMODATION</Title>
            </LinkScroll>
          </HeaderText>
          <HeaderText>
            <LinkScroll
              activeClass="active"
              to="contact"
              onSetActive={this.handleSetActive}
              spy={true}
              smooth={true}
              duration={250}
            >
              <Title>CONTACT <br/> & COMMUNITY</Title>
            </LinkScroll>
          </HeaderText>
          <HeaderText>
            <LinkScroll
              activeClass="active"
              to="collaborator"
              onSetActive={this.handleSetActive}
              spy={true}
              smooth={true}
              duration={250}
            >
              <Title>COLLABORATORS <br/> & SPONSORS</Title>
            </LinkScroll>
          </HeaderText>
          <InfoText>
            <InfoDesc>Sheffield hosted the 
              <a target="_blank" href="https://web.archive.org/web/20160409053149/http://livecode.access-space.org">
                <DescLink >first livecode fest in 2007, </DescLink>
              </a>
              with others organising+hosting many lovely events since then 
              (e.g. <a target="_blank" href="http://imwi.hfm.eu/livecode/2013/2013.html"><DescLink > live.code.fest </DescLink></a> 
              Karlsruhe,<a target="_blank" href="https://iclc.livecodenetwork.org"><DescLink > ICLC </DescLink></a>  in Leeds, Canada, 
              Morelia and next <a target="_blank" href="https://iclc.livecodenetwork.org/2019"><DescLink> Madrid </DescLink></a> ).. 
              Now 11 years later we're back in Sheffield for three days of music, 
              visuals, talks, demos and workshops. <br/>
              <br/>
              Day one will kick off with a 
              <LinkScroll to="programme"><DescInfoLink > beginners' live coding music workshop 1. </DescInfoLink></LinkScroll>  
              for women and non-binary people, plus a 
              <LinkScroll to="programme"><DescInfoLink> live code visualists meetup 2. </DescInfoLink></LinkScroll>
              Then going into the night with a club event 
              with 24 top algorithmic producers over two rooms, 
              one with full-on 
              <LinkScroll to="programme"><DescInfoLink>algorave 3 </DescInfoLink></LinkScroll>
              and another for more chilled experiments. <br/>
              <br/>
              Day two and three will be the  
              <LinkScroll to="programme"><DescInfoLink>"toplap moot" 4 </DescInfoLink></LinkScroll>
              - two days of talks and hands-on workshops 
              aimed at live coders at any stage of their career.<br/>
              <br/>
              <b>Get involved!</b>
            </InfoDesc>
          </InfoText>
        </TextWrapper>
        </Collapse>
        
      </HeaderContainer>
    )
  }
}

export default withRouter(Info)

const HeaderContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 510px;
  height: auto;
  background-color: ${ orangeLight };
  transition: .3s;
  border-right: 2px solid black;
  opacity: 1;
  margin-bottom: 40px;
`

const TextWrapper = styled.div`
  height: 100vh;
  padding-top: 80px;
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
  padding-bottom: 30px;
  padding-top: 20px;
`

const Title = styled.p`
  font-family: ${fonts.systemRegular};
  font-weight: bolder;

  cursor: pointer;
  .no-touch &:hover,
  .touch &.touch {
    color: ${ orangeDark };
  }
`

const InfoDesc = styled.div`
  font-family: ${fonts.systemRegular}; 
  font-size: 14px;
  line-height: 1.35;

  a{
    color: black;
  }
  a:hover{
    color: ${ orangeDark };
  }
`

// const GoBackBtn = styled.div`
//   font-family: ${ fonts.systemRegular};
//   font-size: 12px;
//   font-weight: bolder;
//   width: 100%;
//   height: 40px;
//   justify-content: center;
//   border-top: 2px solid black;
//   display: flex;
//   align-items: center;
//   transition: .15s;

//    cursor: pointer;
//    .no-touch &:hover,
//   .touch &.touch {
//     color: black;
//     background: ${ orangeDark };
//   }
// `