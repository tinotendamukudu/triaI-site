# Implementation Plan - NMB Website

Ref: [Project Requirements](file:///c:/Users/mosesm/Documents/EXTRAS/NMB_WEBSITE/PROJECT_REQUIREMENTS.md)

## Goal Description
Build a premium, digital-first banking website for NMB. The site will feature a modern, responsive design with complex navigation (Mega Menu), a dynamic Hero section, and structured content for various user personas (Retail, Business, Investors).

## User Review Required
> [!IMPORTANT]
> **Design Assets**: I will use placeholder images generated via standard tools or simple colored divs/gradients initially. We can replace these with actual assets later.
> **Tailwind v4**: This project uses Tailwind CSS v4. Ensure your VS Code extension for Tailwind is up to date for the best experience, though it won't affect the build.

## Proposed Changes

### Configuration
#### [MODIFY] [globals.css](file:///c:/Users/mosesm/Documents/EXTRAS/NMB_WEBSITE/src/app/globals.css)
- Define CSS variables for the premium color palette.
- **Primary Colors**: Deep Navy Blue (Trust), Vibrant Teal/Cyan (Innovation/Digital).
- **Secondary**: Gold/Platinum accents (Premium feel).
- **Fonts**: Configure a clean, modern sans-serif font (e.g., Inter or Outfit) via `next/font`.

#### [MODIFY] [layout.tsx](file:///c:/Users/mosesm/Documents/EXTRAS/NMB_WEBSITE/src/app/layout.tsx)
- Add global `Header` (with Sticky behavior).
- Add global `Footer`.
- Apply global font/theme providers.

### Component Architecture

#### [NEW] `src/components/layout/`
- **MiniTaskBar.tsx**: Top thin bar for secondary links (ESG, Properties, Contact).
- **Navbar.tsx**: Main navigation bar with Logo and Search.
- **MegaMenu.tsx**: Complex dropdown system for "Banking for Me", "Business", etc.
- **Footer.tsx**: Global footer with multi-column links and social icons.

#### [NEW] `src/components/home/`
- **HeroBanner.tsx**: Full-width, high-impact visual section. Swipeable/Carousel support if needed (using CSS scroll snap or lightweight lib).
- **QuickActions.tsx**: Grid of cards for primary user intents (Open Account, Login).
- **OfferingsHighlights.tsx**: Featured products section.
- **NewsSection.tsx**: Recent updates layout.
- **Sustainability.tsx**: Dedicated component for ESG focus.

#### [NEW] `src/components/ui/`
- **Button.tsx**: Custom styled buttons (Primary, Secondary, Outline).
- **Card.tsx**: Glassmorphism or elevated card styles.
- **Section.tsx**: Standard layout wrapper with consistent padding/max-width.

### Page Structure
#### [MODIFY] [page.tsx](file:///c:/Users/mosesm/Documents/EXTRAS/NMB_WEBSITE/src/app/page.tsx)
- Compose the homepage using the new components.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure type safety and build correctness.
- Run `npm run lint` to check for code style issues.

### Manual Verification
- **Responsiveness**: Check mobile, tablet, and desktop views (especially the Mega Menu).
- **Navigation**: Verify all links in the Mega Menu point to the correct routes (even if empty initially).
- **Aesthetics**: Verify the "Premium" feel (colors, spacing, typography).
