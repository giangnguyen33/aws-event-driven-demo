# T12: Integrate Validation and Completion Events

- Status: TODO
- Estimate: Included in Milestone 4 (3–5 days total)
- Prerequisites: T08, T11

## Scope

Connect the deterministic rule engine to the worker, persist terminal assessment results, and publish completion/failure events. Include recovery for the terminal write-to-publish gap.

## Deliverables

- Worker loads the assessment, applies the pure rule engine, and persists the terminal result.
- Versioned `AssessmentCompleted` and `AssessmentFailed` contracts and publication.
- Persisted terminal-event publication state and reconciliation strategy for failed publication.
- Typed classification distinguishing business outcomes from retryable infrastructure failures.
- Integration, contract, and failure-injection tests.

## Acceptance criteria

- GET eventually returns a terminal result after a valid accepted request is processed.
- Expected terminal event is published and cannot loop into the request queue.
- Injected terminal-event publication failure is eventually recovered.
- Duplicate processing does not alter the terminal result or create inconsistent event effects.
- Business failure is stored and emitted as a terminal outcome; retryable infrastructure errors remain retryable.

## Verification

- Worker/rule integration and event-contract tests.
- Tests inject failure between result persistence and event publication, then verify reconciliation.
- CDK assertions cover event routing and any terminal reconciliation resources.
- Run `npm test`, `npm run lint`, `npm run typecheck`, and `npx cdk synth`.

## Risks and questions

- Specify terminal event state transitions and reconciliation query/index with T07's approach.
- Publish retries must not lose terminal events or emit semantically conflicting duplicates.
- Error taxonomy must not classify transient AWS failures as permanent business outcomes.