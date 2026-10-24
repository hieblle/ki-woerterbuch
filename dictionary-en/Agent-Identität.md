---
title: Agent Identity
description: Whose permissions an agent acts with, your account, the creator's account or its own account with its own rights
aliases: [Agent identity, Agent ID, Agent account, Service account, Entra Agent ID]
---

Agent identity answers the question of whose permissions an [agent](./Agent.md) acts with: your user account, the account of the person who built it, or its own account that is managed like an employee's. This determines which files the agent may read, which emails it may send and which systems it may change.

You know the simplest form from [connectors](./Connector.md): the agent works with your account and sees exactly what you see. That makes sense for personal helpers. It cannot do more than you can, and whatever it does runs under your name.

It gets harder with agents built for a whole team. If an agent runs with its creator's account, every user gets answers from documents the creator may open, even if they would have no access themselves. An agent for questions about the salary policy, built by a colleague in HR, may then reveal individual salaries to anyone who asks. This is a common cause of [data leakage](./Datenabfluss.md) inside the company, without anyone meaning any harm.

That is why agents increasingly get their own account with their own, deliberately tailored permissions. Microsoft calls this Entra Agent ID: the agent appears in the directory like an employee, with an owner, roles and access rights that can be reviewed and revoked. In Copilot Studio this is the prerequisite for an agent working on its own, for example pre-sorting applications overnight while no person is signed in. An agent with its own account is also recognisable as a separate actor in the [trace](./Trace.md).

An account of its own comes with duties. Someone has to be responsible for the agent, just as a manager is for an employee. Its permissions belong in the access concept and in the regular reviews run by [AI governance](./KI-Governance.md). And there has to be an offboarding process: when the agent is switched off or the owner changes, the rights must be revoked or transferred, otherwise a forgotten account keeps working with wide-ranging access.

For you this means: for every agent you use or build, ask whose permissions it runs with. The answer decides what it can see and who is responsible when something goes wrong.

_Common misconception:_ An agent with its own account does not automatically have more rights. Usually it has fewer, but exactly the right ones, and everyone knows which.

_In practice:_

> “Our policy agent showed a colleague the draft of the new bonus scheme. That sits in a folder only HR can access.”
>
> “Then the agent runs with the account of the person who built it. It needs its own identity with access only to the published policies.”
