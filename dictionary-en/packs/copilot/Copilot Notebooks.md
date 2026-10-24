---
title: Copilot Notebooks
description: A workspace in Copilot where you collect files, pages, emails and chats on one topic and get answers from those sources only
aliases: [Notebooks, Microsoft 365 Copilot Notebooks]
---

Copilot Notebooks is a workspace in Copilot where you collect everything on one topic: files, Copilot Pages, OneNote pages, emails, Teams meetings, links. When you ask a question in the notebook, Copilot answers only from those sources. It does not search your whole OneDrive, your mailbox or the web.

That is what sets Notebooks apart from a normal chat. In the chat with [work grounding](./Work-Grounding und Web-Grounding.md), Copilot decides for itself which mail and documents to use. That is convenient, but for a clearly defined topic it is often too broad: it mixes the current version of a quote with an old one, or pulls in an email that has nothing to do with the project. In a notebook you set the [context](./Kontext.md) yourself. What is in it counts, the rest does not.

A notebook has an overview page that Copilot generates from the sources, plus the chat and the list of sources. According to Microsoft, a notebook can hold up to 300 files, including Word, Excel, PowerPoint, PDF, Loop and OneNote. From the sources, Copilot can also produce an audio overview, a study guide or an infographic. There are two interfaces: a lightweight one in the Copilot app and the full workspace in OneNote. Both show the same notebook.

Typical uses: a project notebook with the quote, the contract, the minutes and the customer's emails. A notebook for annual planning with budget spreadsheets and the strategy paper. An onboarding notebook for new colleagues with the handbook, process descriptions and frequent questions. When the question comes three weeks later, “What did we promise the customer on delivery time?”, you ask the notebook instead of opening four folders.

Notebooks are available to users with a Copilot license and to [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) users. SharePoint or OneDrive storage is required. Access rights are preserved: what you cannot open, you cannot use as a source either.

Important for upkeep: a notebook is only as current as its sources. If a linked file changes, the answers change too. If you leave outdated documents in it, you get answers from outdated documents. And as everywhere, Copilot summarises what the sources say and can mix up details along the way. For important figures, click the reference to see the original passage ([hallucination](./Halluzination.md)).

_Common misconception:_ A notebook is not a place to store files. It points to files that still live in SharePoint, OneDrive or OneNote, and only gives Copilot the frame it answers from.

_In practice:_

> “Whenever I ask about the Huber project, Copilot keeps pulling in the old quote from 2024.”
>
> “Create a notebook for Huber and only put in the current quote, the contract and the latest minutes. Then it stays within that frame.”
