const { Router } = require('express')

const messagesRouter = require('./messages.router.js')

const router = Router()

router.use('/api/messages', messagesRouter)


module.exports = router