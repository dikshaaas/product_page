interface NavbarProps {
  cartCount: number
}

function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1>Product Store</h1>
      <span>Cart: {cartCount}</span>
    </nav>
  )
}

export default Navbar
