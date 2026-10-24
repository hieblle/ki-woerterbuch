---
title: Prompt Engineering
description: The skill of wording prompts so the AI understands what you need and delivers usable results
aliases: [Prompting, Prompt technique, Prompt design]
---

Prompt engineering (often just called prompting) is the skill of wording a [prompt](./Prompt.md) so that the AI delivers a usable answer. The name sounds technical. The thing itself is not. It is what you already do when you explain a task to a new colleague: say what you need, what it is for, by when, and in what form.

The comparison with a new colleague helps with almost every decision. A new colleague does not know your customers, your templates or the backstory. You would not call across the room “Do the proposal”. You would explain who it is for, what is being offered and what your proposals usually look like. That is exactly what prompt engineering is. The more of this goes into the prompt, the less you have to correct afterwards.

A few techniques have proven themselves and earned names of their own. You can give the AI a [persona](./Persona.md) so it answers from a particular perspective. You can show it sample texts with [few-shot prompting](./Few-Shot Prompting.md) so it matches your style. You can ask it to work step by step with [chain of thought](./Chain of Thought.md) when the task involves several considerations. And you can set the [output format](./Ausgabeformat.md). None of these techniques is mandatory. They are tools you pick up when a plain question is not enough.

For a while, prompt engineering was traded as a profession in its own right, with courses, certificates and supposed secret formulas. For everyday work, that is overblown. Models have become good at understanding normal language. What counts is clarity, not tricks. A prompt that cleanly describes your goal, the background and the desired result beats any formula from the internet. With longer tasks and agents, the focus shifts anyway from the single prompt to the question of what material the AI gets in the first place. The term that has taken hold for that is [context engineering](./Context Engineering.md).

You learn prompt engineering by practising. Look at where the answer missed the mark and ask yourself what the AI could not have known. Usually a piece of information was missing that you took for granted. Next time, it goes into the prompt.

_Common misconception:_ “I can't prompt, I'm not technical.” Prompt engineering has nothing to do with technology. Anyone who can delegate a task clearly can prompt.

_In practice:_

> “I heard you have to take a course in prompt engineering, otherwise ChatGPT is useless.”
>
> “You don't. Write the request the way you would explain it to the new intern. With the goal, the background and what the result should look like. That is most of it already.”
