---
title: Handoff
description: Passing a task together with its context from one agent to another agent or to a person
aliases: [Handoff, Escalation, Transfer to a human]
---

A handoff is the moment when an [agent](./Agent.md) passes on a task or a conversation: to another agent that specialises in that part, or to a person when the agent is stuck or is not allowed to decide. The existing [context](./Kontext.md) goes with it: what the person wanted, what has already been settled and what is still open.

A handoff to a person is often called escalation. A support agent answers questions about invoices, recognises a complaint about an employee and passes the conversation to a colleague. Done well, the colleague sees the history and a short summary and does not have to start from scratch. Done badly, the customer explains their issue for the third time. In Copilot Studio you define for each agent how it hands over to a person and when, for example on certain keywords, after two failed attempts or when the customer asks for it.

Handing over to another agent is the basic principle behind many systems with several agents. A first-contact agent works out what the request is about and then passes it to the agent for travel expenses, for IT incidents or for contract questions. The difference to a [multi-agent system](./Multi-Agent-System.md) with central control: there, an orchestrator keeps control and collects the results. In a handoff, control moves. The new agent continues the conversation and the old one is out.

A handoff is different from an [approval](./Freigabe.md). With an approval, the agent asks you briefly and then carries on by itself. With a handoff, it gives the task away. Both are forms of [human-in-the-loop](./Human-in-the-Loop.md), but your role differs: in one case you confirm, in the other you take over.

What matters for you is what arrives with the handoff. If an agent escalates to your team, check that the full context comes with it and that the customer is told a person is now taking over. And decide who is responsible when the agent hands over and nobody happens to be there.

_Common misconception:_ A handoff is not a failure of the agent. An agent that hands over at the right moment is better than one that answers every question itself.

_In practice:_

> “The support agent pushed the conversation to me, but all I can see is the customer's last message.”
>
> “Then the handoff is missing the summary. You can set that up in the agent so you see the whole history when you take over.”
