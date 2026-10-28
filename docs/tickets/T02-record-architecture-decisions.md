# T02: Record Architecture Decisions

- Status: TODO
- Estimate: Included in Milestone 0 (1–2 days total)
- Prerequisites: T01

## Scope

Document and, if needed, refine the non-AI MVP architecture. Do not implement infrastructure or application code.

## Deliverables

- `docs/architecture.md` with context, component ownership, event flow, lifecycle, reliability, security/cost guardrails, test strategy, and assumptions.
- ADRs for EventBridge plus SQS, DynamoDB persistence, idempotency, and event-publication-gap recovery.
- Architecture diagram and ticket links.

## Acceptance criteria

- Request and terminal event paths, ownership, state transitions, and failure behavior are unambiguous.
- Request queue filters cannot loop completion/failure events back to the worker.
- Both request-publish and terminal-event-publish gaps have documented recovery intent.
- At-least-once delivery, duplicate handling, synthetic data, least privilege, cost limits, and deferred AI boundary are explicit.
- Open decisions are called out rather than silently assumed.

## Verification

- Review every architecture decision against `plan.md` and resolve contradictory statements.
- Check all internal document links and Mermaid syntax in the repository's available Markdown tooling, if configured.
- No cloud deployment is required or permitted by this ticket.

## Risks and questions

- Do not overstate a reconciler design before its index, scheduling, and concurrency approach is selected in T07/T12.
- Production retention and compliance requirements are outside MVP scope.