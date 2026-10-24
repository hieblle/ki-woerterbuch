---
title: SharePoint Agent
description: Agent directly on a SharePoint site or library that answers questions about its content and is created in minutes
aliases: [Agents in SharePoint, SharePoint agents, Agent in SharePoint, .agent file]
---

A SharePoint agent is an [agent](./Agent.md) that sits directly on a SharePoint site, page or document library and answers questions about that content. You need neither Copilot Studio nor IT. Every site you can access already has a ready-made agent that knows the whole site. You create your own in a few clicks.

You open a library, choose “Create an agent”, give it a name, define which folders or files it should know and write a few sentences of instruction, such as “Answer questions about the travel expense policy and refer people to the travel office when in doubt.” The result is a `.agent` file in the library. Colleagues open it and ask questions, and the answers cite the source documents. You can also share the agent into a Teams chat.

The big advantage is the closeness to the data. It answers only from the content you assigned to it, and only to people who may see that content anyway. That is [grounding](./Grounding.md) on a clearly defined source. A project site gets a project agent, the HR library a policy agent, the sales folder an agent for product sheets.

The feature set is deliberately small. A SharePoint agent answers questions. It creates no tickets, sends no emails and knows no systems outside SharePoint. If you want more, use the [Agent Builder in Copilot](./Agent Builder in Copilot.md) or [Copilot Studio](./Copilot Studio.md). Copilot Studio in turn has a “SharePoint” channel for publishing a full agent on a site.

To use one you need a Microsoft 365 Copilot licence, or your company has set up pay-as-you-go for SharePoint agents. Anyone with a licence and write access to the site can create one. Site owners can approve agents for the whole site or remove them.

As of October 2026 Microsoft is moving `.agent` files onto the general agent model of Copilot. The aim is for SharePoint agents to appear in the Copilot app and be managed centrally. Existing agents keep working for now, but watch for notices in the admin center.

One mistake to avoid: an agent on a library where old and new versions of a document sit side by side. It then mixes versions. Clean up the source or restrict the agent to the folder with the valid documents.

_Common misconception:_ A SharePoint agent does not expose content that was protected before. It does make poorly maintained permissions easier to find, see [oversharing](./Oversharing.md).

_In practice:_

> “The project team keeps asking me the same things about the documents on our site. Is an agent worth it?”
>
> “Create a SharePoint agent on the library with the approved documents. It takes five minutes, and the team asks the agent instead of you.”
