---
title: Microsoft Entra Agent ID
description: A dedicated identity for AI agents in Microsoft Entra, so they can be signed in, authorised, monitored and switched off like users
aliases: [Entra Agent ID, Agent identity, Agent identity blueprint, Agent user, App registration for agents, Conditional Access for agents]
---

Microsoft Entra Agent ID gives every AI agent its own identity in Microsoft Entra, the directory service, just as employees have a user account. An agent can then be signed in, authorised, monitored and switched off with the tools IT already uses for people. It is Microsoft's answer to the question of [agent identity](./Agent-Identität.md): whose rights is the agent actually acting with?

Entra uses three building blocks. The agent identity is the account of a single agent. The agent identity blueprint is a template from which many agent identities are created and which passes its policies on to all its children. The agent user is a full user account for agents that work like a digital employee with a mailbox and Teams presence. Since May 2026, [Copilot Studio](./Copilot Studio.md) has created an Agent ID automatically for every new agent, at creation rather than on publishing. Delete the agent and the identity disappears too. Before that, each agent got its own app registration in Azure; older agents are being migrated. Agents from the [Agent Builder](./Agent Builder in Copilot.md) do not have their own Agent ID yet, as of October 2026.

The practical value shows in three access patterns. If the agent acts on behalf of the signed-in user, that user's rights apply, and the agent only sees what this person may see. That is the normal case in Copilot Chat and protects against [oversharing](./Oversharing.md). If an [autonomous agent](./Autonomer Agent.md) runs without a user, say overnight on a trigger, it acts with its own Agent ID. As an agent user, it has its own mailbox and shares. For each pattern IT can set up Conditional Access: only from the company network, only to certain services, blocked on suspicious behaviour. Sign-in and audit logs show what the agent did and when.

An agent's [connector](./Power Platform Connectors.md) permissions appear as API permissions on its identity. An admin sees at a glance that the expenses agent may reach SharePoint and Outlook, but not the personnel file.

The Agent ID itself is available to all Entra customers. The protection features for agents, meaning Conditional Access, risk detection and lifecycle governance, require [Microsoft Agent 365](./Microsoft Agent 365.md). External agents, for example from n8n or AWS, can be connected through an SDK.

_Common misconception:_ A dedicated identity does not mean the agent is allowed to do more. It means its rights are precisely defined and traceable, and that it can be blocked on its own without touching the creator's account.

_In practice:_

> “The colleague who built the onboarding agent is leaving. Does the agent die with her account?”
>
> “No, the agent has its own Agent ID in Entra. We enter a new owner and review the permissions, nothing more is needed.”
