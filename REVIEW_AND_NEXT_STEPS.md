# Autocratic Management Services Private Limited
## Brand Color System & Technical Review Guide

### 🎨 The Signature Brand Color System: "Sovereign Navy & Cognac Amber"

Following your feedback and reviewing the screenshots, the visual system has been anchored to a distinctive, institutional color palette that prevents washed-out white-on-white rendering:

1. **Primary Anchor Brand Color — Sovereign Navy (`#0B1E36` to `#060E1A`)**:
   - Used for the Hero, Top Navigation, Credibility Bar, and Footer.
   - Provides deep, authoritative grounding appropriate for an institutional risk investigation firm.
2. **Warm Trust Accent — Burnished Cognac Amber (`#E07E24` / `#F09A43` / `#C56517`)**:
   - Replaces neon yellows and generic blues.
   - Used purposefully for primary CTA buttons, highlighted terms in headlines, and active status indicators.
3. **Content Background — High-Contrast Architectural Porcelain (`#FFFFFF` and `#F8FAFC`)**:
   - Clean, crisp, and readable for service grids, district search, leadership bios, and contact forms.
   - All headings on light backgrounds are rendered in Deep Sovereign Navy (`#060E1A`) with slate body text (`#334155`), ensuring maximum legibility.

---

### 🔍 Root Cause of the Previous Issue & Fix Implemented

- **What happened in the screenshots**:
  In the previous turn, custom color keys were added to `tailwind.config.js` while the Vite dev server was already running. The dev server's build cache did not reload the updated config, causing those background classes to be omitted from the runtime stylesheet. As a result, elements defaulted to transparent/white, causing white text to render on a white background.
- **Permanent Fix**:
  1. Configured standard brand palette (`brand-950`, `brand-900`, `brand-850`, `accent-500`, etc.) in `tailwind.config.js`.
  2. Added explicit CSS class fallbacks in `src/index.css` to guarantee that colors render across all browsers and dev environments.
  3. Rebuilt the production assets and restarted the Vite dev server.

---

### 📍 Verified Corporate Data

| Attribute | Verified Value on Website | Location in Code |
| :--- | :--- | :--- |
| **Official Name** | Autocratic Management Services Private Limited | Header, Hero, Footer, About |
| **Corporate ID (CIN)** | `U74999UP2018PTC110338` | Ticker, About, Footer, Trust badges |
| **ROC Registration** | ROC Kanpur | Header, About, Footer |
| **Date of Incorporation** | November 15, 2018 (7+ Years Operations) | Hero, About, Footer |
| **Scale & Growth** | Approx ₹93.4 Lakh annual revenue (FY 2025) | Hero stats, About, Leadership |
| **Capital Structure** | ₹10 Lakh Authorized / ₹1 Lakh Paid-up | About section, Footer |
| **Directors** | Radhey Shyam Pandey & Shubhani Pandey | `src/components/Leadership.jsx` |
| **Group Experience** | ERE Management Services Pvt Ltd (Est. 2010) — 15+ Yrs | Hero, About, Leadership, Footer |
| **Operational Office** | 3rd Floor, B, 1/60, Sector-P, Sector K, Aliganj, Lucknow – 226024 | Contact & Footer sections |
| **Registered Office** | MMIG-15, Sitapur Road Yojana, Aliganj, Lucknow – 226021 | Contact & Footer sections |
| **Official Email** | `radheyrspandey9@rediffmail.com` | Top ticker, Contact, Footer |
| **Working Hours** | Monday – Saturday, 9:30 AM – 7:00 PM | Contact & Footer |
| **Geographic Scope** | All 75 Districts of Uttar Pradesh (100% Pan-UP) | Hero, Services, Coverage Map |

---

### 🚀 Running the Project

```bash
# Development Server
npm run dev

# Production Build
npm run build
```
Live server: `http://localhost:5173/`
