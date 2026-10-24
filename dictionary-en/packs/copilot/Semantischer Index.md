---
title: Semantic Index
description: Automatically built index over Microsoft 365 data that lets Copilot search by meaning rather than exact words
aliases: [Semantic Index for Copilot, Semantic Indexing]
---

The semantic index is a search layer that Microsoft builds automatically on top of the data in [Microsoft Graph](./Microsoft Graph.md). It lets [Microsoft Copilot](./Microsoft Copilot.md) find content by meaning rather than by exact wording. Ask about the “notice period” and it also finds a document that only says “contract ends after three months”.

Under the hood the index uses [embeddings](./Embeddings.md): text is turned into strings of numbers, and similar content ends up close together in that number space. Classic keyword search runs alongside. Together they supply the material Copilot inserts into the prompt before it reaches the language model. The pattern is called [RAG](./RAG.md): search first, then answer.

There are two levels. The user index covers your personal working set: your mailbox, your files, documents that mention you. The tenant index covers SharePoint files across the organisation that several people can access, plus data from [Copilot connectors](./Copilot Connectors.md). Indexed formats include Word, PowerPoint, PDF, OneNote and SharePoint pages. New emails show up almost immediately, new SharePoint documents usually within a day.

The index does not change permissions. For every item it records who may see it and only returns hits you could open anyway. A link set to “People in your organisation” does not automatically put a file into the tenant index either. Only when you open the link does it enter your user index. Where content is still visible too widely, the cause is the sharing settings, not the index; see [oversharing](./Oversharing.md).

For admins: the semantic index cannot be switched off. According to Microsoft it is part of Microsoft 365 search. You remove individual sites by excluding them from search results or by using [Restricted Content Discovery](./Restricted Content Discovery.md). The index is stored in the same region as the mailbox or site, so inside the EU for customers of the [EU Data Boundary](./EU Data Boundary.md).

Since 2026 Microsoft also speaks of Work IQ, a layer through which agents access data, context and tools in the Graph. As of October 2026 the semantic index remains the term for the search itself, while Work IQ is more of an umbrella term for agent access.

_Common misconception:_ Many people think Copilot reads every file in the company for each question. It actually queries the index and receives only a handful of matching passages.

_In practice:_

> “I asked for the ‘onboarding checklist’ and Copilot showed me a document called ‘First week for new colleagues’. How did that happen?”
>
> “That is the semantic index. It searches by meaning, not by file name. Still check whether it is the current version.”
