---
title: Prompt Tool
description: Tool in Copilot Studio that runs a single model call with fixed instructions, inputs and a model of your choice
aliases: [Prompt builder, Prompt assistant, AI Builder prompts, Dynamic prompt]
---

The prompt tool is a [tool](./Tools.md) in [Copilot Studio](./Copilot Studio.md) that runs exactly one call to a language model: fixed instructions, plus inputs from the conversation, and out comes a text or a structured answer. You build it in the prompt builder, an editor with a preview where you write the instruction, place placeholders for inputs and test straight away.

Typical uses are clearly bounded subtasks. Pulling product, fault and urgency out of an incoming complaint. Sorting a customer enquiry into one of five categories. Summarising minutes in three sentences. Rewriting an answer in your company's tone. The agent hands the text to the prompt tool, gets the result back and carries on with it, for example in an [agent flow](./Agent Flows.md). Inputs can be text, images or documents. Optionally you attach a knowledge source so the prompt answers with [grounding](./Grounding.md) in company data rather than from model knowledge alone.

The prompt builder grew out of the AI Builder prompts of the Power Platform, which went by names such as “Create text with GPT” or “Dynamic prompt”. That is why you meet the same building block in Power Automate and Power Apps. In Copilot Studio it is integrated as the tool type “Prompt”.

One special feature is the model choice per prompt. You pick from the managed models, including GPT and Claude variants, or connect your own deployment from the Azure AI Foundry model catalog, such as an open model like Llama or Phi. This “bring your own model” applies only to prompts, not to the agent's primary model, which is set through [model selection](./Model Selection.md). Your own Foundry models are billed through Azure; the managed models are billed by [tokens](./Token.md) through [Copilot Credits](./Copilot Credits.md). Content moderation can be set individually for each prompt.

The difference from the agent's [instructions](./Instructions.md): the instructions steer the whole conversation, while a prompt tool does one bounded step with the same instruction every time. That makes it easy to test. You add ten example inputs in the prompt builder and see immediately whether the output is right, before the agent uses it.

_Common misconception:_ A prompt tool is not a chat. It has no memory between two calls and sees only what you pass it as input.

_In practice:_

> “Our agent should pull the invoice number and the amount out of supplier emails. Does that go into the instructions field?”
>
> “Better as a separate prompt tool. You write the instruction once, define the output fields and test it with real emails. The agent then calls it.”
