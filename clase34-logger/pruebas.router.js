const { Router } = require('express')
const { generateUsers } = require('../../utils/fakerUsers.js')
const { fork }   = require('child_process')
const { sendMail } = require('../../utils/sendMail')
const { sendSms, sendWhatsapp } = require('../../utils/sendSms')
const { faker } = require('@faker-js/faker')

const compression = require('express-compression')

const router = Router()

router.get('/test/user', (req, res)=>{
    
    res.send({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    })
})

router.get('/sencilla', (req,res)=>{
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += 1        
    }
    res.send({sum})
})
router.get('/compleja', (req,res)=>{
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += 1        
    }
    res.send({sum})
})

// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/sencilla' -o simple.json
// artillery quick --count 40 --num 50 'http://localhost:8080/pruebas/compleja' -o compleja.json

// artillery run config.yml --output testPerformance.json
// artillery report testPerformance.json -o testResults.html


// router.get('/warning', (req, res)=>{
//     // req.logger.warning('Warning en la ruta de prueba')
//     // req.logger.fatal('Warning en la ruta de prueba')
//     req.logger.error('Warning en la ruta de prueba')

//     res.send('ejecutando el warning')
// })

module.exports = router