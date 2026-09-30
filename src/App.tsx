import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import { products, type Product } from "./data/products"
import "./App.css"

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
setSelectedProduct
  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1)
  }

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="container">
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : (
          <>
            <div className="filters">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onSelectProduct={setSelectedProduct}
            />
          </>
        )}
      </main>
    </>
  )
}

export default App
