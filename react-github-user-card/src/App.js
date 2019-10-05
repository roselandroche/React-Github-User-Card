import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: {},
      followers: [{}]
    }
  }

  componentDidMount() {
    this.getGitHubUser()
    this.getGitHubFollowers()
  }

  getGitHubUser = () => {
    axios
      .get(`https://api.github.com/users/roselandroche`)
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  getGitHubFollowers = () => {
    axios
      .get('https://api.github.com/users/roselandroche/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </>
    )
  }
}

export default App;
