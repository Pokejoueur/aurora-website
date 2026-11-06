# Aurora Website

The public information, documentation and communication platform for the Aurora ecosystem. Its primary product destinations are **Aurora OS** and **Lumen (Aurora Browser)**; the website also provides the future entry points for OS add-ons and browser extensions.

## Current implementation

- Astro static output with TypeScript strict mode and native CSS.
- English routes under `/en/`; French is configured as a future locale but no French content is published.
- Reference-led Aurora homepage, shared navigation and responsive footer.
- Dedicated Aurora OS and Lumen pages, plus OS add-on and Lumen extension catalogue entry points.
- Engineering: architecture, security, privacy and architecture decisions.
- Development: status registry, roadmap, changelog and verification information.
- Documentation: getting started, user, developer, reference and FAQ pages, with client-side filtering on the documentation index.
- Downloads, community contribution/feedback and legal/accessibility information.
- A manually maintained evidence registry at `src/data/status.json`.
- GitHub Actions validates the registry, runs Astro checks and builds the static site.

The add-on and extension catalogue pages are informational placeholders. No packages or installation resources are currently distributed. Product implementation claims remain NOT VERIFIED unless evidence is reviewed and recorded.

## Requirements

- Node.js 22.22.0 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

## Validation and production build

```sh
npm run check
npm run build
npm run preview
```

The production output is generated in `dist/`. The preview command serves the built output locally; it does not deploy the website.

## Hosting on Cloudflare Pages

Recommended low-cost static hosting path:

1. Push the branch to GitHub and merge the reviewed pull request into `main`.
2. Sign in to Cloudflare and open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select `Pokejoueur/aurora-website` and the `main` branch.
4. Set the framework preset to **Astro** (or choose the static build settings manually).
5. Set the build command to `npm run build`.
6. Set the build output directory to `dist`.
7. Set the Node.js version to `22.22.0` or newer in the build environment.
8. Deploy. Cloudflare will provide a `*.pages.dev` preview/production hostname.
9. Add your custom domain in the Pages project settings and apply the DNS records Cloudflare provides.
10. After the real domain is selected, configure the canonical URL and sitemap, then verify redirects, headers and the deployed routes.

Do not add a made-up domain to canonical or sitemap metadata. The repository does not currently contain a production domain.

### Alternative: Netlify or Vercel

Both can host the static output. Use `npm run build` as the build command and `dist` as the publish/output directory. Keep Node.js at 22.22.0 or newer.

## Project documentation

- [Architecture decision ADR-001](docs/architecture/adr/ADR-001.md)
- [Implementation roadmap](docs/development/roadmap.md)
- [Repository governance](docs/governance/source-of-truth.md)
- [Initial repository audit](docs/development/audit-2026-11-02.md)

## Evidence policy

This repository is the source of truth for Aurora Website. A passing build proves that the site can be generated for the tested revision; it does not prove browser accessibility, production readiness or the state of Aurora OS and Lumen.
