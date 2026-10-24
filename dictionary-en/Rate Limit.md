---
title: Rate Limit
description: An upper limit on how much you may use in a given period, such as messages, tokens or credits; agents reach it faster
aliases: [Rate limit, Usage limit, Quota, Message limit, Credits]
---

A rate limit is an upper limit on how much of an AI service you may use in a given period: messages per day, [tokens](./Token.md) per minute or credits per month. When you reach it, you get a message such as “You have reached your limit, try again in two hours”, or the service switches to a smaller model.

What gets counted differs from product to product. ChatGPT and Claude count messages or tokens in a rolling time window. Microsoft 365 Copilot rarely shows limits in the chat, but it bills agents from Copilot Studio and automated actions through credits that the company buys. Which limits apply to you depends on the [business licence](./Business-Lizenz.md) your company has. The limits for personal accounts and company accounts often differ considerably.

With agents, the topic becomes more important. An [agent](./Agent.md) does not make one request but many: every step of its loop is a separate call to the model, and every file it reads counts as input. A task that feels like a single question to you can consist of 30 or 50 requests behind the scenes. A [multi-agent system](./Multi-Agent-System.md) multiplies that again. This is why agents hit a limit you never noticed in the chat, and why an agent run takes minutes rather than seconds.

You notice a rate limit when the agent stops in the middle of a task, shows an error message or becomes noticeably slower. Some products wait automatically and continue later, others abort. In that case, check what was completed before you restart the run, otherwise the agent repeats the first steps.

What you can do: combine several small questions into one task instead of sending the agent off ten separate times. Give it the right files directly instead of letting it search for them, because every search costs requests. Do not schedule large runs shortly before a deadline. And if your team regularly hits limits, that is a signal for purchasing or IT that the licence no longer matches how you work.

_Common misconception:_ A rate limit says nothing about the quality of the model. It is a volume rule set by the provider, not a weakness of the AI.

_In practice:_

> “The agent stopped halfway through the analysis. Yesterday it worked fine.”
>
> “Probably the rate limit. The run consists of dozens of requests, so the quota fills up faster than in the chat. Check what is already done and let it finish the rest in an hour.”
