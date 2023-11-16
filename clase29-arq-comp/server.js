const express = require('express')
const {connect} = require('mongoose')
const cors = require('cors')
const productsRouter = require('./routes/products.router.js')

const app = express()
const port = 8080
;(() => {
    connect('mongodb://localhost:27017/c58070')
    console.log('base de datos conectada')
})()



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/api/products', productsRouter)



app.listen(port, ()=>{
    console.log(`Server listener port: ${port}`)
})