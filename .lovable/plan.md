

# NRS Fynser — Professional Multi-Regional Website

## Overview
A minimalist, ultra-professional website for NRS Fynser with two regional branches (India & Dubai), built with the brand's identity — dark blue (#1E3E4F), green (#48B64B), light gray (#EFEFEF), Poppins & Work Sans fonts.

---

## Region Auto-Detection & Routing

### Landing Page (`/`)
- On visit, automatically detects the user's region using browser timezone:
  - Gulf timezones (Asia/Dubai, Asia/Muscat, etc.) → auto-redirect to `/dubai`
  - All other timezones → default to `/india`
- Shows a brief branded loading/splash screen with the NRS Fynser logo during detection
- A **region switcher** is always available in the navbar so users can manually switch between India ↔ Dubai at any time

---

## Dubai Site (`/dubai`)
All Dubai pages share a consistent navigation bar with Dubai-specific branding.

**Dubai Home (`/dubai`)**
- Hero section with building background image: "Your Trusted FTA-Approved Tax & Business Advisor in Dubai"
- Quick overview of key service areas (Tax, Business Setup, Compliance, Capital & Finance)
- Trust indicators: 1,000+ clients, 50+ team members, established 2017
- Call-to-action leading to services and contact

**Dubai About (`/dubai/about`)**
- Firm story, vision, mission, and core principles (Integrity, Excellence, Innovation, Client-Centricity)

**Dubai Services (`/dubai/services`)**
- Service cards for each category:
  - **Tax Advisory** — UAE Corporate Tax, VAT, Transfer Pricing, Tax Audit representation
  - **Business Setup** — Mainland/Free Zone incorporation, Trade license, Corporate structuring
  - **Compliance** — AML/CFT framework, UBO compliance, Regulatory reporting
  - **Capital & Finance** — Bank finance, Working capital, Term loan support

**Dubai Team (`/dubai/team`)**
- Leadership profiles:
  - CA Saleel Eranchikkal (Managing Partner)
  - CA Rashid M. Basheer (Managing Partner)
  - Imran Rashid (Director - Corporate Services)

**Dubai Contact (`/dubai/contact`)**
- Address: 303, Saeed Tower 2, Trade Center 1, Dubai, UAE
- Phone: +971 4343 72 33
- Email: info@nrsfysner.com
- Embedded Google Map

---

## India Site (`/india`)
All India pages share a consistent navigation bar with India-specific branding.

**India Home (`/india`)**
- Hero section with building background image: "Expert Financial Advisory & Cross-Border Solutions"
- Overview of key service areas (Audit, CFO Services, Technology & ERP, Cross-Border)

**India About (`/india/about`)**
- Shared firm story, vision, mission, and core principles

**India Services (`/india/services`)**
- Service cards:
  - **Audit & Assurance** — Statutory audits, Internal audit, Risk assessment
  - **CFO Services** — Virtual CFO, Budgeting & forecasting, Financial analysis
  - **Technology & ERP** — Zoho ERP implementation, Accounting modules, Workflow automation
  - **Cross-Border Compliance** — India-GCC financial transactions and compliance

**India Team (`/india/team`)**
- Leadership profile: CA Muhammed Nizar E (Partner)

**India Contact (`/india/contact`)**
- Email: info@nrsfysner.com
- Address & phone placeholder for India office

---

## Shared Sections

**Blog / Insights** (`/dubai/insights` & `/india/insights`)
- Placeholder card-based blog/insights layout per region

**Careers** (`/dubai/careers` & `/india/careers`)
- "Why Join NRS Fynser" section with placeholder job listing cards

---

## Design System (Brand Guidelines)

- **Colors**: Dark Blue (#1E3E4F), Green (#48B64B), Light Gray (#EFEFEF)
- **Secondary**: #2A4D60, #0F6B6F, #A5E8B5, #4A4F52, #DCDCDC, #7C9CAD
- **Fonts**: Poppins (headings), Work Sans (body)
- **Style**: Minimalist, generous whitespace, subtle animations, clean typography
- **Background**: The uploaded building image as hero backgrounds
- **Responsive**: Fully mobile-friendly with hamburger navigation

## Navigation
- Top navbar with logo, region-specific menu items, and an **India ↔ Dubai region switcher**
- Footer with contact details, quick links, and social media placeholders

