require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static(`${__dirname}/dist`))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is serving the dist folder on port ${process.env.PORT}`))

app.post('/api/v1', (req, res) => {
  const data = req.body

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  })

  const mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: 'Quote & Services',
    html: `<p>${data.name}</p>
    <p>${data.email}</p>
    <p>${data.message}</p>`
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
