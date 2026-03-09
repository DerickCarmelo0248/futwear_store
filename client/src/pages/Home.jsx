import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home({ onAddToCart }) {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <h1>
            As Melhores Camisas do Futebol Mundial
          </h1>

          <p>
            Camisas premium para torcedores apaixonados.
            Qualidade, tradição e estilo em cada detalhe.
          </p>

          <button className="cta-button">
            Ver Coleção
          </button>

        </div>

      </section>

      <section className="products-section">

       <h2 className="products-title">
Camisas Disponíveis
</h2>

        <div className="products-grid">

          {products.map(product => (

            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />

          ))}

        </div>

      </section>

    </>
  )
}

export default Home