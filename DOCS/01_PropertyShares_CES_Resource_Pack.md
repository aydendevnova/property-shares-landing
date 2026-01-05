# Property Shares AI - CES 2026 Resource Pack

**Internal working document (v1.0)**
**Date:** January 05, 2026

**Purpose:** Align scope, messaging, and near-term execution for CES (January 6-9, 2026) and the immediate fundraising runway.
**Confidentiality:** For internal use by Property Shares / BitAngels stakeholders and approved contractors only.

## 1. Executive summary

Property Shares AI is a consumer-facing fractional real estate investing product with a thesis that real estate ownership will move toward smaller denominations and mobile-first distribution. Near term, the goal is a high-signal CES presence: an investor-grade landing page, a demo app flow, and short promo videos that communicate simplicity ("as easy as online shopping") while staying credible for an investor-heavy audience.

## 2. Scope boundary for CES

To avoid scope creep and maximize quality within the CES deadline, the recommended focus is:

* **Primary:** PropertySharesAI (B2C).
* **Secondary mention only:** RealTrustAI (B2B) as the upstream listing + compliance engine, without promising full availability at CES.
* **Defer:** full design system, full production app build, and final logo development unless separately funded and scheduled.

## 3. Audiences and success criteria

### 3.1 Primary audiences at CES

* **Investors:** older, crypto-native (Bitcoin/Ethereum early), want clarity, credibility, and an investable story.
* **Partners:** neo-banks / neo-brokers, custodians, compliance vendors, title / escrow vendors, MLS and data providers.
* **Early users:** sign-ups for pre-launch access (email + SMS).

### 3.2 Success criteria

* **CES:** capture qualified investor and partner leads; demonstrate a coherent product story in under 90 seconds.
* **Post-CES:** convert leads into scheduled follow-ups and seed round momentum (target seed: $5M in Q1 2026).
* **Internal:** a repeatable demo flow that can be iterated into a white-label MVP and later production build.

## 4. Messaging architecture

### 4.1 Core tagline and one-liners

* **Tagline:** The future of real estate is shared.
* **Consumer one-liner:** For the price of dinner, you can own real estate.
* **Issuer one-liner:** List, tokenize, and distribute property shares in days, not months.
* **Platform one-liner:** A discovery layer for tokenized real estate across platforms ("Kayak for tokenized real estate").

### 4.2 Messaging guardrails (important)

Because the product touches securities workflows and investor decision-making, public-facing materials should avoid specific performance promises and any language that can be read as a guaranteed return or guaranteed timeline. Use examples as hypothetical or illustrative unless backed by compliant disclosures.

## 5. Deliverables for the CES sprint (recommended)

* **Landing page (coded):** high-end visual direction, clear value prop, email + SMS capture, and compliance-friendly language.
* **Demo app:** reskinned flows with realistic data, Phoenix-focused properties, and a DigiShares-style compliance step.
* **Promo video(s):** 60-90s main cut plus shorter 15-20s social snippets.
* **Pitch deck:** branded investor deck aligned to the landing page narrative (if time permits).

## 6. Website information architecture (v1)

### 6.1 Sections (single page)

* **Hero:** tagline + primary CTA (Join waitlist).
* **How it works:** Discover -> Verify -> Invest (3 steps).
* **Why now:** affordability + fractional ownership + onchain settlement.
* **Featured opportunities (mock data):** 3-6 tiles with Phoenix examples.
* **Trust and compliance:** KYC/AML, custody, and investor eligibility (high-level).
* **For issuers / agents (optional):** list your property, distribute to investors.
* **Email + SMS capture (repeat CTA) + footer links.

### 6.2 Landing page copy (draft)

See the accompanying file **"02_Website_Copy.md"** for ready-to-paste copy blocks and CTAs.

## 7. Demo app (reskin) scope for CES

### 7.1 Core screens (minimum)

* **Discover** (property feed with filters).
* **Asset detail** (photos, investment highlights, risks, docs placeholder).
* **Invest flow** (amount, disclosures, wallet option stub).
* **Compliance status** (KYC/AML step indicator, DigiShares-style).
* **Portfolio** (holdings, performance placeholders, distributions placeholder).

### 7.2 Data and integrations (demo assumptions)

* **MLS:** treated as source-of-truth for property listing fields; for CES, use static/mock dataset unless API access is confirmed.
* **DigiShares:** white-label screens or visual parity for KYC/AML and token issuance workflow; for CES, integrate via placeholder states unless keys are available.
* **Wallet:** show Coinbase/Base wallet choice as a stub; avoid implying full custody/settlement unless operational.

## 8. Technical integration map (phase-aware)

* **Phase 0 (CES demo):** static data + simulated compliance + simulated investment flow.
* **Phase 1 (white-label MVP):** DigiShares KYC/AML + token issuance + basic investor portal; limited property set.
* **Phase 2 (scale):** MLS integrations, title/escrow integrations (e.g., Qualia), custodians, payment rails, and multi-platform distribution.

## 9. Open questions and decisions needed

* **Data access:** Which MLS (or MLS proxy) is available now, and under what licensing terms?
* **Custody + settlement:** who holds tokens, how transfers work, and what user sees in-app.
* **Compliance:** investor eligibility gates (Reg D/Reg S/Reg A+ roadmap), and which statements can be made publicly.
* **Property pipeline:** which Phoenix property is the CES demo asset (address redaction rules).
* **Brand:** do we position primarily as "AI" (workflow automation) or primarily as "fractional ownership" (investing)?
* **Distribution:** is Coinbase/Base positioning central in the narrative, or a technical implementation detail?

## 10. Timeline and owners (compressed)

Assumes final assets needed by end of day Monday, January 5, 2026, for on-site CES usage starting January 6.

| Date  | Deliverable                          | Owner                                 | Notes                                                                                 |
| ----- | ------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------- |
| Jan 5 | Landing page v1 + waitlist form live | Ayden (dev) / Christina (design dir.) | Prioritize mobile and loading speed.                                                  |
| Jan 5 | Demo app reskin v1                   | Ayden                                 | Swap resort imagery to Phoenix residential; add "Powered by LitVM" badge if approved. |
| Jan 5 | Promo video script lock              | Eric + team                           | Remove/soften any performance guarantees.                                             |
| Jan 6 | Promo video render(s)                | Richard / Christina                   | Deliver 60-90s + 15-20s cutdowns.                                                     |

## 11. Risk register (high-level)

| Risk                                                              | Impact | Mitigation (CES-safe)                                                                     |
| ----------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| Regulatory/marketing overclaims (returns, timelines, "dividends") | High   | Use illustrative language; add disclaimers; route public copy through counsel/compliance. |
| MLS data licensing or access delays                               | Medium | Use static Phoenix dataset for CES; swap to API later.                                    |
| Integrations not ready (DigiShares, wallet, escrow)               | Medium | Demo via UI parity and simulated states; avoid implying production readiness.             |
| Scope creep across Property Shares + RealTrust simultaneously     | High   | CES focus on Property Shares; RealTrust as brief "coming next" slide.                     |

## 12. Appendix: voiceover scripts and SSML

See **"04_Promo_Video_Scripts_SSML.xml"** for three variants (Investor-safe, Consumer-forward, Issuer/agent-forward).
