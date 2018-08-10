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
            <TransportDetails> 
              <a target="_blank" href="https://uk.megabus.com">Megabus / </a><a target="_blank" href="http://www.nationalexpress.com">National express</a>
            </TransportDetails>

            <Transportation> Train </Transportation>
            <TransportDetails> 
              <a target="_blank" href="https://www.gwr.com">GWR /</a> <a target="_blank" href="https://www.thetrainline.com"> trainline</a>
            </TransportDetails>
            <TransportDetails>  
              <a target="_blank" href="https://uk.megabus.com"> Megabus have some cheaper train fares from e.g. London.</a>
            </TransportDetails>

            <Transportation> Nearest airports </Transportation>
            <NearestAirport> 
              Manchester, Doncaster, Leeds Bradford,
              East Midlands, Birmingham and London.
            </NearestAirport>

            <Transportation> Hotels/hostels/rooms</Transportation>
            <TransportDetails><a target="_blank" href="http://www.booking.com/searchresults.html?city=-2607573&aid=1357706&checkin_monthday=8&checkin_month=11&checkin_year=2017&checkout_monthday=13&checkout_month=11&checkout_year=2017&no_rooms=1&group_adults=1">booking.com </a> / <a target="_blank" href="https://http://airbnb.com"> airbnb</a></TransportDetails>


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
  font-weight: bolder;
  padding-left: 130px;
`

const TransportWrapper = styled.div`
  font-family: ${fonts.systemRegular};
  padding-left: 40%;
`

const Transportation = styled.div`
  font-size: 12px;
  font-weight: bolder;
  background: black;
  color: white;
  width: fit-content;
  padding: 5px;
`
const TransportDetails = styled.p`
  text-decoration: underline;
  cursor: pointer;
  a{
    color: black;
  }
  a:hover{
    color: ${ orangeDark };
  }
`

const NearestAirport = styled.p`
 text-decoration: underline;
`