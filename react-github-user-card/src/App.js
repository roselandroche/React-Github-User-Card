import React from 'react';
import axios from 'axios';

import Card from './Card';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: {}
    }
  }

  componentDidMount() {
    this.getGitHubCards()
  }

  getGitHubCards = () => {
    axios
      .get(`https://api.github.com/users/roselandroche`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <Card user={this.state.user}/>
    )
  }
}

export default App;
