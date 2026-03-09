import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./styles.css"

function App() {

  const [cart, setCart] = useState([])

  function handleAddToCart(product) {
    setCart((c) => [...c, product])
  }

  return (
    <div className="app">

      <Navbar cartCount={cart.length} />

      <main className="main">
        <Home onAddToCart={handleAddToCart} />
      </main>

    </div>
  )
}

export default App