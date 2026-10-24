---
title: Large Language Model
description: The program behind the chat that predicts the likely next word, one word at a time, and so produces text
aliases: [LLM, Language Model, Large Language Model, Sprachmodell]
---

A language model (large language model, LLM) is the program behind the chat window of ChatGPT, Microsoft 365 Copilot, Claude or Gemini. It produces text by predicting, one word at a time, which word is likely to come next.

The mechanism is simpler than the result suggests. During [training](./Training.md), the [model](./Modell.md) read an enormous amount of text and learned which sequences of words are common. Give it the opening “Dear Ms Huber, thank you for”, and it continues with “your inquiry” or “your letter”, because that is how millions of business letters go. Strictly speaking it does not work with words but with [tokens](./Token.md), that is, parts of words. The principle stays the same.

This explains why the answers sound so fluent. The model always picks the continuation that fits the text so far. Grammar, tone and structure are therefore almost always right. Whether the content is right is a different question. The model does not check facts, it strings plausible words together. A made-up clause reads just as confidently as a real one. This behavior is called a [hallucination](./Halluzination.md).

In everyday work you notice the mechanism in two places. First, the model answers even when it does not know the answer, because it generates continuations rather than looking things up. Second, it reacts strongly to what you put in at the start. A clear [prompt](./Prompt.md) with examples and the right document changes the most likely continuation, and with it the answer.

The term language model describes the technology. A specific product, such as the GPT family or Claude, is called a model. The chat around it, with its interface, file attachments and web search, is something else again.

_Common misconception:_ A language model does not “understand” your question the way a colleague does. It calculates which answer would fit your question. That often gets surprisingly far, but it does not replace checking.

_In practice:_

> “The text from Copilot sounds perfect, but the annual revenue figure is wrong.”
>
> “Typical language model. It writes the most likely continuation, not the right number. Attach the annual report, then it has the real figure in front of it.”
