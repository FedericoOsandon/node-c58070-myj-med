// la idea es desarrollar la función de acuerdo a los test. Primero pensamos luego programamos.
// paso uno
// const suma = (numero1, numero2) => {
//     if (!numero1 || !numero2) return 0 
//     if (typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     let result = numero1 + numero2
//     return result
// }

// segundo paso
// const suma = (...numeros) => {
//     // if (!numero1 || !numero2) return 0
//     if(numeros.length === 0) return 0


//     // if (typeof numero1 !== 'number' || typeof numero2 !== 'number') return null
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) {
//         if(typeof numeros[i] !== 'number'){
//             validInput = false
//         }        
//     }
//     if (!validInput) return null

//     // let result = numero1 + numero2
//     let result = 0
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }

//     return result
// }

// paso 3
const suma = (...numeros) => {
    if(numeros.length === 0) return 0
    if(!numeros.every(numero => typeof numero === 'number')) return null
    return numeros.reduce((result, numero) => result += numero)
}

// suma('3',6) -> null algun valor no numérico
// suma() -> 0 ningún valor
// suma(3,6) -> resultado
// suma(3,6, 7, 9) -> resultado para multiples parámetros

let testPasados = 0
let testTotales = 4

console.log('-------------------------------------------------------------------------------')
console.log('Test 1: la función debe devolver un null si algún parámetro no es numérico')
let resultTest1 = suma('2', 3)

if ( resultTest1 === null ) {
console.log('Test 1: ok')
console.log(resultTest1)
testPasados++

} else console.log(`Test 1 no ha pasado, se recibio ${typeof resultTest1} pero se esperaba null`)

console.log('-------------------------------------------------------------------------------')
console.log('Test 2: la función debe devolver un 0 si no paro ningún parámetro')
let resultTest2 = suma()

if (resultTest2 === 0) {
    console.log('Test 2: ok')
    console.log(resultTest2)
    testPasados++
} else console.log(`Test 2 no ha pasado, se recibio ${resultTest2} pero se esperaba 0`)

console.log('-------------------------------------------------------------------------------')
console.log('Test 3: la función debe devolver la suma correctamente.')
let resultTest3 = suma(2, 3)

if (resultTest3 === 5) {
    console.log('Test 3: ok')  
    console.log(resultTest3)
    testPasados++
} else console.log(`Test 3: no ha pasado. La función debe devolver la suma correctamente`)

console.log('-------------------------------------------------------------------------------')
console.log('Test 4: la función debe devolver la suma de multiples parámetros.')
let resultTest4 = suma(1, 2, 3, 4, 5)

if (resultTest4=== 15) {
    console.log('Test 4: ok')  
    console.log(resultTest4)
    testPasados++  
} else console.log(`Test 4: no ha pasado, La función debe poder sumar multiples arg de manera correcta`)

if (testPasados === testTotales) console.log('Todos los test pasaron correctamente')
else console.log(`Han pasados ${testPasados} de ${testTotales} test.`) 