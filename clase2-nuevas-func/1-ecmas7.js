// const i = 0  
// const gFetch = ()=>{}
// Escma6 => conts let

// exponencial

let valoresBase = [1,2,3,4,5]//  pos ->[0,1,2,3,4] tamaño .lenght = 5
const nuevosValores = valoresBase.map((numero, index) => numero**index)
console.log(nuevosValores)

// include
let nombre = ['Fede', 'Juan', 'Lucas'] 
if (nombre.includes('fede')) { // return del includes booleano
    console.log('El nombre está incluido')
}else{
    console.log('El nombre NO está incluido')

}
