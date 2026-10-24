---
title: Few-Shot Prompting
description: Showing the AI one or two sample pieces in the prompt so that it hits the right style and form
aliases: [Giving examples, Few-shot, Zero-shot, One-shot]
---

Few-shot prompting means showing the AI one or two finished samples in the [prompt](./Prompt.md) instead of describing at length what you want. The name comes from the fact that the model understands where things are heading after only a few examples (“few shots”). If you give no example at all, that is called zero-shot, and with exactly one example, one-shot. One example you genuinely like says more than three paragraphs of explanation.

The reason lies in how a [language model](./Sprachmodell.md) works. It continues patterns. If you show it two product descriptions in your house style and then give it the raw data for a third product, it produces a third description in the same style. Length, sentence structure, form of address, technical terms, all of it is taken from the examples. Descriptions like “casual but professional”, on the other hand, are stretchy. Everyone understands something different by them, and so does the model.

This is what it looks like in practice. You want Microsoft 365 Copilot to write meeting minutes in your format. Instead of explaining the format, you paste in a good set of old minutes and write: “Here are minutes the way we do them. Create minutes with the same structure from the following transcript.” Or in sales: paste in two successful follow-up emails, then the customer data for the third.

A few rules help. Use examples that are genuinely good, because mistakes get copied too. Mark clearly what is example and what is task, for instance with “Example 1:” and “Now your task:”. One to three examples are usually enough. More fills the [context window](./Kontextfenster.md) without improving much. And pay attention to what is in the examples: real customer names or [personal data](./Personenbezogene Daten.md) need to come out first if you are using a public tool.

Examples and [output format](./Ausgabeformat.md) complement each other. The format says what should come out, the example shows it. Combining both gets you results that hardly need any reworking.

_Common misconception:_ Many people try to describe their style in words and are disappointed that the AI does not hit it. A pasted sample text usually solves that on the first attempt.

_In practice:_

> “I have explained to ChatGPT five times how our job adverts should sound. It just does not get it.”
>
> “Stop explaining and give it examples. Paste in two of our best adverts and say: this is how it should sound, now do that for the clerical position. That works almost every time.”
