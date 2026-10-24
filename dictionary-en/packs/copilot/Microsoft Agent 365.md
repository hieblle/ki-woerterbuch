---
title: Microsoft Agent 365
description: Microsoft's control plane for all agents in a company, registry, identity, access, data protection and monitoring in one place
aliases: [Agent 365, Agent Registry, Control Plane for Agents]
---

Microsoft Agent 365 is the control plane a company uses to keep track of, steer and secure all of its AI [agents](./Agent.md). Microsoft sums it up in three verbs: observe, govern, secure. According to Microsoft, Agent 365 has been generally available since May 2026 and is licensed per user. It is included in Microsoft 365 E7 and available as an add-on to E5 and Business Premium (as of October 2026).

The core is the Agent Registry in the Microsoft 365 admin center: a directory of all agents, regardless of where they were built. That covers agents from [Copilot Studio](./Copilot Studio.md), from the [Agent Builder](./Agent Builder in Copilot.md), from Microsoft Foundry, from partners in the [Agent Store](./Agent Store.md) and, through a dedicated SDK, agents developed in house or elsewhere. For each agent you see who created it, who uses it, which data and tools it reaches, which permissions it holds and whether risks were detected. An Agent Map shows the connections between agents, users and data sources.

Governing means managing lifecycle and access. Admins approve, block or remove agents, assign orphaned agents to a new owner and apply policy templates. Identity comes from [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md), so an agent can sign in like a user and be restricted through Conditional Access. For data, Microsoft Purview steps in: [DLP](./DLP.md), [audit and eDiscovery](./eDiscovery und Audit.md) and [DSPM for AI](./DSPM for AI.md) treat an agent with its own account like a person. Files have to be shared with such an agent explicitly, it inherits no rights. Microsoft Defender adds threat detection, for instance when an agent suddenly reads an unusual number of files.

The distinction: Copilot Studio is where agents are built. The Copilot settings in the admin center handle basic management. Agent 365 adds the overarching layer on top and also includes agents that do not come from the Microsoft ecosystem. Without an Agent 365 licence, parts of the admin center such as the security tab and the risk column stay empty.

For [AI governance](./KI-Governance.md), Agent 365 is the technical counterpart of the register of AI applications: the list someone used to maintain by hand in SharePoint is created here automatically. The organisational questions remain: who owns which agent, who reviews new agents, when is one switched off.

_Common misconception:_ Agent 365 does not build agents and does not make them better. It makes visible what already exists and gives IT the levers to step in.

_In practice:_

> “How many agents are actually running here? Every department has built something.”
>
> “Look in the Agent Registry. They are all there, including the ones from Agent Builder, with creator, users and data access. The ones without an owner we can block right away.”
