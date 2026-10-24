---
title: Autonomous Agent
description: Agent in Copilot Studio that is started by an event instead of a chat message, such as a new email or a schedule
aliases: [Autonomous agents, Event-driven agent, Autonomer Agent]
---

An autonomous agent is an [agent](./Agent.md) in [Copilot Studio](./Copilot Studio.md) that gets going without a chat message. It is not started by a person but by an event: a new email in a mailbox, a submitted form, a new file in SharePoint or a schedule that fires every ten minutes.

Technically, an [event trigger](./Event Trigger.md) makes the difference. As soon as an agent has at least one such trigger, it counts as autonomous. The event delivers a message to the agent, the trigger payload, for example the text and sender of the email. The agent reads it, consults its [instructions](./Instructions.md) and uses [generative orchestration](./Generative Orchestration.md) to decide for itself which [tools](./Tools.md) or topics to use. The result is something nobody asked for in a chat: a created ticket, an answered email, a filled-in record.

An example from purchasing: a supplier invoice arrives by email. The agent reads it, checks the order number in the ERP system, creates the case and sends a query to the clerk if something does not match. An example from sales: a form comes in from the website, the agent qualifies the request, creates a lead and suggests a reply.

This raises the [level of autonomy](./Autonomiegrad.md) considerably. Nobody sits next to it reading every answer before it goes out. That is why the rules for agents apply with extra force here. For steps with outside effect, such as sending an email or changing master data, there should be an [approval](./Freigabe.md) step by a person. The instructions also need to cover the case where the data is incomplete or contradictory.

Three points matter in practice. First, an autonomous agent runs with the permissions of the person who built it, because there is no signed-in user. Whatever you may do, the agent may do. Second, every run costs [Copilot credits](./Copilot Credits.md), even when the event was trivial. A schedule that fires every ten minutes generates consumption around the clock. Third, runs can be traced in the Monitor view of Copilot Studio. You should do that regularly after launch.

[Declarative agents](./Deklarativer Agent.md) in Microsoft Copilot cannot run autonomously. Autonomy lives in Copilot Studio or in [custom engine agents](./Custom Engine Agent.md).

_Common misconception:_ Autonomous does not mean uncontrolled. With instructions, tool permissions and approval steps you define how far the agent may go on its own.

_In practice:_

> “Can't our invoice agent just start by itself when an email comes in?”
>
> “Yes, then it becomes an autonomous agent with an event trigger on the mailbox. But let it only prepare postings, the approval stays with you. And remember, it works with your permissions.”
