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

const app = express()



const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)

const PORT = process.env.PORT || 8080

conectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))
// middleware de cookies
app.use(cookieParser('p@L@BR@s3CR3T@'))

// middleware de session
// const fileStore = FileStore(session)
// app.use(session({
//     store: new fileStore({
//         path: __dirname+'/sessions',
//         ttl: 1000, // milisegundos
//         retries: 0
//     }),
//     secret: 'p@L@BR@s3CR3T@',
//     resave: true,
//     saveUninitialized: true
// }))
// session con mongo

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/c58070',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 150000
    }),
    secret: 'p@L@BR@s3CR3T@',
    resave: true,
    saveUninitialized: true
}))

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
// app.use('/api/sessions', sessionsRouter)
app.use('/api/carts', cartsRouter)
app.use('/pruebas', pruebasRouter)


httpServer.listen(PORT, ()=>{
    console.log('escuchando en el puerto '+PORT)    // ORM (lo mismo que odm - pero para bd relacionales) !== ODM (DB no relacionales)
})



// messageIoSocket(io)
productsIoSocket(io)