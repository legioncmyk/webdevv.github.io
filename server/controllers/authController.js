import jwt from 'jsonwebtoken'
import { store } from '../models/store.js'

export function register(req, res) {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'username, email, dan password wajib diisi' })
  }
  if (store.users.find((user) => user.email === email || user.username === username)) {
    return res.status(409).json({ message: 'User sudah terdaftar' })
  }

  const user = { id: `u${Date.now()}`, username, email, password, createdAt: new Date().toISOString() }
  store.users.push(user)
  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'zallstore-secret', { expiresIn: '7d' })
  return res.status(201).json({ token, user: { id: user.id, username, email } })
}

export function login(req, res) {
  const { identifier, password } = req.body
  const user = store.users.find((item) => (item.email === identifier || item.username === identifier) && item.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Login gagal' })
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'zallstore-secret', { expiresIn: '7d' })
  return res.json({ token, user: { id: user.id, username: user.username, email: user.email } })
}
