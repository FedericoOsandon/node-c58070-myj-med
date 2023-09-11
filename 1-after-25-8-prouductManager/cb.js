const array = [1,2,3,4]


array.map( ()=>{} ) // una función pasada por parámetros

suma = (num1, num2) => num1 + num2
resta = (num1, num2) => num1 - num2

const operacion = (numero1, numero2 , cb ) => { // 255
    
    console.log(numero1)
    console.log(numero2)

    return cb(numero1, numero2)
}

const operacionObjectConfig = {
    numero1: 1,
    numero2: 3,
    suma: suma
}

operacion(2,3, suma)
operacion(2,3, resta)

array.map(   num => num * 2  )