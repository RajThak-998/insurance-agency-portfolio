# Reference Architecture Analysis: Kroll & Control Risks Hero & Navbar DNA

Extracted via Playwright inspection at 1440x900 viewport.

## 1. Structural Canvas & Atmospheric Scrim
- **Height & Layout**:
  - Full-bleed dark atmospheric canvas: `min-h-[82vh]` to `85vh` (Kroll uses ~580px–640px hero with news ticker below; Control Risks uses ~82vh full-bleed hero).
  - High-craft background: Mood-calibrated dark architectural visual (city corridor, telemetric infrastructure) layered beneath a directional gradient scrim.
  - **Directional Scrim Formula**:
    ```css
    background: linear-gradient(
      90deg,
      rgba(9, 14, 26, 0.96) 0%,
      rgba(9, 14, 26, 0.82) 48%,
      rgba(9, 14, 26, 0.52) 80%,
      rgba(9, 14, 26, 0.35) 100%
    );
    ```
  - Result: Guarantees WCAG AAA contrast (>7:1) for all white/off-white typography on the left (7 columns), while allowing subtle photographic architectural textures and graphics to emerge on the right (5 columns).

## 2. Navigation Bar Architecture
- **Structure**:
  - Slim utility micro-bar on top (`32px` height): Disclosures, regulatory registrations, location markers, direct corporate contact.
  - Main sticky navigation bar (`64px` height):
    - Clean brand wordmark / institutional emblem on left.
    - Minimalist text navigation links with subtle underline/color hover (`letter-spacing: -0.01em`, font weight 500-600).
    - Utility clusters on right: Search/Theme toggle + single sharp-cornered action button (`rounded: 2px–4px`, uppercase or small-caps tracking).
    - Zero pill-shaped buttons, zero bouncy gradients, zero floating theme switchers.

## 3. Typographic Hierarchy & Scale
- **Eyebrow / Category Kicker**:
  - Uppercase, tracked (`tracking-wider`, `0.08em–0.12em`), `11px–12px`.
  - Accompanied by a crisp `1px–2px` vertical or horizontal accent rule (amber/ochre or institutional gold) rather than rounded badges or neon bubbles.
- **Primary H1 Headline**:
  - Tight tracking (`tracking-[-0.025em]` to `-0.035em`), leading `1.1–1.15`.
  - Font size: `44px–52px` on desktop (1440px), clean pure white (`#FFFFFF` / `#F8FAFC`).
  - Strict absence of gradient-fill text or multi-color glow.
- **Lead Narrative Paragraph**:
  - Max-width: `560px–620px` (ensures comfortable 65-75 character line length).
  - Font size: `15px–16px`, leading `1.6`, color: `#CBD5E1` (slate-300) with key terms highlighted in crisp white or subtle amber ink.
- **CTA Buttons**:
  - Height: `40px–44px`.
  - Border radius: `2px` (`rounded-sm`) or `4px` (`rounded`). Strictly NO `rounded-full` or `rounded-xl`.
  - Sharp arrow indicator: `→` (inline SVG or glyph).

## 4. Operational Panel / Telemetry Integration (AMS Adaptation)
- In Control Risks and Kroll, the right side presents either an interactive topic selector or an operational threat/risk dashboard.
- For AMS: The **Aliganj Command Desk** occupies the 5-column right flank as an obsidian/smoked-slate telemetry console (`backdrop-blur-md`, `bg-slate-950/70` in dark mode or `bg-[#0F1D32]/85`, `border border-white/10`, `tabular-nums` JetBrains Mono metrics).
