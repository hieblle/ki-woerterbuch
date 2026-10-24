---
title: Declarative Agent
description: Agent that runs on the model and orchestration of Microsoft Copilot and is configured only through instructions, knowledge and tools
aliases: [Copilot Chat agent, Copilot agent, Copilot extension, Deklarativer Agent]
---

A declarative agent is an [agent](./Agent.md) that runs on the model and the orchestration of Microsoft Copilot. You do not build your own AI system. You only describe what the agent should know, do and avoid. “Declarative” means you state the goal, and Copilot takes care of the rest.

Three building blocks make up a declarative agent. [Instructions](./Instructions.md) define who the agent is, how it answers and what it must not do. [Knowledge](./Knowledge.md) names the sources it answers from: SharePoint libraries, OneDrive folders, Teams messages or data brought in through [Copilot connectors](./Copilot Connectors.md). [Tools](./Tools.md) let it act, for example create a ticket or query a database, through an [API plugin](./API-Plugin.md) or an MCP server. On top of that come conversation starters, sample questions that users can click.

The agent runs wherever Copilot runs: in the chat of [Microsoft Copilot](./Microsoft Copilot.md), in Teams, Word, Excel and Outlook. You call it with @ and its name. Because it inherits the model, security and compliance of Microsoft 365, you host nothing and run no infrastructure of your own. It only sees data the signed-in user could see anyway.

You build a declarative agent without code in the [Agent Builder in Copilot](./Agent Builder in Copilot.md), with more options in [Copilot Studio](./Copilot Studio.md), or as a developer with the Microsoft 365 Agents Toolkit. Since October 2026 Copilot Studio also calls these agents “Copilot Chat agents”. Earlier names were “Copilot agents” and “Copilot extensions”.

Two limits are worth knowing. A declarative agent is always started by a person in a chat. It cannot react to a new email on its own; that takes an [autonomous agent](./Autonomer Agent.md). And it uses the model Microsoft provides. If you need your own model or your own control logic, you build a [custom engine agent](./Custom Engine Agent.md).

For most tasks in a business department the declarative route is enough: an agent that answers questions about the travel expense policy, one that drafts proposal text from the product database, one that answers onboarding questions from the intranet.

_Common misconception:_ A declarative agent is not a stripped-down agent. It uses the same model and the same orchestration as Copilot itself, only with your instructions and your knowledge.

_In practice:_

> “IT says our HR agent is a declarative agent. Does that mean it is less capable?”
>
> “No. It runs on regular Copilot, just with your instructions and the employee handbook as knowledge. That is also why it was ready so quickly.”
