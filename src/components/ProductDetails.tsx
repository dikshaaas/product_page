import type { Product } from "../data/products"

interface ProductDetailsProps {
  product: Product
  onBack: () => void
}

function ProductDetails({ product, onBack }: ProductDetailsProps) {
  return (
    <section className="product-details">
      <button onClick={onBack}>Back to Products</button>
      <img src={product.image} alt={product.name} />
      <p className="category">{product.category}</p>
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
    </section>
  )
}

export default ProductDetails
