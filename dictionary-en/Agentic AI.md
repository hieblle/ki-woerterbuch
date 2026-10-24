---
title: Agentic AI
description: AI that does not just answer a task but completes it in several steps using tools on its own
aliases: [Agentic systems, Agentische KI]
---

Agentic AI refers to AI systems that do not just answer but act. They break a task into steps, use tools, check the result and keep going until the task is done.

The difference from a chat lies in the loop. In a classic [chatbot](./Chatbot.md) you ask a question and get an answer, then it is your turn again. An agentic system is given a goal and works through several rounds on its own: it plans, carries out a step, looks at the result and decides what happens next. You only see the final result, or you are asked for [approval](./Freigabe.md) along the way.

An example from purchasing makes this tangible. You give Microsoft 365 Copilot the task: “Find the three quotes for the new monitors in my inbox, compare price, delivery time and warranty, and save a table in SharePoint.” A chat would explain how you could do that. An [agent](./Agent.md) searches the emails, reads the attachments, builds the table, saves it and reports back with the link. To do this it needs access to your mailbox and SharePoint, which is [tool use](./Tool Use.md).

At work you meet agentic AI in products such as Copilot Agents, ChatGPT Agent, Claude or coding agents like Claude Code (see [vibe coding](./Vibe Coding.md)). Tasks that suit it have a clear goal, a verifiable end state and several intermediate steps that you would also delegate to a person. For a quick question you do not need an agent.

More room to act means more responsibility on your side. An agent can make mistakes and carry them into the next steps. So the rule is: check the result before it goes further, and allow critical actions such as sending an email or deleting data only after being asked, or block them entirely with [guardrails](./Guardrails.md). How much you leave to an agent is described by its [level of autonomy](./Autonomiegrad.md).

_Common misconception:_ Agentic AI is not “a smarter model”. Often the same [language model](./Sprachmodell.md) sits behind it as in the chat, just with tools, instructions and a loop around it.

_In practice:_

> “I asked Copilot to compare the quotes, and now the table is already in SharePoint. I did not do anything myself.”
>
> “That is agentic AI. It searched your emails, read the attachments and created the table. Still look it over before you send it to management.”
