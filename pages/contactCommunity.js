import React from 'react';
import Main from '<Layouts>/main'
import styled from 'styled-components'
import colors from '<Styles>/colors'
import Grid from '<Features>/Grid'
import fonts from '<Styles>/fonts'
import { Icon } from '<UI>'

const primaryBackground = colors.primary
const orangeDark = colors.orangeDark
const sectionText = fonts.sectionText

class ContactAndCommunity extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    return (
      <MainBackground>
        {/* <Grid /> */}
        <ContactWrapper>
          <SectionHeader>CONTACT <br/> & COMMUNITY</SectionHeader>

          <DetailWrapper>
            <MailWrapper>
              <Email> Email Organizers </Email>
              <MailDetails> 
                <Icon name="mail" className="mail-icon" /> 
                hello@slab.org
              </MailDetails>
            </MailWrapper>

            <MailWrapper>
              <Email> Join </Email>
              <ChannelDetails> Channel on 
                <ChannelGroup> talk.lurk.org </ChannelGroup>
              </ChannelDetails>
            </MailWrapper>
          </DetailWrapper>
        </ContactWrapper>
      </MainBackground>
    )
  }
}

export default ContactAndCommunity;


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

const ChannelDetails = styled.p`
  display: inline-flex;
`
const ChannelGroup = styled.p`
  font-size: 16px;
  text-decoration: underline;
  margin-top: 0;
  margin-left: 5px;
  cursor: pointer;
  &:hover{
    color: ${ orangeDark};
  }
`


const DetailWrapper = styled.div`
  display: flex;
  padding-left: 40%;
`

const SectionHeader = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: ${sectionText};
  padding-left: 130px;
`

const MailWrapper = styled.div`
  font-family: ${fonts.systemRegular};
  padding-left: 5%;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Email = styled.div`
  font-size: 12px;
  background: black;
  color: white;
  width: fit-content;
  padding: 5px;
`
const MailDetails = styled.p`
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    color: ${ orangeDark};
  }
  .mail-icon{
    padding-right: 5px;
  }

`

