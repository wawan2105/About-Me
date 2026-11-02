# Portofolio & CV Profesional — Wawan Saputra, S.Stat., M.Si.

Website portofolio dan CV profesional interaktif bilingual (**Bahasa Indonesia** dan **English**) untuk **Wawan Saputra, S.Stat., M.Si.**

**Positioning Utama:**
> **Statistician & Data Scientist | Statistical Modeling, Machine Learning, NLP | Applied Research & Education**

Dibangun menggunakan standar web modern tanpa framework berat: **HTML5**, **Tailwind CSS**, **Vanilla JavaScript**, dan **Lucide Icons**. Ringan, aksesibel, SEO-friendly, dan siap di-*deploy* langsung ke **Vercel**, **GitHub Pages**, atau **Netlify**.

---

## 🌟 Arsitektur & Fitur Utama

1. **Personal Branding & Hierarchy**:
   - **Primary Identity**: Statistician & Data Scientist
   - **Core Specializations**: Statistical Modeling, Machine Learning, Natural Language Processing, Applied Research
   - **Applied Domains**: Public Health, Food Security, Spatial Statistics, Official Statistics, Business Analytics
   - **Supporting Capabilities**: R, Python, SAS, Microsoft Excel, SQL / PostgreSQL, MongoDB, Git / GitHub, ETL workflows, Interactive Dashboards
   - **Academic Dimension**: Research, University Teaching, Scientific Publication, Knowledge Sharing

2. **Dukungan Dwibahasa Penuh (Bilingual ID / EN)**:
   - Alih bahasa instan (`ID` / `EN`) dengan persistensi `localStorage`.
   - Kamus translasi menyeluruh mencakup seluruh teks, modal proyek, lencana, formulir, dan tombol aksi.

3. **Taxonomy Proyek Terstruktur (5 Kategori)**:
   - **Machine Learning & NLP**:
     - *Multidomain Topic Modeling of Indonesian News Texts* (Tesis Magister BERTopic: 2,880 konfigurasi, IndoBERT, IndoSBERT, mBERT, mMPNet)
     - *Regional Food Insecurity Clustering* (Best Paper Official Statistics — ICDSO 2025 BPS)
     - *Fuzzy Gustafson-Kessel & PFCM for Stunting Profiling* (Skripsi S1 & Juara 1 Jambore Statistika XII Mulawarman)
   - **Statistical & Risk Modeling**:
     - *Adverse Selection & Beban Klaim JKN Berbasis Aktuaria Risiko Kolektif* (Juara 3 Nasional BPJS Actuarial Competition 2025)
   - **Spatial Analytics**:
     - *Clustering of Earthquake Areas on Sulawesi Island* (Top 15 Global Finalist SAS Curiosity Cup 2025)
     - *Spatial Analysis of Schistosomiasis & Web Dashboard* (Hibah PKM-RE Kemendikbud & Jurnal Terakreditasi 2022)
   - **Database & Data Engineering**:
     - *Supermarket Relational Database & Analytics System* (Relational ERD Modeling, SQL, ETL)
     - *MongoDB Aggregation Pipeline with R* (NoSQL Aggregation Documentation di RPubs)
   - **Dashboards**:
     - *Food Security Vulnerability Atlas (FSVA) Indonesia* (Live Interactive Shiny Dashboard)

4. **Robustness & UX Accessibility**:
   - **Accessible Theme Switcher**: Mengikuti preferensi sistem (`prefers-color-scheme`) untuk pengunjung baru dan mengingat pilihan di `localStorage`.
   - **Reduced Motion Support**: `@media (prefers-reduced-motion: reduce)` diimplementasikan pada seluruh animasi dan transisi.
   - **Keyboard Accessible**: Fokus `:focus-visible` dengan kontras tinggi serta pintasan Escape untuk menutup modal.
   - **Robust Clipboard**: Salin email dengan fallback otomatis ke `mailto:` jika Clipboard API dibatasi peramban.
   - **Print-to-PDF Friendly**: `@media print` rapi dengan menyembunyikan elemen navigasi, tema, dan formulir untuk menghasilkan dokumen CV formal yang bersih.

---

## 📁 Struktur Berkas

```
wawan-portfolio/
├── index.html        # Struktur HTML semantik, responsif, & bilingual (data-i18n)
├── styles.css        # CSS kustom, tipografi, grid background, glassmorphism, & print stylesheet
├── script.js         # Logika client-side: i18n, tema dinamis, filter proyek, modal, & fallback clipboard
└── README.md         # Dokumentasi teknis & panduan deployment Vercel
```

---

## 🚀 Panduan Menjalankan Secara Lokal

Cukup buka berkas `index.html` langsung di browser, atau gunakan server HTTP lokal:

```bash
# Menggunakan Python 3
python -m http.server 3000

# Atau menggunakan Live Server (jika menggunakan VS Code)
```

Akses di peramban: `http://localhost:3000`

---

## ☁️ Panduan Deploy ke Vercel (Production Ready)

Proyek ini merupakan situs statis murni tanpa langkah *build* yang rumit, sehingga deployment ke Vercel hanya membutuhkan waktu kurang dari 1 menit:

### Cara 1: Menggunakan Vercel CLI (Direkomendasikan)
```bash
# Pastikan berada di folder wawan-portfolio
cd C:\Users\Admin\.gemini\antigravity\scratch\wawan-portfolio

# Jalankan perintah vercel
npx vercel

# Ikuti petunjuk di terminal (pilih default untuk semua pertanyaan)
# Untuk production deploy:
npx vercel --prod
```

### Cara 2: Melalui Git & Vercel Dashboard
1. Hubungkan folder ini ke repositori GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: production-ready portfolio for Wawan Saputra"
   git branch -M main
   git remote add origin https://github.com/Awantara7/wawan-portfolio.git
   git push -u origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com/) > **Add New Project** > Impor repositori `wawan-portfolio`.
3. Klik tombol **Deploy**. Vercel akan otomatis menyajikan situs dengan CDN global, SSL otomatis, dan performa tinggi.
