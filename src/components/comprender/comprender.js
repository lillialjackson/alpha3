import React from 'react';
import SignIn from '../signin/signin.js';
import Register from '../register/register.js';
import PartnerSearch from '../partnersearch/partnersearch.js';
import Home from '../home/home.js';
import ChatWrapper from '../chat/chatwrapper.js'

class LoggedOut extends React.Component {

  render(){
      if(this.props.route === 'home'){
      return (
        <div>
          <Home username={this.props.username} location={this.props.location} experienceLevel={this.props.experienceLevel} onRouteChange={this.props.onRouteChange} />
        </div>

      );} else if (this.props.route === 'register'){
        return (
          <div>
            <Register loadUser={this.loadUser} onRouteChange = {this.props.onRouteChange} username = {this.props.username} submitUser = {this.props.submitUser} />
          </div>

        );
      }else if (this.props.route === 'signin'){
        return (
          <div>
            <SignIn loadUser={this.props.loadUser} onRouteChange = {this.props.onRouteChange} />
          </div>

        );
      }else if (this.props.route === 'signout'){
        return (
          <div>
            <SignIn loadUser={this.props.loadUser} onRouteChange = {this.props.onRouteChange} />
          </div>

        );
      }else if (this.props.route === 'search'){
        return (
          <div>
            <PartnerSearch />
          </div>

        );
      }else if (this.props.route === 'chat'){
        return (
          <div>
            <ChatWrapper username={this.props.username} />
          </div>

        );
      }
    }
}

export default LoggedOut;
