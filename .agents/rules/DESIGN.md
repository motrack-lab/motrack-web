---
trigger: always_on
---

# DESIGN SYSTEM — MoTrack Web
> Stack: React + Vite + Tailwind CSS
> Prinsip: **Clean, minimal, profesional.** Bukan playful/gamified.
> ⚠️ **Card Paket Website & Copywriting JANGAN diubah strukturnya** — hanya ganti token warna di dalamnya.

---

## 1. Palet Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `brand-darkest` | `#1A3A6B` | Footer bg, heading gelap |
| `brand-dark`    | `#2C5EAD` | Navbar bg, CTA hover |
| `brand`         | `#1591DC` | Tombol utama, link aktif |
| `brand-light`   | `#4BB8FA` | Highlight, badge |
| `brand-lighter` | `#C4E2F5` | Card tint, border subtle |
| `brand-lightest`| `#EBF5FD` | Section bg alternatif |

Netral: `neutral-900 #111827` (teks utama) · `neutral-500 #6B7280` (teks muted) · `neutral-200 #E5E7EB` (border) · `white`

Semantik: `success #10B981` · `warning #F59E0B` · `danger #EF4444`

**Aturan:** tidak ada hardcode hex di JSX. Semua warna lewat token Tailwind `brand-*` atau `src/constants/theme.js`.

---

## 2. Tailwind Config

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest:  '#1A3A6B',
          dark:     '#2C5EAD',
          DEFAULT:  '#1591DC',
          light:    '#4BB8FA',
          lighter:  '#C4E2F5',
          lightest: '#EBF5FD',
        },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 3px 0 rgba(21,145,220,0.08), 0 1px 2px -1px rgba(21,145,220,0.08)',
        'card-hover': '0 4px 16px 0 rgba(21,145,220,0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2C5EAD 0%, #1591DC 100%)',
      },
    },
  },
}
```

> Catatan gaya: shadow dibuat **tipis & subtle** (bukan dramatis) supaya kesan clean tetap terjaga. Hindari `scale-[1.02]` atau efek besar di pricing card.

---

## 3. index.css — Component Classes

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body { @apply font-sans text-neutral-900 bg-white antialiased; }
  h1, h2, h3, h4 { @apply font-bold tracking-tight; }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2
           bg-brand text-white font-semibold px-6 py-3 rounded-lg
           hover:bg-brand-dark transition-colors duration-200;
  }
  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2
           border border-brand text-brand font-semibold px-6 py-3 rounded-lg
           hover:bg-brand-lightest transition-colors duration-200;
  }
  .card {
    @apply bg-white rounded-xl p-6 border border-neutral-200
           shadow-card hover:shadow-card-hover transition-shadow duration-200;
  }
  .badge {
    @apply inline-flex items-center gap-1.5 text-xs font-semibold
           px-3 py-1 rounded-full bg-brand-lighter text-brand-dark;
  }
  .section { @apply py-16 md:py-24 px-4; }
  .container-main { @apply max-w-6xl mx-auto; }
  .section-heading { @apply text-3xl md:text-4xl font-bold text-center mb-3; }
  .section-subheading { @apply text-base text-neutral-500 text-center max-w-2xl mx-auto mb-12; }
}
```

---

## 4. Mapping Warna Lama → Baru

| Lama | Ganti dengan |
|---|---|
| `bg-blue-600/700` | `bg-brand-dark` |
| `bg-blue-400/500` | `bg-brand` |
| `bg-blue-50/100` | `bg-brand-lightest` |
| `text-blue-600/700` | `text-brand-dark` |
| `text-blue-500` | `text-brand` |
| `border-blue-500` | `border-brand` |
| Inline `style={{color:'#..'}}` | hapus → class Tailwind |

---

## 5. Tipografi & Responsive

```
H1 : text-4xl md:text-5xl lg:text-6xl font-bold   → Hero
H2 : text-3xl md:text-4xl font-bold               → Section title
H3 : text-lg md:text-xl font-semibold             → Card title
Body : text-base text-neutral-700
Small: text-sm text-neutral-500
```

Breakpoint Tailwind default, **mobile-first**:
```
sm 640px · md 768px · lg 1024px · xl 1280px
```

```jsx
// Card grid pola standar
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// Hero pola standar
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
```

---

## 6. Navbar (clean, sticky)

```jsx
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-200
      ${scrolled ? 'bg-white shadow-sm' : 'bg-white/0'}`}>
      <div className="container-main flex items-center justify-between px-4 py-4">
        <img src="/logo.png" alt="MoTrack" className="h-7" />

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-secondary text-sm px-4 py-2">Hubungi Kami</a>
          <a href="#packages" className="btn-primary text-sm px-4 py-2">Lihat Paket</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-brand-dark">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="py-1.5 text-neutral-700">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};
```

---

## 7. Hero Section (clean — bukan gradient ramai)

> Versi clean: background **putih atau brand-lightest**, bukan gradient solid penuh layar.
> Gradient hanya dipakai tipis sebagai aksen, bukan dominan.

```jsx
<section className="bg-brand-lightest pt-28 pb-16 md:pt-36 md:pb-24">
  <div className="container-main px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    <div className="text-center md:text-left">
      <span className="badge mb-5 inline-flex">Solusi Kreatif Digital</span>

      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-5">
        Selamat Datang di <span className="text-brand-dark">MoTrack</span>
      </h1>

      <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-lg mx-auto md:mx-0">
        Kami menyediakan layanan terbaik siap membantu bisnis dan personal
        membangun kehadiran online yang kuat, cepat, dan elegan.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <a href="#services" className="btn-primary">Lihat Layanan Kami</a>
        <a href="#work" className="btn-secondary">Pelajari Cara Kerja</a>
      </div>
    </div>

    <div className="flex justify-center">
      <img src={robotIllustration} alt="MoTrack" className="w-64 md:w-full max-w-md" />
    </div>
  </div>
</section>
```

---

## 8. Service Card

```jsx
const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <div className="card group">
    <div className="w-11 h-11 rounded-lg bg-brand-lightest flex items-center justify-center mb-4
                    group-hover:bg-brand transition-colors duration-200">
      <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
    <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{description}</p>
    <a href={link} className="text-brand text-sm font-medium hover:underline">Hubungi Kami →</a>
  </div>
);
```

---

## 9. ⚠️ Pricing Card — HANYA Ganti Warna, Struktur TETAP

Card "Paket Website" dan "Copywriting" yang sekarang **strukturnya dipertahankan persis**
(badge di pojok, harga besar, list fitur dengan centang, tombol di bawah).
Yang berubah **hanya warnanya**, sesuai mapping berikut:

| Elemen di card sekarang | Warna baru |
|---|---|
| Badge "BEST VALUE" / "PILIHAN UMUM" dll | `bg-brand` text putih (badge biasa) atau `bg-warning` khusus utk "Best Value" |
| Border card biasa | `border-neutral-200` |
| Border card featured (kalau ada) | `border-brand` |
| Harga (angka besar) | `text-brand-dark` |
| Icon centang fitur | `text-success` (tetap hijau, jangan diganti biru) |
| Tombol "Pesan Sekarang" | `btn-primary` (bg-brand) |
| Tombol "Konsultasi Proyek" (card ke-4/khusus) | `btn-secondary` |

```jsx
// Contoh — HANYA bagian class warna yang disentuh, layout & urutan elemen TETAP SAMA persis seperti sekarang
<div className="card relative">
  {badge && (
    <span className="badge absolute -top-3 left-4">{badge}</span>
  )}

  <h3 className="text-base font-semibold text-neutral-900 mb-1">{title}</h3>
  <p className="text-xs text-neutral-500 mb-4">{description}</p>

  <div className="mb-1 text-xs text-neutral-500">MULAI DARI</div>
  <div className="text-2xl font-bold text-brand-dark mb-4">{price}</div>

  <a href="#contact" className="btn-primary w-full text-sm mb-5">Pesan Sekarang</a>

  <div className="text-xs font-semibold text-neutral-500 mb-2">APA SAJA YANG DIDAPAT?</div>
  <ul className="flex flex-col gap-2">
    {features.map((f, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
        <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
        {f}
      </li>
    ))}
  </ul>
</div>
```

**Jangan tambahkan:** scale hover besar, shadow dramatis, gradient di background card, badge baru yang tidak ada di desain asli.

---

## 10. Footer

```jsx
<footer className="bg-brand-darkest text-white">
  <div className="container-main px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="sm:col-span-2 lg:col-span-1">
      <img src="/logo.png" className="h-7 mb-4 brightness-0 invert" />
      <p className="text-blue-200 text-sm leading-relaxed">
        Platform manajemen proyek masa depan.
      </p>
    </div>
    {FOOTER_LINKS.map(col => (
      <div key={col.title}>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-4">
          {col.title}
        </h4>
        <ul className="flex flex-col gap-2 text-sm text-blue-200">
          {col.links.map(l => (
            <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  <div className="border-t border-brand-dark py-5 text-center text-xs text-blue-300">
    © 2025 MoTrack. All rights reserved.
  </div>
</footer>
```

---

## 11. Urutan Refactor

```
1. tailwind.config.js  → tambah token brand
2. src/index.css       → component classes
3. src/constants/theme.js
4. Navbar + Footer
5. Hero, Solution, Services section
6. Pricing cards — GANTI WARNA SAJA, struktur tetap
7. Test responsive: 375px / 768px / 1280px
```

---

## 12. Aturan Konsistensi

1. Tidak ada hardcode hex di JSX
2. Mobile-first
3. Shadow & hover **subtle**, bukan dramatis — ini kunci kesan "clean"
4. Card pricing: hanya warna yang berubah, JSX/layout tidak disentuh
5. Spacing kelipatan 4 (`p-4`, `gap-6`, `py-8`)
6. Transition selalu pakai `duration-200`, hindari animasi besar/playful