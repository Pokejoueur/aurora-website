# Aurora Website implementation roadmap

- **Status:** In progress
- **Architecture reference:** [ADR-001](../architecture/adr/ADR-001.md)
- **Last reviewed:** 2026-11-02

This roadmap is the authoritative implementation sequence for Aurora Website. Completion requires evidence against each phase's exit criteria; discussion or source-code presence alone is insufficient.

## Current baseline

The original repository baseline was a single README. The documentation/governance set has since been merged into main. The initial Astro foundation is under review in a separate pull request.

| Area | Current status | Evidence |
|---|---|---|
| Architecture | Designed | [ADR-001](../architecture/adr/ADR-001.md) |
| Governance | Implemented as repository documentation | [Source-of-truth policy](../governance/source-of-truth.md) |
| Repository audit | Implemented as repository documentation | [Audit report](audit-2026-11-02.md) |
| Astro application | Prototype; CI check and static build passed | [Foundation pull request](https://github.com/Pokejoueur/aurora-website/pull/2), [successful CI run](https://github.com/Pokejoueur/aurora-website/actions/runs/41508408287) |
| English landing page | Prototype; included in successful static build | [Foundation pull request](https://github.com/Pokejoueur/aurora-website/pull/2), [successful CI run](https://github.com/Pokejoueur/aurora-website/actions/runs/41508408287) |
| French routes/content | Planned | No French page is published |
| Documentation system | Planned | Not implemented |
| Search | Planned | Not implemented |
| Public status registry | Planned | Not implemented |
| Changelog | Planned | Not implemented |
| Production deployment | Not verified | No deployment evidence recorded |

## Phase 0 — Repository and delivery audit

**Status:** Completed with limitations.

Tasks completed:
- Inspected repository metadata, default branch, branch protection, tracked files, README, and recent history.
- Confirmed no pre-existing frontend, build configuration, CI workflow, or deployment configuration in the initial repository baseline.
- Recorded unavailable deployment information and hosting constraints in the [audit report](audit-2026-11-02.md).

Limitations:
- The deployment endpoint could not be inspected through the available GitHub connection.
- GitHub Pages was not enabled in repository metadata at audit time.
- No hosting provider or custom domain has been selected.

## Phase 1 — Project foundation

**Status:** In progress; Astro check and static build pass in CI, with reproducibility and review items remaining.

Tasks:
- Initialize Astro with TypeScript strict mode and static output.
- Establish minimal project scripts and dependency policy.
- Add formatting/linting and type-checking appropriate to the selected stack.
- Add a minimal reproducible build and CI workflow.
- Document local development and validation commands.

Implemented in the current foundation branch:
- Astro static project manifest and configuration.
- Strict TypeScript configuration.
- English landing page and shared responsive layout.
- Root redirect to the default locale.
- Basic GitHub Actions validation/build workflow.
- README development instructions.

Not yet verified:
- Clean dependency installation.
- Astro type check.
- Production build.
- Browser rendering and responsive behavior.
- Deployment.

Exit criteria:
- [x] Dependency installation succeeds in CI.
- [x] Astro/TypeScript check and production build pass in CI.
- [ ] Add a committed lockfile and switch CI to a reproducible install (`npm ci`).
- [ ] Decide whether a dedicated formatter/linter is justified; do not add tooling without a defined rule set.
- [ ] Complete browser-level responsive and accessibility review.
- [x] No secrets or unnecessary dependencies were introduced in the reviewed foundation changes.

## Phase 2 — Internationalization and routing

**Status:** Partially established by foundation configuration; full phase remains planned.

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

**Status:** Prototype foundation exists; full phase planned.

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
