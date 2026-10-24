---
title: Fine-Tuning
description: Retraining a finished model with your own examples so it masters a particular style or format
aliases: [Fine-tuning, Finetuning, Feinabstimmung, Nachtraining]
---

Fine-tuning means retraining a finished language model with your own examples. The [model](./Modell.md) is actually changed in the process, not just supplied with context. It is a second, smaller round of [training](./Training.md) on top of an existing model.

For everyday work, fine-tuning is rarely the right choice. It takes hundreds to thousands of cleanly prepared examples, specialists, computing time, and a model of your own that someone has to run and maintain. If something changes, it has to be retrained. In most cases where someone wants to “train the AI on our company”, what they actually mean is [RAG](./RAG.md): store the documents and retrieve the matching passages for each question. That is cheaper, current right away, and can be checked.

The two approaches solve different problems. RAG brings knowledge into play: what does our policy say, what is the delivery time for item X. Fine-tuning teaches behavior: how we phrase things, in which format, with which tone. A model that has learned through fine-tuning to always record damage reports in the same schema does that reliably, but it still knows nothing about yesterday's case.

| Goal                                     | Suitable approach                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------- |
| Use current company knowledge            | RAG or upload                                                               |
| Enforce a fixed style or format          | Fine-tuning, though a [prompt template](./Prompt-Vorlage.md) is often enough |
| Master the technical language of a niche | Fine-tuning                                                                 |
| Solve a single task quickly              | Prompt with examples ([few-shot prompting](./Few-Shot Prompting.md))        |

Before a company considers fine-tuning, it pays to look at simpler means. A good prompt template with two or three examples, or a dedicated assistant such as a [Custom GPT](./Custom GPT.md) in ChatGPT or an agent in Copilot, usually covers the wish for a certain style. Fine-tuning remains interesting for providers and large companies that use a model for a narrowly defined task at high volume.

_Common misconception:_ “We have to train the model on our data so it knows us.” Usually not. What the model should know, you give it as context, via upload or RAG. Fine-tuning changes how the model writes, not what it knows about you.

_In practice:_

> “The service provider is offering to fine-tune ChatGPT on our product data.”
>
> “Ask what exactly they mean. For product data that changes monthly, RAG would make more sense. Fine-tuning is more worthwhile if we need a fixed answer style.”
