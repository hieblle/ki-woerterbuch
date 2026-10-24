---
title: Agent Builder
description: Tools that let business teams assemble their own agents without programming, such as Copilot Studio or GPT Builder
aliases: [Copilot Studio, No-code agent, GPT Builder]
---

An agent builder is a tool for putting together your own [agent](./Agent.md) without writing code. You describe in plain language what the agent should do, attach knowledge, and choose which systems it is allowed to access.

The best-known examples: Microsoft 365 Copilot has the Agent Builder right inside the chat for simple agents, and Copilot Studio for larger ones connected to company systems. ChatGPT has the GPT Builder, where you create [Custom GPTs](./Custom GPT.md). In Claude, Projects play a similar role, supplemented by [skills](./Skill.md) and [connectors](./Connector.md). The interfaces look different, but they all ask for the same things.

Four things get configured. First, the instructions, meaning the [system prompt](./Systemprompt.md): who the agent is, what its task is, what tone it answers in, what it should not do. Second, the knowledge: uploaded files, a SharePoint folder, a website, from which the agent draws its answers. Third, the tools ([tool use](./Tool Use.md)), meaning what the agent is allowed to do: only answer, search Outlook, create a ticket, start a [workflow](./Workflow-Automatisierung.md). Fourth, [approvals](./Freigabe.md): which actions it carries out on its own, where it asks first, and who in the company is allowed to use the finished agent at all.

Typical first agents in business teams are lookup agents. HR builds one that answers questions about leave, travel expenses and parental leave from the employee handbook. Sales builds one that knows product data and price lists and drafts proposal text. Administration builds one that explains how to create orders in the purchasing system. All three need only instructions and knowledge, no tools, and can be finished in an afternoon.

The typical mistakes repeat themselves too. Too much knowledge at once, so the agent mixes outdated and current documents. No instruction on what to do when unsure, so it would rather [hallucinate](./Halluzination.md) than say “that is not in my documents”. Access rights that are too broad, so the agent sees files that not every user should see. And nobody responsible for maintaining the agent when the handbook changes. Before releasing it to the team, test it in the [sandbox](./Sandbox.md) with twenty real questions from everyday work.

_Common misconception:_ An agent from the builder is not automatically safe just because IT has approved the product. Whoever builds it decides on knowledge and permissions and is responsible for them.

_In practice:_

> “I would like to build an agent for the most common HR questions. Do I need to involve IT?”
>
> “Not to start with. Use the Agent Builder in Copilot, upload the employee handbook and write in that it should refer people to HR when it is unsure. Test it with the questions from last week.”
