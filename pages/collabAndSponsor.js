import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'
import fonts from '<Styles>/fonts'

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark
const sectionText = fonts.sectionText

class CollabAndSponsor extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        {/* <Grid /> */}
        <ContactWrapper>
          <SectionHeader>Collaborators <br/> & Sponsors</SectionHeader>
          <CollaboratorsAndSponsors>
            <SponsorLogo style={{ backgroundImage: `url("static/images/access-space.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/algorave.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/dajf.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/gbsf.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/penelope.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/access-space.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/algorave.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/dajf.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/gbsf.png")` }} />
            <SponsorLogo style={{ backgroundImage: `url("static/images/penelope.png")` }} />
          </CollaboratorsAndSponsors>
        </ContactWrapper>
      </MainBackground>
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
`

const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${sectionText};
  font-weight: bolder;
  padding-left: 130px;
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

  @media (max-width: 767px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`