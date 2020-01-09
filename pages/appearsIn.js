import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import Grid from '<Features>/Grid'
import CardDetails from '<Features>/CardDetails';
import CardDesc from '<Features>/CardDesc';
import { dataEvents } from '<DATA>';
import Scroll from 'react-scroll';

const primaryBackground = colors.primary
const sectionText = fonts.sectionText

const Element = Scroll.Element;

class AppearsIn extends React.Component {
  static async getInitialProps({ query, res }) {
    let querySlug = query
    return querySlug
  }


  render() {

    const { artist } = this.props

    // const artist = artist.filter(item => item.slug == this.props.slug)[0]

    return (
      <Element name="programme">
        <MainBackground>
          <ProgrammeWrapper>
            <SectionHeader>Appearing In...</SectionHeader>
            <CardWrapper>
              {
                artist.programme.map( program => 
                  dataEvents.filter(data => program.title == data.programme).map((item, index) =>
                    <CardDetails
                      eventInfo={item}
                      key={index}
                      seemore={item.slug == 'toplab-moot' || item.slug == 'algorave' ? true : false}
                    />
                  )
                )
              }
            </CardWrapper>
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