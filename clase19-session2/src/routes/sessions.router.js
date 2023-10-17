const { Router } = require('express')
const { userModel } = require('../models/user.model.js')

const router = Router()
// http://localhost:8080/api/sessions /login
router.post('/login', async (req,res) => {
    const { email, password } = req.body
    console.log(email, password)
    // validar que venga email y password

    // buscar el usuario 
    const user = await userModel.findOne({email,password})
    console.log(user)
    if (!user) return res.status(401).send({status: 'error', error: 'Usuario o contraseña incorrecto'})

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        role: 'admin'
    }

    res.status(200).send({
        status: 'success',
        payload: req.session.user,
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
// http://localhost:8080/api/sessions /logout
router.post('/logout', (req,res) => {
    res.send('cerrada la session')
})

module.exports = router