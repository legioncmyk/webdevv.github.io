import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import { getFirebaseDb } from './config/firebase.js'

dotenv.config()
getFirebaseDb()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, app: 'ZALLSTORE DIGITAL HUB API' })
})

app.use('/api', authRoutes)
app.use('/api', productRoutes)
app.use('/api', orderRoutes)
app.use('/api', serviceRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
