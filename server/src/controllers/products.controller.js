// In-memory products store (temporary)
const products = []
let nextId = 1

function getAllProducts(req, res) {
  res.json(products)
}

function getProductById(req, res) {
  const id = Number(req.params.id)
  const product = products.find((p) => p.id === id)
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.json(product)
}

function createProduct(req, res) {
  const { name, description = '', price } = req.body
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data. Require `name` and numeric `price`.' })
  }

  const product = {
    id: nextId++,
    name,
    description,
    price,
    createdAt: new Date().toISOString(),
  }
  products.push(product)
  res.status(201).json(product)
}

function updateProduct(req, res) {
  const id = Number(req.params.id)
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' })
  }

  const { name, description, price } = req.body
  if (price !== undefined && typeof price !== 'number') {
    return res.status(400).json({ error: '`price` must be a number' })
  }

  const existing = products[index]
  const updated = Object.assign({}, existing, {
    name: name !== undefined ? name : existing.name,
    description: description !== undefined ? description : existing.description,
    price: price !== undefined ? price : existing.price,
    updatedAt: new Date().toISOString(),
  })

  products[index] = updated
  res.json(updated)
}

function deleteProduct(req, res) {
  const id = Number(req.params.id)
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' })
  }
  products.splice(index, 1)
  res.status(204).send()
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
