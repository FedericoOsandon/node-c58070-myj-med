const { Router } = require('express')
const { userModel } = require('../models/user.model.js')

const router = Router()

// rutas para usuarios
router.get('/', async (req,res)=>{
    try {
        // let users = await userModel.find().explain('executionStats') 1 mls
        let users = await userModel.find({first_name: 'Celia'}).explain('executionStats') // no index 2 mls -> index 0 mls
        console.log(users)
        // users validar respuesta
        res.send({status: 'success', payload: users})
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router