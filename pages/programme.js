import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import CardDetails from '<Features>/CardDetails';

const primaryBackground = colors.primary
const sectionText = fonts.sectionText

class Programme extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        {/* <Grid/> */}
        <ProgrammeWrapper>
          <SectionHeader>PROGRAMME</SectionHeader>
          <CardWrapper>
            { [0,1,2,3].map((item, index) => 
                <CardDetails key={index}/> 
              )
            }
          </CardWrapper>
        </ProgrammeWrapper>
      </MainBackground>
    )
  }
}

export default Programme;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${ primaryBackground};
`


const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${ sectionText };
  margin-left: 130px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const ProgrammeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 130px;
  padding-bottom: 20px;
`