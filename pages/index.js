import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'

const primaryBackground = colors.primary

class Index extends React.Component {
  static async getInitialProps ({ query, res }) {
    return true
  }


  render () {

    return (
      <Main>
        <MainBackground>
          Livecoding Festival London 
        </MainBackground>
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