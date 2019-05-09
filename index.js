require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
// const path = require('path')
const cors = require('cors')
const app = express()

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/api/submit', (req, res) => {
  const data = req.body
  console.log(data)

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  })

  const mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: 'Quote & Services',
    html:
    `<p>${data.email}</p>
    <p>${data.message}</p>
    <p>${data.name}</p>`
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


app.get('/*', (req, res) => res.sendFile(`${__dirname}/assets/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is serving the dist folder on port ${process.env.PORT}`))
