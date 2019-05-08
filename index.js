require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('https://client-site-sighapora.herokuapp.com/submit', (req, res) => {
  const data = req.body
  console.log(req.body)

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    auth: {
      user: process.env.EMAIL,
      pass: process.env. PASS
    }
  })

  const mailOptions = {
    from: this.state.email,
    to: process.env.EMAIL,
    subject: 'Quote & Services',
    html: `<p>${data.name}</p>
    <p>${this.state.email}</p>
    <p>${this.state.message}</p>`
  }

  smtpTransport.sendMail(mailOptions,
    (error, res) => {
      if(error) {
        res.send(error)
      }else {
        res.send('Success')
      }
      smtpTransport.close()
    })
})

app.use(express.static(`${__dirname}/dist`))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is serving the dist folder on port ${process.env.PORT}`))
