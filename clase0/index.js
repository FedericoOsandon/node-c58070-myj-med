let productos = [
    {id:1, nombre: 'producto1'},
    {id:2, nombre: 'producto2'},
    {id:3, nombre: 'producto3'}
]

// console.log(typeof productos)
// console.warn(productos)
// console.error(productos)
// console.table(productos)
// console.dir(productos)

// tipos de datos primitivos: string- number- boolean- null- undefined
//tipo de datos primitivos -> se copia por valor

// tipos de datos object: objects - array - function 
//tipo de datos object -> se copia por referencia

// let numero = 7
// let numero1 = numero // 7


// numero ++ // incrementa en uno
// console.log(numero1) // 7+


// let numeroObject = {
//     valor: 1
// }

// let numeroObject1 = numeroObject

// numeroObject.valor++// incrementando en uno

// console.log(numeroObject1.valor)

// manera de declarar variables 
// {
//     // var numero = 1// scope -> ámbito - contexto - alcance
//     let numero1 = 1 // 
//     console.log(numero1)
//     const numero2 = 1 // constante
//     console.log(numero2)
// }

// function name(params) {
    
// }

const numeroObject = {
    valor: 1
}

numeroObject.valor = 2
console.log(numeroObject)

const numero = 1 
numero = 2