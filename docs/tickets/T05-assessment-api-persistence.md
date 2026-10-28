# T05: API Request Persistence

- Status: TODO
- Estimate: 3–4 engineering days for Milestone 2 with T06–T07
- Prerequisites: T03

## Scope

Implement assessment creation and retrieval at the HTTP API boundary, including input validation and durable lifecycle records. Event routing is T06; coordinate interfaces without expanding scope into its implementation.

## Deliverables

- `POST /assessments` and `GET /assessments/{id}` Lambda handlers.
- Request validation, assessment ID generation, DynamoDB persistence, and safe response/error shapes.
- Conditional creation/state metadata, timestamps, and `publishStatus` initialized for reconciliation.
- Unit and adapter tests, plus API contract documentation.

## Acceptance criteria

- A valid synthetic request returns `202 Accepted` and an assessment ID with `PENDING` status.
- GET retrieves the assessment in pending and later lifecycle states.
- Invalid requests are rejected before event publication and do not leak internals.
- Duplicate submission behavior is documented and tested.
- Only synthetic identifiers are used; payload bounds are enforced.

## Verification

- Run focused handler and DynamoDB-adapter unit tests, then `npm test`, `npm run lint`, and `npm run typecheck`.
- API contract tests verify status codes, schema validation, and duplicate behavior.
- Integration checks may use local mocks; deployment is not required.

## Risks and questions

- Decide duplicate-submit identity and response semantics before coding.
- Align item keys and indexes with T07 reconciliation without adding broad scans prematurely.
- Ensure logs do not include sensitive request payloads.