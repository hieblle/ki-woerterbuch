---
title: Automation Bias
description: Accepting AI output without checking it, because it looks finished and convincing
aliases: [Übervertrauen, Overreliance, Automatisierungsvertrauen, Overtrust]
---

Automation bias (also called overreliance) is the tendency to accept a result because it comes from a machine and looks good. The check gets skipped, not because it would be impossible, but because nothing suggests a check is needed.

The mechanism is human, not technical. An answer from Microsoft 365 Copilot arrives in clean language, with structure and without hesitation. It looks like the work of a careful colleague. A person who writes like that has usually checked their work. That does not hold for the model. It always writes like that, even when it is producing a [hallucination](./Halluzination.md). Add time pressure. Once the summary is already there, reading the original feels like doing the work twice.

Two examples. You have Copilot build a formula in Excel that sums revenue by region. The figures look plausible, and the sheet goes to management. One region was missing because the range was one row too short. Or you have a supply contract summarised and read only the summary. The liability clause was dealt with in a single sentence there, while in the contract it runs to a full page.

You notice it when you cannot say which passage you last verified yourself. Or when you pass AI results straight on without opening them. What you do about it: define what checking means for this task before you start the AI. For figures, that means spot checks against the source. For contracts, it means reading the original passages the summary refers to. The bigger the consequences, the stricter the check, see [human-in-the-loop](./Human-in-the-Loop.md). And ask for [grounding](./Grounding.md) with source references so the check goes quickly.

_Common misconception:_ “I read it, so I checked it.” Reading is not checking. Comparing against the source is.

_In practice:_

> “The Copilot summary of the framework agreement is clear. I'll send it to purchasing as it is.”
>
> “Which clauses did you cross-check in the original? If none, that is automation bias. We'll look up the payment terms and liability ourselves first.”
