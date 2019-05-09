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
    this.resetForm = this.resetForm.bind(this)
    // this.handleScroll = this.handleScroll.bind(this)
  }


  handleChange({ target: { name, value} }){
    this.setState({[name]: value})
  }

  resetForm(){
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent',
      send: true
    })
  }

  formSubmit(e){
    e.preventDefault()
    this.setState({ buttonText: '...sending' })
    const { name, message, email} = this.state

    axios.post('/api/submit', { name, message, email })
      .then(() => this.setState(this.resetForm()))
      .catch(() => console.log('Message not sent'))
  }

  render () {
    return (
      <div id="contact">
        <form onSubmit={this.formSubmit} className="container">
          <div className="col-sm-6">
            <h3 className=""> Get in touch </h3>
            <div className="form-group">
              <label className="message" htmlFor="message-input">Message</label>
              <textarea onChange={this.handleChange} name="message" className="form-control" type="text" placeholder="Please write your message here" value={this.state.message} required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-6">
              <label className="message-name" htmlFor="message-name">Name</label>
              <input onChange={this.handleChange} name="name" className="form-control" type="text" placeholder="Your Name" value={this.state.name}/>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-6">
              <label className="message-email" htmlFor="message-email">Email</label>
              <input onChange={this.handleChange} name="email" className="form-control" type="email" placeholder="your@email.com" value={this.state.email} />
            </div>
          </div>

          <div className="col-sm-6">
            <button type="submit" className= {this.state.buttonText === 'Message Sent'? 'btn btn-success' : 'btn btn-danger' }>{ this.state.buttonText }</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
