// const saludar = (fn)=> fn()

// saludar( ()=> console.log('hola') )



const array = [1,2,3,4,5,6]

// const calcular = num => num * 2

// console.log(array.map( function(num){return num * 2} ))

// function callback (num) { 
//     if (num % 2 === 0) {  //3/2 = 1 -> resto 1
//         return num
//     } else {
//         return 'no es par'        
//     }
// }

// const newArray = array.map(callback)
// console.log(newArray)

// creando una función que haga lo de map

// function myMap(array, cb) {
//     let nuevoArray = []
//     for (let i = 0; i < array.length; i++) {        
//         let nuevoValor = cb(array[i])
//         nuevoArray.push(nuevoValor)
//     }
//     return nuevoArray
// }

// let newArray = myMap(array, (num)=> num*2)
// console.log(newArray)

// Array.prototype.mMap = function (cb) {
//     let nuevoArray = []
//     for (let i = 0; i < this.length; i++) {        
//         let nuevoValor = cb(this[i])
//         nuevoArray.push(nuevoValor)
//     }
//     return nuevoArray
// }

// let newArray = array.mMap((num)=> num*2)
// console.log(newArray)

const opracion = (num1, num2, cb) => {
    console.log(num1)
    console.log(num2)
    
    if (num2===0) {
        return cb('error', num1,num2)
        
    }
    return cb('null',num1,num2)
}

const suma  = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const mult  = (num1, num2) => num1 * num2
const div   = (error, num1, num2) => error === 'null' ? num1 / num2 : 'no se puede divir por cero'

// console.log(opracion(1,2, suma))
// console.log(opracion(1,2, resta))
// console.log(opracion(1,2, mult))
console.log(opracion(1,0, div))