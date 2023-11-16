import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProductDetailPage = () => {
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()

    const getFetch = async (pid) => {
        const result = await fetch(`http://localhost:8080/api/products/${pid}`)
        const data   = await result.json()
        setProduct(data.payload)
    }
    
    useEffect(()=>{
        getFetch(pid)
    },[])
    console.log(product)
    return (
        <div className="row">
            <div className="col-6">
                <img className="w-100" src={product.thumbnail} alt="img" />
            </div>
            <div className="col-6">
                <h2>{product.title}</h2>
                <h3>Descripción: {product.description}</h3>
                <h3>Precio: {product.price}</h3>
                <h3>Stock: {product.stock}</h3>
            </div>
        </div>
    )
}
