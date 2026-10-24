---
title: Agent Builder in Copilot
description: The simple agent editor right inside Copilot Chat, describe the agent, attach knowledge, test and share, without opening Copilot Studio
aliases: [Microsoft Copilot Agent Builder, Copilot Studio Agent Builder, Copilot Studio lite, Microsoft 365 Copilot Builder]
---

The Agent Builder in Copilot is the simple way to build your own [agent](./Agent.md). You open it directly in Copilot Chat, describe in plain language what the agent should do, attach knowledge and try it out in the same window. The general concept of such tools is explained under [Agent Builder](./Agent Builder.md). This entry is about Microsoft's implementation.

The builder has two views. On the “Describe” tab you have a conversation: “I need an agent that answers questions about our travel expense policy and refers people to HR when things are unclear.” Copilot turns that into a name, a description and instructions. On the “Configure” tab you see the same fields as a form and adjust them by hand: the [instructions](./Instructions.md), which are the agent's system prompt, the knowledge sources and the conversation starters. Knowledge can come from SharePoint folders and files, from [Copilot Connectors](./Copilot Connectors.md) and from the web.

What you get is a [declarative agent](./Deklarativer Agent.md): it uses Copilot's model and orchestration and only brings its own instructions and knowledge. You can keep it to yourself, share it with individual people or send a link to the team.

The limits are deliberately tight. An agent from the builder can answer, but it cannot act: no creating tickets, no sending mail, no starting workflows, no connection to external systems. It does not work in Teams group chats. And it has no lifecycle with test and production environments. If you need any of that, you move to [Copilot Studio](./Copilot Studio.md). There you can copy a builder agent and keep building.

Licensing: with a [Microsoft Copilot](./Microsoft Copilot.md) license the builder is included. Without a license you can build agents that only work from instructions and the web. As soon as an agent uses company data as knowledge, the company needs usage-based billing. Admins see all builder agents in the Microsoft 365 admin center and can restrict sharing.

As with any agent: keep the knowledge small and current, add an instruction for the case “this is not in my documents”, and test with real questions from daily work before the link goes to the team.

_Common misconception:_ The Agent Builder is not a small version of Copilot Studio with fewer buttons. It is a different tool for a different purpose: quick question-and-answer agents for you and your team, with no actions and no operations.

_In practice:_

> “I want an agent that answers our supplier questions and, when needed, creates a purchase order in the procurement system.”
>
> “The first part you can do in the Agent Builder in an hour. For creating the order you need Copilot Studio, because the builder doesn't perform actions. Start with the question part.”
