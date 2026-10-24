---
title: Open-Source Model
description: A freely published AI model that anyone may download and run in their own data center or on their own computer
aliases: [Local AI, Open source, On-premises, Llama, Mistral, Open-weight model]
---

An open-source model is a [language model](./Sprachmodell.md) that its maker publishes freely (an openly available model): anyone may download it and run it on their own machines. The AI then does not run in the provider’s cloud but on a computer the company controls itself: in its own data center, on a server at its IT service provider, or on your laptop. This is called local AI or on-premises (in your own building). Your inputs never leave the building.

Well-known open-source models come from Meta with Llama, from Mistral in France and from Alibaba with Qwen. Add tools such as Ollama or LM Studio, which let even an ordinary computer run a small model. Large models, however, need expensive graphics cards, and that only pays off above a certain level of use.

An open-source model in-house makes sense when data may not or should not leave the company. Examples: patient data, engineering drawings, contracts with strict confidentiality clauses, personnel files. Public authorities and banks rely on it for the same reason. Another reason is independence: the model does not change overnight because the provider rolls out a new version, and the costs do not depend on the provider’s price list.

The drawbacks are noticeable. Open-source models are generally less capable than the large cloud models from OpenAI, Anthropic, Google or Microsoft, especially on difficult tasks, long documents and reasoning. A ready-made [AI assistant](./KI-Assistent.md) that sits in Word and Outlook is missing; IT has to build or buy that itself. Someone has to run, update and secure the system. And the errors all language models make, such as [hallucination](./Halluzination.md), occur locally just the same.

For you in the office, little changes in how you use it. An open-source model has a chat window too. You notice the difference in answers that are sometimes shorter, slower or less precise, and in the absence of web search unless IT has connected it.

_Common misconception:_ “Open source in-house is automatically secure.” The data stays in the building, but who in the building can access it and whether the model has built-in weaknesses remain open questions. An open-source model shifts the responsibility to your own IT; it does not remove it.

_In practice:_

> “Can we load the engineering documents into ChatGPT so it checks the parts list?”
>
> “No, those stay in-house. IT has set up an open-source model for that, it runs on our server. It’s a bit slower, but the data doesn’t go anywhere.”
