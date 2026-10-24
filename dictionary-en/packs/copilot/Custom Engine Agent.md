---
title: Custom Engine Agent
description: Agent with its own control logic and its own model that appears in Copilot and Teams but is built and run outside of it
aliases: [Custom engine agents, Custom-Engine-Agent]
---

A custom engine agent is an [agent](./Agent.md) where your company or a vendor builds the whole engine: the model, the orchestration and the logic behind it. In Copilot and Teams it looks like any other agent. What it does, however, happens outside Copilot, for example in Azure.

The difference from a [declarative agent](./Deklarativer Agent.md) is at the core. The declarative agent uses the model and the orchestrator of Microsoft Copilot, the part that decides which source and which tool comes next. With a custom engine agent you bring both yourself. That can be a smaller model, a fine-tuned model for your industry or a model from another provider. You also decide how much the agent may decide on its own, in other words its [level of autonomy](./Autonomiegrad.md).

There are two ways to build one. Developers use the Microsoft 365 Agents SDK, a toolkit for .NET, Python or JavaScript, often together with frameworks such as the Microsoft Agent Framework or LangChain. Business teams with low-code skills use [Copilot Studio](./Copilot Studio.md) as the engine, because a Copilot Studio agent with its own orchestration counts as a custom engine agent from Copilot's point of view. At the end the agent is packaged, submitted to the organisation's [Agent Store](./Agent Store.md) and approved by an admin.

Custom engine agents can do things declarative agents cannot. They work in Teams channels and meetings with several people at once. They can send messages on their own initiative. They can talk to other agents and run outside Microsoft 365, for instance on a website or in an app of your own.

The price is responsibility. Security, data protection, [guardrails](./Guardrails.md) and responsible use of AI no longer rest with Microsoft 365 but with whoever builds and runs the agent. Operations, cost and updates come with it. So the route usually pays off only when a declarative agent really is not enough: your own models, complex processes or systems that reach deep into your workflows.

A declarative agent can later be converted into a custom engine agent. Agents from the Agent Builder cannot.

_Common misconception:_ “Custom” does not mean “better”. For lookup agents and simple tasks a declarative agent is built faster, cheaper to run and secured out of the box.

_In practice:_

> “Our vendor wants to build the service agent as a custom engine agent. Why not just use the Agent Builder?”
>
> “Because it should use its own model for your product data and work in the Teams channel with the whole service team. That only works this way. But agree up front who is responsible for security and operations.”
