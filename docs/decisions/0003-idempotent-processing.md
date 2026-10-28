# ADR 0003: At-Least-Once Processing and Idempotency

- Status: Accepted for MVP
- Date: 2026-10-28

## Context

SQS/Lambda delivery and retries can invoke processing more than once, including concurrently. Event publication and database writes are not one atomic operation.

## Decision

Treat duplicate delivery as normal. Use conditional DynamoDB transitions to claim/process an assessment and idempotent result writes keyed by assessment identity and relevant event identity. Acknowledge a message only after successful processing. Persist terminal business failures and publish their failure event; allow retryable infrastructure errors to fail the invocation. For batches larger than one, return partial batch failures.

## Consequences

Retries and safe redrive can be used without intentionally duplicating final effects. Conditional-write conflicts and already-terminal states need predictable handling and tests. Idempotency does not by itself close the write-to-event-publish gap; reconciliation is separately required.