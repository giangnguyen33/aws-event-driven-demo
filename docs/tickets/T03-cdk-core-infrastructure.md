# T03: CDK Application and Core Infrastructure

- Status: TODO
- Estimate: 2–3 engineering days for Milestone 1 with T04
- Prerequisites: T02

## Scope

Create the AWS CDK v2 application and core dev stack. This ticket establishes infrastructure primitives; assessment handlers and event-processing behavior belong to later tickets.

## Deliverables

- CDK app and stack with environment configuration, unique dev prefix, tags, and useful outputs.
- API Gateway HTTP API and Lambda execution-role foundation.
- DynamoDB assessment table with on-demand dev capacity and explicitly chosen initial keys.
- Resource policies/roles scoped to required resources; no broad grants.
- CDK assertions for the core resources and configuration.
- Documented synth, deploy, update, and destroy commands, with deployment requiring explicit user approval.

## Acceptance criteria

- `cdk synth` succeeds and CDK assertions pass.
- Stack configuration avoids unnecessary VPC/NAT or always-on resources.
- Resources are isolated by environment/prefix and consistently tagged.
- Outputs and cleanup steps are documented; no resources are deployed by default.
- IAM grants are restricted to needed actions and resources.

## Verification

- `npm run build`, `npm test`, and `npx cdk synth` (or documented workspace equivalents).
- CDK assertions verify API/table presence, environment configuration, tags where practical, and least-privilege policy shape.
- Deployment is an opt-in operator action, not part of automated ticket verification.

## Risks and questions

- AWS account, region, naming prefix, and budget alert amount are environment-specific.
- Final table indexes depend on T07/T12 reconciliation access patterns; avoid speculative indexes.
- Review AWS billing and configure a budget alert before any deployment.