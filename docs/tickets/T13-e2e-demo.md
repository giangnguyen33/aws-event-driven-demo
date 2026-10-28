# T13: End-to-End Verification and Demo

- Status: TODO
- Estimate: Included in Milestone 4 (3–5 days total)
- Prerequisites: T10, T12

## Scope

Make the accepted MVP reproducible for a reviewer in an isolated dev environment. Documentation and scripts must use synthetic fixtures and explicit deployment approval.

## Deliverables

- E2E script or test for POST → EventBridge → SQS → worker → GET terminal status.
- Synthetic fixtures and clear setup/cleanup instructions.
- `docs/demo-script.md` for normal flow, transient failure, poison/DLQ/redrive, duplicate event, and reconciliation.
- README links to architecture, checks, deployment controls, and demo.
- Screenshots or other evidence only if useful and generated without real data.

## Acceptance criteria

- A reviewer can follow written instructions from a fresh environment to run checks and reproduce the normal flow.
- Failure scenarios explain expected observations and safe recovery steps.
- AWS deployment, failure injection, redrive, and destroy commands are opt-in and clearly guarded; no resource is deployed or deleted automatically.
- Cost, budget alert, credentials/OIDC, and cleanup cautions are documented.
- The AI extension is clearly identified as future work, not an MVP prerequisite.

## Verification

- Run all local checks and the E2E test against an explicitly approved isolated dev stack when available.
- Review commands for correct environment targeting and non-destructive defaults.
- Confirm documented outputs match observed results; do not claim unrun scenarios.

## Risks and questions

- Deployed E2E checks require an AWS account, region, budget alert, and user authorization.
- Keep fixtures synthetic and ensure screenshots/log examples contain no secrets or real personal data.