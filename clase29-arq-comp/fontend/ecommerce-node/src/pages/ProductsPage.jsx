import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// componente contenedor
export const ProductsPage = () => {
    const [products, setProducts] = useState([])
    // lamada a las api
    const getFetch= async () => {
        const result = await fetch('http://localhost:8080/api/products')
        const data   = await result.json()
        setProducts(data.payload)
    }

    useEffect(()=> {
        getFetch()
    }, [])
    console.log(products)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {
                products.map(product => <div key={product._id} className=" card w-25">
                    <Link to={`/detalle/${product._id}`} >
                        <img className="card-img-top w-100" src={product.thumbnail} alt="imagen" />

                    </Link>
                    <div className="card-body">
                        <label>Descripción: {product.description}</label>
                        <label>precio: {product.price}</label>
                        <label>stock : {product.stock}</label>
                    </div>
                </div>)
            }
        </div>
    )
}
// vista (handlebars - react)