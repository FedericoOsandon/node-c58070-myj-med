const { Router } = require('express')
const UserController = require('../../controllers/users.controller')

const { 
    getUsers,
    createUser
} = new UserController()

const router = Router()


router.get('/', getUsers)
router.post('/', createUser)

module.exports = router 