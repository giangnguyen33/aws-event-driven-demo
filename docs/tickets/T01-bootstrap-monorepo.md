# T01: Bootstrap Monorepo

- Status: TODO
- Estimate: 1–2 engineering days
- Prerequisites: None

## Scope

Create the small npm-workspaces TypeScript monorepo foundation described in `plan.md`. This ticket establishes tooling and documentation only; do not build application behavior or AWS resources.

## Deliverables

- Root npm workspaces and scripts for build, lint, test, and typecheck.
- Strict TypeScript configuration and Node.js LTS runtime convention.
- ESLint, Prettier, and Vitest configuration.
- `.gitignore` and example root README with setup and local check instructions.
- Minimal package/app directory scaffolding only where needed for workspace tooling.

## Acceptance criteria

- A clean dependency install succeeds from the repository root.
- `npm run lint`, `npm test`, `npm run build`, and `npm run typecheck` succeed from a clean checkout.
- Workspace boundaries support the planned `apps/`, `packages/`, and `infrastructure/cdk/` layout.
- No credentials, real personal data, deployed resources, or unrelated product code are added.

## Verification

Run `npm ci` (or the documented clean-install equivalent), then `npm run lint`, `npm test`, `npm run build`, and `npm run typecheck`.

## Risks and questions

- Select and pin the supported Node.js LTS version when implementation starts; align local guidance and CI.
- Keep initial scaffolding minimal so future tickets can own their respective packages.