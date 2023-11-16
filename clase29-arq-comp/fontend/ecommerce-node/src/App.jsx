import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductDetailPage } from './pages/ProductDetailPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <ProductsPage /> } />
        <Route path='/detalle/:pid' element={ <ProductDetailPage /> } />
           

      </Routes>
    </Router>
  )
}

export default App
