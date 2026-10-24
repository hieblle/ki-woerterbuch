---
title: Copilot Connectors
description: Connections that bring data from external systems into Microsoft Graph and the semantic index so that Copilot can find it
aliases: [Graph connectors, Microsoft Graph connectors, Microsoft 365 Copilot connectors, Synced connectors, Federated connectors]
---

Copilot connectors are connections that make content from systems outside Microsoft 365 findable for Copilot. Without them, Copilot only knows what lives in Microsoft 365: emails, files, chats, calendars. With a Copilot connector, data from ServiceNow, Salesforce, Confluence, a file server or a database of your own comes in as well. Until 2025 they were called Microsoft Graph connectors, a name you still see in many places.

There are two models. A synced connector copies the content into [Microsoft Graph](./Microsoft Graph.md), where it is added to the [semantic index](./Semantischer Index.md). Copilot can then search it like a SharePoint library, with the access rights of the source system. A federated connector copies nothing. It queries the source system at runtime through [MCP](./MCP.md). That suits data that changes constantly or that must not be copied for compliance reasons.

Setting up is an admin task. The gallery lists more than a hundred ready-made connectors, and some, such as Salesforce, ServiceNow Knowledge and Zendesk, are preconfigured. The admin connects the source system, defines which content is indexed and how permissions are carried over. Only then can you as an agent maker pick the connector as [knowledge](./Knowledge.md) in the [Agent Builder in Copilot](./Agent Builder in Copilot.md) or in [Copilot Studio](./Copilot Studio.md). Developers can build connectors of their own.

The distinction from [Power Platform connectors](./Power Platform Connectors.md) matters. They sound similar but do something else. They are the building blocks an agent or a flow uses to perform actions, such as creating a row in a database or sending an email. Copilot connectors provide knowledge to look things up, Power Platform connectors provide hands to act. Both are a [connector](./Connector.md) in the sense of the main dictionary, but they belong to different product worlds.

Two things about licensing and data protection. Knowledge from Copilot connectors in Copilot Studio uses “tenant graph grounding”, which consumes [Copilot credits](./Copilot Credits.md) for users without a Microsoft 365 Copilot licence. And because the data sits in the index, the same questions apply as with SharePoint: who may see what, and are the permissions in the source system properly maintained? A connector on a poorly permissioned wiki makes its content findable for everyone with access to the wiki.

_Common misconception:_ A Copilot connector writes nothing to the source system. It reads and indexes. If you want to change data, you need a tool with a Power Platform connector or an [API plugin](./API-Plugin.md).

_In practice:_

> “Copilot can't find our ServiceNow tickets. Do I have to export them?”
>
> “No, there is a Copilot connector for that. IT sets it up once, and then Copilot searches the tickets like SharePoint, with the same permissions as in ServiceNow.”
