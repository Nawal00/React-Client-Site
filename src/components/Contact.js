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
    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }


  handleChange({ target: { name, value} }){
    this.setState({[name]: value})
  }

  formSubmit(e){
    e.preventDefault()
    this.setState({ buttonText: '...sending' })

    axios.post('https://client-site-sighapora.herokuapp.com/submit', this.state.data)
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
        <form onSubmit={this.formSubmit} className="container">
          <div className="form-group">
            <label className="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={this.handleChange} name="message" className="form-control" type="text" placeholder="Please write your message here" value={this.state.message} required
            />
          </div>

          <div className="form-group">
            <label className="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={this.handleChange} name="name" className="form-control" type="text" placeholder="Your Name" value={this.state.name}/>
          </div>

          <div className="form-group">
            <label className="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={this.handleChange} name="email" className="form-control" type="email" placeholder="your@email.com" value={this.state.email} />
          </div>

          <button type="submit" className="btn btn-primary">{ this.state.buttonText }</button>

        </form>
      </div>
    )
  }
}

export default Contact
