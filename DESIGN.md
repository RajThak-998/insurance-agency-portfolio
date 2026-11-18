# Visual Design Specification: Forensic Institutional Precision

## 1. Aesthetic Thesis: High-Contrast Evidentiary Precision & Regulatory Telemetry

This design specification is strictly tailored to **Autocratic Management Services Private Limited**—an institutional risk verification, forensic claims investigation, and anti-fraud agency serving India's premier life, health, and general insurers across all 75 districts of Uttar Pradesh.

The aesthetic rejects consumer SaaS tropes, whimsical novelty, and decorative AI slop. It draws inspiration from legal court dockets, forensic audit ledgers, statutory IRDAI filing registers, and cartographic field logs. Every pixel must project:
- **Evidentiary Certitude**: High-density structured data, razor-sharp hairline borders, and unambiguous contrast.
- **Institutional Weight**: Architectural geometry rooted in deep obsidian slate, sovereign blue depths, and burnished cognac amber seals.
- **Forensic Utility**: Information prioritized over decorative whitespace. Immediate clarity for claim numbers, policy numbers, district triage TATs, and chain-of-custody timestamps.

---

## 2. Typography System

### Approved Font Pairing

| Role | Family | Weights Used | Purpose & Characteristics |
| :--- | :--- | :--- | :--- |
| **Primary Display & UI Sans** | `Plus Jakarta Sans` | 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) | Clean geometric sans with humanist optical corrections and tall x-height. Delivers supreme clarity in dense data tables, section headers, and corporate copy. |
| **Monospace Telemetry & Code** | `JetBrains Mono` | 400 (Regular), 500 (Medium), 600 (SemiBold) | Tabular figures, statutory codes (e.g., *Section 45*, *CIN: U74140UP2018PTC109503*), GPS coordinates, case IDs, and SLA countdowns. |

#### Font Stack Implementation
```css
/* UI and Body Text */
--font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Data Telemetry, Case IDs, Timestamps, and Metrics */
--font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
```

### Explicitly Banned Fonts
- 🚫 **BANNED: `Inter`** — Generic SaaS cliché lacking institutional character.
- 🚫 **BANNED: `Roboto`** — Uninspired, dated system aesthetic.
- 🚫 **BANNED: `Arial`** — Antiquated fallback with irregular letter spacing and poor tabular alignment.

### Type Hierarchy Scale
- **Display L1 (Hero Headline)**: `2.75rem` (44px) / Line-height: `1.1` / Letter-spacing: `-0.03em` / Weight: 700
- **Heading H2 (Section Title)**: `1.875rem` (30px) / Line-height: `1.2` / Letter-spacing: `-0.025em` / Weight: 700
- **Heading H3 (Module Subhead)**: `1.25rem` (20px) / Line-height: `1.3` / Letter-spacing: `-0.02em` / Weight: 600
- **Body Regular**: `0.9375rem` (15px) / Line-height: `1.55` / Letter-spacing: `-0.01em` / Weight: 400
- **Body Dense / Table Data**: `0.8125rem` (13px) / Line-height: `1.4` / Letter-spacing: `0em` / Weight: 500
- **Micro Telemetry / Badge**: `0.6875rem` (11px) / Line-height: `1.2` / Letter-spacing: `0.06em` / Weight: 600 / All Caps (JetBrains Mono)

---

## 3. Color Tokens & Mathematical Definitions

All colors are strictly mapped to Hex and OKLCH color spaces. No arbitrary color generation is allowed.

```
+-----------------------------------------------------------------------------------------+
|                                    PALETTE SUMMARY                                      |
+-----------------------------------------------------------------------------------------+
| Background (Dark Canvas)  : #060E1A | oklch(0.122 0.025 248.5)                          |
| Elevated Surface          : #0D213B | oklch(0.198 0.042 245.8)                          |
| 1px Hairline Border       : #1B3150 | oklch(0.274 0.038 245.2) (Subtle: 0.08 alpha white)|
| Primary Ink               : #F3F7FD | oklch(0.968 0.012 242.0)                          |
| Muted Ink                 : #9BBFF2 | oklch(0.772 0.055 244.3)                          |
| Sharp Accent              : #E07E24 | oklch(0.672 0.162 55.4)  (Burnished Cognac)       |
+-----------------------------------------------------------------------------------------+
```

### Token Definitions

| Token Name | Hex Code | OKLCH Value | Semantic Role & Strict Usage |
| :--- | :--- | :--- | :--- |
| `color-canvas-bg` | `#060E1A` | `oklch(0.122 0.025 248.5)` | Deep Obsidian Slate. Default background for hero sections, corporate dashboards, and high-stakes evidentiary modules. |
| `color-surface-elevated` | `#0D213B` | `oklch(0.198 0.042 245.8)` | Sovereign Blue Surface. Raised container cards, inspection logs, active modals, and navigation headers. |
| `color-surface-subtle` | `#081526` | `oklch(0.155 0.032 247.2)` | Secondary depressed surface for nested code blocks, tabular headers, and inset metric wells. |
| `color-border-hairline` | `#1B3150` | `oklch(0.274 0.038 245.2)` | Primary 1px structural hairline border. Defines card boundaries, table cell separators, and grid modules. |
| `color-border-ghost` | `rgba(255, 255, 255, 0.08)` | `oklch(1.0 0 0 / 0.08)` | Ultra-fine internal divider line on elevated dark containers. |
| `color-ink-primary` | `#F3F7FD` | `oklch(0.968 0.012 242.0)` | High-contrast evidentiary white. Used for main headlines, active values, and primary reading text. |
| `color-ink-muted` | `#9BBFF2` | `oklch(0.772 0.055 244.3)` | Sovereign Slate Blue. Secondary explanations, field labels, metadata keys, and inactive nav items. |
| `color-ink-subtle` | `#689BE0` | `oklch(0.665 0.098 245.0)` | Tertiary ink for breadcrumbs, footnote legal disclaimers, and table column captions. |
| `color-accent-sharp` | `#E07E24` | `oklch(0.672 0.162 55.4)` | **Burnished Cognac Amber**. The single sharp accent. Denotes active state triggers, priority status (TAT), verified seals, and primary CTAs. |
| `color-accent-hover` | `#F09A43` | `oklch(0.738 0.151 58.2)` | High-clarity amber highlight on hover and focus ring activation. |

#### High-Contrast Light Ledger Tokens (Print / White Document Surfaces)
- **Light Canvas BG**: `#F8FAFC` (`oklch(0.985 0.005 240.0)`)
- **Light Surface**: `#FFFFFF` (`oklch(1.000 0.000 0.0)`)
- **Light Hairline Border**: `#E2E8F0` (`oklch(0.928 0.006 242.0)`)
- **Light Primary Ink**: `#0B1E36` (`oklch(0.201 0.046 246.3)`)
- **Light Muted Ink**: `#64748B` (`oklch(0.551 0.027 242.1)`)

---

## 4. Spatial Rules & Grid Structure

### Baseline & Column Grid
- **Atomic Unit**: `4px` base step. Layout rhythm operates strictly on `4px` / `8px` increments (`4`, `8`, `12`, `16`, `24`, `32`, `48`, `64` px).
- **Page Container**: Fixed maximum width of `1280px` (`max-w-7xl` in Tailwind) centered with horizontal padding:
  - Mobile (`<640px`): `16px` (`px-4`)
  - Tablet (`640px-1024px`): `24px` (`px-6`)
  - Desktop (`>1024px`): `32px` (`px-8`)
- **12-Column Responsive Layout**:
  - Desktop: 12 columns with uniform `24px` (`gap-6`) gutters.
  - Tablet: 6 columns with `16px` (`gap-4`) gutters.
  - Mobile: 1 or 2 columns with `12px` (`gap-3`) gutters.
- **Architectural Background Grid**:
  - Dark surfaces: `36px x 36px` line grid drawn with `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`.
  - Strictly no organic blur masks or arbitrary circle cutouts.

### Border Radius Scale
Rounded corners are minimal, architectural, and restrained. Puffy or bubbly radii are prohibited.

| Tailwind Class | Pixel Value | Permitted Usages |
| :--- | :--- | :--- |
| `rounded-none` | `0px` | Data table cells, audit grids, rule dividers, callout banners, header bars. |
| `rounded-sm` | `2px` | Micro tags, status pips, IRDAI compliance stamps, code badges. |
| `rounded` | `4px` | Standard buttons, input fields, cards, select dropdowns, search triggers. |
| `rounded-md` | `6px` | **Maximum allowable radius**. Used solely for modal dialogs and flyout sheets. |
| `rounded-full` | `9999px` | **RESTRICTED**: Strictly for 1:1 circular status indicators (e.g., 8px live beacon dot). Never for buttons. |

🚫 **STRICTLY BANNED**: `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px), and pill-shaped action buttons (`rounded-full px-6`).

### Density Targets
- **Information Density Target**: High. Interfaces must convey critical verification details without needless scrolling.
- **Data Table Row Height**: `36px` to `40px` (never inflated `64px` SaaS rows).
- **Form Controls & Action Buttons**: `36px` compact height (`py-2 px-3.5`).
- **Card Padding**: Compact `16px` (`p-4`) to `24px` (`p-6`). Zero padding inflation.

---

## 5. Motion & Interaction Rules

Motion must feel crisp, mechanical, and decisive—like the click of a physical camera shutter or forensic timestamping device.

### Timing & Transition Curves
- **Primary Transition**: `cubic-bezier(0.16, 1, 0.3, 1)` (Decisive snap ease-out).
- **Fast Transition**: `150ms` for color changes, border transitions, and button presses.
- **Standard Transition**: `200ms` for modal open/close, flyout expansion, and accordion collapse.
- **Hover Transform**: Maximum translateY of `-1px` (`hover:-translate-y-[1px]`) on interactive cards.

### Banned Motion Patterns
- 🚫 **NO BOUNCY SPRINGS**: No overshoot (`cubic-bezier(0.34, 1.56, 0.64, 1)`), wobble, or elastic physics.
- 🚫 **NO AMBIENT GLOW BLOBS**: No pulsating gradients, blurred colored circles (`blur-3xl`), or drifting nebulas.
- 🚫 **NO PARALLAX DRIFT**: Elements must stay locked to their geometric coordinates.
- 🚫 **NO SLOW FADES**: Any transition exceeding `250ms` is classified as sluggish and banned.

---

## 6. Component Primitive Standards

### 1. Hairline Evidentiary Card
```html
<div class="bg-[#0D213B] border border-[#1B3150] rounded p-5 relative overflow-hidden transition-all duration-150 hover:border-[#E07E24]/60 hover:-translate-y-[1px]">
  <div class="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
    <span class="font-mono text-[11px] uppercase tracking-wider text-[#9BBFF2]">SOP-VERIFY-04</span>
    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-[#E07E24]/10 border border-[#E07E24]/30 text-[#E07E24] font-mono text-[11px] font-semibold">
      <span class="w-1.5 h-1.5 rounded-full bg-[#E07E24]"></span>
      TAT: 48H
    </span>
  </div>
  <h4 class="font-sans text-base font-semibold text-[#F3F7FD] mb-2">Hospital Cashless & Inpatient Verification</h4>
  <p class="font-sans text-xs text-[#9BBFF2] leading-relaxed">Cross-verification of indoor patient registers (IPD), pharmacy stock books, diagnostic DICOM raw files, and treating doctor credentials.</p>
</div>
```

### 2. Primary Forensic CTA Button
```html
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#E07E24] hover:bg-[#F09A43] text-[#060E1A] font-sans text-sm font-semibold rounded transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07E24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E1A] active:scale-[0.98]">
  <span>Initiate District Triage</span>
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
</button>
```

### 3. Secondary Regulatory Outline Button
```html
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent hover:bg-white/[0.04] text-[#F3F7FD] border border-[#1B3150] hover:border-[#9BBFF2]/40 font-sans text-sm font-medium rounded transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9BBFF2]">
  <span>Download IRDAI SOP Protocol</span>
</button>
```

### 4. Statutory Metadata Pip / Ticker
```html
<div class="inline-flex items-center gap-2 px-2.5 py-1 bg-[#081526] border border-[#1B3150] rounded-sm font-mono text-xs text-[#9BBFF2]">
  <span class="text-[#E07E24] font-bold">CIN:</span>
  <span class="text-[#F3F7FD]">U74140UP2018PTC109503</span>
  <span class="text-[#1B3150]">|</span>
  <span class="text-[#E07E24] font-bold">JURISDICTION:</span>
  <span class="text-[#F3F7FD]">75 UP DISTRICTS</span>
</div>
```
