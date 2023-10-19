const { Router } = require('express')
const { userModel } = require('../models/user.model.js')
const { createHash, isValidPasword } = require('../utils/hash.js')
// __________________________________________________________ passport _____________________________________________
const passport = require('passport')

const router = Router()

// login con passport 'login'
router.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}),async (req,res) => {
    if(!req.user) return res.status(400).send({status: 'error', error: 'credenciales invalidas'})
    
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        role: 'admin'
    }    

    res.send({status: 'success', payload: req.user})
})

router.get('/faillogin', async (req, res) => {
    console.log('Failed strategy')
    res.send({status: error, error: 'Failed login'})
})


// reestructurar register
router.post('/register', passport.authenticate('register', {
   failureRedirect: '/failregister' 
}) ,async (req,res) => {   
    res.send({status: 'success', message: 'login success'}) 
})

router.get('/failregister', async (req, res) => {
    console.log('Failed strategy')
    res.send({status: error, error: 'Failed register'})
})


// http://localhost:8080/api/sessions /logout
router.post('/logout', (req,res) => {
    res.send('cerrada la session')
})

module.exports = router