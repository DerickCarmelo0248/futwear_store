import { useState } from "react"
import "./styles.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(product) {
    setCart((c) => [...c, product])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Home onAddToCart={handleAddToCart} />
    </>
  )
}

export default App