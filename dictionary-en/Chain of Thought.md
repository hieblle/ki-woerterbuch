---
title: Chain of Thought
description: Asking the AI to think first and answer afterwards, so that fewer careless mistakes happen
aliases: [Step by step, CoT, Gedankenkette]
---

Chain of thought means asking the AI not to answer a task in one go but step by step: first write down the reasoning, then state the result. Guides often use the abbreviation CoT. One sentence in the [prompt](./Prompt.md) is enough: “Work through this step by step and explain your reasoning before you give the answer.”

The benefit comes from how a [language model](./Sprachmodell.md) works. It produces text word by word, and each word builds on the one before. If it has to start straight away with “The answer is”, there is no room to think. If it first writes down the intermediate steps instead, it can refer back to the previous ones at each next step. For calculations, for weighing up options and for tasks with several conditions, this noticeably reduces the number of careless mistakes.

An example from purchasing. You ask: “Which of the three suppliers is cheaper if we order 800 units and supplier B gives a five percent discount from 500 units?” Without being asked to, the AI may name a supplier straight away, and it can be wrong. With “Work through each supplier separately”, it lists the calculation and you can check it. That is the second advantage: you see how the answer came about and spot mistakes before you work with it.

Newer models have this technique built in. With [reasoning](./Reasoning.md), the model thinks on its own, often longer and more thoroughly, before it answers. In ChatGPT, Claude and Gemini this is available as a separate mode or kicks in automatically for difficult questions. For simple tasks you do not need it. A translation or a short summary does not get better through thinking, only slower.

Chain of thought does not replace checking. The reasoning sounds convincing even when one intermediate step is wrong. Read along with the chain, especially where numbers are involved. If a step is wrong, say so and have it recalculated. That is part of [iterating](./Iterieren.md).

_Common misconception:_ “If the AI shows its steps, the result is definitely right.” The error rate drops, but it does not reach zero. Visible steps only make mistakes easier to find.

_In practice:_

> “Copilot just threw a number at me for the leave calculation for the part-time staff, and it was wrong.”
>
> “Tell it to calculate step by step: first the working days, then the proportion, then the days. Then you see where it miscalculates, and usually it does not miscalculate at all any more.”
