import React from 'react';


class Index extends React.Component {
  static async getInitialProps ({ query, res }) {
    return true
  }

  componentDidMount(){
  }

  render () {

    return <div>Livecoding Festival London</div>
  }
}

export default Index;
