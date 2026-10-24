---
title: Model
description: A specific, fully trained version of a language model, such as GPT, Claude or Gemini, with its own quality and speed
aliases: [AI model, Modell]
---

A model is a specific, fully trained version of a [language model](./Sprachmodell.md). The GPT family from OpenAI, Claude from Anthropic or Gemini from Google are such models. Each has its own [training](./Training.md), its own [knowledge cutoff](./Knowledge Cutoff.md) and its own behavior.

The product and the model are not the same thing. ChatGPT is the interface, and behind it run models from the GPT family. Microsoft 365 Copilot also uses a model from OpenAI, while Microsoft builds the chat and the connection to Outlook, Teams and SharePoint around it. When a provider releases “a new model”, the interface usually stays the same, but the answers change.

Models differ in quality, speed and cost. Large models write more accurately, follow instructions more closely and make fewer mistakes on complex tasks. Small models answer faster and cost the provider less, which is why the large ones are limited in some licenses or only available on request. Some models also offer [reasoning](./Reasoning.md), a mode in which the model computes for longer before answering.

In many chat tools you can choose the model yourself. ChatGPT and Claude show a selection menu for this, and Copilot offers switches for faster or more thorough answers depending on the license. A simple rule for everyday work: for routine text such as emails, summaries or translations, the fast default model is enough. For a quote calculation, a contract draft or an analysis across several documents, the larger model or reasoning is worth it.

When you pass results on, it pays to note the model. “Created with Copilot” is enough for an internal email. For a template the whole team uses, it helps to record which model it was tested with, because a change of model can change the results.

_Common misconception:_ “ChatGPT” or “Copilot” is not a model but a product. The same product can use a different model today than it did three months ago, without you having changed anything.

_In practice:_

> “Why have Copilot's summaries been structured differently since last week?”
>
> “Microsoft has probably switched the model behind it. The interface stays, the model doesn't. Check whether your template still fits.”
