# ZALLSTORE DIGITAL HUB

Aplikasi fullstack modern untuk marketplace akun premium dan jasa videografi/fotografi.

## Stack
- React + Vite
- TailwindCSS
- Framer Motion
- Node.js + Express
- Firebase Admin (siap dikonfigurasi)
- JWT sederhana

## Menjalankan lokal
```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## GitHub Pages / Publish
Kalau project dipublish ke GitHub Pages, **jangan publish source repo mentah** karena browser tidak bisa menjalankan file React/JSX dari `src/` secara langsung. Yang harus dipublish adalah hasil build `dist/`.

Perbaikan yang sudah ditambahkan di repo ini:
- `vite.config.js` memakai `base: './'` agar asset path aman saat dibuka dari subpath GitHub Pages.
- Workflow `.github/workflows/deploy-pages.yml` membuild project lalu meng-upload folder `dist` ke GitHub Pages.
- `public/.nojekyll` ditambahkan agar static asset tidak terganggu pipeline Jekyll default.

### Langkah publish yang benar
1. Push branch yang dipakai workflow.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih **GitHub Actions**.
4. Jalankan workflow deploy atau push commit baru.

## API
- `POST /api/register`
- `POST /api/login`
- `GET /api/products`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `POST /api/order`
- `GET /api/order/:userId`
- `GET /api/services`
