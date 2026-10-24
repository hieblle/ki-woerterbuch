---
title: Instructions
description: The instruction text of an agent in Copilot Studio that sets its role, tone, limits and procedure
aliases: [Agent instructions, Anweisungen]
---

Instructions are the text in which you tell an agent in [Copilot Studio](./Copilot Studio.md) who it is, what it should do and what it should not do. Technically this is the agent's [system prompt](./Systemprompt.md): it is placed in front of every request, invisibly to the user. You find the field on the agent's overview page.

With [generative orchestration](./Generative Orchestration.md), the instructions are the central control. The agent decides which steps to take based on the instructions and on the descriptions of [topics](./Topics.md), [tools](./Tools.md) and knowledge sources. If the instructions say “Check the handbook first before you create a ticket”, the agent usually does that. If they say nothing, it decides on its own.

Microsoft publishes guidance for good instructions. Write simply and actively, in short sentences or numbered steps. Name tools and topics with exactly the names they carry in Copilot Studio. Describe not only what a tool can do but also what it is not meant for. Say what the agent should do when it is unsure, for example “If the answer is not in the knowledge sources, say so and refer to HR”. Set tone and language. And say how sources should be given, for example “Always include an in-text citation”.

A few mechanics are worth knowing. Typing a slash “/” in the text field lets you reference a tool, a variable, a Power Fx formula or a connected agent directly instead of typing its name freely. The word “reason” in a step tells the agent to use a reasoning model for that step, provided deep reasoning is active in your environment. Besides the agent instructions there are other instruction fields: payload instructions for [event triggers](./Event Trigger.md), prompt instructions in the [prompt tool](./Prompt Tool.md), and separate instructions for each child agent.

Instructions are no substitute for security measures. A sentence like “Do not give out salary data” is a request to the model, not an access control, and it offers only limited protection against [prompt injection](./Prompt Injection.md). Whatever the agent should not see must not be in its knowledge sources. Test changes to the instructions in the [test panel](./Test Panel und Activity Map.md) with the same questions as before, because a new sentence can shift other behaviour too.

_Common misconception:_ Longer instructions are not automatically better. Contradictory or too many rules make the agent less predictable, not more precise.

_In practice:_

> “The agent makes up answers when there is nothing in SharePoint. Can I stop that?”
>
> “Put it in the instructions: ‘Answer only from the knowledge sources. If nothing is there, say so and name the contact person.’ Then test with ten old questions.”
