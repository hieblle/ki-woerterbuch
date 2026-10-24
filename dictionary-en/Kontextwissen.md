---
title: Contextual Knowledge
description: Everything you give the AI in the chat, such as text, files or search results, so it can work with it
aliases: [Context knowledge, In-context knowledge, Kontextwissen, Kontextuelles Wissen]
---

Contextual knowledge is everything you give a language model in the chat: a pasted text, an attached file, a search result, or an email that Copilot pulls from your mailbox. The model reads this content at the moment of your request and bases its answer on it.

The difference from [parametric knowledge](./Trainingswissen.md) matters. Parametric knowledge is baked into the model and is neither current nor specific to your company. Contextual knowledge is something you bring yourself, and it is exactly as current as your material. That is why it is usually more reliable: the model does not have to guess what your quote says, it has the text right in front of it.

The context goes into the [context window](./Kontextfenster.md), the working memory of the conversation. It holds everything you have written or uploaded in this chat. In a new chat, the window is empty again. So if you uploaded a spreadsheet yesterday, the AI no longer knows it today.

The simplest rule: provide the material first, then ask. Instead of “Summarize our delivery terms”, you attach the delivery terms and then write your question. This applies to ChatGPT just as it does to Claude or Gemini. Microsoft 365 Copilot takes some of this work off your hands because it finds matching documents in SharePoint and Outlook on its own, but the principle stays the same.

How you can tell that context is missing: the answer stays vague, mentions invented details, or contradicts what you know. Then you check whether the material is actually in the chat and provide it again.

There are three ways to bring context into the chat: [uploading documents](./Dokumente hochladen.md), [web search](./Websuche.md), and [RAG](./RAG.md), where a system automatically retrieves the right company documents.

_Common misconception:_ “The AI has access to everything in the company anyway.” No. It only sees what is in the current chat or what a tool like Copilot has fetched for this one request.

_In practice:_

> “Can I just ask ChatGPT what our new framework agreement says?”
>
> “Only if you paste it in first. Without contextual knowledge the model does not know the contract and starts guessing.”
>
> “And with Copilot?”
>
> “It looks for it in SharePoint, provided you have access. But check whether it really found the right contract.”
