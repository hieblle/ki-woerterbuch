---
title: Context Engineering
description: Deliberately assembling the information the AI gets for a task, instead of only polishing the prompt
aliases: [Kontext-Engineering, Context design]
---

Context engineering means deliberately controlling which information the AI gets for a task: which documents, which requirements, which examples, which history. [Prompt engineering](./Prompt Engineering.md) is about how you word your request. Context engineering is about everything that sits around it in the [context](./Kontext.md).

The term arose because the limits of the prompt became visible. For a short question, one good sentence is enough. For a task like “Create the quarterly report for sales”, it is not the wording that decides but the material: the right figures, the report template from last quarter, the list of customers the boss wants to see, and the note that two figures are confidential. If that is missing, the best prompt cannot save it. If it is there, a plain instruction is enough.

In everyday work, context engineering mostly means selecting. Not uploading everything there is, but what counts for the task. A [context window](./Kontextfenster.md) is limited, and too much material leads to [context loss](./Kontextverlust.md): the AI then overlooks exactly the paragraph that matters. Good practice is to trim material, leave out what is outdated and put important requirements at the beginning or the end. In Microsoft 365 Copilot, you control the context by attaching specific files and emails instead of letting Copilot search through everything.

With agents, context engineering becomes the main job. An [agent](./Agent.md) works over many steps, and at every step it is decided what it currently sees: the [system prompt](./Systemprompt.md), the relevant [skills](./Skill.md), search results from company knowledge via [RAG](./RAG.md), the history so far. Whoever builds an agent spends more time getting this assembly right than on the prompt itself.

For you as a user, the rule is simple: before you polish the prompt, check whether the AI has the material a person would need for the task. That is usually where the problem lies.

_Common misconception:_ Many people believe a poor answer is down to the wrong wording in the prompt. More often, the right material is simply missing from the context, or it is surrounded by too much that does not matter.

_In practice:_

> “I have reworded the prompt for the proposal summary five times now, and the result stays superficial.”
>
> “Leave the prompt alone and look at the context. Attach the proposal as a PDF, plus our price list and the customer's email with their requirements. That is context engineering, and it does more than any wording.”
