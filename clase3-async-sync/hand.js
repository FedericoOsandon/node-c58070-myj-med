const suma = (num1, num2)=> new Promise((res, rej)=>{
    if (num1 === 0 || num2 === 0) rej('operación innecesária')
    if ((num1 + num2) <0 ) rej('La calc. solo devuelve numeros positivos')
    res(num1+num2)
})
const div = (num1, num2)=> new Promise((res, rej)=>{
    if ( num2 === 0) rej('no se puede dividir por cero')    
    res(num1/num2)
})


const calcular = async ()=>{
    try {
        let num1 = 3
        let num2 = 6
        let resltSuma = await suma(num1, num2)
        console.log(resltSuma)
        
        let resultDiv = await div(num1,num2)
        console.log(resultDiv)

    } catch (error) {
        console.log(error)
    }
}

calcular()