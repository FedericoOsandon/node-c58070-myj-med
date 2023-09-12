import express from 'express'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
import logger from 'morgan'
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
import { __dirname } from './utils/index.js'
import { uploader } from './utils/multer.js'

import userRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import viewsRouter from './routes/views.router.js'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// __ importación y configuración ____________________________________________________
import { Server } from 'socket.io'

const app = express()
// console.log(Server)
const PORT = 8080

const httpServer = app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

const socketServer = new Server(httpServer)

// ______________________________________________________

app.use(express.static(__dirname + '/public') )
app.use(cookieParser())
app.use( express.json() )
app.use( express.urlencoded({extended: true}) )
app.use(logger('dev'))

// app.engine('handlebars', handlebars.engine())
// app.set('view engine', 'handlebars')
// app.set('views', __dirname + '/views')

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


// end point
app.use('/', viewsRouter)
app.use('/api/users',  userRouter ) 
//1 crear end piont
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.post('/',  uploader.single('file'), (req,res)=>{
    if (!req.file) {
        return res.status(400).send({status: 'error', error: 'no se pudo guardar la imagen'})
    }
    // console.log(req.file)

    res.send({status: 'success', message: 'archivo subido'})
}) 

app.use( function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Error en el server')
} ) 

socketServer.on('connection', socket => {
    // console.log(socket)
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
        console.log(data)
    })

    // socket.emit('evento-para-el-actual','evento que solo escucha el cliente actual')
    // socket.broadcast.emit('escuchan-todos-menos-actual', 'Va a escuchar el evento todos menos el cliente actual')
    socketServer.emit('evento-para-todos', 'Este evento lo escuchan todos los clientes conectados')
})




