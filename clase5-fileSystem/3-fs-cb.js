const fs = require('node:fs')



fs.writeFile('./data.txt', '', 'utf-8', (err)=>{
    if (err) return console.log('Error al crear y escribir el archivo')
    console.log('archivo creado sin contenido')
    const fecha = new Date().toLocaleString()
    fs.appendFile('./data.txt', fecha, 'utf-8', (error)=>{
        if(error) console.log(error)
        fs.readFile('./data.txt', (erro, data)=>{
            if(error) console.log(error)
            console.log(data)
        })
    })  
})

// fs.appendFile('./data.txt', '\n esto es un agregado', 'utf-8', err => {
//     if (err) console.log('esto es un error: ', err)
//     else console.log('texto agregado')
// })

// fs.readFile('./data.txt', 'utf-8', (err, data )=>{
//     if(err) console.log('Esto es un Error capturado: ', err)
//     else console.log(data)
// })

// fs.unlink('./data.txt', error =>{
//     if(error) console.log(error)
//     console.log('Archivo eliminado')
// })