# ADR 0002: DynamoDB Assessment Persistence

- Status: Accepted for MVP
- Date: 2026-10-28

## Context

The API and asynchronous worker need a shared durable record for assessment status, result, publication state, and timestamps. The demo favors low operational overhead and cost-conscious infrastructure.

## Decision

Use one DynamoDB table for MVP assessment lifecycle and result data, with on-demand capacity in the dev stack. Define keys and any index from concrete lookup and reconciliation access patterns. Use conditional writes for state transitions. TTL is optional for disposable test records only and is not a recovery mechanism.

## Consequences

The managed table avoids database server administration and supports conditional updates. Access patterns and indexes must be deliberately modeled; do not assume arbitrary queries or use broad scans as an unbounded production strategy. Document dev retention and production differences. Table permissions must be restricted to the required operations and resource.