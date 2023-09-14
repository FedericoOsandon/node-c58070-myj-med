const express = require('express')

const handlebars = require('express-handlebars')

const { Server: HTTPServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

//_______________________________ handlebars

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// console.log(__dirname)
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')

//_______________________________

app.get('/', (req, res)=>{
    res.render('index', {
        name: 'federico'
    })
})
app.get('/realtimeproduct', (req, res)=>{
    res.render('realTimeProduct')
})

httpServer.listen(PORT, ()=>{
    console.log('escuchando en el puerto '+PORT)
})

const mensajes = [
    // {user: 'fede', message: 'hola'}
]

io.on('connection', socket => {
    console.log('nuevo cliente conectado')

    socket.on('message', data => {
        // console.log(data)
        mensajes.push(data)
        io.emit('messageLogs', mensajes)
    })

    socket.on('authenticated', data => {
        socket.broadcast.emit('newUserConnected', data)
    })
})