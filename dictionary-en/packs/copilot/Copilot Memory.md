---
title: Copilot Memory
description: Personalisation in Copilot with saved memories and custom instructions that carry over from one chat to the next
aliases: [Memory in Copilot, Saved Memories, Custom Instructions, Enhanced Personalization, Personalisation in Copilot]
---

Copilot Memory is the personalisation feature in Microsoft Copilot. Copilot remembers things about you that apply beyond a single chat: your role, preferred language, ongoing projects, how you like your summaries. In the next conversation it uses them without you repeating yourself. The general principle is described under [memory](./Memory.md). This entry is about how Copilot implements it.

Personalisation has three parts, which you find in the settings under Personalization. Saved memories are individual facts that Copilot derives from your chats or that you give it explicitly: “Remember that I work in purchasing and always need quotes net of tax.” Custom instructions are rules that apply to every answer, such as “Answer briefly, in German, without bullet points”. Then there is the chat history, which Copilot draws on for connections when needed. In addition, Copilot with a license knows your work environment through the [Microsoft Graph](./Microsoft Graph.md), but that is grounding, not memory.

You can view what is stored, delete individual items or switch the whole thing off. Deleting a chat does not delete the memories that came from it. According to Microsoft, the data lives in a hidden folder of your Exchange mailbox, so inside the company. Admins control the feature through the Enhanced Personalization setting. If it is off, users cannot turn memory on.

As of October 2026, Microsoft still lists parts of the feature as preview, and the date for general availability has been postponed several times. According to Microsoft, the feature is also available in [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) without a license.

Day to day, memory saves repetition. If you use Copilot for email every day, you set once that drafts should be formal and free of filler phrases. If you look after a project, you have it remember who the contacts are and which template applies. But memory also collects what you mention in passing: customer names, a sick note, a conflict in the team. So it pays to look at the list regularly. Whatever does not belong there, you delete ([personal data](./Personenbezogene Daten.md)).

There is one compliance detail: according to Microsoft, memories are not covered by the usual retention policies, but they can be found through eDiscovery. Whoever is responsible for that should know it ([eDiscovery and audit](./eDiscovery und Audit.md)).

_Common misconception:_ Memory does not mean Copilot knows all your old chats. It stores selected facts. What was not saved as a memory is simply not there in the next chat.

_In practice:_

> “Copilot suddenly writes my email drafts in English, and I never asked for that.”
>
> “Check the settings under Personalization. It probably remembered something from an English project. Delete the entry, or write in your custom instructions that emails should be in German.”
