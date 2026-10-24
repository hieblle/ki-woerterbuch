---
title: Chat
description: A self-contained conversation with the AI in which it knows everything said so far, but nothing from other chats
aliases: [Conversation, Session, Thread, Gesprächsverlauf]
---

A chat is a continuous conversation with the AI (sometimes also called a session or thread). In ChatGPT, Claude and Microsoft 365 Copilot it is the unit you see in the history list and reopen with a click. Within a chat, the AI knows everything that has been said so far: your questions, its answers, uploaded files. You can refer to something from earlier and [refine](./Iterieren.md) it without repeating everything.

Between two chats, on the other hand, there is no connection. If you open a new chat, the AI starts from zero. It does not know that you wrote a proposal with it yesterday, and it does not know the file from the other chat. That is not a fault, it is how it is built. Each chat is its own [context](./Kontext.md). Some products now offer a memory feature that keeps individual facts across chats. Do not rely on it. Whatever matters, you bring along.

A simple rule follows from this: new topic, new chat. If you want to draft a job advert after the proposal text, open a new chat. Otherwise the AI drags the whole proposal context along, the [context window](./Kontextfenster.md) fills up with things you do not need, and the answers get vaguer. The reverse also holds: as long as you are working on the same thing, stay in the same chat. That is where all the groundwork is.

A new chat also helps when a conversation has got stuck. The AI repeats the same mistake despite being corrected, or it has dug itself into a wrong assumption. Then it is often quicker to start afresh and word the task cleanly than to keep arguing. You copy the best of the old chat into the new one.

In company environments there is one more thing. Chats are usually stored and may be visible to administrators. What you discuss with the AI is subject to the same rules as other company communication. For confidential content, it is worth a look at your company's [AI usage policy](./KI-Richtlinie.md).

_Common misconception:_ “I explained our product list to ChatGPT last week, so it knows it.” In a new chat it does not. The list has to come along again.

_In practice:_

> “I asked Claude this morning whether it still remembered my minutes from yesterday. Nothing.”
>
> “Was it the same chat? If not, it does not know the minutes. Every chat starts from zero. Find the old chat and carry on there, or attach the minutes again.”
