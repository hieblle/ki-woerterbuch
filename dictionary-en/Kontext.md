---
title: Context
description: Everything the AI currently knows about your task because it is in the chat or attached
aliases: [Kontext, Conversation context, Input]
---

Context is everything the AI knows about your task at this moment. That includes your [prompt](./Prompt.md), the conversation so far, attached files and a fixed [system prompt](./Systemprompt.md) that runs in the background. Whatever is not in this bundle, the AI does not know. Putting this bundle together deliberately is called [context engineering](./Context Engineering.md). The AI does not know which company you work for, who your boss is or what was said in yesterday's meeting, unless you tell it.

This is the most common reason for disappointing answers. You ask for “a draft of the customer email”, and the AI writes a general, polite email to nobody in particular. It had no other choice. The customer, the occasion, the previous correspondence, your tone, none of that was in the context. The language model has plenty of [training knowledge](./Trainingswissen.md) about customer emails in general, but nothing about this one situation.

The symptom is easy to spot. The answer is correct but interchangeable. It could apply to any company. It contains placeholders like “customer name” or phrases nobody at your company would use. When you see that, context is missing. The fix is not a cleverer trick but more information: paste the email thread, attach the product description, add two sentences about the situation.

Microsoft 365 Copilot can gather part of the context itself. If you reference a file from SharePoint or ask about an email, Copilot fetches the content. That does not replace your explanation of what this is about, though. Copilot then knows what is in the file, but not what you intend to do with it.

Context has a limit. The AI can only process a certain amount of text at once, the so-called [context window](./Kontextfenster.md). And context from one chat is gone in the next. Every new [chat](./Chat.md) starts from zero unless you provide the information again.

_Common misconception:_ Many people assume the AI knows who they are because they are logged in. The login identifies you to the service, but the AI itself only sees the chat.

_In practice:_

> “I want Gemini to write the rejection letter to the applicant, but all I get is boilerplate.”
>
> “Did you tell it which position it was for and why you are turning them down? Without that context it can only write boilerplate. Give it the job ad and two sentences on the reason, then it gets specific.”
