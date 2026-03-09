const express = require("express")
const cors = require("cors")

const productsRoutes = require("./routes/products.routes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "API FutWear running 🚀" })
})

app.use("/products", productsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})