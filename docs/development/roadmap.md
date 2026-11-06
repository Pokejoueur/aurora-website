# Aurora Website implementation roadmap

- **Status:** In progress
- **Architecture reference:** [ADR-001](../architecture/adr/ADR-001.md)
- **Last reviewed:** 2026-11-06
- **Source of truth:** This repository

The roadmap tracks the public website only. It does not establish implementation status for Aurora OS or Lumen. Product claims require evidence from their respective repositories and test reports.

## Current delivery snapshot

| Area | Status | Notes |
|---|---|---|
| Astro + TypeScript strict foundation | PROTOTYPE | Static Astro application; CI passed on an earlier revision. Expanded site revision awaits its own CI result. |
| Reference-led homepage | PROTOTYPE | Brand, four principles, OS/Browser positioning, engineering, development, docs and community entry points. Browser comparison remains outstanding. |
| Global navigation and footer | IMPLEMENTED IN BRANCH | Shared links across ecosystem, engineering, development, docs, community, downloads and legal information. Browser keyboard/mobile review remains outstanding. |
| Product pages | PROTOTYPE | Aurora OS and Lumen have dedicated pages; capabilities are intentionally marked NOT VERIFIED. |
| Add-on / extension destinations | PLANNED | Informational routes exist; no packages or install links are published. |
| Engineering pages | PROTOTYPE | Architecture, security, privacy and ADR overview explain evidence boundaries. |
| Development pages | PROTOTYPE | Status registry, roadmap, changelog and verification pages. |
| Documentation | PROTOTYPE | Getting started, user, developer, reference and FAQ routes. User guides remain scoped/planned where no release exists. |
| Documentation search | PROTOTYPE | Client-side filtering on the documentation index only; not full-text search. Pagefind remains planned. |
| Downloads | PLANNED | Release information page; no verified artifacts available. |
| Community | PROTOTYPE | Contribution and feedback entry points link to the public website repository. No forum or chat platform is claimed. |
| Legal and accessibility information | PROTOTYPE | Scope/intent pages exist; legal review and WCAG 2.2 AA audit are not complete. |
| Production hosting | NOT VERIFIED | No provider, production domain or deployment has been configured. |

## Phase 0 — Audit and governance

**Status: COMPLETED WITH LIMITATIONS**

- Repository baseline, architecture, governance and deployment limitations recorded.
- ADR-001 accepted for Astro, TypeScript strict mode, static output, native CSS and repository-managed content.
- Hosting provider and domain remain undecided.

## Phase 1 — Foundation and design system

**Status: PROTOTYPE**

Implemented in the current feature branch:
- Astro static output and strict TypeScript configuration.
- Reference-led Aurora design tokens and responsive CSS.
- Shared page layout, navigation, footer, breadcrumbs and 404 page.
- Static security headers for compatible static hosts.
- Status registry validation and GitHub Actions build workflow.

Remaining:
- Commit a lockfile and switch CI to `npm ci`.
- Complete browser testing at 360, 390, 768, 1024, 1366 and 1920px.
- Complete keyboard and screen-reader review.
- Verify CSP and response headers on the chosen host.
- Confirm logo source asset fidelity.

## Phase 2 — Product and information architecture

**Status: PROTOTYPE**

- Dedicated Aurora OS and Lumen pages.
- Separate informational destinations for Aurora OS add-ons and Lumen extensions.
- Ecosystem overview and platform page.
- Downloads page that does not invent release artifacts.

Remaining:
- Review the OS and Browser repositories before adding technical capabilities.
- Connect real add-on and extension catalogue destinations when their repositories/stores are confirmed.
- Add real release artifacts, checksums, signatures and compatibility data only after publication criteria are met.

## Phase 3 — Engineering and development transparency

**Status: PROTOTYPE**

- Architecture, security, privacy and ADR routes.
- Static status registry with explicit evidence and limitations.
- Roadmap, changelog and verification routes.

Remaining:
- Link product-level claims to exact source revisions and test reports.
- Add dated build, boot, integration and security reports when real reports are available.
- Add content schema validation and link checking.

## Phase 4 — Documentation

**Status: PROTOTYPE**

- Documentation landing page and article navigation.
- Getting started, user guide scope, developer guide, reference and FAQ.
- Small client-side search over documentation index entries.

Remaining:
- Move long-form documentation into validated Markdown content collections.
- Implement full-text search with Pagefind after content structure stabilizes.
- Add generated table of contents, previous/next links and related articles.
- Add versioning only when multiple supported product versions exist.

## Phase 5 — Community, legal and release

**Status: PROTOTYPE / PLANNED**

- Contribution and feedback pages.
- Privacy, accessibility and license information.
- Downloads and release entry point.

Remaining:
- Verify license terms for each repository and brand asset.
- Review legal/privacy text against actual hosting and data processing.
- Confirm a contact or community channel before listing it.
- Complete accessibility and performance audits.

## Phase 6 — Deployment and launch

**Status: NOT VERIFIED**

Recommended first host: Cloudflare Pages, using Git integration, `npm run build`, `dist`, and Node.js 22.22.0 or newer. Hosting instructions are documented in the repository README.

Exit criteria:
- A reviewed PR is merged to `main`.
- Production deployment succeeds and a real hostname is confirmed.
- Canonical URL and sitemap are configured for the real domain.
- All routes and internal links are checked against the deployed site.
- Security headers, HTTPS, redirects, 404 handling and caching are checked.
- Responsive, accessibility and performance reviews are recorded.
- No unsupported product or release claims are published.

A successful static build is necessary but does not, by itself, satisfy launch readiness.
