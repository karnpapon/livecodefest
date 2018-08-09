import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'

const primaryBackground = colors.primary
const sectionText = fonts.sectionText

class ContactAndCommunity extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        <Grid />
        <SectionHeader>ContactAndCommunity</SectionHeader>
      </MainBackground>
    )
  }
}

export default ContactAndCommunity;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${ primaryBackground};
`


const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${ sectionText };
`