---
title: Tools
description: Building blocks in Copilot Studio through which an agent reaches other systems, such as connectors, flows, prompts, APIs and MCP servers
aliases: [Actions, Plugins, Plugin actions, Tool groups]
---

Tools are the building blocks in [Copilot Studio](./Copilot Studio.md) that let an [agent](./Agent.md) do more than answer: look up data, create a record, send an email, start a process. The general principle is described in the entry on [tool use](./Tool Use.md). This entry is about what it looks like in Copilot Studio specifically.

The name has changed several times. These building blocks were first called plugins, then actions, and since 2025 tools. Menus now say “Add a tool”, but the node inside a [topic](./Topics.md) is sometimes still called an action node. Older guides and training videos use the old names; they mean the same thing.

A tool can be several things: a [Power Platform connector](./Power Platform Connectors.md) to Outlook, SharePoint, Dataverse, SAP or ServiceNow, an [agent flow](./Agent Flows.md) for multi-step automation, a [prompt tool](./Prompt Tool.md) that wraps its own model call, a REST API, an MCP server (see [MCP in Copilot Studio](./MCP in Copilot Studio.md)) or [computer use](./Computer Use in Copilot Studio.md). Every tool has a name, a description, inputs and a behaviour after it runs.

The description matters more than it looks. Under [generative orchestration](./Generative Orchestration.md) the agent decides from the description and the conversation context whether and when to use a tool. A vague description like “Helps with orders” leads to wrong calls. Better: “Creates a purchase requisition in the procurement system. Not for status queries.” Under classic orchestration, only a topic calls a tool explicitly.

In a tool's settings you decide whether the agent may pick it on its own, whether it should ask the user for [approval](./Freigabe.md) first, whether inputs are filled by the model or fixed, and whether the tool runs with the user's permissions or the maker's. You also set what happens after the call: no response, an answer written by generative AI, or a fixed message or adaptive card.

Limits: an agent can have up to 128 tools, but Microsoft recommends far fewer, around 25 to 30, because selection gets less accurate otherwise. Tools blocked by a [DLP](./DLP.md) policy appear greyed out. In the GitHub Copilot [harness](./Harness.md) you find tools on the Build tab, with Work IQ preinstalled as a default tool.

_Common misconception:_ A tool is not access to everything in a system. It is one specific capability, such as “send email”, with exactly the permissions of the connection behind it.

_In practice:_

> “I added the SharePoint connector as a tool, but the agent doesn't save any files.”
>
> “Look at the description and the connection. Does it say the tool stores files? And does it run with your permissions or the user's?”
