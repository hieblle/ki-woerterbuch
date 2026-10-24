---
title: Copilot Studio
description: Microsoft's tool for building, testing and publishing agents with knowledge, tools and channels, formerly Power Virtual Agents
aliases: [Microsoft Copilot Studio, Power Virtual Agents, PVA]
---

Copilot Studio is Microsoft's tool for building [agents](./Agent.md) that do more than answer questions. You work in a graphical interface, mostly without code, and define what the agent knows, what it is allowed to do, how it behaves and where users reach it. Until 2023 the product was called Power Virtual Agents, and technically it is part of the Power Platform.

Four building blocks make up an agent in Copilot Studio. [Knowledge](./Knowledge.md) is the set of sources it answers from: SharePoint, files, websites, databases, connected business systems. [Tools](./Tools.md) are the capabilities it acts with: create a ticket, look up a record, send an email, start a workflow. They used to be called actions, and before that plugins. [Topics](./Topics.md) are scripted conversation flows for cases that should always run the same way, such as a leave request with fixed follow-up questions. And [channels](./Channels.md) are the places where the finished agent runs: Teams, Microsoft Copilot, a website, SharePoint, a messenger or the phone. On top of that come the [instructions](./Instructions.md), which describe the behaviour in plain language.

The day-to-day flow: you create the agent, write the instructions, attach knowledge, add tools, test in the test panel, publish and connect a channel. Afterwards you check the analytics for questions the agent could not answer and improve it.

The distinction from the [Agent Builder in Copilot](./Agent Builder in Copilot.md) is a question of reach. The Agent Builder is enough for question-and-answer agents for you and your team. You use Copilot Studio when the agent should act, connect to business systems, serve a department or customers, start on its own on a schedule or on events, or needs a controlled path from test to production.

Since 2026, Microsoft distinguishes several runtimes in Copilot Studio, called harnesses. The classic runtime works with topics and agent flows. A newer one is designed for long, multi-step tasks with files and is billed by consumption, starting while you build.

Licensing: for users with a [Microsoft Copilot](./Microsoft Copilot.md) license, agents from Copilot Studio are largely included in Copilot, Teams and SharePoint. For everything else, Microsoft bills in [Copilot Credits](./Copilot Credits.md), prepaid or pay-as-you-go.

_Common misconception:_ “No code” does not mean “no effort”. An agent with tools and business systems needs clear requirements, tests with real cases, permissions and someone responsible for running it, just like any other software.

_In practice:_

> “IT says our HR agent should be built in Copilot Studio, not in the Agent Builder. Why the extra effort?”
>
> “Because it's supposed to write leave requests into the HR system. That needs a tool, and tools only exist in Copilot Studio. Plain lookups in the handbook would have worked in the Agent Builder.”
