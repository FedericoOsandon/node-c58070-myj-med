// Async Await (funciones asincrónicas)
// Oject.entries Object.keys Object.values
const impuestos = {
    impuesto: 125,
    impuesto2: 135,
    impuesto3: 145
}

// let valoresLevel = Object.entries(impuestos) // [ [ 'impuesto', 125 ], [ 'impuesto2', 135 ], [ 'impuesto3', 145 ] ]
// console.log(valoresLevel)

// let campos = Object.keys(impuestos)
// console.log(campos)
let valores = Object.values(impuestos)
// console.log(valores)

// reduce -> método(funciones) a un array // reduce <- 

let tolalImpuesto = valores.reduce( (total, elementoArray) => total += elementoArray, 0)
console.log(tolalImpuesto)