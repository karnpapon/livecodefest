import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'
import fonts from '<Styles>/fonts'
import Scroll from 'react-scroll';

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark
const sectionText = fonts.sectionText

const Element = Scroll.Element;

class Accomodation extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <Element name="accommodation">
        <MainBackground>
          {/* <Grid /> */}
          <AccomodationWrapper>
            <SectionHeader>ACCOMODATION</SectionHeader>
            <TransportWrapper>
              <Transportation> Coach </Transportation>
              <TransportDetails> 
                <a target="_blank" href="https://uk.megabus.com">Megabus </a> 
                <div className="no-underline">/</div>
                <a target="_blank" href="http://www.nationalexpress.com">National express</a>
              </TransportDetails>

              <Transportation> Train </Transportation>
              <TransportDetails> 
                <a target="_blank" href="https://www.gwr.com">GWR</a> 
                <div className="no-underline">/</div>
                <a target="_blank" href="https://www.thetrainline.com"> trainline</a>
              </TransportDetails>
              <TransportDetails>  
                <a target="_blank" href="https://uk.megabus.com">Megabus</a> 
                <div className="no-underline">have some cheaper train fares from e.g. London.</div>
              </TransportDetails>

              <Transportation> Nearest airports </Transportation>
              <DetailWithNoLink> 
                Manchester, Doncaster, Leeds Bradford,
                East Midlands, Birmingham and London.
              </DetailWithNoLink>

              <Transportation> Hotels/hostels/rooms</Transportation>
              <TransportDetails>
                <a target="_blank" href="http://www.booking.com/searchresults.html?city=-2607573&aid=1357706&checkin_monthday=8&checkin_month=11&checkin_year=2017&checkout_monthday=13&checkout_month=11&checkout_year=2017&no_rooms=1&group_adults=1">
                  booking.com 
                </a> 
                <div className="no-underline">/</div>
                <a target="_blank" href="https://http://airbnb.com"> airbnb</a></TransportDetails>


            </TransportWrapper>
          </AccomodationWrapper>
        </MainBackground>
      </Element>
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
const TransportDetails = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px 0;
  a{
    color: black;
  }
  a:hover{
    color: ${ orangeDark };
  }

  .no-underline{
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    cursor: text;
  }
`

const DetailWithNoLink = styled.p`
 text-decoration: none;
`