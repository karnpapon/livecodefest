import React from 'react';
import Link from 'next/link'
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import { Icon } from '<UI>'

import Programme from './programme'
import Accomodation from './accomodation';
import ContactAndCommunity from './contactCommunity';
import CollabAndSponsor from './collabAndSponsor';

const primaryBackground = colors.primary

class Index extends React.Component {
  static async getInitialProps ({ query, res }) {
    return true
  }


  render () {

    return (
      <Main>
        {/* <Grid/> */}


        <MainBackground>
          <SectionHeader>
            <IconHeader style={{ backgroundImage: `url("static/images/logo-copy@3x.png")` }} />
            Livecoding <br/>
            Festival  
          </SectionHeader>
          <EventDate>
            1 - 3rd September 2018 <br/>
            at Sheffield UK
          </EventDate>

          <EventDesc>
            <VerticalLine/>
            <DescWrapper>
              Sheffield hosted 
              <a href="https://web.archive.org/web/20160409053149/http://livecode.access-space.org">
                <PolicyText className="button">
                  the first livecode fest in 2007, 
                </PolicyText>
              </a><br/>
              now we're back with part two.. 
            </DescWrapper>
          </EventDesc>

          <EventPromo>
            Three days of music <br/>
            visuals <br/>
            talks <br/>
            demos <br/>
            and workshops.
          </EventPromo>
        </MainBackground>



        <Programme/>
        <Accomodation/>
        <ContactAndCommunity/>
        <CollabAndSponsor/>
      </Main> 
    )
  }
}

export default Index;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  height: 130vh;
  background-color: ${ primaryBackground};
  flex-direction: column;
  .toplap-logo{
    font-size: 60px;
  }
`


const SectionHeader = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 60px;
  padding-left: 130px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`

const EventDate = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 18px;
  padding-left: 130px;
  line-height: 1.5;
`

const EventDesc = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 18px;
  padding-left: 130px; 
  margin-top: auto;
  line-height: 1.5;
  display: flex;
`

const EventPromo = styled.div`
  font-family: ${ fonts.systemRegular};
  font-size: 42px;
  padding-left: 130px; 
  margin-top: auto;
`

const PolicyText = styled.span`
  padding-left: 5px;
  text-decoration: underline;
`

const VerticalLine = styled.div`
  content: '';
  bottom: -9px;
  right: 0;
  left: 17px;
  width: 2px;
  background-color: white;
`

const DescWrapper = styled.div`
  flex-direction: column;
  padding-left: 20px;
`

const IconHeader = styled.div`
    width: 150px;
    height: 50px;
    margin-bottom: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`
