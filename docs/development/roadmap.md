# Aurora Website implementation roadmap

- **Status:** Planned
- **Architecture reference:** [ADR-001](../architecture/adr/ADR-001.md)
- **Last reviewed:** 2026-11-02

This roadmap is the authoritative implementation sequence for Aurora Website. Completion requires evidence against each phase's exit criteria; discussion or source-code presence alone is insufficient.

## Current baseline

The repository baseline contains only the initial README. The architecture is documented in ADR-001; website implementation has not started.

| Area | Current status | Evidence |
|---|---|---|
| Architecture | Designed | [ADR-001](../architecture/adr/ADR-001.md) |
| Implementation plan | Planned | This document |
| Astro application | Planned | No application files in the baseline |
| Internationalized routes | Planned | Not implemented |
| Documentation system | Planned | Not implemented |
| Search | Planned | Not implemented |
| Public status registry | Planned | Not implemented |
| Changelog | Planned | Not implemented |
| Deployment | Not verified | No deployment evidence recorded |

## Phase 0 — Repository and delivery audit

**Status:** In progress; baseline inspection performed, deployment configuration not verified.

Tasks:
- Inspect repository, default branch, branch protection, README, history, and tracked files.
- Inspect workflows and deployment configuration where accessible.
- Identify hosting constraints and any existing domain or deployment decisions.
- Record the verified baseline and blockers in the repository.

Exit criteria:
- A dated audit report records what was inspected, found, and could not be verified.
- No implementation assumptions are made from unavailable information.

## Phase 1 — Project foundation

**Status:** Planned

Tasks:
- Initialize Astro with TypeScript strict mode and static output.
- Establish minimal project scripts and dependency policy.
- Add formatting/linting and type-checking appropriate to the selected stack.
- Add a minimal reproducible build and CI workflow.
- Document local development and validation commands.

Exit criteria:
- Clean dependency installation succeeds.
- Type checking, linting, and production build pass in CI.
- No secrets or unnecessary dependencies are introduced.

## Phase 2 — Internationalization and routing

**Status:** Planned

Tasks:
- Configure en and fr locale routing with explicit prefixes.
- Redirect / to /en/.
- Implement translation keys and locale-aware URL helpers.
- Show language switching only when the target translation exists.
- Ensure no fabricated French pages or silent fallback content.

Exit criteria:
- Route tests cover root redirect, localized routes, missing translations, and switcher behavior.
- HTML language, canonical, and hreflang metadata are correct.

## Phase 3 — Design system and layouts

**Status:** Planned

Tasks:
- Define design tokens and responsive foundations using native CSS.
- Build accessible navigation, footer, and shared page primitives.
- Create the main website layout and dedicated documentation layout.
- Validate keyboard navigation, focus states, contrast, and responsive behavior.

Exit criteria:
- Layouts work at mobile, tablet, and desktop widths.
- Accessibility checks have no known critical blockers.

## Phase 4 — Content and documentation

**Status:** Planned

Tasks:
- Configure Astro content collections and validated schemas.
- Establish localized page and documentation content structures.
- Implement documentation routes, sections, navigation, and metadata.
- Add internal-link validation.

Exit criteria:
- Invalid content metadata fails validation.
- Documentation routes and navigation are generated from repository content.
- Missing translations are handled explicitly.

## Phase 5 — Search

**Status:** Planned

Tasks:
- Integrate Pagefind into the production build.
- Generate locale-separated indexes.
- Implement accessible search interaction, excerpts, and useful result context.

Exit criteria:
- Search works on a production build.
- English and French results are isolated.
- Search index is regenerated reproducibly.

## Phase 6 — Project status and changelog

**Status:** Planned

Tasks:
- Add a versioned, schema-validated public status registry.
- Enforce required evidence references and verification dates.
- Add status presentation that preserves the distinction between implementation, testing, and integration.
- Add a curated changelog for official releases and significant technical milestones.

Exit criteria:
- Invalid or unsupported status records are rejected.
- Public entries link to verifiable evidence.
- Changelog entries do not imply unverified completion.

## Phase 7 — Public product content

**Status:** Planned

Tasks:
- Build the home page and public sections for Aurora OS, Aurora Browser, technology, security, downloads, and about.
- Publish only claims supported by the repository's evidence registry.
- Publish downloads only when artifact provenance and integrity can be verified.

Exit criteria:
- All public claims have evidence or are explicitly presented as plans/designs.
- No private information or unsupported download is published.

## Phase 8 — Production readiness and deployment

**Status:** Planned

Tasks:
- Test routes, content, search, and production build.
- Review WCAG 2.2 AA accessibility.
- Validate security headers and Content Security Policy.
- Measure Core Web Vitals.
- Select and verify static hosting constraints.
- Configure deployment and operational documentation.

Exit criteria:
- CI passes on the release candidate.
- No unresolved critical security or accessibility issue is known.
- Performance targets are measured, not assumed: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1.
- Deployment is verified from a production URL.

## Working protocol

For each phase:
1. Inspect current repository state and relevant architecture.
2. Make the smallest coherent change.
3. Run targeted checks and tests.
4. Review the full diff for correctness, scope, and security.
5. Record outcomes and evidence in the repository.
6. Report failures and blockers without relabeling them as completed.
7. Do not start the next phase until exit criteria are met or an explicit exception is recorded.

Do not force-push, rewrite history, delete user data, or commit secrets. Use focused branches and reviewable changes. Do not push or merge changes without appropriate explicit authorization.

## Status vocabulary

Use the project-wide evidence vocabulary: implemented, tested, integrated, prototype, designed, planned, blocked, and not-verified. These statuses are not interchangeable.
