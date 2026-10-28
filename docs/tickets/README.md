# MVP Implementation Tickets

All tickets below are planning artifacts. Status is `TODO` for each. Do not implement a ticket until the user explicitly names it; after completing a ticket, stop and wait for the next instruction. Do not deploy, incur cloud costs, or destroy resources without explicit approval.

Estimates are indicative hands-on engineering days for an experienced TypeScript engineer using coding assistance, as described in [plan.md](../../plan.md). The plan estimates milestones, not individual tickets.

## Implementation order and dependencies

| Ticket | Title | Estimate | Prerequisites |
|---|---|---:|---|
| [T01](T01-bootstrap-monorepo.md) | Bootstrap monorepo | Milestone 0: 1–2 days total | None |
| [T02](T02-record-architecture-decisions.md) | Record architecture decisions | Milestone 0: 1–2 days total | T01 |
| [T03](T03-cdk-core-infrastructure.md) | CDK application and core infrastructure | Milestone 1: 2–3 days total | T02 |
| [T04](T04-ci-and-deployment.md) | CI pipeline and deployment workflow | Milestone 1: 2–3 days total | T03 |
| [T05](T05-assessment-api-persistence.md) | API request persistence | Milestone 2: 3–4 days total | T03 |
| [T06](T06-event-queue-worker-wiring.md) | EventBridge, SQS, and worker wiring | Milestone 2: 3–4 days total | T05 |
| [T07](T07-publish-gap-reconciliation.md) | Publish-gap reconciliation | Milestone 2: 3–4 days total | T06 |
| [T08](T08-idempotency-concurrency.md) | Idempotency and concurrency safety | Milestone 3: 3–4 days total | T06 |
| [T09](T09-retries-dlq-redrive.md) | Retries, DLQ, and redrive | Milestone 3: 3–4 days total | T06, T08 |
| [T10](T10-telemetry-alarms.md) | Structured telemetry and alarms | Milestone 3: 3–4 days total | T06 |
| [T11](T11-deterministic-rule-engine.md) | Pure TypeScript rule engine | Milestone 4: 3–5 days total | T05 |
| [T12](T12-validation-completion-events.md) | Integrate validation and completion events | Milestone 4: 3–5 days total | T08, T11 |
| [T13](T13-e2e-demo.md) | End-to-end verification and demo | Milestone 4: 3–5 days total | T10, T12 |

Milestone order: T01–T02; T03–T04; T05–T07; T08–T10; T11–T13, respecting the prerequisites above. Independent work may overlap only after prerequisites and interfaces are stable. T14–T17 (AI extension) are deliberately not ticketed here and must not begin before MVP acceptance.

## Common ticket rules

- Change only the scope of the explicitly authorized ticket; ask before architecture changes.
- Tests, documentation updates, and evidence for acceptance are part of the ticket, not optional follow-up.
- Never commit credentials or real personal data. Use synthetic fixtures only.
- Do not deploy, incur cloud costs, delete resources, or perform destructive actions without explicit approval.
- Do not mark a ticket `DONE` until all acceptance criteria are demonstrated. Report commands, results, risks, and changed files, then wait.