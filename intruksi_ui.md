<!-- @format -->

Role: Senior Frontend Engineer & UI/UX Specialist
Task: Buatkan frontend UI katalog website jual beli motor bernama "MotorKu" yang modern, clean, dan 100% responsif (Desktop & Mobile) sesuai referensi desain yang diberikan.
Prinsip Arsitektur: Gunakan metodologi ATOMIC DESIGN (Atoms, Molecules, Organisms, Templates, Pages).
Tech Stack: React / Next.js (App Router), TypeScript, Tailwind CSS, Lucide React Icons. (Hanya UI / Client-side mock state, tidak memerlukan backend).

---

### 1. DESIGN TOKENS & STYLING

Gunakan token warna dan styling berikut:

- **Primary Blue**: `#2563EB` (hover: `#1D4ED8`)
- **Accent Red**: `#FF5858` / `#EF4444` (Badge Baru / Promo)
- **Success Green**: `#10B981` (WhatsApp: `#25D366`)
- **Warning Yellow**: `#F59E0B` (Rating stars)
- **Neutral Dark**: `#1F2937` (Teks judul & body utama)
- **Neutral Gray**: `#6B7280` (Muted text / subtitle)
- **Border Gray**: `#E5E7EB` / `#D1D5DB`
- **Background Light**: `#F9FAFB` / `#F3F4F6`
- **Typography**: Inter atau Plus Jakarta Sans, rounded-xl untuk card & buttons.

---

### 2. STRUKTUR ATOMIC DESIGN

#### A. ATOMS (`components/atoms/`)

1. **Typography**: Headings (H1, H2, H3), Subtitle, Text, PriceTag (format mata uang IDR).
2. **Button**:
   - `PrimaryButton` (Solid blue `#2563EB`)
   - `SecondaryButton` (Outline / ghost blue)
   - `WhatsAppButton` (Hijau WhatsApp `#25D366` + ikon WA)
   - `DangerButton` / `GhostButton`
3. **Badge**:
   - Status: "Baru" (Merah), "Bekas" (Biru tua), "Tersedia" (Hijau muda), "Promo", "Terjual"
4. **Input & Select**:
   - `SearchInput` (dengan icon search di kiri)
   - `SelectDropdown` (untuk filter Merk, Tipe, Urutan)
   - `Checkbox` (untuk list filter brand)
   - `RangeSlider` (untuk filter harga Rp 0 - Rp 100.000.000)
5. **Icon**: Motor, Search, WhatsApp, MapPin, Home, Filter, Star, Calendar, User, Phone, Instagram, TikTok, YouTube, ChevronLeft, ChevronRight, Share2, Heart.
6. **Avatar**: Lingkaran foto user dengan fallbacks.

#### B. MOLECULES (`components/molecules/`)

1. **SearchBarGroup**: Kombinasi Search input + Dropdown Merek + Dropdown Tipe + Dropdown Rentang Harga + Tombol "Cari".
2. **CategoryCard**: Card ikon kategori berbentuk pill/rounded box dengan ikon motor dan label teks (Matic, Sport, Underbone, Classic, Adventure, Motor Listrik).
3. **MotorSpecItem**: Ikon kecil + teks spesifikasi singkat (misal: "2022", "8.200 km", "Matic").
4. **PriceDisplay**: Format harga tebal merah/biru ("Rp 23.500.000") beserta badge status ketersediaan.
5. **RatingStars**: Tampilan 5 bintang kuning untuk review.
6. **TestimonialCard**: Card berisi avatar pelanggan, nama, rating bintang, review teks, dan waktu ("2 minggu lalu").
7. **Breadcrumb**: Navigasi hirarki (misal: Beranda > Katalog > Honda Vario 160).
8. **Pagination**: Navigasi halaman dengan tombol prev, nomor halaman (1, 2, 3, 5), dan next.
9. **SocialLinkGroup**: Grup icon medsos (Instagram, TikTok, WhatsApp).
10. **ContactCard**: Card info kontak WhatsApp, Telepon, Instagram, TikTok dengan aksi klik.

#### C. ORGANISMS (`components/organisms/`)

1. **Navbar (Desktop)**:
   - Logo MotorKu + tagline "Jual Beli Motor".
   - Menu: Beranda, Katalog, Tentang Kami, Testimoni, Kontak.
   - Quick Search input kecil.
   - Icon media sosial & WhatsApp button.
2. **MobileBottomNav**:
   - Sticky bottom navigation bar khusus mobile layar < 768px (Beranda, Katalog, Favorit, Akun/Profil).
3. **HeroSection**:
   - Heading "Motor Impianmu Ada di Sini!", subteks promosi.
   - Banner showcase motor.
   - Floating Card "Quick Filter Box" di bagian bawah hero.
4. **CategorySection**:
   - Header "Kategori Motor" + link "Lihat Semua".
   - Horizontal slider di mobile, 6-col grid di desktop.
5. **MotorCard**:
   - Foto motor dengan badge ("Baru"/"Bekas") & tombol wishlist (Heart icon).
   - Judul motor ("Honda Vario 160 2022").
   - Spec ringkas (Tahun, Odometer, Transmisi).
   - Harga ("Rp 23.500.000").
   - Tombol CTA "Lihat Detail ->".
6. **MotorCardGrid**: Grid 4 kolom (desktop) / 2 kolom (mobile) menampilkan kartu-kartu motor.
7. **FilterSidebar (Katalog)**:
   - Reset button.
   - Filter Checklist Merek (Honda, Yamaha, Suzuki, Kawasaki, TVS, Lainnya).
   - Filter Tipe Motor (Matic, Sport, Underbone, Classic, Adventure, Motor Listrik).
   - Filter Tahun & Slider Rentang Harga.
   - Tombol "Terapkan Filter".
   - Di mobile: Tampilkan sebagai collapsible filter drawer / filter modal.
8. **PromoBannerSection**:
   - Card banner "Tukar Tambah Motor Jadi Lebih Mudah!" dengan CTA "Info Tukar Tambah".
   - Section "Kenapa Pilih Kami?" (4 poin benefit: Unit Berkualitas, Harga Transparan, Pelayanan Ramah, Garansi Pembelian).
9. **DetailGallery**:
   - Slider foto utama motor + thumbnail navigator di bawahnya + tombol panah left/right.
10. **DetailInfo & CTA Box**:
    - Judul unit, badge status ("Bekas", "Tersedia").
    - Harga besar.
    - Keunggulan badge (Garansi Mesin, Dokumen Lengkap, Siap Pakai).
    - Tombol action: "Hubungi via WhatsApp", "Tanya Unit", "Simpan", "Bagikan".
11. **DetailTabsSection**:
    - Tab switcher: [Spesifikasi | Kondisi | Dokumen | Video].
    - List tabel spesifikasi lengkap (Merek, Tipe, Tahun, Kilometer, Transmisi, Warna).
    - Blok deskripsi & poin-poin keunggulan unit.
12. **Footer**:
    - Logo MotorKu, alamat fisik showroom, jam operasional, no telepon.
    - Quick links, form newsletter "Dapatkan update motor terbaru!", copyright bar.

#### D. TEMPLATES (`components/templates/`)

1. **MainLayout**:
   - Berisi Navbar desktop, konten utama (`children`), Footer, serta MobileBottomNav (sticky di bawah layar HP).
2. **CatalogLayout**:
   - Layout 2 kolom: Sidebar Filter di kiri (Desktop) dan Hasil Pencarian/Grid Motor di kanan, plus top sorting bar ("Menampilkan 24 motor", Sort by: Terbaru, Grid/List toggle).

#### E. PAGES / VIEWS (`app/` atau `views/`)

Sediakan navigasi atau switch antar 3 tampilan utama:

1. **Homepage (`/`)**:
   - Hero Section dengan search bar.
   - Kategori Motor.
   - Rekomendasi Unit Terbaik (Grid 4 motor).
   - Banner Tukar Tambah & "Kenapa Pilih Kami?".
   - Testimoni Pelanggan.
2. **Katalog Page (`/katalog`)**:
   - Header banner "Katalog Motor".
   - Breadcrumb.
   - CatalogLayout (Filter Sidebar + Grid 6-9 motor + Pagination).
   - Banner CTA "Mau Jual Motor Kamu?".
3. **Detail Motor Page (`/katalog/[id]`)**:
   - Breadcrumb detail motor.
   - Section 2 kolom: Gallery slider di kiri, info & WhatsApp CTA di kanan.
   - Tab detail (Spesifikasi, Kondisi, Dokumen, Video).
   - Sticky WhatsApp bar di layar mobile.
4. **Hubungi Kami Modal / View**:
   - Modal pop-up kontak berisi list WhatsApp, Telepon, Instagram, TikTok, dan Lokasi Showroom Google Maps preview.

---

### 3. PERSYARATAN RESPONSIVITAS (MOBILE-FIRST)

- **Desktop (≥ 1024px)**: Layout multi-kolom penuh, sidebar filter terlihat permanen, navbar lengkap di atas.
- **Tablet (768px - 1023px)**: Grid menyesuaikan 2-3 kolom, sidebar filter dapat ditoggle atau accordion.
- **Mobile (< 768px)**:
  - Navbar ringkas dengan hamburger / langsung search.
  - Floating sticky bottom nav dengan 4 tab: Beranda, Katalog, Favorit, Akun.
  - Kategori motor berupa horizontal swipeable carousel.
  - Motor Card tampil responsif 2 kolom rapi.
  - Pada halaman detail, tombol "Chat WhatsApp" menempel sticky di bottom bar mobile agar mudah dihubungi kapan saja.

---

### 4. DUMMY DATA YANG DIGUNAKAN

Gunakan mock data sesuai gambar referensi:

- Honda Beat Street 2022 - Bekas - 12.500 km - Matic - Rp 14.500.000
- Yamaha R15 V4 2024 - Baru - 0 km - Sport - Rp 35.900.000
- Honda Vario 160 2022 - Bekas - 8.200 km - Matic - Rp 23.500.000
- Kawasaki KLX 150 2023 - Baru - 0 km - Adventure - Rp 25.500.000
- Yamaha NMAX 155 - Bekas - 9.120 km - Matic - Rp 26.500.000
- Honda Scoopy - Baru - 0 km - Matic - Rp 16.500.000

Mohon buat kode yang rapi, modular, berikan type definition TypeScript lengkap, dan terpisah per file sesuai struktur Atomic Design di atas.
