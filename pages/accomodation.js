import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'
import fonts from '<Styles>/fonts'

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark
const sectionText = fonts.sectionText

class Accomodation extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        {/* <Grid /> */}
        <AccomodationWrapper>
          <SectionHeader>ACCOMODATION</SectionHeader>
          <TransportWrapper>
            <Transportation> Coach </Transportation>
            <TransportDetails> Megabus / National express</TransportDetails>

            <Transportation> Train </Transportation>
            <TransportDetails> 
              GWR / trainline
            </TransportDetails>
            <TransportDetails>  
              Megabus have some cheaper train fares from e.g. London.
            </TransportDetails>

            <Transportation> Nearest airports </Transportation>
            <TransportDetails> 
              Manchester, Doncaster, Leeds Bradford, 
              East Midlands, Birmingham and London.
            </TransportDetails>

            <Transportation> Hotels/hostels/rooms </Transportation>
            <TransportDetails> booking.com / airbnb</TransportDetails>


          </TransportWrapper>
        </AccomodationWrapper>
      </MainBackground>
    )
  }
}

export default Accomodation;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  background-color: ${ primaryBackground};
`
const AccomodationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 130px;
  padding-bottom: 0px;

  &::after{
    content: '';
    bottom: -9px;
    right: 0;
    left: 17px;
    height: 2px;
    background-color: black;
    margin-top: 50px;
  }
`

const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${sectionText};
  padding-left: 130px;
`

const TransportWrapper = styled.div`
  font-family: ${fonts.systemRegular};
  padding-left: 40%;
`

const Transportation = styled.div`
  font-size: 12px;
  background: black;
  color: white;
  width: fit-content;
  padding: 5px;
`
const TransportDetails = styled.p`
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    color: ${ orangeDark };
  }
`