---
title: Reasoning
description: A mode in which the model computes for longer before answering; better for tricky tasks, slower, not always needed
aliases: [Reasoning mode, Thinking, Thinking mode, Reasoning model, Denkmodus]
---

Reasoning (called thinking in some tools) means that a [model](./Modell.md) works through an intermediate step before the actual answer. It first produces an internal draft in which it breaks the task down, runs through options and corrects itself, and only then formulates the answer.

You can recognize it by a switch or a model selection. ChatGPT, Claude and Gemini offer buttons with names like “Think” or dedicated reasoning models in the model list. Microsoft 365 Copilot offers a mode for more thorough answers depending on the license. While the model is thinking, you usually see a note such as “Thinking” and sometimes a summary of the intermediate steps.

Technically, the intermediate step is nothing more than additional text that the [language model](./Sprachmodell.md) produces for itself. Because it works one word at a time, it helps to write down partial results before stating the final result. It is the same principle as the prompting technique [chain of thought](./Chain of Thought.md), except that the model does it on its own and gets far more room for it.

The benefit shows in tasks with several dependencies. A quote calculation with tiered discounts, checking whether a contract draft meets three conditions at the same time, shift planning with constraints, or analyzing contradictory information across several documents. Here the standard model makes careless mistakes more often, and with reasoning it catches them itself more often.

The price is time. An answer takes half a minute or more instead of seconds, and in some licenses the number of such requests is limited. For a short email, a translation or a summary, reasoning brings nothing but waiting time. A simple rule: if you would have to work the task out on a piece of paper yourself, reasoning is worth it. If you could answer it off the top of your head, it is not.

Even with reasoning, the result remains a draft. The model computes more thoroughly, but it can go wrong in the intermediate steps just as in the answer. Your check is still needed, see [human-in-the-loop](./Human-in-the-Loop.md).

_Common misconception:_ Reasoning does not make the model smarter in the sense of more knowledge. It has the same training knowledge and the same [knowledge cutoff](./Knowledge Cutoff.md), it just uses more computing time to combine what it knows more carefully.

_In practice:_

> “Should I switch on thinking mode for the tiered prices in the quote?”
>
> “Yes, that's exactly the case for reasoning. Several conditions that have to fit together. You won't need it for the cover email afterwards.”
