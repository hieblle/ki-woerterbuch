---
title: API Plugin
description: Connection of an external system to a declarative agent through an OpenAPI description so the agent can perform actions there
aliases: [API plugins, Plugin, Actions, Plugin actions, Message extension plugin]
---

An API plugin connects a [declarative agent](./Deklarativer Agent.md) to an external system so the agent can act there, not just look things up. The basis is an API (programming interface) of that system and a description of it in the OpenAPI format. It tells the agent which functions exist, what input they need and what comes back.

Your company's ticket system has an API with a function “create ticket” that expects title, description and priority. The API plugin brings that function into the agent. When a colleague writes “Create a ticket, the printer on the third floor isn't printing”, the model sees that the function fits, fills in the fields and calls it. That is [tool use](./Tool Use.md). The better the function is described, the more reliably the agent picks it.

The names have changed several times. From 2023 to 2025 almost every extension of Copilot was called a “plugin”, above all API plugins and plugins based on Teams message extensions. Then Microsoft spoke of “actions”. In [Copilot Studio](./Copilot Studio.md) the same building block is now called [tools](./Tools.md), as a tool of type “REST API”. And since 2026 “plugin” is the umbrella term for a package that bundles agents, skills, connectors and MCP servers. When someone says “plugin”, ask what they mean.

For new connections Microsoft has, since 2026, recommended an MCP server over an OpenAPI description, see [MCP](./MCP.md). An MCP server describes its own tools and works with other AI products too. API plugins remain useful when a system already has a good OpenAPI description.

Two points are delicate. First, authentication: the plugin has to identify itself to the target system, ideally on behalf of the user, so the agent cannot do more than the person in the chat. This is configured separately and differs from setting up [Copilot connectors](./Copilot Connectors.md). Second, security: whatever the API returns lands in the model's context. If a record contains injected text, that can lead to a [prompt injection](./Prompt Injection.md). Actions with outside effect should therefore require the user's confirmation.

API plugins are usually built by developers, for example with the Microsoft 365 Agents Toolkit. As a business user you say which functions the agent needs and test whether it picks them.

_Common misconception:_ An API plugin is not a Copilot connector. The connector brings content into the index to look up, the plugin calls functions and changes something.

_In practice:_

> “Our agent knows the tickets but can't create one. Why is that?”
>
> “Reading goes through the connector, creating needs an API plugin or an MCP server for your ticket system. Development has to connect that, then you can test it in the chat.”
