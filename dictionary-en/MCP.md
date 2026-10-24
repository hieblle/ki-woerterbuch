---
title: MCP
description: Model Context Protocol, a standard through which agents connect tools and data sources, much like USB for devices
aliases: [Model Context Protocol]
---

MCP stands for Model Context Protocol. It is an open standard that defines how an AI system connects to tools and data sources. Think of it like USB: one plug that fits many devices.

Before MCP, the problem was variety. Every AI product needed its own connection to every target system. SharePoint to Copilot, SharePoint to Claude, SharePoint to ChatGPT, each one built differently. With MCP, the provider of a system sets up one MCP server, and any AI that speaks the standard can use it. The server describes which tools it offers, such as “search file”, “read file” or “create ticket”, and what information each one needs. The AI reads this description and then knows how to phrase the call. The principle behind this is [tool use](./Tool Use.md).

As an employee, you will meet MCP in the settings. In Claude these connections are called [connectors](./Connector.md), in ChatGPT apps or connectors, and in Microsoft 365 Copilot you will find them under connectors or plugins. Behind them there is often an MCP server. You see a list such as “SharePoint”, “Jira”, “Salesforce” or “company wiki”, switch on what you need, and from that moment the AI can read or write there.

An example from administration: your IT department provides an MCP server for the ticketing system. You activate it in Claude or Copilot and ask: “Which open tickets from the purchasing department are older than two weeks?” The AI fetches the ticket list through the server and summarises it. Without MCP you would have to export the list and upload it.

Connection brings responsibility. An MCP server gives the AI access to data, sometimes with write permissions. Which servers are approved and with which permissions should be set by IT as [guardrails](./Guardrails.md), not by each individual. A server from an unknown source can lead to [data leakage](./Datenabfluss.md) or smuggle in hidden instructions. So the rule is: only use connectors your company has approved, and the first time you use one, check what the AI actually reads.

_Common misconception:_ MCP is not a product and not an AI. It is only the plug. Whether an agent works well with the connected system depends on the model, its instructions and its [skills](./Skill.md).

_In practice:_

> “There is now a connector for our CRM in the Claude settings. What is that?”
>
> “That is an MCP server that IT has approved. If you switch it on, Claude can look things up directly in the CRM instead of you uploading exports.”
