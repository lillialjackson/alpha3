import React from 'react';
// import './signin.css';


class SignIn extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  // input field change
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value.toLowerCase().trim()})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }



// POST fetch
  onSubmitSignIn = () => {
    return fetch('https://damp-forest-34333.herokuapp.com/signin',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if(this.state.signInEmail === '' || this.state.signInPassword === ''){
        return alert('Please fill out your credentials to sign in');
      } else if (user.id){
        this.props.loadUser(user);
        return this.props.onRouteChange('home');
      } else {
        return alert('Error logging in!');
      }
    })
  }


  render(){

    return(
      <div className="text-center">
          <div className = 'form-signin'>
          <img className="signin-logo mb-4" style={{width: '100px'}} src={require('../../img/alpha-logo.png')} alt="Alpha Logo" />
          <div>
          <h4 className="h3 mb-3 font-weight-normal"> Sign In </h4>
            <p> To demo Alpha: <br/> Login using email: Guest@email.com and password: password <br/>(Hint! Try searching climbers located in Bikini Bottom) </p>
            <label htmlFor="email" className='sr-only'> Email: </label>
            <input type="email" name="email" id = 'signin-email'
                    onChange ={this.onEmailChange}
                    placeholder='email'
                    className='form-control' required />
            <label htmlFor="password" className='sr-only'>Password: </label>
            <input type="password" name="psw" id="signin-password"
                      onChange ={this.onPasswordChange}
                      placeholder='password'
                      className='form-control'required />
            <button className= 'btn btn-lg btn-secondary btn-block' onClick={this.onSubmitSignIn} >
                    Submit </button>
                </div>
                </div>
              </div>
            )
          }
}

export default SignIn;
