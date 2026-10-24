---
title: Memory
description: An AI’s memory across chats, where it stores preferences, projects and facts about you and uses them again later
aliases: [Gedächtnis, Long-term memory, Persistent memory]
---

Memory is an AI’s ability to remember things across individual chats: your role, your preferred tone, ongoing projects, decisions from last week. In the next conversation the AI still knows this without you repeating it.

This is different from the [context window](./Kontextfenster.md) and from the chat history. The context window is the short-term memory within one conversation: everything said in this [chat](./Chat.md), but nothing beyond it. The history is the list of old chats that you can reopen yourself, but which the AI does not read on its own. Memory sits in between: the AI writes selected facts to a store and brings them into every new chat when they are relevant.

ChatGPT calls the feature Memory and shows you in the settings what has been stored. Claude remembers preferences and project status and lets you view and edit the store. Microsoft 365 Copilot also has a memory feature and additionally knows you through your work environment, meaning your mail, calendar and files. In all cases the same applies: you can delete individual entries or switch the feature off entirely.

For [agents](./Agent.md), memory is the difference between an intern on their first day and a colleague who knows the ropes. An agent that knows your quotes are always created in the company template with net prices does not need to be told every time. It also knows where the Huber project currently stands and carries on from there. You can tell it explicitly what to remember: “Remember that I work in purchasing.”

Data protection: what gets stored is whatever the AI considers worth remembering or whatever you tell it. That can include customer names or health details you mentioned in passing. So check the store regularly and delete anything that does not belong there. In company accounts, admins decide whether memory is active, because stored [personal data](./Personenbezogene Daten.md) falls under the [GDPR](./DSGVO und KI.md) and accumulates across many chats.

_Common misconception:_ Memory does not mean the AI knows everything from every chat. It stores only selected facts, and whatever was not stored is gone in the next chat.

_In practice:_

> “ChatGPT knew on its own today that I need answers in English. How?”
>
> “That is memory. You mentioned it once last week and it remembered. Check the settings to see what else is stored.”
