import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'

const primaryBackground = colors.primary

class Accomodation extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        <Grid />
        Accomodation
      </MainBackground>
    )
  }
}

export default Accomodation;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${ primaryBackground}
`