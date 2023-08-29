// const express = require('express') //commond
import express from 'express' // module

const app = express()

// app.get('/bienvenido', (req, res)=>{
//     console.log(req)
//     res.send('<h1 style="color: blue;">Hola como están, bienvenidos al primer server express</h1>')
// })
// app.get('/users', (req, res)=>{
//     // console.log(req)
//     res.send({
//         nombre: 'fede',
//         apellido: 'osandón'
//     })
// })

app.get('/params/:id', (req, res)=>{
    console.log(req.params.id)
    res.send({
        parametro: req.params
    })
})
app.get('/users/:nombre/:apellido', (req, res)=>{
    // console.log(req.params)
    res.send({
        response: `El nombre completo es: ${req.params.nombre} ${req.params.apellido}`
    })
})

app.listen(8080, ()=> console.log('escuchando en el puerto 8080'))