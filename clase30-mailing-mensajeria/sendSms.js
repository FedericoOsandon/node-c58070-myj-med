const twilio = require('twilio')
const { configObject: {twilio_sid, twilio_token, twilio_phone} } = require('../config/config')

const cliente = twilio(twilio_sid, twilio_token)

exports.sendSms = (first_name, last_name) => cliente.messages.create({
    body: `Gracias por tu compra ${first_name} ${last_name}`,
    from: twilio_phone,
    to: '+34613652154'
})
exports.sendWhatsapp = (first_name, last_name) => cliente.messages.create({
    body: `Gracias por tu compra ${first_name} ${last_name}`,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+34613652154'
})

