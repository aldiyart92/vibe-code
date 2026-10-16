# 🚀 Project Setup: Bun + ElysiaJS + Drizzle + MySQL

## Objective
Inisialisasi project backend API baru di folder ini menggunakan **Bun** sebagai runtime, **ElysiaJS** sebagai framework HTTP, **Drizzle ORM** untuk database layer, dan **MySQL** sebagai database.

---

## Phase 1: Project Initialization

- Inisialisasi project Bun baru (`bun init`)
- Install dependencies utama:
  - `elysia` — HTTP framework
  - `drizzle-orm` — ORM
  - `drizzle-kit` — CLI tool untuk migration & schema management
  - `mysql2` — MySQL driver untuk Node/Bun
- Install dev dependencies:
  - `typescript`
  - `@types/bun`
- Setup `tsconfig.json` yang kompatibel dengan Bun & Drizzle
- Setup scripts di `package.json`:
  - `dev` — jalankan server dalam mode development
  - `db:generate` — generate migration dari schema
  - `db:migrate` — jalankan migration ke database
  - `db:studio` — buka Drizzle Studio untuk inspeksi database

---

## Phase 2: Project Structure

Buat struktur folder sebagai berikut:

```
src/
├── index.ts          # Entry point, setup Elysia server
├── db/
│   ├── index.ts      # Koneksi database (mysql2 + drizzle)
│   └── schema.ts     # Definisi schema/tabel Drizzle
├── routes/
│   └── index.ts      # Grouping & registrasi semua route
└── config/
    └── env.ts        # Environment variables & config
drizzle.config.ts     # Konfigurasi Drizzle Kit
.env                  # Environment variables (DB credentials, port, dll)
```

---

## Phase 3: Database Setup

- Buat file konfigurasi koneksi MySQL menggunakan `mysql2` pool connection
- Setup Drizzle ORM dengan MySQL dialect
- Buat `drizzle.config.ts` yang mengarah ke folder schema dan migration
- Buat minimal 1 contoh tabel di `schema.ts` (misal: `users`) untuk memvalidasi setup berjalan
- Pastikan `drizzle-kit generate` dan `drizzle-kit migrate` bisa dijalankan tanpa error

---

## Phase 4: Elysia Server Setup

- Buat Elysia instance di `src/index.ts`
- Setup basic route `GET /` yang mengembalikan health check response
- Setup route `GET /users` yang query data dari tabel `users` via Drizzle sebagai proof of concept
- Gunakan plugin/middleware bawaan Elysia jika perlu (cors, logger, dll)
- Server listen di port dari environment variable (default: `3000`)

---

## Phase 5: Environment & Config

- Buat file `.env.example` sebagai template:
  ```
  DATABASE_HOST=localhost
  DATABASE_PORT=3306
  DATABASE_USER=root
  DATABASE_PASSWORD=
  DATABASE_NAME=vibe_code
  PORT=3000
  ```
- Buat utility `config/env.ts` untuk membaca dan memvalidasi env variables
- Tambahkan `.env` ke `.gitignore`

---

## Phase 6: Validasi & Testing

- Pastikan `bun run dev` menjalankan server tanpa error
- Pastikan `drizzle-kit generate` menghasilkan migration files
- Pastikan endpoint `GET /` merespons dengan benar
- Pastikan koneksi ke MySQL berhasil (bisa dicek via log saat startup)

---

## Notes

- **Jangan** buat unit test, cukup pastikan server bisa jalan
- **Jangan** setup Docker, asumsikan MySQL sudah tersedia lokal
- **Jangan** implementasi auth/middleware kompleks, fokus di fondasi project
- Gunakan ESM (`"type": "module"`) karena Bun mendukungnya secara native
