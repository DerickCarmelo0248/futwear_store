import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      <div className="hero">
        <h1>As Melhores Camisas do Futebol Mundial</h1>
        <p>Qualidade premium. Estilo. Tradição.</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Home