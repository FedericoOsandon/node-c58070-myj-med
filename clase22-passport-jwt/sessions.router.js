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
   
    // validar que venga email y password

    // buscar el usuario 
    const user = await userModel.findOne({email})
   
    if (!user) return res.status(401).send({status: 'error', error: 'Usuario o contraseña incorrecto'})

    const token = generateToken({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: 'user'
    })
    // dos formas de enviar el token
    res.cookie('cookieToken', token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).status(200).send({
        status: 'success',
        // token: access_token,
        message: 'loggen successfully'
    })

    // res.send('logueado')
})

module.exports = router