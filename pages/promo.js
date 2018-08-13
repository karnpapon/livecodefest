import React from 'react';
import styled from 'styled-components'
import fonts from '<Styles>/fonts'
import colors from '<Styles>/colors'
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const primaryBackground = colors.primary
const orangeDark = colors.orangeDark

class Promo extends React.Component {
  static async getInitialProps({ query, res }) {
    return true
  }


  render() {

    const { evalCode } = this.props

    return (
      <Element name="promo">
        <MainBackground>
          <EventPromo >
            <Text className={evalCode ? 'eval-code' : ''}>Three days of music </Text> 
            <Text className={evalCode ? 'eval-code' : ''}>  visuals </Text> 
            <Text className={evalCode ? 'eval-code' : ''}>  talks </Text> 
            <Text className={evalCode ? 'eval-code' : ''}>  demos </Text> 
            <Text className={evalCode ? 'eval-code' : ''}> and workshops.</Text> 
          </EventPromo>
        </MainBackground>
      </Element>
    )
  }
}

export default Promo;

const MainBackground = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${ primaryBackground};
`

const EventPromo = styled.div`
 
  padding-left: 130px; 
  margin-top: auto;
  margin-top: 54px;
  margin-bottom: 50px;

`

const Text = styled.p`
  font-family: ${ fonts.systemRegular};
  font-size: 42px;
  font-weight: bolder;
  width: fit-content;
  transition: .2s;
  margin: 0;
  background: transparent;

  &.eval-code{
    background: ${ orangeDark };
  }
`