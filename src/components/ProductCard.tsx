import type { Product } from "../data/products"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
  onSelect: (product: Product) => void
}

function ProductCard({
  product,
  onAddToCart,
  onSelect,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => onSelect(product)}
      />
      <div className="product-content">
        <p className="category">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </article>
  )
}

export default ProductCard
