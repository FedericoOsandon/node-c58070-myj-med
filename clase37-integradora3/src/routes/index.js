const { Router } = require('express')
const usersRouter = require('./api/users.router.js')
const viewsRouter = require('./views.router.js')
const sessionsRouter = require('./api/sessions.router.js')
const { sendEmail } = require('../utils/sendMail.js')

const router = Router()

// router.use('/', (req,res) =>{
//     res.send('Bienvenidos a la comisión 58070')
// })

router.get('/sendmail', (req, res)=>{
    sendEmail('projectodigitalgen@gmail.com', 'Esto es una prueba', '<h1>Prueba comisión 58070</h1>')
    res.send('Email enviado')
})
router.use('/', viewsRouter)
router.use('/api/users', usersRouter)
router.use('/api/sessions', sessionsRouter)
// router.use('/api/products', ()=>{})

module.exports = router