# ADR 0001: EventBridge Routing and SQS Work Queues

- Status: Accepted for MVP
- Date: 2026-10-28

## Context

Assessment submission must not depend on a validation worker being immediately available. The system also needs explicit event routing, independent subscribers, retry handling, DLQs, and a future policy subscriber that does not disrupt deterministic validation.

## Decision

Publish versioned domain events to a custom EventBridge bus and route `AssessmentRequested` to an assessment-owned SQS queue. Each independent consumer gets its own queue. Lambda consumes from SQS. Rules match explicit event source and detail type; completion/failure events never match the request queue.

## Consequences

The producer and worker are decoupled and queue delivery is durable and at least once. Routing and buffering have separate responsibilities, and subscribers can evolve independently. The system must handle duplicates and configure visibility timeout, redrive policy, DLQ, and event-pattern assertions. EventBridge and SQS add resources and cost; avoid unnecessary buses or queues.