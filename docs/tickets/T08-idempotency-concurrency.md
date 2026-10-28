# T08: Idempotency and Concurrency Safety

- Status: TODO
- Estimate: 3–4 engineering days for Milestone 3 with T09–T10
- Prerequisites: T06

## Scope

Make worker state transitions and result persistence safe under duplicate and concurrent message delivery. Keep retry and DLQ operator workflow in T09.

## Deliverables

- Conditional transition from `PENDING` to `PROCESSING` and safe terminal-state handling.
- Idempotent result persistence keyed by assessment identity and relevant event identity.
- Explicit handling for duplicate, stale, concurrent, and already-terminal events.
- Unit and integration tests for duplicate and concurrency scenarios.

## Acceptance criteria

- Identical event publication or concurrent delivery cannot create inconsistent final results.
- A message is acknowledged only after successful processing or an explicitly safe duplicate outcome.
- Conditional-write conflicts have predictable handling and do not become silent data loss.
- The implementation remains at-least-once tolerant and does not claim exactly-once delivery.

## Verification

- Focused state-transition tests, including repeated and concurrent attempts.
- DynamoDB adapter tests verify conditional expressions and conflict behavior.
- Run `npm test`, `npm run lint`, and `npm run typecheck`.

## Risks and questions

- Define stale-processing recovery or lease semantics if a worker crashes after claiming an item.
- Align idempotency identity with event contract and T12 terminal-write behavior.