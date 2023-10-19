const { Router } = require('express')
const { userModel } = require('../models/user.model.js')
const { createHash, isValidPasword } = require('../utils/hash.js')
const UserManagerMongo = require('../Daos/Mongo/usersManager.js')
// __________________________________________________________ passport _____________________________________________
const passport = require('passport')
const { generateToken } = require('../utils/jsonwebtoken.js')


const router = Router()
const userService = new UserManagerMongo()

router.post('/login', async (req,res) => {
    const { email, password } = req.body
    console.log(email, password)
    // validar que venga email y password

    // buscar el usuario 
    const user = await userModel.findOne({email})
   
    if (!user) return res.status(401).send({status: 'error', error: 'Usuario o contraseña incorrecto'})

    const access_token = generateToken({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: 'user'
    })

    res.status(200).send({
        status: 'success',
        access_token,
        message: 'login correcto'
    })

    // res.send('logueado')
})

// http://localhost:8080/api/sessions /register
router.post('/register', async (req,res) => {
    try {
        const { first_name, last_name, email, password } = req.body
        // validar campos
        if (!first_name) {
            return res.send({status: 'error', error: 'completar todos los campos'})
        }
        const exists = await userModel.findOne({email})
        if (exists) return res.status(401).send({status: 'error', error: 'El usuario con el mail ingresado ya existe'})

        const newUser = {
            first_name,
            last_name,
            email, 
            password
        }

        let result = await userModel.create(newUser)
        // validar result

        res.send({status: 'success', message: 'El ususario fue creado correctamente'})
    } catch (error) {
        console.log(error)
    }
    
})
//// _____________________ Github _____________________________________

router.get('/github', passport.authenticate('github', {scope:['user:email']}), async (req,res)=>{})

router.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/login'}), async (req,res)=>{
    req.session.user = req.user
    res.redirect('/')
} )


// http://localhost:8080/api/sessions /logout
router.post('/logout', (req,res) => {
    res.send('cerrada la session')
})

module.exports = router