---
title: A2A Protocol
description: Open standard through which a Copilot Studio agent hands tasks to external agents on other platforms
aliases: [Agent2Agent, Agent-to-agent protocol, A2A agent, A2A]
---

The A2A protocol (Agent2Agent) is an open standard for how one agent talks to another. It defines how an agent sends a task, how the other accepts it, asks follow-up questions and delivers the result. Google started the standard; today it is maintained by the Linux Foundation. In Copilot Studio you use it to attach an agent on another platform as a [connected agent](./Child Agents und Connected Agents.md).

The difference from [MCP](./MCP.md) is easy to remember. MCP connects an agent to tools: query a database, create a ticket, read a file. A2A connects an agent to another agent that thinks, plans and uses tools of its own. With MCP your agent receives a list of functions. With A2A it gets a counterpart it can hand a whole task to. Microsoft sums up the choice like this: for an API use a custom connector, for tools use an MCP server, for an external agent use A2A.

Here is how it works. Every A2A agent publishes an agent card, a small description file at a fixed address. It states what the agent can do and how to reach it. In Copilot Studio you go to Agents, choose “Add agent” and then “A2A agent”, enter the address and set the sign-in: none, an API key or OAuth 2.0. Technically the connection runs on the custom connector infrastructure. That means data policies apply and agents on your own network are reachable too. With every request Copilot Studio sends a context ID so the external agent can hold a conversation over several turns. The result comes back to your main agent as a [handoff](./Handoff.md).

The connection has been generally available since April 2026. As of October 2026 Copilot Studio acts as the client, meaning the agent that asks. Whether a Copilot Studio agent can itself be addressed from outside as an A2A server is not described in Microsoft's documentation. Agents from the Microsoft Foundry Agent Service, by contrast, do offer an A2A endpoint.

For your organisation this means: before connecting, check who owns the external agent, what data you send it and which [agent identity](./Agent-Identität.md) it acts under. The external agent works outside your control and brings its own mistakes with it.

_Common misconception:_ A2A does not replace MCP and MCP does not replace A2A. The two standards solve different problems and are often used together.

_In practice:_

> “Our logistics partner offers its tracking agent over A2A. Is that the same as an MCP server?”
>
> “No. Over MCP you would get its functions; over A2A you hand it the whole question and it answers like a colleague. For tracking questions A2A fits well.”
