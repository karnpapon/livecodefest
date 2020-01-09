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

class CollabAndSponsor extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <Element name="collaborator">
        <MainBackground>
          {/* <Grid /> */}
          <ContactWrapper>
            <SectionHeader>Collaborators <br/> & Sponsors</SectionHeader>
            <CollaboratorsAndSponsors>
              <a target="_blank" href="http://access-space.org">
                <SponsorLogo>
                  <img src="/static/images/access-space.png"></img>
                </SponsorLogo>
              </a>
              <a target="_blank" href="http://algorave.com">
                <SponsorLogo>
                  <img src="/static/images/algorave.png"></img>
                </SponsorLogo>
              </a>
              <a target="_blank" href="http://penelope.hypotheses.org">
                <SponsorLogo>
                  <img src="/static/images/dajf.png"></img>
                </SponsorLogo>
              </a>
              <a target="_blank" href="http://dajf.org.uk">
                <SponsorLogo>
                  <img src="/static/images/gbsf.png"></img>
                </SponsorLogo> 
              </a>
              <a target="_blank" href="http://www.gbsf.org.uk">
                <SponsorLogo>
                  <img src="/static/images/penelope.png"></img>
                </SponsorLogo> 
              </a>
              <a target="_blank" href="https://artscouncil.org.uk">
                <SponsorLogo>
                  <img src="/static/images/artscouncil.svg"></img>
                </SponsorLogo> 
              </a>
              <a target="_blank" href="https://erc.europa.eu">
                <SponsorLogo>
                  <img src="/static/images/erc.png"></img>
                </SponsorLogo> 
              </a>

            </CollaboratorsAndSponsors>
          </ContactWrapper>
        </MainBackground>
      </Element>
    )
  }
}

export default CollabAndSponsor;


const MainBackground = styled.div`
  display: flex;
  width: 100%;
  background-color: ${ primaryBackground};
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 130px;
  padding-bottom: 0px;

   &::before{
    content: '';
    bottom: -9px;
    right: 0;
    left: 17px;
    height: 2px;
    background-color: black;
  }
`

const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${sectionText};
  font-weight: bolder;
  padding-left: 130px;
  margin-top: 100px;
`

const CollaboratorsAndSponsors = styled.div`
  font-family: ${fonts.systemRegular};
  padding-left: 40%;
  display: flex;
  padding-bottom: 100px;
  flex-wrap: wrap;
`

const SponsorLogo = styled.div`
  width: 150px;
  height: 50px;
  margin-bottom: 25px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  img{ height: inherit;}

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`