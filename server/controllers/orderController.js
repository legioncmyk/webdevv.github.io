import { store } from '../models/store.js'

export function createOrder(req, res) {
  const { userId, productId, status = 'pending' } = req.body
  if (!userId || !productId) return res.status(400).json({ message: 'userId dan productId wajib diisi' })
  const order = { id: `o${Date.now()}`, userId, productId, status, createdAt: new Date().toISOString() }
  store.orders.push(order)
  res.status(201).json(order)
}

export function getOrdersByUser(req, res) {
  res.json(store.orders.filter((order) => order.userId === req.params.userId))
}
