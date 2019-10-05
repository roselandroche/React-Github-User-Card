import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      githubName: 'roselandroche',
      user: {},
      followers: [{}]
    }
  }

  componentDidMount() {
    this.getGitHubUser()
    this.getGitHubFollowers()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.user !== this.state.user) {
  //     this.setState({
  //       user: {},
  //       followers: [{}]
  //     })
  //     this.getGitHubUser()
  //     this.getGitHubFollowers()
  //   }
  // }

  getGitHubUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.githubName}`)
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
      .get(`https://api.github.com/users/${this.state.githubName}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (event) => {
    this.setState({
      githubName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      githubName: ''
    })
  }

  render() {
    return (
      <>
        <UserCard user={this.state.user} followers={this.state.followers}/>

        <form className='search'>
          <input type='text' value={this.state.value} placeholder='Enter GitHub Handle'/>
          <button>Search</button>
        </form>
      </>
    )
  }
}

export default App;
