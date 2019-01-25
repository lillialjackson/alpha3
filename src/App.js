import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.js';
import CompRender from './components/comprender/comprender.js'


import './App.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
      input : '',
      route: 'signin',
      isSignedIn: false,
      user: {
        username: '',
        email:'',
        location: '',
        experienceLevel: ''
      }

    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
    this.onRouteChange = this.onRouteChange.bind(this)
    this.loadUser = this.loadUser.bind(this)
    }


// load user info
loadUser = (data) => {
  this.setState({user: {
    username: data.username,
    email: data.email,
    experienceLevel: data.experiencelevel,
    location: data.location
  }})
}

onUsernameSubmitted(username) {
   fetch('https://damp-forest-34333.herokuapp.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          username: username
        })
      })
      .catch(error => console.error('error', error))
  }

// route change function
  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


// begin render
  render() {
    const {isSignedIn, route} = this.state;
    const {username, email, experienceLevel, location} = this.state.user;
    return (
      <div>
        <Navigation isSignedIn = {isSignedIn}
                    onRouteChange = {this.onRouteChange} />
          <CompRender route={route}
              isSignedIn = {isSignedIn}
              onRouteChange = {this.onRouteChange}
              username = {username}
              email = {email}
              location = {location}
              experienceLevel = {experienceLevel}
              loadUser = {this.loadUser}
              submitUser = {this.onUsernameSubmitted}
          />
      </div>
    );
  }

}

export default App;
