---
title: Training
description: The learning process before release, in which a model learns from huge amounts of text; it learns nothing new in the chat
aliases: [Pre-training, Model training]
---

Training is the process by which a [model](./Modell.md) learns to produce text. Before release, it reads huge amounts of text, such as websites, books, specialist articles and program code, and adjusts itself so that it can predict common continuations.

The process has two phases. In the first, the [language model](./Sprachmodell.md) only learns how language is built and what the texts contain. In the second, people teach it to answer helpfully, follow instructions and decline sensitive requests. Both happen at the provider, take weeks to months and use a great deal of computing power. Then the model is finished. What it knows after that is its [training knowledge](./Trainingswissen.md), and the date up to which the texts reach is its [knowledge cutoff](./Knowledge Cutoff.md).

In the chat, the model learns nothing new. This is the point most often misunderstood in the office. If you explain to Copilot today how your quote numbers are structured, it will not know that tomorrow in a new [chat](./Chat.md). The model itself stays unchanged, only the visible history in the window keeps the information. If you want to give it something permanently, you need a [prompt template](./Prompt-Vorlage.md), an instruction file or your own assistant, see [Custom GPT](./Custom GPT.md).

A separate question is whether the provider uses your input to train future models. That is a different process. With personal accounts for ChatGPT or Gemini, this can happen depending on your settings. With business licenses, such as Microsoft 365 Copilot or the enterprise offerings from OpenAI and Anthropic, providers generally guarantee that company data does not flow into training. Whether that applies to your account is set out in the contract terms, and IT or your data protection officer should check it.

_Common misconception:_ “Yesterday I taught the model that our company is called Müller GmbH.” You did not. You mentioned it in a chat history. The training was completed long before.

_In practice:_

> “Can I paste the customer list into ChatGPT? It would learn it then, wouldn't it?”
>
> “It doesn't learn anything in the chat, the training is finished. The question is whether the provider may use the data for training later. With the personal account, maybe. With the company license, not according to the contract. Use the company license.”
