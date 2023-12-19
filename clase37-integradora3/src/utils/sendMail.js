const {createTransport} = require('nodemailer')
const { config } = require('../config/config')
console.log('pass',config.gmail_pass)
console.log('user',config.gmail_user)
const transport = createTransport({
    service: 'gmail',
    port: 578,
    auth: {
        user: config.gmail_user,
        pass: config.gmail_pass
    }
})

const sendEmail = async (userMail, subject, html) => {
    let from = `Servicio de email <${config.gmail_user}>`
    return await transport.sendMail({
        from,
        to: userMail,
        subject,
        html
    })
}

module.exports = {
    sendEmail
}