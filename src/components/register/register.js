import React from 'react';
import './register.css'

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      experienceLevel: {},
      location: '',
      disabled: true
    };
    this.enableSubmitButton = this.enableSubmitButton.bind(this)
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value.toLowerCase().trim()})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value.toLowerCase().trim()})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onExperienceLevelChange = (event) => {
    this.setState({experienceLevel: event.target.value})
  }

  onLocationChange = (event) => {

    this.setState({location: event.target.value.toLowerCase().trim()})
  }

enableSubmitButton = () => {
  this.setState({
    disabled: !this.state.disabled
  })
}

  onSubmitSignIn = () => {
    fetch('https://damp-forest-34333.herokuapp.com/register',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        experienceLevel: this.state.experienceLevel,
        location: this.state.location
      })
    })
    .then(response => response.json())
    .then(user => {
      if (this.state.email === '' || this.state.password === '' || this.state.username === '' ||
          this.state.experienceLevel === '' || this.state.location === '' ) {
        return alert('Please fill in all fields to register');
      } else {
        alert(`Thank you ${this.state.username} for registering for Alpha!`);
        this.props.submitUser(this.state.username);
        return this.props.onRouteChange('signin');
      }
    })
    .catch(err => {
      alert('Could not register user!');
    })
  }

  render(){
  return (
    // begin registration form
      <div className = 'text-center' >
        <div className = 'form-signin'>
          <img className="signin-logo mb-4" style={{width: '100px'}} src={require('../../img/alpha-logo.png')} alt="Alpha Logo" />
        <div>
          <h4 className="h3 mb-3 font-weight-normal" > Setup Your Profile! </h4>
          <label htmlFor="email" className='sr-only'> Email: </label>
          <input type="email"
                      name="email"
                      onChange = {this.onEmailChange}
                      placeholder='email'
                      className='form-control'
                      required />
          <label htmlFor="username" className='sr-only'> Username: </label>
          <input
                      type="text"
                      name="username"
                      id="username"
                      onChange = {this.onUsernameChange}
                      placeholder='username'
                      className='form-control'
                      required
                      />
          <label htmlFor="location" className='sr-only'>Location: </label>
          <input
                      type="text"
                      name="location"
                      id="location"
                      onChange = {this.onLocationChange}
                      className='form-control'
                      placeholder = 'city'
                                />
          <label htmlFor="password" className='sr-only'>Password: </label>
          <input type="password"
                       name="psw"
                       id = 'password'
                       onChange = {this.onPasswordChange}
                       placeholder='password'
                       className='form-control'
                       required />

              <div>
                <div className='registerLabel'>
                  <label htmlFor="experience" className='experience-label'> Experience Level: </label>
                </div>
                <div className= 'inputField'>
                  <select onChange = {this.onExperienceLevelChange}>
                    <option value="none">--</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                  </select>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="information-consent" onClick={this.enableSubmitButton} />
                  <label className="custom-control-label" htmlFor="information-consent">
                  By checking the box, you agree to allow Alpha to store your provided information, solely as user credentials for this app.
                  </label>
                </div>
                </div>
              <br />
              <button onClick ={this.onSubmitSignIn} className= 'btn btn-lg btn-secondary btn-block' disabled={this.state.disabled}> Submit </button>

            </div>
            </div>
          </div>




  )

}



}
export default Register;
