import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import CardDetails from '<Features>/CardDetails';
import CardDesc from '<Features>/CardDesc';
import { dataEvent } from '<DATA>/event';
import Scroll from 'react-scroll';

const primaryBackground = colors.primary
const sectionText = fonts.sectionText

const Element = Scroll.Element;

class AppearsIn extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <Element name="programme">
        <MainBackground>
          {/* <Grid/> */}
          <ProgrammeWrapper>
            <SectionHeader>Appearing In...</SectionHeader>
            <CardWrapper>
              {dataEvent.map((item, index) =>
                <CardDetails
                  eventInfo={item}
                  key={index}
                  seemore={item.slug == 'toplab-moot' || item.slug == 'algorave' ? true : false}
                />
              )
              }
            </CardWrapper>
            {/* <CardDesc/> */}
          </ProgrammeWrapper>
        </MainBackground>
      </Element>
    )
  }
}

export default AppearsIn;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${ primaryBackground};
`


const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${ sectionText};
  font-weight: bolder;
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