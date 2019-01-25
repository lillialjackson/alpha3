import React from 'react';


class Navigation extends React.Component {

render(){
  if (this.props.isSignedIn) {
    return (
        <div className = 'authenticate' >
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <img id="nav-logo" className="navbar-brand" src={require('../../img/alpha-nav.png')} style={{width: '30px'}} alt="alpha-nav" />
                <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" onClick = {() => this.props.onRouteChange('home')} >Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick = {() => this.props.onRouteChange('search')} >Search</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick = {() => this.props.onRouteChange('chat')} >Chat</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick = {() => this.props.onRouteChange('signout')} >Sign Out</a>
                    </li>
                 </ul>
               </div>
            </nav>
        </div>

    );
  } else {
    return (
        <div className = 'authenticate' >
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <img id="nav-logo" className="navbar-brand" src={require('../../img/alpha-nav.png')} style={{width: '30px'}} alt="alpha-nav" />
               <div className="collapse navbar-collapse" id="options">
                 <ul className="navbar-nav mr-auto">
                   <li className="nav-item">
                       <a className="nav-link" onClick = {() => this.props.onRouteChange('signin')} >
                         Sign In
                       </a>
                  </li>
                   <li className="nav-item">
                   <a className= "nav-link" onClick = {() => this.props.onRouteChange('register')} >
                     Register
                   </a>
                  </li>
                 </ul>
               </div>
            </nav>
        </div>

    );
  }
}
}


export default Navigation;
