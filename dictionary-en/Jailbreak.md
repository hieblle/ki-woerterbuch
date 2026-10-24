---
title: Jailbreak
description: Deliberately bypassing an AI's safety rules, for example through tricks in wording or invented scenarios
aliases: [Jailbreaking]
---

A jailbreak is an attempt to deliberately override an AI's safety rules. The user tricks the model into doing something the provider has blocked.

The tricks are mostly in the wording. Someone asks the model to play a character “who has no rules”. Or they wrap the request in a story, a play or a supposed research project. Or they break a blocked request into harmless-looking pieces. Providers such as OpenAI, Microsoft, Anthropic and Google keep patching these, but new variants appear regularly.

In a company this is a problem, even when it looks harmless. Anyone who gets around a tool's safety rules is generally acting against the provider's terms of use and against their own company's [AI policy](./KI-Richtlinie.md). If damage results, for example an offensive text that reaches a customer or instructions that breach safety regulations, the company is responsible, not the provider. On top of that, a jailbreak often lowers quality, because a model in its “rule-free” role tends to answer less carefully in other respects too.

The difference from [prompt injection](./Prompt Injection.md) is who is doing it. In a jailbreak, the user manipulates the model themselves. In prompt injection, a third party plants hidden instructions in documents or emails, and the user is the victim. Both exploit the same weakness: the model follows text without knowing for sure who wrote it.

You notice it when a colleague brags about a prompt that “unlocks everything”. Or a shared [prompt template](./Prompt-Vorlage.md) opens with pages of preamble giving the model a new identity without restrictions. What you do then: do not adopt it, use the tool normally and raise the issue. If a block gets in the way of a legitimate task, the right route is to ask your [AI champion](./KI-Champion.md) or IT. Often there is another tool or a [business licence](./Business-Lizenz.md) that covers the [use case](./Use Case.md).

_Common misconception:_ “It's just playing around with the chatbot.” On a company account it is a violation, and many business licences log usage.

_In practice:_

> “I found a prompt that makes ChatGPT answer without all the warnings. Should I put it in the team wiki?”
>
> “Better not. That is a jailbreak and it breaks our policy. If a block is stopping real work, tell me which one and we'll sort it out with IT.”
