import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

class Contact extends React.Component {

  constructor() {
    super()
    this.state =  {
      name: '',
      message: '',
      email: '',
      send: false,
      buttonText: 'Send Message'
    }
  }

  formSubmit(e){
    e.preventDefault()

    this.setState({
      buttonText: '...sending'
    })

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('https://client-site-sighapora.herokuapp.com/mail', data)
      .then( res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
  }

  resetForm(){
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  render () {
    return (
      <div id="contact">
        <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
          <label className="message" htmlFor="message-input">Your Message</label>
          <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required
          />

          <label className="message-name" htmlFor="message-name">Your Name</label>
          <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

          <label className="message-email" htmlFor="message-email">Your Email</label>
          <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" value={this.state.email} />

          <div className="button--container">
            <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
