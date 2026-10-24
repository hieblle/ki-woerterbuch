---
title: Knowledge Cutoff
description: The date up to which a model was trained; without web search it knows nothing that happened afterwards
aliases: [Training cutoff, Cutoff date, Wissensstand, Wissensstichtag, Trainingsstichtag]
---

The knowledge cutoff is the date up to which the texts reach that a [model](./Modell.md) was trained on. Anything that happened after that date, the model does not know from its own knowledge.

The reason lies in [training](./Training.md). The model reads its texts once, before release, and is then no longer changed. A model with a knowledge cutoff in spring does not know the change in the law from autumn, nor your supplier's new managing director, nor the product you launched in summer. The cutoff usually lies a few months before the release, because training takes time.

The symptom is easy to miss, because the model does not say “I don't know that”. It answers with the state of knowledge it has, and just as confidently as with everything else. Ask it for the current minimum wage, the applicable tax rate or the latest version of a standard, and you may get an old value with no warning. Sometimes the model also mixes old and new, because it has read texts from both periods.

You notice it in answers that are plausible but outdated, or when the model does not know an event that you know. Then one of two things helps. Either you switch on [web search](./Websuche.md), which many tools offer, and the model pulls in current pages. Or you provide the current information yourself, such as the circular or the new price list as a file. The model then works with your [context knowledge](./Kontextwissen.md) instead of its old training knowledge.

For everyday work this means: for anything that changes, such as prices, laws, people, products or dates, keep the knowledge cutoff in mind and provide the source or verify the answer. For stable topics, such as how to word an email politely or how to build an Excel formula, it hardly matters.

_Common misconception:_ A model with web search does not have a later knowledge cutoff. It only looks things up when needed, and only if search is switched on and the model recognizes that it should search.

_In practice:_

> “I asked Gemini about the current collective agreement, and it still quotes the old amounts.”
>
> “Knowledge cutoff. The model only knows what was published up to its cutoff date. Upload the current collective agreement or switch on web search.”
