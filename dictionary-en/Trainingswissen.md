---
title: Parametric Knowledge
description: What a language model knows “by heart” from its training, without you giving it anything in the chat
aliases: [Training knowledge, Parametric memory, Trainingswissen, Parametrisches Wissen]
---

Parametric knowledge is everything a language model brings with it from its training, before you have typed a single word in the chat. It is baked into the [model](./Modell.md), much like what you still remember from school.

The model picked up this knowledge during [training](./Training.md) from very large amounts of text. That is why ChatGPT or Claude can explain how a balance sheet is structured, how to phrase a polite rejection, or what a delivery note is. This knowledge is broad, but it has two gaps. It stops at a certain date, the [knowledge cutoff](./Knowledge Cutoff.md), and it knows nothing about your company. Your price list, your leave request form, the name of your department head: none of that is in the model.

You notice these limits when answers stay generic or seem out of date. Ask for the current contact person at a supplier and you get either an evasive answer or an invented one, a so-called [hallucination](./Halluzination.md). The model likes to fill gaps with plausible-sounding text. If an answer seems a little too smooth, ask where the information comes from, or provide the right material yourself.

The counterpart is [contextual knowledge](./Kontextwissen.md): everything you give the model in the chat, such as an uploaded document or a search result. A good rule of thumb: for general questions, parametric knowledge is enough; for anything current and anything company-specific, you need context. Microsoft 365 Copilot combines the two by adding content from your emails and files to the model's parametric knowledge. Without that addition, even Copilot answers only as well as a textbook from the day before yesterday.

_Common misconception:_ Many people believe the model learns from their chats and will know the company next time. It does not. Parametric knowledge stays unchanged after training.

_In practice:_

> “I asked Copilot how our travel expense process works, and the answer was completely generic.”
>
> “Right, that is just parametric knowledge. The model does not know our travel expense policy. Attach it as a file and the answer will fit.”
