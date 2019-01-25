import React from 'react';
import './home.css'



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      route: 'home'
    }
  }
render() {
  return (
      <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img" style={{width: '75%', margin: '0 auto'}} src={require('../../img/alpha-logo.png')} alt="Alpha Logo" />
          </div>
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="card mb-4 box-shadow">
          <h4 className="card-title"> Climb, Explore, Connect! </h4>
          <div className='card-body'>
            <p className='card-text'> This is Alpha for Beta! Make connections in the climbing community! Connect with friends, chat about all things climbing, and find new partners!</p>
            <p className='card-text'>
              {`Welcome back ${this.props.username}! \n The climbing is lovely in ${this.props.location}! \n Your current experience level is ${this.props.experienceLevel}, good for you! \n Climb on!`}
            </p>
          </div>
          </div>
        </div>

        </div>
        <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" style={{width: '39%', margin: '0 auto'}} src={require('../../img/search.png')} alt="Alpha Logo" />
            <h4 className="card-title"> Search </h4>
            <p className="card-text"> Search for new partners in your area! Search by area and experience level to find climbers that compliment your skills and goals!</p>
            <button type="button" className="btn btn-secondary" onClick = {() => this.props.onRouteChange('search')}>Search</button>

          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" style={{width: '50%', margin: '0 auto'}} src={require('../../img/chat.png')} alt="Alpha Logo" />
            <h4 className="card-title"> Chat </h4>
            <p className="card-text"> Chat with Alpha members, create new rooms and discussion topics, organize climbing trips, gear swaps, and other adventures! </p>
            <button type="button" className="btn btn-secondary" onClick = {() => this.props.onRouteChange('chat')}>Chat</button>

          </div>
        </div>
        </div>
      </div>


  );
}
}

export default Home;
