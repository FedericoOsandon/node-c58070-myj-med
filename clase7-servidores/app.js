// const express = require('express') //commond
import express from 'express' // module
// prodcut manager crean un objeto
const app = express()

const usuarios = [
    {id: 1, first_name: 'nombre 1', last_name: 'apellido 1', email: 'example1@gmail.com', gender: 'F'},
    {id: 2, first_name: 'nombre 2', last_name: 'apellido 2', email: 'example2@gmail.com', gender: 'M'},
    {id: 3, first_name: 'nombre 3', last_name: 'apellido 3', email: 'example3@gmail.com', gender: 'M'},
    {id: 4, first_name: 'nombre 4', last_name: 'apellido 4', email: 'example4@gmail.com', gender: 'M'}
]

app.get('/query', (req, res)=> {
    const { gender } = req.query
    console.log(gender)
    if (!gender || (gender!== 'M' &&gender !== 'F')) return res.send({usuarios})
    
    let usuariosFiltrados = usuarios.filter(usuario => usuario.gender === gender)
    res.send({usuariosFiltrados})
})


app.listen(8080, ()=> console.log('escuchando en el puerto 8080'))