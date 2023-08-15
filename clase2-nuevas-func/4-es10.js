// let saludoNombre = '  Hola Fede '
// console.log(saludoNombre)
// console.log(saludoNombre.length)

// const nuevoSaludoNombre = saludoNombre.trim()
// console.log(nuevoSaludoNombre)
// console.log(nuevoSaludoNombre.length)

// flat 

// const array = [ 0, 1, [1,3], 3, 4, [[1], 2, 3] ]
// console.log(array.flat())
// console.log(array.flat(2))


// importación dinámica
const modo = 'calculo'

const ejemploImport = async () => {
    if(modo === 'calculos'){
        const { Calculadora } = await import('./calculadora.mjs')
        let calculadora = new Calculadora()
        console.log(calculadora.suma(2,2))
    }
}

ejemploImport()

