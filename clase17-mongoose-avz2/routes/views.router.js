const { Router } = require('express')
const { userModel } = require('../models/user.model')

const router = Router()

router.get('/users', async (req, res) => {
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
        } = await userModel.paginate({title: query}, {limit, page: numPage, lean: true})
            // console.log(totalPages)
        
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