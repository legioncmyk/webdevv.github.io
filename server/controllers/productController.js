import { store } from '../models/store.js'

export function getProducts(_req, res) {
  res.json(store.products)
}

export function createProduct(req, res) {
  const product = { id: `p${Date.now()}`, ...req.body }
  store.products.push(product)
  res.status(201).json(product)
}

export function updateProduct(req, res) {
  const index = store.products.findIndex((item) => item.id === req.params.id)
  if (index === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' })
  store.products[index] = { ...store.products[index], ...req.body }
  res.json(store.products[index])
}

export function deleteProduct(req, res) {
  const index = store.products.findIndex((item) => item.id === req.params.id)
  if (index === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' })
  const [deleted] = store.products.splice(index, 1)
  res.json(deleted)
}
