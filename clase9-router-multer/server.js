import express from 'express'
import userRouter from './routes/users.router.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import cookieParser from 'cookie-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 8080


// middleware que se ejecutan en orden
// middleware incorporado
app.use( express.static(__dirname + '/public') )
// middleware de tercero cookie-parser
app.use(cookieParser())

app.use( express.json() )
app.use( express.urlencoded({extended: true}) )
// app.use('/static',express.static(__dirname + '/public'))

app.use( (req, res, next)=>{
    // acá puedo usar req y res
    console.log('time', Date())
    next()
} ) // middleware es una función intermediaria al proceso de respuesta

function midd1(req, res, next) {
    req.dato1 = 'dato uno'
    next()
}
function midd2(req, res, next) {
    req.dato2 = 'dato dos'
    next()
}

// http://localhost:8080 /api/users
app.use('/api/users', midd1, midd2,  userRouter ) // primer end point

app.use( function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Error en el server')
} ) 


app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})