import { store } from '../models/store.js'

export function getServices(_req, res) {
  res.json(store.services)
}
