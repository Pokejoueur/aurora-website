# Aurora Website

The public-facing information, documentation and communication platform for the Aurora ecosystem.

## Current implementation

The application uses Astro, TypeScript strict mode, static output and native CSS.

- English routes under `/en/`.
- Root route redirects to the default locale.
- Shared navigation, footer and content-page layout.
- Homepage covering the brand, principles, ecosystem, engineering, development, documentation and community.
- Initial English entry pages for Aurora OS, Aurora Browser, Aurora Website, engineering, development, documentation and community.
- A static evidence/status registry at `src/data/status.json`.
- GitHub Actions validates the public status registry, runs Astro checks and creates a static production build.

French is configured as a future locale; no French pages are published. Do not infer French availability from the routing configuration.

## Evidence and content policy

The OS and Browser pages deliberately avoid implementation claims until public evidence has been reviewed and recorded in this repository. The status registry is manually maintained, not live-synchronized with GitHub. The current logo SVG is a simplified reconstruction and must be replaced with the approved source asset before public launch.

## Requirements

- Node.js 22.22.0 or newer
- npm

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run check
npm run build
npm run preview
```

## Project documentation

- [Architecture decision ADR-001](docs/architecture/adr/ADR-001.md)
- [Implementation roadmap](docs/development/roadmap.md)
- [Repository governance](docs/governance/source-of-truth.md)
- [Repository audit](docs/development/audit-2026-11-02.md)

## Status

This repository is the source of truth for Aurora Website. See the roadmap for phase status and exit criteria. A successful CI build is not evidence of production deployment.
