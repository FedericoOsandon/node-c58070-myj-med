import express from 'express'

const app = express()

// 1xx -> 100 - 199
// 2xx -> 200 - 299
// 3xx -> 300 - 399

// https://google.com/  http/s + dominio -> url 
// mongodb://localhost:27017/
// ftps:

// Usuarios 
// Productos
// mensajes
// carritos
// orders -> tickets

// http://localhost:8080/
// GET http://localhost:8080 /query

app.get('/perritos/', (req, res)=>{
    res.send('get perritos')
})
app.get('/perritos/:pid', (req, res)=>{
    res.send('get perrito')
})
app.post('/perritos/', (req, res)=>{
    res.send('post perritos')
})
app.put('/perritos/', (req, res)=>{
    res.send('put perritos')
})
app.delete('/perritos/', (req, res)=>{
    res.send('delete perritos')
})

// forma correcta de crear endpoint :

// app.get('/perritos/obtenertodos', (req, res)=>{
//     res.send('perritos')
// })
// app.get('/perritos/traeruno', (req, res)=>{
//     res.send('perritos')
// })
// app.post('/perritos/crear', (req, res)=>{
//     res.send('perritos')
// })
// app.put('/perritos/actualizar', (req, res)=>{
//     res.send('perritos')
// })
// app.put('/perritos/eliminar', (req, res)=>{
//     res.send('perritos')
// })




app.listen(8080, ()=> console.log('escuchando en el puerto 8080'))

