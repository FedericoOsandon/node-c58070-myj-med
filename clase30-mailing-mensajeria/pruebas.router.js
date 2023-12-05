const { Router } = require('express')
const { generateUsers } = require('../../utils/fakerUsers.js')
const { fork }   = require('child_process')
const { sendMail } = require('../../utils/sendMail')
const { sendSms, sendWhatsapp } = require('../../utils/sendSms')
const { faker } = require('@faker-js/faker')

const compression = require('express-compression')

const router = Router()

router.get('/sms', async (req, res) => {
   
    // sendSms('Federico', 'osandón')
    // para whatsapp
    sendWhatsapp('Federico', 'osandón')
    res.send('sms enviado')
})
router.get('/mail', async (req, res) => {
    const html = `<div>
            <h1>Bienvenidos a app ecomerce c58070</h1>
        </div>`
    await sendMail('projectodigitalgen@gmail.com', 'gracias por registrarte', html)
    res.send('Mail enviado')
})

// _______________________________________________________________________________________________________________________

module.exports = router