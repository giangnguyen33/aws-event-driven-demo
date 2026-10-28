# T06: EventBridge, SQS, and Worker Wiring

- Status: TODO
- Estimate: Included in Milestone 2 (3–4 days total)
- Prerequisites: T05

## Scope

Connect persisted assessments to an event-driven worker path using versioned contracts, EventBridge, SQS, and Lambda. Keep rule evaluation minimal or stubbed until T11/T12.

## Deliverables

- Versioned `AssessmentRequested` JSON schema, runtime validation, and contract tests.
- EventBridge custom bus and explicit rule to the assessment SQS queue.
- Assessment queue, DLQ/redrive policy, and SQS-triggered worker Lambda configuration.
- API publication adapter and worker event parsing boundary.
- CDK assertions for routes, queue wiring, and timeout relationships.

## Acceptance criteria

- A persisted accepted request can publish `AssessmentRequested` and reach the worker queue.
- Event contract includes event ID/version, correlation ID, occurrence time, and assessment ID.
- Request rule cannot route `AssessmentCompleted` or `AssessmentFailed` back into the request queue.
- Unsupported major event versions are rejected explicitly; unknown optional fields are tolerated.
- Visibility timeout exceeds the configured worker timeout.

## Verification

- Contract/schema unit tests and focused CDK assertions.
- Producer/consumer adapter tests using mocks/local test fixtures.
- `npm test`, `npm run lint`, `npm run typecheck`, and `npx cdk synth` (or workspace equivalents).
- Do not deploy without explicit approval.

## Risks and questions

- Configure batch size and partial batch failure reporting together; batch size greater than one requires per-record failure responses.
- Ensure IAM permissions cover only the intended bus and queue actions.
- T07 must own recovery if publication fails after persistence.