---
title: Microsoft Graph
description: The data layer of Microsoft 365 holding mail, files, chats, calendars and people, from which Copilot draws its answers
aliases: [Graph, Microsoft Graph API]
---

Microsoft Graph is the data layer of Microsoft 365. It holds your organisation's content and the connections between items: emails, files in OneDrive and SharePoint, Teams chats, calendars, meetings, contacts, and the knowledge of who works with whom on what. [Microsoft Copilot](./Microsoft Copilot.md) pulls content and context from the Graph to anchor its answers in your work data.

The Graph stores relationships, not just documents. It knows you met two colleagues yesterday, that someone sent you a file afterwards, and that you have not opened it yet. These links are what make Copilot useful. When you ask “What did I miss on the Nordlicht project?”, Copilot searches the Graph for emails, chats and files about that project and builds an answer from them. That is [grounding](./Grounding.md): the language model works with your real data instead of guessing.

What the Graph does not do matters just as much. It never lifts permissions. Every request runs as the person who asked and returns only content that person could open anyway. Copilot sees no more than you do, but it finds what you could theoretically see much faster. Why that can turn into a problem is explained under [oversharing](./Oversharing.md).

Three terms often get mixed up. The Graph is the data itself. The [semantic index](./Semantischer Index.md) is the search layer on top, which looks for meaning rather than exact words. Work IQ is the newer layer through which agents access data and tools in the Graph. For everyday use, one point is enough: without the Graph, Copilot knows nothing about your work.

Grounding in the Graph depends on the licence. As of October 2026, only the Premium licence gets automatic access to Graph data. In Copilot Chat without Premium you upload files yourself or work with open content. See [Copilot Premium and Basic](./Copilot Premium und Basic.md) for details. Data from systems outside Microsoft 365, such as a ticketing tool or a wiki, enters the Graph through [Copilot connectors](./Copilot Connectors.md) and is indexed there with its access rights intact.

_Common misconception:_ Many people assume Copilot searches “the company's internet” and finds everything in it. In fact it only sees the Graph, and within it only what has been shared with you.

_In practice:_

> “Copilot just gave me a summary of the supplier negotiation. How does it know all that?”
>
> “From the Graph. Your emails, the Teams chat with purchasing and the minutes on SharePoint are all tied to that topic. Copilot only reads what you could open yourself.”
