import React from 'react';


class SendMessageForm extends React.Component {

  constructor() {
    super()
    this.state = {
      inputMessage:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(e) {
  this.setState({
    inputMessage: e.target.value
  })
}

handleSubmit(e){
  e.preventDefault()
  this.props.sendMessage(this.state.inputMessage)
  this.setState({
    inputMessage: ''
  })
}


  render(){

    return(
      <form
        onSubmit={this.handleSubmit}
        className='send-message-form'>
        <input
          disabled= {this.props.disabled}
          onChange={this.handleChange}
          value={this.state.inputMessage}
          placeholder="Type Message and hit Enter"
          type="text" />
      </form>
    );
  }
}

export default SendMessageForm;
