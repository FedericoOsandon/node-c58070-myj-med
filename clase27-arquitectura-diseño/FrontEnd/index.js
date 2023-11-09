console.log('bienvenido a index.js')

const peticionData = async () => {
    const result = await fetch('http://localhost:8080/api/products/')
    const data   = await result.json()
    console.log(data.payload.docs) 
}

peticionData()