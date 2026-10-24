---
title: Sandbox
description: A sealed-off environment with test data and restricted permissions where an agent works without reaching production systems
aliases: [Test environment, Testumgebung, Test tenant]
---

A sandbox is a sealed-off area in which an [agent](./Agent.md) can work without reaching real systems. It gets test data instead of customer data, restricted permissions instead of your permissions, and no access to production systems such as the real SharePoint, the CRM or the mail server.

The name comes from the children’s sandpit: what happens in there stays in there. If the agent makes a mistake, deletes the wrong folder or sends an email to everyone, it hits copies, test addresses or an empty account. None of it has consequences for customers, colleagues or accounting. That limits the damage to the area where a mistake costs nothing, and that is exactly where you try out new things.

An example: the HR department wants an agent that sorts applications from the inbox and files them in the applicant folder. Instead of running it in the real SharePoint right away, IT sets up a test tenant, meaning a second, separate Microsoft 365 environment with twenty made-up applications and a test mailbox. The agent runs there for two weeks. If it files documents in the wrong place or mixes up names, you see it without any real applicant data being affected. Only after that does it get access to the real system, initially with read permissions only.

Technically, sandboxes exist on several levels. Coding agents such as Claude Code or GitHub Copilot run programs in an isolated container that disappears after the run. [Computer use](./Computer Use.md) ideally runs in its own browser with its own account. Copilot Studio and Microsoft 365 offer test environments for agents before they are published to the company. The principle is always the same: separate data, separate permissions, separate effects.

The sandbox is the natural first step before the [level of autonomy](./Autonomiegrad.md) increases. Whatever works reliably in the sandbox may gradually move on to real data, preferably read-only at first and with [approval](./Freigabe.md) for anything that writes. That is why a sandbox is one of the most important [guardrails](./Guardrails.md).

_Common misconception:_ A copy of the real customer database is not a sandbox. The permissions may be restricted, but the [personal data](./Personenbezogene Daten.md) is real, and [data leakage](./Datenabfluss.md) would be just as bad as in the production system.

_In practice:_

> “Can’t we just test the invoice agent in the real SharePoint? Then we see straight away whether it works.”
>
> “Better in the test tenant with copies of ten old invoices. If it files something wrong there, it costs nothing. In the real system we would be searching for it for weeks afterwards.”
