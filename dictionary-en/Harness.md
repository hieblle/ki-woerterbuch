---
title: Harness
description: The software around the language model that turns the model into an agent, with system prompt, tools and loop
aliases: [Harness, Agent harness, Agent runtime]
---

A harness is the software around the language model that turns the model into an [agent](./Agent.md). The model itself can only read text and write text. Everything else an agent needs comes from the harness: the system prompt, the tools, the handling of context, the approvals and the loop that keeps the whole thing running.

Think of it as the relationship between a skilled employee and their workplace. The [language model](./Sprachmodell.md) is the employee who thinks and writes. The harness is the workplace: the job description ([system prompt](./Systemprompt.md)), access to programs and data ([tool use](./Tool Use.md)), the rule for when an action needs an [approval](./Freigabe.md) first, and the routine that decides after each step what happens next. The harness calls the model, carries out what the model proposes and shows the model the result. Then the cycle starts again until the task is done.

This explains why the same model performs differently in different products. Claude in a chat, Claude in an agent tool and a Copilot agent can run on the same model and still behave differently, because the harness provides other tools, other instructions and other limits. If you want to improve an agent, you usually work on the harness, not the model: better instructions, more suitable tools, stricter approvals.

You increasingly meet the term directly in the interface. In Copilot Studio you pick a harness when you create an agent, for example one for customer conversations or a general one (as of October 2026). That choice sets the basic equipment your agent gets before you add your own instructions and knowledge sources. The model behind it stays the same. [Compaction](./Compaction.md), the summarising of the history when the context window fills up, is also done by the harness and not by the model.

_Common misconception:_ When an agent performs poorly, the model is rarely the reason. Usually the harness lacks the right tools or clear instructions.

_In practice:_

> “Copilot Studio wants me to choose a harness. What is that?”
>
> “The basic setup around the model: tools, rules, approvals. You are choosing what kind of workplace your agent gets. The model is the same in all of them.”
