# NMB Holdings Restructuring or Rebranding Plan

## Overview
This document outlines the architectural shift from a single-entity "NMB Bank" website to an umbrella "NMB Holdings" portal. The goal is to establish `www.nmbz.co.zw` (or equivalent root) as the Corporate Headquarters website, serving as a gateway to all subsidiaries, with the current banking site becoming just one of the destinations.

## Architectural Changes

### 1. Route Structure
The URL structure will be updated to reflect the hierarchy:

| Current Route | New Route | Description |
| :--- | :--- | :--- |
| `/` | `/banking-for-me` (or `/bank`) | The **NMB Bank** Personal Banking interface moves to a specific sub-route. |
| (New) | `/` | **NMB Holdings (Group) Landing Page**. This becomes the new entry point. |
| `/business` | `/business` | Stays as is, or effectively `/bank/business`. |
| `/investor-relations` | `/investor-relations` | Remains shared, but technically belongs to the Holdings level information. |

### 2. New Main Page: NMB Holdings
The root page (`/`) will function as a directory and corporate face.

**Key Components:**
*   **Group Hero Section:** Focused on "Strengthening Partnerships", "Excellence", and Group identity.
*   **Subsidiaries Showcase:** A grid layout linking to:
    *   **NMB Bank** (The current site) -> Redirects to `/banking-for-me`
    *   **NMB Properties** -> Placeholder link
    *   **NMB Capital** -> Placeholder link
    *   **Xian** (Tech Division) -> Placeholder link
*   **Investor Quick-view:** Live stock ticker and Latest Financial Results download.
*   **Simplified Navbar:** Different from the Bank navbar. Links to: About Holdings, Investor Relations, Sustainability, Media Centre.

### 3. Migration Strategy

#### Phase 1: Move Existing Bank Content
1.  **Create Sub-route:** Create `src/app/banking-for-me/page.tsx`.
2.  **Migrate Home:** Move the code currently in `src/app/page.tsx` (Hero, Featured, MobileApp, etc.) to the new `banking-for-me` page.
3.  **Update Config:** Update `src/components/navbar/Navbar.tsx` to handle the redirection. Clicking the "NMB Logo" on the Bank pages should probably take you to `/banking-for-me` (Bank Home), whereas a "Group" link takes you to `/`.

#### Phase 2: Build Holdings Landing Page
1.  **New Home:** Create a new `src/app/page.tsx`.
2.  **Design:** Clean, corporate aesthetic using NMB Blue and Gold colors, but less "transactional" and more "brand" focused.
3.  **Animations:** Use subtle entrance animations for subsidiary cards to guide user focus.

## Action Plan (Checklist)

- [ ] **Refactor:** Move `src/app/page.tsx` content to `src/app/banking-for-me/page.tsx`.
- [ ] **Navigation:** Update `Navbar.tsx` to highlight "Banking for me" tab when on `/banking-for-me`.
- [ ] **New Page:** Initialize `src/app/page.tsx` as the Holdings Landing Page.
- [ ] **Components:** Create `SubsidiaryGrid` component.
- [ ] **Routing:** Ensure redirection logic (if user types simple URL) resolves correctly.
