import express from 'express'
import userRouter from './routes/users.router.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import cookieParser from 'cookie-parser'
import { uploader } from './utils/multer.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 8080

app.use( express.static(__dirname + '/public') )
app.use(cookieParser())
app.use( express.json() )
app.use( express.urlencoded({extended: true}) )

app.use('/api/users',  userRouter ) 
// app.use('/api/products',  userRouter ) 
// app.use('/api/carts',  userRouter ) 

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


app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})