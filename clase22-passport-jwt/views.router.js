const { Router } = require('express')
const { userModel } = require('../models/user.model')
const { auth } = require('../middleware/authentication')
const { ProductManagerMongo } = require('../Daos/Mongo/productManager')
const passport = require('passport')
const { passportCall } = require('../utils/passportCall')
const { authorization } = require('../middleware/authorization.middleware')

const router = Router()



// protejer con jwt passport
// passport.authenticate('jwt', {session: false}) envolver en una función
// router.get('/users', passport.authenticate('jwt', {session: false}), async (req, res) => {
router.get('/users', passportCall('jwt'), authorization('admin'), async (req, res) => {
    try {
        const {numPage=1, limit=20, query=''} = req.query
        let {
            docs,
            hasPrevPage, 
            hasNextPage,
            prevPage,
            nextPage,
            page
            // totalPages
        } = await userModel.paginate({}, {limit, page: numPage, lean: true})
            // console.log(totalPages)
        // console.log(docs)
        // if () {
            
        // }
        // console.log(users)
        res.status(200).render('users', {
            users: docs,
            hasPrevPage, 
            hasNextPage,
            prevPage,
            nextPage,
            page
        })

    } catch (error) {
        console.log(error)
    }
   
})



module.exports = router