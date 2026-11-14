# Autocratic Management Services Private Limited
## Website Review Guide, Placeholders & Next Steps

This document details all verified information implemented on the website, flags placeholder and dummy data that require your review or real input, and provides maintenance instructions.

---

### 1. Visual & Aesthetic Architecture (Executive Redesign)

The landing page and overall design has been overhauled to deliver an institutional, high-end risk advisory aesthetic:

* **Executive Color System**:
  - **Primary Canvas**: Obsidian Midnight (`#060B14`) & Deep Slate Navy (`#0A1220`) for the Hero, Command Bar, and Footer.
  - **Content Canvas**: Pristine Institutional Porcelain (`#FAFAFC` & `#FFFFFF`) with subtle 1px hair-line borders for maximum readability and corporate breathing room.
  - **Accent**: Refined Burnished Bronze / Warm Ochre Amber (`#D97706` & `#B45309`) paired with subtle emerald verification badges. Replaces loud/cheap yellow and neon blues with an authoritative, established tone.
* **Modern Executive Typography**:
  - Primary font: **Plus Jakarta Sans** with geometric precision, optical letter tracking (`tracking-tight`), and crisp micro-labels.
  - Technical Monospace: **JetBrains Mono** for corporate identification numbers (CIN, ROC, GPS coordinates).
* **Interactive Aliganj Command Console**:
  - An interactive terminal in the hero section displaying live status across the 4 UP Operational Hubs (Central, Western, Eastern, Bundelkhand), average response TAT, active field force counts, and chain-of-custody protocols.

---

### 2. Verified Corporate Data Implemented

The website integrates all official records from the Ministry of Corporate Affairs (MCA), Zauba Corp, and company disclosures:

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

### 3. Items Requiring Review & Real Input (Placeholders Used)

The following items currently contain placeholder / dummy data and should be updated when official assets are available:

#### 1. Official Landline & Mobile Phone Numbers
* **Current Placeholder**: Displayed as `+91 94150 XXXXX` / `+91 522 XXXXXXX` in `src/data/companyData.js`.
* **Action Required**: Provide the actual operational helpline or desk phone number for the Aliganj office. Update `contact.helplinePhone` and `contact.deskPhone` in `src/data/companyData.js`.

#### 2. Corporate Domain & Email Address
* **Current Setting**: We provided their active official email `radheyrspandey9@rediffmail.com` across all contact points. We also prepared a placeholder `contact@autocraticmanagement.com`.
* **Recommendation**: If AMSPL plans to register a custom domain (e.g. `autocraticmanagement.com` or `amsinvestigations.in`), setting up corporate email addresses (e.g. `claims@autocraticmanagement.com` or `director@autocraticmanagement.com`) will significantly enhance credibility when dealing with major institutional insurers.

#### 3. Director Headshot Photographs
* **Current Setting**: Elegant initials monograms (`RP` and `SP`) with corporate verification badges.
* **Action Required**: If the directors wish to feature professional photographs, place high-resolution headshots in `public/team/` and update `directors[i].image` in `src/data/companyData.js`.

#### 4. Insurer Partner Logos & Empanelment Status
* **Current Setting**: We showcased industry compatibility cards with top underwriters (ICICI Lombard, Bajaj Allianz, Tata AIG, HDFC ERGO, Go Digit, New India Assurance, Star Health, etc.).
* **Action Required**: Verify which specific insurers AMSPL is currently empaneled with or has formal NDAs with before publicizing specific carrier relationships.

#### 5. Case Study Exact Claims
* **Current Setting**: Realistic field investigation scenarios (Motor OD staged crash on Sitapur highway, Commercial truck theft in Kanpur Dehat, and Ghost hospital IPD audit in Gorakhpur) were crafted to demonstrate rigorous methodology without violating any non-disclosure agreements.
* **Action Required**: Review or customize the case summaries in `src/data/companyData.js` under `SAMPLE_CASE_STUDIES` to reflect preferred real-world wins.

#### 6. Google Maps Exact Location Pin
* **Current Setting**: Embedded Google Map centered on Aliganj, Lucknow (Pin 226024).
* **Action Required**: Once a Google Business Profile pin is claimed for "3rd Floor, B, 1/60, Sector-P, Sector K, Aliganj", the exact iframe URL can be pasted into `src/components/Contact.jsx`.

---

### 4. How to Update Data in One Place

All core business details, contacts, service lines, and metrics are centralized in a single configuration file:
👉 **`src/data/companyData.js`**

Editing this one file automatically updates the Header, Hero, About Us, Services, Coverage Map, Leadership, Contact, and Footer components!

---

### 5. Running & Building the Application

#### To Run Development Server:
```bash
npm run dev
```
Accessible at: `http://localhost:5173/`

#### To Create Production Build:
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` folder ready for deployment.
