const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Docker')
})
app.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma es = ${sum}`
    })
})

app.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma esLa suma es ${sum}`
    })
})

app.listen(8080, error => {
    if (error) {
        console.log('error server', error)
    }
    console.log('escuchando el server en el puerto 8080')
}) 