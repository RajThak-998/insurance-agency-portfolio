---
trigger: glob
globs: "**/*.tsx, **/*.jsx, **/*.css, **/*.html, **/*.vue, **/*.svelte"
---

# Frontend Anti-Slop Directive: Forensic Quality Enforcement

This rule is automatically triggered whenever you inspect, create, or modify frontend UI files (`.tsx`, `.jsx`, `.css`, `.html`, `.vue`, `.svelte`) within this project. You must strictly abide by these directives without exception.

---

## 1. Mandatory Pre-Flight Contract: Read `DESIGN.md`

Before generating or editing a single line of JSX, HTML, or CSS:
1. You must read and align with [DESIGN.md](file:///home/vanth_998/Documents/insurance-agency-portfolio/DESIGN.md).
2. Adhere strictly to the defined aesthetic: **Forensic Institutional Precision & Regulatory Telemetry**.
3. Use the defined color tokens (Obsidian `#060E1A`, Sovereign Surface `#0D213B`, Hairline `#1B3150`, Primary Ink `#F3F7FD`, Muted Ink `#9BBFF2`, Burnished Cognac `#E07E24`).
4. Apply the approved typography pairing: `Plus Jakarta Sans` for UI/Display and `JetBrains Mono` for tabular metrics and telemetry.

---

## 2. Zero AI Clichés: Banned Visual & Architectural Slop

Every UI element must feel intentionally engineered for an institutional insurance risk investigation agency. The following AI stereotypes are unconditionally banned:

### 🚫 Banned Visual Patterns
- **NO Gradient Meshes / Purple-Blue Glow Halos**: Do NOT use background blur circles (`blur-2xl`, `blur-3xl`, `bg-gradient-to-r from-purple-500 to-indigo-500`, radial neon blobs).
- **NO Glowing Drop-Shadows**: Do NOT apply neon drop-shadows or oversaturated ambient glows (`shadow-purple-500/50`, `shadow-cyan-400`). Hairline 1px borders (`border-[#1B3150]`) define separation, not diffuse shadows.
- **NO Generic 3-Column SaaS Feature Grids**: Do NOT generate the standard "Rocket / Shield / Lightning-bolt" 3-column marketing card layout with generic copy. Use evidentiary inspection tables, district matrices, or structured SOP protocols.
- **NO Pill Buttons or Bubbly Radii**: Do NOT use `rounded-full` for buttons or `rounded-xl`/`rounded-2xl` for containers. Maximum allowable radius is `rounded` (4px) for cards/buttons, and `rounded-md` (6px) for modals.
- **NO Banned Fonts**: Never inject or fall back to `Inter`, `Roboto`, or `Arial`.

### 🚫 Banned Placeholder Copy
Never insert lazy mock text or tech-bro marketing jargon:
- ❌ **BANNED**: "Acme Corp", "John Doe", "Jane Smith", "Company XYZ".
- ❌ **BANNED**: "Elevate your workflow", "Unlock the future", "Next-generation AI-powered platform", "Supercharge your business", "Seamlessly integrate".
- ❌ **BANNED**: "Lorem ipsum dolor sit amet...".

### ✅ Mandatory Domain-Authentic Realism
All copy, mock data, and labels must reflect genuine insurance investigation operations:
- **Corporate Entity**: Autocratic Management Services Private Limited (CIN: `U74140UP2018PTC109503`, Est. 2018, Aliganj, Lucknow).
- **Operational Scope**: 75 districts of Uttar Pradesh across 4 operational hubs (Purvanchal, Madhyanchal, Paschim, Bundelkhand).
- **Investigation Verticals**: Early Death Claim Verification (within 2 years, Section 45 Insurance Act), Hospital IPD Cashless Verification, Motor OD/TP Staged Accident Investigation, Commercial Arson & Stock Fire Forensic Audit, High-Value Marine & Transit Verification.
- **Metrics & Telemetry**: Field SLA TATs (`24h-48h` metro, `72h` remote rural), GPS-tagged evidentiary chain of custody, treating doctor verification, IRDAI anti-fraud compliance frameworks.

---

## 3. Mandatory Interactive State Completeness

No component is complete with only a static default state. You must explicitly style and handle:
1. **Hover State**: Subtle hairline border color shift (`hover:border-[#E07E24]/60`) or slight background brightness increase (`hover:bg-white/[0.04]`), `150ms` cubic-bezier transition, max 1px lift.
2. **Focus-Visible State**: High-contrast 2px keyboard focus ring with appropriate offset (`focus-visible:ring-2 focus-visible:ring-[#E07E24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E1A]`).
3. **Active/Pressed State**: Tactile feedback (`active:scale-[0.98]`).
4. **Loading State**: Monospace status indicators, crisp pulse or skeleton matching exact border radius, disabled pointer events.
5. **Empty State**: Institutional ledger empty notification with clear action button, never blank voids.
6. **Error State**: Hairline crimson warning banner with explicit remediation steps, retaining all user input.

---

## 4. Mandatory Visual Verification Loop (Playwright MCP)

Never assume code works without looking at the rendered output. When you create or update any UI view or component:

```
+-----------------------------------------------------------------------------------+
|                            VISUAL VERIFICATION LOOP                               |
|                                                                                   |
|  1. Start / Verify Dev Server (npm run dev -> http://localhost:5173)              |
|  2. Open View in Playwright MCP (Desktop 1440x900 & Mobile 390x844)               |
|  3. Capture High-Resolution Screenshots of the modified area                      |
|  4. Inspect: Spacing, Alignment, Contrast, Font Rendering, Hairlines, Overflow    |
|  5. Fix Any Detected Flaws -> Retest before marking task complete                |
+-----------------------------------------------------------------------------------+
```

### Verification Protocol
1. **Check Dev Server**: Verify that Vite is running on `http://localhost:5173` (or the active local port). If not running, start it in the background using `run_command`.
2. **Launch Playwright MCP**: Navigate to the targeted route or modal view.
3. **Inspect Both Viewports**:
   - **Desktop Viewport**: `1440px x 900px` (Verify 12-column grid alignment, data density, hairline border crispness).
   - **Mobile Viewport**: `390px x 844px` (Verify touch targets, lack of horizontal overflow, legible font scaling, collapsed navigation).
4. **Audit Checklist**:
   - [ ] No layout shifts or overlapping text.
   - [ ] Contrast meets WCAG AA (minimum 4.5:1 for body copy).
   - [ ] No rounded-xl, no glowing blobs, no purple meshes.
   - [ ] Fonts are rendered as `Plus Jakarta Sans` and `JetBrains Mono`.
   - [ ] Interactive states (hover, focus, click) respond with `cubic-bezier(0.16, 1, 0.3, 1)`.
5. **Remediation**: If any visual or spatial defect is observed in the screenshot, edit the code immediately and capture a new screenshot to verify the fix.
