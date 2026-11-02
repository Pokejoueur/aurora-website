# Aurora Website

The public-facing website for the Aurora ecosystem.

## Current implementation

The initial foundation uses Astro with static output and strict TypeScript configuration.

- English launch route: `/en/`
- French: configured as a future locale; no French pages are published yet.
- Responsive landing page and shared site layout.
- GitHub Actions validates Astro components and builds the static output.

The Aurora OS and Aurora Browser cards deliberately avoid capability claims until the website repository contains verifiable public evidence.

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

This repository is the source of truth for the Aurora Website. See the roadmap for phase status and exit criteria. A successful local or CI build is not evidence of a production deployment.
