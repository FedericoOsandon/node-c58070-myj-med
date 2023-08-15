// finally -> promesas
// spread rest

const objeto1 = {
    propiedad1: 1,
    propiedad2: 'b',
    propiedad3: true
}
const objeto2 = {
    propiedad1: 'c',
    propiedad2: [1,2,3]
}

// destructuring 

// const propiedad1 = objeto1.propiedad1
// const propiedad2 = objeto1.propiedad2
// const { propiedad1 = propiedad1, propiedad2 = propiedad2 } = objeto1
// const { propiedad1, propiedad2 } = objeto1

// console.log(propiedad1)
// console.log(propiedad2)

// spread 

// const objeto3 = { objeto1 }
const objeto4 = { ...objeto1, ...objeto2 }
// console.log(objeto3)
console.log(objeto4)