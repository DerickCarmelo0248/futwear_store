function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">R$ {product.price}</p>
      <button
        className="button-primary"
        onClick={() => onAddToCart(product)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default ProductCard