console.log('real')
const socket = io()

socket.on('products', dataProducts => {
    console.log(dataProducts)
})

const formProduct = document.querySelector('#form-product')

const handleOnSubmit = evt => {
    evt.preventDefault()

    socket.emit('addProduct', {
        title: formProduct.elements.title.value,
        description: formProduct.elements.description.value,
        stock: formProduct.elements.stock.value,
        price: formProduct.elements.price.value,
        code: formProduct.elements.code.value
    })
    formProduct.reset()
}

formProduct.addEventListener('submit', handleOnSubmit)