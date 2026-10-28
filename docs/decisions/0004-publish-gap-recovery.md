# ADR 0004: Recovery for Event Publication Gaps

- Status: Accepted for MVP; mechanism to be finalized in T07/T12
- Date: 2026-10-28

## Context

The API persists an assessment and then publishes `AssessmentRequested`. These operations are not atomic, so publication may fail after persistence. Likewise, the worker may persist a terminal result and fail to publish its completion/failure event.

## Decision

Persist publication state with the assessment and implement reconciliation for unpublished request events and unpublished terminal events. The reconciler must be repeatable and safe under concurrent execution; downstream processing remains idempotent. A scheduled query over an appropriate status/index is preferred when simple. Bounded scans may be used for the demo only with explicit limits and documented scaling limitations. A transactional outbox is deferred.

## Consequences

The MVP can eventually recover from both publish gaps without introducing an outbox table or changing the initial write model. Reconciliation adds operational and test complexity and requires discoverable pending records, bounded work, and observability. T07 and T12 must specify scheduling, query/index, retry behavior, and how publication status changes atomically enough to avoid lost recovery work.