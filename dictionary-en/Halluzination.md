---
title: Hallucination
description: The AI confidently delivers false content, such as invented figures, sources, legal clauses or people
aliases: [Halluzination, Confabulation]
---

A hallucination is an answer that sounds convincing but is wrong. The model invents figures, sources, legal clauses or people without flagging them. The tone is the same as in a correct answer, which is why the error does not stand out when you read it.

The reason lies in how the technology works. A [language model](./Sprachmodell.md) calculates which word is most likely to come next. It does not check whether a statement is true. When it lacks the right information, it fills the gap with something that sounds plausible.

There are two kinds. In the first, the model lacks the knowledge, for example because the topic lies after its [knowledge cutoff](./Knowledge Cutoff.md) or is too specialised. The result is invented facts, such as a court ruling with a case number that never existed. In the second kind, the model drifts away from the material you gave it. You upload a contract, and the summary names a notice period that is not in the document. This is often connected to [context loss](./Kontextverlust.md).

You notice it in details you cannot look up. Sources without a link, or with a link that leads nowhere. Figures that are suspiciously round. Statements that suddenly change when you ask again. If something makes you pause, ask: “Where does this figure come from?” A model that then changes course had no source.

What you do next depends on the kind. Against invented facts, give the model material to work with, for example through [web search](./Websuche.md) or uploaded documents, and ask for [grounding](./Grounding.md) with source references that you spot-check by opening them. Against drift from the material, make the task smaller and add the instruction “Only from the document, otherwise say it is missing.” Then hold the answer against the original. In Microsoft 365 Copilot, answers drawn from files come with references you can click to check the passage directly.

_Common misconception:_ Many people think a hallucination is a rare slip. It is actually the model's normal way of working, which only sometimes goes visibly wrong.

_In practice:_

> “Copilot gave me three studies on staff turnover in nursing, with authors and years. I'm putting them in the presentation.”
>
> “Have you opened any of them? Without web search that can be a hallucination. Ask for the links and check at least two before they go on a slide.”
