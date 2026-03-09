function Navbar({ cartCount }) {

  return (
    <header className="navbar">

      <div className="navbar-container">

        <h2 className="logo">
          FutWear
        </h2>

        <nav className="nav-links">
          <a>Home</a>
          <a>Coleção</a>
          <a>Contato</a>
        </nav>

        <div className="cart">
          Carrinho ({cartCount})
        </div>

      </div>

    </header>
  )
}

export default Navbar