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
      sent: false,
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

  formSubmit(e){
    e.preventDefault()
    this.setState({ buttonText: '...sending' })
    const { name, message, email} = this.state

    axios.post('/api/submit', { name, message, email })
      .then(this.resetForm())
      .catch(() => console.log('Message not sent'))
  }

  resetForm(){
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent',
      phone: '',
      company: '',
      sent: true
    })
  }

  render () {
    return (
      <div id="contact">
      
        <form onSubmit={this.formSubmit} className="container card">
          <div className="company-info">
            <h3>Get in touch</h3>
            <ul>
              <li><i className="fa fa-road"></i>  44 Something st</li>
              <li><i className="fa fa-phone"></i>  (+447) 555-5555</li>
              <li><i className="fa fa-envelope"></i>  test@email.test</li>
            </ul>
          </div>
          <div className="row">
            <div className="col">
              <label>Name</label>
              <input onChange={this.handleChange} name="name" className="form-control" type="text" placeholder="name" value={this.state.name}/>
            </div>

            <div className="col">
              <label>Email</label>
              <input onChange={this.handleChange} name="email" className="form-control" type="email" placeholder="your@email.com" value={this.state.email} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Phone</label>
              <input onChange={this.handleChange} name="phone" className="form-control" type="number" placeholder="+447 000 000" value={this.state.phone} />
            </div>

            <div className="col">
              <label>Company</label>
              <input onChange={this.handleChange} name="company" className="form-control" type="text" placeholder="company" value={this.state.company} />
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <label>Message</label>
              <textarea onChange={this.handleChange} name="message" className="form-control" type="text" placeholder="Please write your message here" value={this.state.message} required
              />
            </div>
          </div>

          <div className="col-12 btn">
            <div className="row">
              <button type="submit" className= { this.state.buttonText === 'Message Sent'? 'btn btn-success btn-block' : 'btn btn-danger btn-block' }>{ this.state.buttonText }</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default Contact
