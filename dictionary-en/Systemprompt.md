---
title: System Prompt
description: Standing instructions the AI follows in every chat, such as language, tone or your role in the company
aliases: [Systemprompt, Custom Instructions, Instructions, Project instructions]
---

A system prompt is a text with standing instructions that the AI reads in the background before every answer. It applies not just to one chat but to every chat. The part you set yourself is filled with sentences like: “Answer in German”, “Keep it informal”, “I work in purchasing at a machinery manufacturer”, “No bullet points, prose instead”. In ChatGPT this setting is called Custom Instructions, Claude has project instructions, and Gemini and Microsoft 365 Copilot have similar settings.

The system prompt has several layers. The foundation is written by the provider: a text that sits before your actual [prompt](./Prompt.md) without you seeing it in the chat. It defines how the assistant behaves, what it should not do and what it calls itself. Every AI product has a system prompt like this. Your company can add its own requirements, and your personal instructions are appended to that.

In companies, the IT department often sets part of the system prompt. In Microsoft 365 Copilot, for example, the administrator can specify that certain data sources are not searched or that answers include a note about the duty to check. You do not see these requirements, but you notice them when Copilot consistently refuses something or always phrases things the same way. If you are puzzled, ask IT what has been set.

A system prompt of your own saves work because you do not have to type the same [context](./Kontext.md) into every chat. Someone in HR enters once “I am an HR officer at a logistics company with 400 employees, all texts should be factual and gender-neutral” and gets more suitable suggestions from then on. For recurring tasks with lots of detail, a [prompt template](./Prompt-Vorlage.md) is often the better choice, because it only kicks in when you need it.

A system prompt is not a law. The model follows it most of the time, but not always, especially when the chat gets long or your prompt asks for something different. If an instruction is ignored, repeat it directly in the chat.

_Common misconception:_ Many people think the system prompt is only for the technically minded. In fact it is the simplest setting with the biggest effect: three sentences about you and your work, entered once.

_In practice:_

> “I have to tell ChatGPT every single time to keep it casual and answer briefly. Annoying.”
>
> “Put that in your system prompt, in ChatGPT it’s called Custom Instructions. Then it applies automatically in every new chat.”
