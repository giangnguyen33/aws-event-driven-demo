# T09: Retries, DLQ, and Redrive

- Status: TODO
- Estimate: Included in Milestone 3 (3–4 days total)
- Prerequisites: T06, T08

## Scope

Set bounded retry/redrive behavior and document safe operator handling for poison messages. Preserve T08 idempotency and avoid acknowledging failed work.

## Deliverables

- Queue visibility, receive-count, redrive, and DLQ retention configuration.
- Worker error classification for retryable infrastructure errors versus terminal business outcomes.
- Partial batch failure responses if configured batch size exceeds one.
- DLQ inspection and safe redrive runbook with prerequisites and cautions.
- Failure-injection tests or reproducible local scenarios.

## Acceptance criteria

- Transient worker failure is retried and can recover.
- Poison messages exhaust bounded receives and reach the DLQ.
- Business validation failures persist a terminal outcome instead of retrying indefinitely.
- Redrive after remediation is safe and does not duplicate final effects.
- Only successfully processed records are acknowledged.

## Verification

- Unit tests for error classification and partial batch response.
- CDK assertions for receive count, visibility timeout, and DLQ retention.
- Failure scenario demonstrates retry, DLQ arrival, remediation guidance, and safe redrive. AWS execution requires explicit approval.

## Risks and questions

- Select conservative receive count, retention, visibility, and worker timeout values; document the rationale.
- Avoid runbook commands that could redrive a production or unintended queue without confirmation.