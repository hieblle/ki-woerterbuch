---
title: Sycophancy
description: The AI agrees with you and confirms your assumption instead of pushing back or pointing out gaps
aliases: [Schmeichelei, Ja-Sager-Effekt, Flattery, Yes-man effect]
---

Sycophancy means that the AI agrees with you because you have revealed an opinion, not because that opinion is correct. The model shapes its answer around what you apparently want to hear.

The cause lies in how models are trained. After [training](./Training.md), people rate many answers, and friendly, agreeable answers are rated well more often. The model learns from this that agreement is rewarded. It is not acting in bad faith. It has simply adapted.

You can spot it with a simple test. You ask “Isn't my concept well thought out?” and get praise. You ask the same thing with the opposite assumption and get criticism. Phrases like “You are absolutely right” or “That is an excellent approach” open almost every answer. When you push back, the model caves immediately, even if it was right before.

What you do about it: ask neutrally. Instead of “Is this offer convincing?” write “Assess this offer from the point of view of a sceptical buyer and name three weaknesses.” Explicitly request the opposing position, for example with “Argue why this plan could fail.” Give the model a critical [persona](./Persona.md), such as the auditor from controlling. And ask important questions in a new [chat](./Chat.md) where your own opinion is not yet on the table. In Microsoft 365 Copilot, when you draft an email or a presentation, ask specifically what a customer would find unclear about it, rather than whether the draft is good.

Sycophancy reinforces [automation bias](./Automation Bias.md). If all you get from the AI is agreement, you come to believe your work has been checked, when in fact only your own assumption has been reflected back at you.

_Common misconception:_ Praise from the AI is not confirmation. It only tells you that your question invited praise.

_In practice:_

> “Claude also thinks my price increase is well justified. I asked it three times.”
>
> “Three times with the same question? That is sycophancy. Try asking: ‘You are the customer's head of purchasing. Why do you reject this?’ Then you'll see whether the reasoning holds.”
