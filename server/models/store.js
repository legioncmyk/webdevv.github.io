export const store = {
  users: [
    { id: 'u1', username: 'demo', email: 'demo@zallstore.id', password: 'demo123', createdAt: new Date().toISOString() }
  ],
  products: [
    { id: 'p1', name: 'Canva Pro', price: 25000, category: 'Editing', status: 'ready', image: '🎨' },
    { id: 'p2', name: 'Spotify Premium', price: 22000, category: 'Musik', status: 'ready', image: '🎵' },
    { id: 'p3', name: 'Prime Video', price: 18000, category: 'Streaming', status: 'sold', image: '🎬' }
  ],
  orders: [],
  services: [
    { id: 's1', type: 'video', name: 'Pelajar', price: 299000, description: 'Aftermovie acara sekolah dan reels cinematic.' },
    { id: 's2', type: 'video', name: 'Event', price: 899000, description: 'Event coverage dengan edit highlight premium.' },
    { id: 's3', type: 'photo', name: 'Editorial Shoot', price: 650000, description: 'Portrait & product shoot aesthetic.' }
  ]
}
