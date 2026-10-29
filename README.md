# AWS Event-Driven Policy & Validation Platform

An AWS CDK and TypeScript portfolio project for asynchronous assessment validation. The project is being built incrementally; application behavior and AWS infrastructure will be added in later, individually approved tickets. Do not deploy cloud resources as part of the bootstrap.

## Requirements

- Node.js 24 LTS (select with `nvm use` when using nvm)
- npm 11

The supported runtime is recorded in `.nvmrc` and the root `package.json` engine constraints.

## Install and verify

```sh
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Use `npm run format` to format files and `npm run format:check` to verify formatting. The initial test suite checks repository tooling; feature tests are added with their implementation tickets.

## Repository layout

- `apps/`: independently deployable application workspaces.
- `packages/`: shared contracts, domain logic, and utilities.
- `infrastructure/cdk/`: AWS CDK application and infrastructure tests.
- `tests/`: integration and end-to-end test suites.
- `docs/`: [architecture](docs/architecture.md), decisions, tickets, and the future demo script.

See [plan.md](plan.md) for scope and delivery order. The MVP uses synthetic data only. AWS credentials, real personal data, and deployment actions do not belong in this repository's bootstrap.
