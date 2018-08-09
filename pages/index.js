import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'

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
        <Grid/>
        <MainBackground>
          Livecoding Festival London 
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
  height: 100vh;
  background-color: ${ primaryBackground }
`