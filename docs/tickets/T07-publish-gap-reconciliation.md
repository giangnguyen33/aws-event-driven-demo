# T07: Publish-Gap Reconciliation

- Status: TODO
- Estimate: Included in Milestone 2 (3–4 days total)
- Prerequisites: T06

## Scope

Recover assessment records persisted as pending/unpublished when initial request-event publication fails. Do not build a general workflow engine or replace the design with a transactional outbox without approval.

## Deliverables

- Explicitly selected reconciliation trigger and query strategy, such as a scheduled Lambda querying a status index.
- CDK resources, narrow IAM, bounded work, and operational metrics/logging.
- Safe publication-status transitions and repeated/concurrent-run behavior.
- Failure-injection tests and a short operational explanation.

## Acceptance criteria

- Simulated EventBridge publication failure leaves a discoverable record.
- Reconciliation eventually republishes and leads to processing.
- Repeated reconciliation and duplicate request delivery do not change the final outcome.
- Work per invocation is bounded; any scan limitations are documented.
- Recovery failures remain observable and retryable; no item is marked published before the publish succeeds.

## Verification

- Unit tests for selection, state transitions, repeated runs, and publish errors.
- CDK assertions for schedule/trigger, query resources, and least-privilege permissions.
- Integration/failure-injection scenario verifies publish failure followed by recovery; deployed test only with explicit AWS approval.

## Risks and questions

- Finalize a DynamoDB index/query pattern and maximum work per run before implementation.
- Concurrent reconciler invocations can race; conditional updates and idempotent downstream handling are required.
- Schedule frequency trades recovery latency against invocation cost.