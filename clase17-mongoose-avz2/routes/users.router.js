const { Router } = require('express')
const { userModel } = require('../models/user.model.js')

const router = Router()

// rutas para usuarios
router.get('/', async (req,res)=>{
    try {
        let users = await userModel.paginate({gender: 'Female'}, {limit: 20, page: 2})
        console.log(users)
        // users validar respuesta
        res.send({status: 'success', payload: users})
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router