---
name: frontend-design
description: Standard operating procedure for building, styling, and visually verifying frontend UI components, layouts, and pages according to institutional design specifications.
---

# Frontend Design & Verification Workflow

This skill guides you through the rigorous, step-by-step process of designing, developing, and visually verifying frontend components and views for the **Autocratic Management Services** portfolio. It enforces zero-slop craftsmanship, domain fidelity, and mandatory automated visual audits.

---

## Execution Workflow Overview

```
+----------------------------------------------------------------------------------------+
|                                    PHASE 1                                             |
|                     Specification & Primitive Inspection                               |
|        - Read DESIGN.md                                                                |
|        - Inspect existing components in src/components/ and tailwind.config.js         |
+----------------------------------------------------------------------------------------+
                                           |
                                           v
+----------------------------------------------------------------------------------------+
|                                    PHASE 2                                             |
|                     Design Commitment & State Planning                                 |
|        - Define Layout Hierarchy & Responsive Breakpoints                              |
|        - Map Typography Scale & Token Usage                                            |
|        - Commit to 6 Interactive States (Default, Hover, Focus, Loading, Empty, Error) |
+----------------------------------------------------------------------------------------+
                                           |
                                           v
+----------------------------------------------------------------------------------------+
|                                    PHASE 3                                             |
|                           High-Fidelity Implementation                                 |
|        - Write React JSX / Tailwind markup                                             |
|        - Apply Hairline Borders, Strict Radii (<=4px/6px), Domain-Authentic Copy       |
+----------------------------------------------------------------------------------------+
                                           |
                                           v
+----------------------------------------------------------------------------------------+
|                                    PHASE 4                                             |
|                     Visual Verification via Playwright MCP                             |
|        - Verify Dev Server at http://localhost:5173                                    |
|        - Audit Desktop Viewport (1440px x 900px)                                       |
|        - Audit Mobile Viewport (390px x 844px)                                         |
|        - Capture Screenshots & Inspect Defects                                         |
+----------------------------------------------------------------------------------------+
                                           |
                                           v
+----------------------------------------------------------------------------------------+
|                                    PHASE 5                                             |
|                         Defect Remediation & Sign-off                                  |
|        - Resolve Alignment, Spacing, or Contrast Regressions                           |
|        - Re-verify with Playwright MCP until zero defects remain                       |
+----------------------------------------------------------------------------------------+
```

---

## Step 1: Pre-Implementation Discovery

Before writing or editing code, perform the following inspection steps:

1. **Read the Design Specification**:
   Read [DESIGN.md](file:///home/vanth_998/Documents/insurance-agency-portfolio/DESIGN.md) to review:
   - Core aesthetic thesis (*Forensic Institutional Precision*).
   - Exact color tokens (`#060E1A` canvas, `#0D213B` elevated surface, `#1B3150` hairline border, `#F3F7FD` primary ink, `#9BBFF2` muted ink, `#E07E24` burnished cognac accent).
   - Typography rules (`Plus Jakarta Sans` + `JetBrains Mono`; `Inter`, `Roboto`, and `Arial` are strictly banned).
   - Radius caps (`0px` table/rule, `2px` micro badges, `4px` buttons/cards, max `6px` modals).

2. **Inspect Existing Component Primitives**:
   Examine existing patterns in `src/components/` and `src/data/companyData.js` to ensure visual harmony:
   - Header navigation & compliance ticker: [Header.jsx](file:///home/vanth_998/Documents/insurance-agency-portfolio/src/components/Header.jsx)
   - Triage modal & interactive calculators: [CaseTriageModal.jsx](file:///home/vanth_998/Documents/insurance-agency-portfolio/src/components/CaseTriageModal.jsx)
   - District coverage & regional telemetry: [CoverageMap.jsx](file:///home/vanth_998/Documents/insurance-agency-portfolio/src/components/CoverageMap.jsx)
   - Investigation verticals: [Services.jsx](file:///home/vanth_998/Documents/insurance-agency-portfolio/src/components/Services.jsx)

3. **Check Tailwind Token Mappings**:
   Inspect [tailwind.config.js](file:///home/vanth_998/Documents/insurance-agency-portfolio/tailwind.config.js) to confirm existing utilities for `brand-*`, `accent-*`, and `surface-*`.

---

## Step 2: Architecture Commitment & State Planning

Before generating markup, explicitly commit to the component specification:

1. **Hierarchy & Grid**:
   - Establish container constraints (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
   - Define column distribution (e.g., 12-column grid with `gap-6` on desktop, single-column stack on mobile).

2. **Typography Scale**:
   - Section label: `font-mono text-xs text-[#E07E24] uppercase tracking-wider`
   - Main header: `font-sans text-2xl sm:text-3xl font-bold text-[#F3F7FD]`
   - Body description: `font-sans text-sm text-[#9BBFF2] leading-relaxed`
   - Tabular / ID / SLA: `font-mono text-xs font-medium text-[#F3F7FD]`

3. **Interactive State Blueprint**:
   Every interactive component must declare:
   - **Default**: Resting hairline border and surface background.
   - **Hover**: Decisive color shift (`hover:border-[#E07E24]/60`, `hover:bg-white/[0.04]`, `-translate-y-[1px]`), transition `150ms cubic-bezier(0.16, 1, 0.3, 1)`.
   - **Focus-Visible**: Keyboard ring (`focus-visible:ring-2 focus-visible:ring-[#E07E24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E1A]`).
   - **Active**: Tactile feedback (`active:scale-[0.98]`).
   - **Loading / Disabled**: Opacity `opacity-50`, `cursor-not-allowed`, animated telemetry pulse.
   - **Empty**: Contextual notice with IRDAI filing or district triage CTA.
   - **Error**: High-contrast hairline alert (`border-red-500/50 bg-red-950/20 text-red-200`) retaining user input.

---

## Step 3: High-Fidelity Implementation

Write clean, modular, and accessible React code conforming to these standards:
- **No Inline Styles for Layout**: Use Tailwind utility classes matching the design tokens.
- **Hairline Precision**: Use `border border-[#1B3150]` or `border border-white/10`. Avoid thick borders or diffuse colored drop-shadows.
- **Zero AI Clichés**: No purple gradient meshes, no `blur-3xl` blobs, no generic "Acme" placeholder copy.
- **Domain Authenticity**: Use genuine corporate references (AMS Pvt Ltd, Aliganj Lucknow, 75 UP Districts, Section 45 Insurance Act, IRDAI guidelines).

---

## Step 4: Mandatory Visual Verification with Playwright MCP

Once code changes are saved, you must visually inspect the interface in both desktop and mobile viewports.

### 1. Ensure the Local Dev Server is Running
Check if Vite is already active on port `5173`. If not, start it:
```bash
npm run dev
```

### 2. Desktop Viewport Audit (1440px x 900px)
- Use the Playwright MCP server to navigate to `http://localhost:5173`.
- Set viewport dimensions to `1440 x 900`.
- Capture full-page or component-targeted screenshots.
- Audit criteria:
  - [ ] 12-column alignment matches `max-w-7xl`.
  - [ ] Hairline 1px borders render crisply without anti-aliasing blurs.
  - [ ] Contrast between ink (`#F3F7FD`, `#9BBFF2`) and surfaces (`#060E1A`, `#0D213B`) is stark and legible.
  - [ ] Monospace font (`JetBrains Mono`) renders correctly on all numbers, case codes, and TAT pills.

### 3. Mobile Viewport Audit (390px x 844px)
- In Playwright MCP, resize viewport to `390 x 844` (iPhone standard viewport).
- Navigate through the mobile view:
  - [ ] Check horizontal scroll: `document.body.scrollWidth === window.innerWidth` (strictly 0 horizontal overflow).
  - [ ] Check tap target sizes: buttons and toggles are at least `40px` touch-accessible.
  - [ ] Confirm mobile drawer/modal opens and dismisses cleanly.
  - [ ] Text hierarchy remains legible without unnatural line breaks.

---

## Step 5: Defect Remediation & Verification Checklist

Review the captured screenshots. If any visual defects are found:
1. Identify the root cause (e.g., misaligned padding, incorrect border color, unconstrained flex item, unhandled hover ring).
2. Edit the corresponding source file.
3. Re-run Playwright MCP screenshot capture.
4. Confirm resolution before concluding the task.

### Final Verification Sign-Off
- [ ] `DESIGN.md` guidelines followed.
- [ ] Zero AI clichés present.
- [ ] Banned fonts (`Inter`, `Roboto`, `Arial`) absent from rendered output.
- [ ] Banned radii (`rounded-xl`, `rounded-2xl`, `rounded-full` buttons) absent.
- [ ] Visual verification passed at both 1440px and 390px.
