---
title: MCP in Copilot Studio
description: Tool type in Copilot Studio that connects an agent to every tool an MCP server offers in one step
aliases: [Model Context Protocol in Copilot Studio, MCP server, MCP connector, MCP tool]
---

MCP in Copilot Studio is a tool type that connects your agent to an MCP server. The [Model Context Protocol](./MCP.md) is an open standard that lets agents discover and call the tools and data sources of another system. In Copilot Studio you add the server once as a [tool](./Tools.md), and every tool it offers becomes available to the agent.

The difference from a single tool built on [Power Platform connectors](./Power Platform Connectors.md) is scale and upkeep. A connector tool is one action, such as “create ticket”. An MCP server usually brings a whole bundle: search tickets, create, comment, close. Copilot Studio reads that list from the server and refreshes it whenever the operator changes something. You do not maintain it by hand. MCP tools and MCP resources are supported, meaning tools and data content. MCP prompts, the server's ready-made prompt templates, are not used by Copilot Studio.

Under the hood an MCP server runs on the custom connector infrastructure. That has two consequences that matter for your organisation. First, the same data policies ([DLP](./DLP.md)) apply: admins can allow, restrict or block an MCP server like any other connector. Second, every call goes through a connection with credentials that belong either to the maker or to the individual user (see [Authentication](./Authentication.md)). MCP requires [generative orchestration](./Generative Orchestration.md), because the agent decides on its own, based on the descriptions, which tool to call and when.

Where do servers come from? Microsoft ships its own, for example for Dataverse, for Work IQ, and the Windows 365 for Agents MCP server, which lets an agent operate a cloud PC. Third parties and your own IT can build more. Since July 2026 providers can submit their servers to Microsoft for certification, still in preview as of October 2026. Certified means Microsoft has checked reliability, security and compliance. You may still use uncertified servers, but the responsibility then sits with your organisation.

One pitfall: an MCP server adds many tools at once, and each of them can trigger something. Use the [activity map](./Test Panel und Activity Map.md) to check which tools the agent really calls, and for actions that change data switch on “Ask the end user before running”, which is an [approval](./Freigabe.md) by the user.

_Common misconception:_ MCP is not a Microsoft product and not a replacement for connectors. It is a standard that sits alongside Power Platform connectors, and both live side by side in Copilot Studio.

_In practice:_

> “Our ticketing system now has an MCP server. Do I still have to build a separate tool for every action?”
>
> “No. Add the server once as a tool and the agent knows every action in it. Then check the activity map to see which ones it actually uses.”
