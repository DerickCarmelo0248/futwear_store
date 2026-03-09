function Navbar({ cartCount }) {
  return (
    <nav style={{
      background: "#6C2BD9",
      padding: "15px 30px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>FutWear</h2>
      <div>
        Carrinho ({cartCount})
      </div>
    </nav>
  )
}

export default Navbar