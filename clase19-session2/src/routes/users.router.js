const { Router } = require('express')
const { userModel } = require('../models/user.model.js')
const { auth } = require('../middleware/authentication.js')

const router = Router()

// rutas para usuarios
router.get('/', async (req,res)=>{
    try {
        // let users = await userModel.paginate({gender: 'Female'}, {limit: 20, page: 2})
        let users = await userModel.paginate({}, {limit: 20, page: 2})
        console.log(users)
        // users validar respuesta
        res.send({status: 'success', payload: users})
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req,res) => {
    try {        
        // let newUser = req.body
        let {first_name, last_name, email} = req.body
        
        if (!first_name || !last_name || !email ) return res.send({status: 'error', error: 'incomplete values'})
    
        let result = await userModel.create({
            first_name,
            last_name,
            email
        })
        // result
        res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }

})

router.put('/:uid', async (req, res)=>{
    try {
        let {uid} = req.params
        let userToReplace = req.body
        if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email ) return res.send({status: 'error', error: 'incomplete values'})
        let result = await userModel.updateOne({_id: uid}, userToReplace)
        res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:uid', async (req, res)=>{
    try {
        let {uid} = req.params
        let result = await userModel.deleteOne({_id: uid})
        res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router