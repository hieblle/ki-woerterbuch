---
title: Connector
description: A link between the AI and systems such as SharePoint, CRM or Jira through which it can read and sometimes change data
aliases: [Plugin, Integration, Connectors, Apps, Connector / Plugin]
---

A connector links the AI to a system where your data lives: SharePoint, Google Drive, the CRM, Jira, the ticketing system or accounting. Without a connector, the AI only knows what you type into the chat window or upload. With a connector it can look things up there itself. Other names for the same idea are plugin, integration or app.

Technically, the connector sends a query to the other system and passes the answer back to the AI. If you ask Microsoft 365 Copilot “Which open tickets does customer Huber have?”, the connector for Jira or ServiceNow fetches the list and the AI turns it into an answer. In ChatGPT and Claude such links are called connectors or apps; an open standard for them is [MCP](./MCP.md).

What the AI can then see depends on two things: which systems are connected and what permissions you have in them. As a rule, the connector works with your user account. So the AI sees the customer file you could open in the CRM yourself, and not the payroll you have no access to. That is reassuring as long as the permissions are right. If they were granted too generously, because years ago “everyone” was given read access to a folder, the AI finds those files without effort. That is why many companies tidy up before connecting anything.

Some connectors can also write: create a ticket, enter an appointment, change a record. That is the step from looking things up to acting, and it is worth looking closely at who has allowed what, see [approval](./Freigabe.md). Another risk: content from connected systems can contain instructions that the AI follows, for instance in an email or a ticket, see [prompt injection](./Prompt Injection.md).

You can tell a connector is missing when the AI says it has no access, or answers in general terms even though the data is in the system. Then it helps to check in the settings which connections are active for you, or to ask IT.

_Common misconception:_ “If the AI is hooked up to SharePoint, it can read everything.” No, only what your account is allowed to read. The question is whether that really is only what it should be.

_In practice:_

> “I want Copilot to summarize the customer history from the CRM, but it doesn’t know the CRM.”
>
> “That needs a connector, and IT has to enable it. Ask whether the one for Dynamics or Salesforce is already connected here.”
