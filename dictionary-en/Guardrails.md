---
title: Guardrails
description: Boundaries that define what an agent must never do, technically through blocks and filters, organisationally through policies
aliases: [Leitplanken, Safeguards]
---

Guardrails are fixed boundaries that an [agent](./Agent.md) cannot or may not cross, no matter what the prompt says. They define what should never happen: no email to external addresses, no deleting in SharePoint, no order above 1,000 euros, no passing on of salary data.

Technical guardrails are built into the system. They include blocked actions (the agent simply has no tool for deleting), filters that check inputs and outputs for personal data or prohibited content, limits such as a maximum number of steps or a budget, a [sandbox](./Sandbox.md) with test data, and mandatory approval for certain actions. In Microsoft 365 Copilot, the admin sets such limits through permissions and policies. In Copilot Studio or Claude, you decide when building which tools an agent gets at all and which actions stay blocked. What an agent cannot do, it also cannot do by accident or through [prompt injection](./Prompt Injection.md). That is the strongest protection.

Organisational guardrails are rules for use. They cover which tasks an agent may take on at all, who approves it, who spot-checks the results and what happens when something goes wrong. They are written in the [AI usage policy](./KI-Richtlinie.md) or in the agent's description and are kept by people, not enforced by technology. Both together belong to [AI governance](./KI-Governance.md).

The difference from an [approval](./Freigabe.md): an approval is a decision in the individual case. The agent asks, you say yes or no. A guardrail is a decision made in advance that applies to all cases and needs no further check-back. The difference from the AI usage policy: the policy tells people how they should use AI. Guardrails tell the AI what it may not do. Good guardrails replace many approvals: if the agent cannot send email externally at all, you do not need to be asked about every email either.

Guardrails should fit the task and grow with the [level of autonomy](./Autonomiegrad.md). An agent that only reads and summarises needs few. An agent that places orders or changes HR data needs tight ones. Start with tight boundaries and loosen them only once you have trusted the agent for weeks.

_Common misconception:_ A sentence in the prompt like “Never delete files” is not a guardrail. The model can forget it, or it can be bypassed by manipulated content. A real guardrail takes the tool for it away from the agent.

_In practice:_

> “I wrote into the agent's instructions that it never emails customers. Is that enough?”
>
> “As a policy yes, as a guardrail no. Have IT block sending to external addresses for this agent, then it cannot do it even if it ignores the instruction one day.”
