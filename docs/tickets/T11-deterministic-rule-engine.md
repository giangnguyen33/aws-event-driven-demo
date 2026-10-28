# T11: Pure TypeScript Rule Engine

- Status: TODO
- Estimate: 3–5 engineering days for Milestone 4 with T12–T13
- Prerequisites: T05

## Scope

Implement a small deterministic validation package with no AWS dependencies. This is demo validation only, not legal or compliance advice.

## Deliverables

- Typed rule input/output and reason model.
- Pure validator functions for AU corporation ABN checksum/format and US sole-trader SSN format/constraints, using synthetic data only.
- Tests for known valid/invalid synthetic checksum/format examples and boundaries.
- Documentation clearly labeling the supported checks and their limitations.

## Acceptance criteria

- The package runs independently of AWS adapters and infrastructure.
- Positive, negative, malformed, and boundary cases are covered.
- No real ABN/SSN or customer data is committed or logged.
- Results and reasons are typed, deterministic, and stable for identical inputs.
- The implementation does not claim full legal identity or compliance validation.

## Verification

- Focused rule-engine unit tests, then `npm test`, `npm run lint`, and `npm run typecheck`.
- Verify tests include synthetic checksum cases and US format/constraint cases.

## Risks and questions

- Synthetic examples must not be mistaken for real identities or authoritative validation.
- Country/company-type applicability should be explicit; unsupported combinations need a defined result.