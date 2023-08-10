// {
//     const nombre = 'Juan';
// }
// console.log(nombre)

// let i = 0
// function foo(){
//     i=1
//     if (true) {
//         const j=2
//         console.log(i)
//         console.log(j)
//     }
// }

// foo()

// const nombre = 'FEde'
// nombre = 'Federico'
// console.log(nombre)

// const persona = {
//     nombre: 'FEde'
// }
// persona.nombre = 'Federico'

// console.log(persona)

// funciones

// function saludo(){
//     console.log('saludo')
// }
// saludo()

// const saludo = function(){
//     console.log('saludo')
// }

// const saludo = () => 'Estoy saludando' 

// const saludo = _ => 'Estoy saludando' 
// const saludo = (nombre) => 'Estoy saludando ' + nombre
// const saludo = nombre => 'Estoy saludando ' + nombre


// const nombre = 'Federico'
// const apellido = 'El mejor'

const saludo = () => {
    let nombre 
    let apellido
    console.log(nombre, apellido)
    // return 'Estoy saludando ' + nombre + ' ' + apellido  
    return ()=>{console.log(nombre,apellido)}
}
// // const saludo = (nombre, apellido) => ({nombre:nombre, apellido: apellido})

console.log(saludo(nombre, apellido))
// console.log(nombre, apellido)

