---
title: Bias
description: Distortions from the training data that the AI passes on in assessments and texts about people
aliases: [Verzerrung, Voreingenommenheit, Algorithmic bias]
---

Bias means that an AI systematically favours or disadvantages certain groups, opinions or patterns. The distortion does not come from any intention on the model's part. It comes from the data the model was trained on.

A [language model](./Sprachmodell.md) learns during [training](./Training.md) from texts written by people. Those texts contain all the prejudices and imbalances that exist in the world. If most executives in the data are men, the model is more likely to write “he” when describing a managing director. If a region rarely appears in the data, the model knows less about it and judges more crudely.

At work this matters wherever the AI judges or writes about people. Pre-sorting job applications, drafting performance reviews, rating customer enquiries or writing texts about target groups. In these situations a bias can disadvantage individuals without you noticing.

You notice it when the suggestions look uniform. Similar CVs are rated differently, and the difference comes down to name, age or origin. Examples and images always show the same type of person. What helps then is to give the model the criteria explicitly, to remove names and photos from the documents before you upload them, and to repeat the assessment with the details swapped. If a different result comes out, bias was at work. Decisions about people stay with you in every case, see [human-in-the-loop](./Human-in-the-Loop.md).

The topic is also regulated by law. The [EU AI Act](./EU AI Act.md) generally classifies AI systems that take part in decisions about hiring, promotion or dismissal as high-risk. Special obligations apply, and your company should have them checked before such a tool is put to use.

_Common misconception:_ “The AI is neutral because it has no feelings.” The model has no opinion, but it passes on the distortions in its data.

_In practice:_

> “I'll have ChatGPT boil the 40 applications down to three favourites, then we can skip the screening.”
>
> “Careful, there may be bias in that, and with hiring decisions that is legally sensitive. Ask for one summary per application at most. We make the selection ourselves, by our own criteria.”
