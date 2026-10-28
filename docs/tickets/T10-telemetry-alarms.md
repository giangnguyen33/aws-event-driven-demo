# T10: Structured Telemetry and Alarms

- Status: TODO
- Estimate: Included in Milestone 3 (3–4 days total)
- Prerequisites: T06

## Scope

Make one assessment traceable across API, event, queue, worker, and persistence, and alert on key operational failures. Keep logs free of sensitive payloads.

## Deliverables

- Structured logs with propagated correlation ID and assessment ID where appropriate.
- CloudWatch metrics/alarms for DLQ messages, queue age, API errors, and worker errors.
- Optional tracing if its setup/cost is justified and documented.
- Alarm thresholds, response notes, and synthetic failure demonstration steps.

## Acceptance criteria

- A reviewer can follow one synthetic assessment across component logs using its correlation ID.
- Logs omit real identifiers, full request bodies, credentials, and unnecessary sensitive values.
- Alarms cover DLQ depth, queue age, and API/worker failure signals with actionable names.
- A documented failure scenario can trigger at least one alarm.

## Verification

- Unit tests verify structured log shape and sensitive-field redaction.
- CDK assertions verify alarm metrics, thresholds, and dimensions.
- `npm test`, `npm run lint`, and `npm run typecheck`; alarm exercise in AWS only with explicit approval.

## Risks and questions

- Thresholds and evaluation periods must avoid noisy alarms while remaining useful for a low-volume demo.
- Tracing and log retention incur cost; use only the minimum useful configuration.