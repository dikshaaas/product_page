import type { Product } from "../data/products"
import ProductCard from "./ProductCard"

interface ProductListProps {
  products: Product[]
  onAddToCart: () => void
  onSelectProduct: (product: Product) => void
}

function ProductList({
  products,
  onAddToCart,
  onSelectProduct,
}: ProductListProps) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onSelect={onSelectProduct}
        />
      ))}
    </section>
  )
}

export default ProductList
