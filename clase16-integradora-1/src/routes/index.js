const { Router } = require('express')
const usersRouter = require('./users.router.js')
const viewsRouter = require('./views.router.js')

const router = Router()


// router.use('/', (req,res) =>{
//     res.send('Bienvenidos a la comisión 58070')
// })


router.use('/views', viewsRouter)
router.use('/api/users', usersRouter)
// router.use('/api/products', ()=>{})

module.exports = router