const express = require('express')
const handlebars = require('express-handlebars')
// import handlebars from 'express-handlrebars'
// archivos importados de la clase
// cookie
const cookieParser = require('cookie-parser')
// session_______________________________________________________________
const session = require('express-session')
const FileStore = require('session-file-store')
const MongoStore = require('connect-mongo')
// ____________________________________________________________________________
const { Server: HTTPServer } = require('http')
const { Server: IOServer } = require('socket.io')

const viewsRouter = require('./routes/views.router.js')
const userRouter = require('./routes/users.router.js')
const sessionsRouter = require('./routes/sessions.router.js')
const cartsRouter = require('./routes/carts.router.js')
const productsRouter = require('./routes/products.router.js')
const pruebasRouter = require('./routes/pruebas.router.js')

const { messageIoSocket } = require('./utils/messageIoSocket.js')
const { productsIoSocket } = require('./utils/productoIoSocket.js')
const { conectDB } = require('./config/config.js')
// _________________________ passport _______________________________
const passport = require('passport')
const inizializePassport = require('./config/passport.config.js')


const app = express()

const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

const PORT = process.env.PORT || 8080

conectDB()

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))
app.use(express.json())
// middleware de cookies

// nuevo de passport local ____________________________
app.use(cookieParser('p@L@BR@s3CR3T@'))
inizializePassport()
app.use(passport.initialize())

//_______________________________ handlebars

// configuración de handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
// en que carpeta vana a estar las plantillas
app.set('views', __dirname+'/views') 
// motor de plantillas con la extención de hbs
app.set('view engine', 'hbs')

//_______________________________

app.use('/', viewsRouter) // vista -> template html del cliente
app.use('/api/products', productsRouter) // endpoint 
app.use('/api/users', userRouter)
app.use('/api/sessions', sessionsRouter)
app.use('/api/carts', cartsRouter)
app.use('/pruebas', pruebasRouter)


httpServer.listen(PORT, ()=>{
    console.log('escuchando en el puerto '+PORT)    // ORM (lo mismo que odm - pero para bd relacionales) !== ODM (DB no relacionales)
})



// messageIoSocket(io)
productsIoSocket(io)