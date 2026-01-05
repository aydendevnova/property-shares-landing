# Property Shares AI - Landing Page Design Document

**Version:** v1.0
**Date:** January 05, 2026
**Owner:** Ayden (Web)
**Stakeholders:** Eric (BitAngels), Sarah (Real Estate), Rocky (PM/Eng), Christina (Design)

## 1. Objective

Create a **high-credibility, investor-grade landing page** for Property Shares AI that:

* Communicates the core thesis: **fractional real estate ownership becomes simple and accessible**.
* Captures leads via **email + SMS waitlist**.
* Establishes a **trustworthy, modern financial aesthetic** appropriate for an investor-heavy CES audience.
* Avoids regulatory risk by using **compliance-friendly language** (no return guarantees, no specific funding timelines, no promises of dividends).

## 2. Primary outcomes

* **Conversion:** Waitlist signups (email + optional SMS).
* **Partner interest:** Inbound from neo-banks/neo-brokers, custodians, compliance, title/escrow, data partners.
* **Investor clarity:** A coherent narrative that can be understood in **60–90 seconds**.

## 3. Constraints and scope

### In scope (CES-ready)

* Single-page marketing site (responsive, fast).
* Light mode visual system with blue accent.
* Lead capture form (email required, SMS optional).
* Basic SEO + analytics.
* High-level compliance and risk language.

### Out of scope (unless separately funded)

* Full design system library.
* Full production application UI.
* Full brand development (logo exploration, extensive illustration set).
* Deep integrations (MLS, KYC, wallet). The page may reference them at a high level.

## 4. Audience

### Primary

* **Investors**: older, crypto-native, want credibility and a plausible execution narrative.

### Secondary

* **Partners**: financial distribution (neo-banks/brokers), compliance vendors, custodians, title/escrow, data providers.

### Tertiary

* **Early users**: curious consumers who want exposure to real estate without traditional friction.

## 5. Messaging strategy

### Core tagline

**The future of real estate is shared.**

### Supporting value proposition

* **Simple:** “As easy as online shopping.”
* **Accessible:** “Start with small amounts.”
* **Trust-forward:** “Compliance-first, investor-grade workflows.”

### Messaging guardrails

Public-facing copy must avoid:

* Guaranteed returns (“passive income”, “monthly dividends” as certainty).
* Guaranteed timelines (“funded in 48 hours”).
* Claims of production readiness if only demo is available.

Use conditional phrasing (e.g., “may”, “designed to”, “subject to”, “depending on offering terms”) and short disclaimers.

## 6. Visual direction

### Theme

* **Light mode default** (finance + real estate trust cues).
* **Blue accent** (Coinbase-like trust signal without copying).
* **High-end real estate imagery** (Phoenix/Scottsdale aesthetic: warm light, clean lines).

### Design principles

* **Clarity over cleverness**: legible, minimal, high contrast.
* **Trust artifacts**: compliance section, security cues, clear footer.
* **Premium restraint**: whitespace, grid alignment, restrained motion.

## 7. Typography

* **Primary:** FigTree (modern, friendly, readable).
* **Fallback:** system-ui, -apple-system, Segoe UI, Roboto.

Recommended scale:

* H1: 44–56px (desktop), 32–38px (mobile)
* H2: 28–34px
* Body: 16–18px
* Small/legal: 12–13px

## 8. Color palette (initial)

Light-mode palette with a single strong accent.

* **Background:** #FFFFFF / #F7FAFC (alt section background)
* **Text:** #0B1220 (primary), #334155 (secondary)
* **Border:** #E2E8F0
* **Accent Blue:** #2563EB (primary accent)
* **Accent Blue (hover):** #1D4ED8
* **Success:** #16A34A (sparingly)
* **Warning:** #F59E0B (sparingly)

Notes:

* Avoid overly saturated blues that feel “crypto casino.”
* Use blue mainly for CTAs, links, key highlights.

## 9. Layout and information architecture

Single-page structure (top to bottom):

1. **Top nav**

   * Logo wordmark (temporary if needed)
   * Links: How it works, Opportunities, Trust, For Issuers, FAQ
   * Primary CTA: Join waitlist

2. **Hero**

   * Tagline + one-sentence promise
   * 2 CTAs: Join waitlist (primary), View demo flow (secondary anchor)
   * Hero visual: property card + clean UI mock overlay (not too “app store-y”)

3. **How it works (3 steps)**

   * Discover → Verify → Invest
   * Each step: icon + short copy

4. **Why now**

   * Affordability pressure
   * Fractional ownership trend
   * Faster distribution via mobile rails

5. **Featured opportunities (mock)**

   * 3–6 tiles
   * Phoenix examples with clear “sample” label
   * Each tile: location, property type, target raise (optional), min investment (optional)

6. **Trust & compliance**

   * KYC/AML mention
   * Custody/transfer high-level framing
   * Regulatory pathway mention (at a high level)
   * Disclaimer block (concise)

7. **For issuers / agents (optional)**

   * “List, tokenize, distribute” summary
   * “Coming next” framing if not ready

8. **FAQ**

   * Accordion
   * Focus: what you’re buying, risks, who can invest, liquidity expectations, how offers work

9. **Final CTA section**

   * Repeat waitlist
   * “Get updates before launch”

10. **Footer**

* Terms, Privacy, Disclosures
* Contact email
* Social links

## 10. Components

Required components:

* Primary CTA button + secondary ghost button
* Waitlist form (email required, phone optional)
* Property card (image, location, short highlights)
* Step cards (How it works)
* Accordion (FAQ)
* Badge system (e.g., “Sample”, “Coming soon”, “Compliance-first”)
* Notification toasts (optional micro-moment visual)

## 11. Imagery and iconography

* Prefer **real property photography** (high-res, consistent tone).
* Avoid stock-photo clichés (handshakes, skyscrapers, “crypto” neon).
* Icons: simple stroke icons, consistent weight.

Image handling:

* Use next-gen formats (WebP/AVIF).
* Use blurred placeholders + lazy loading.

## 12. Motion and interaction

* Subtle hover states (cards lift 2–4px, soft shadow).
* Scroll reveal: minimal, avoid distracting animation walls.
* Optional hero micro-animation: property cards slide or fade between 2–3 samples.

Constraints:

* Motion must not harm readability or performance.
* Respect reduced-motion preferences.

## 13. Lead capture: form and UX

### Fields

* Email (required)
* Phone (optional)
* Checkbox (optional): “I’m an investor / partner / early user” (single select or segmented)

### Consent language (SMS)

If SMS is captured, include a short consent line and link to privacy policy.

### Submission states

* Loading state
* Success confirmation (clear, no hype)
* Failure state with recovery

## 14. Compliance and disclosures (page-level)

Include a concise disclosure block near Trust section and in footer.

Recommended themes:

* Offerings are not guaranteed and may be subject to eligibility.
* Past performance and examples are illustrative.
* Investments involve risk, including loss of principal.

(Exact language should be reviewed by counsel/compliance before public release.)

## 15. Accessibility

* WCAG-f
