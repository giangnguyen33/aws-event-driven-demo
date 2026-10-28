# T04: CI Pipeline and Deployment Workflow

- Status: TODO
- Estimate: Included in Milestone 1 (2–3 days total)
- Prerequisites: T03

## Scope

Automate non-deploying quality checks for pull requests and optionally provide a manually controlled dev deployment workflow. Do not deploy during implementation without explicit approval.

## Deliverables

- GitHub Actions checks for typecheck, lint, unit tests, CDK synth, and appropriate security checks.
- Optional dev deployment job gated by manual approval/environment protections and GitHub OIDC.
- Workflow permissions minimized; no static AWS access keys.
- Documentation for repository environment setup, OIDC trust configuration, and approval controls.

## Acceptance criteria

- Pull requests run the required checks and fail clearly when one fails.
- CI does not require AWS credentials for build, tests, or CDK synth.
- Any deployment uses OIDC, a protected environment, and an explicit manual gate.
- No secrets or credentials are committed; deployment is not automatically triggered by an untrusted pull request.

## Verification

- Validate workflow syntax and run all referenced local commands.
- Exercise the workflow on a branch/PR when repository access permits.
- Verify deployment job remains gated; do not assume or perform a cloud deployment.

## Risks and questions

- OIDC trust conditions and environment names depend on the target GitHub repository and AWS account.
- Security-check tools should be selected with maintenance and false-positive handling in mind.