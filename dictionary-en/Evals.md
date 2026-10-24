---
title: Evals
description: Systematic tests with a fixed set of example tasks that show whether an agent or prompt reliably delivers good results
aliases: [Evals, Evaluation, Test set, Quality check, Agent Evaluations]
---

Evals (short for evaluations) are systematic tests for an [agent](./Agent.md) or a prompt. You put together a fixed set of example tasks, define what a good answer looks like and let the agent work through all of them. The result is a number: how many of the 50 test cases did it get right? You repeat this run before and after every change.

Without evals, quality checking comes down to a feeling: “I tried it three times and it worked.” Because of [non-determinism](./Nicht-Determinismus.md), that is not enough. The same task can turn out differently on the fourth attempt, and three tries say little about how the agent will perform on 500 real requests a month. A test set of 30 to 100 typical cases, including deliberately difficult ones and edge cases, shows this much more clearly.

An example from HR: an agent answers questions about the travel expense policy. The test set contains 40 real questions from the inbox, each with the correct answer from the policy. Plus five questions the policy does not answer, where the agent should say it does not know instead of guessing ([hallucination](./Halluzination.md)). After every change to the instructions or knowledge sources, the test set runs again. If the hit rate drops, the change did harm, even if it felt good when you tried it out.

The grading is done either by a person who reviews the answers or by a second model that checks against criteria. The second option is faster but needs human spot checks so that the grader does not make the same mistakes as the agent under test. Copilot Studio offers Agent Evaluations for this: you upload a test set, choose grading criteria and get a report for each run. The developer platforms from OpenAI, Anthropic and Google have similar features.

Evals are the step where many [pilot](./Pilot.md) projects fail or never make it into regular operation. When [iterating](./Iterieren.md) on an agent, they show whether a change is really an improvement. The test set is ideally built by the people who know the task: collect real cases, record the correct answers and maintain the set when the policy changes.

_Common misconception:_ Evals are not a one-off acceptance test. They run again with every change, otherwise nobody notices when the agent slowly gets worse.

_In practice:_

> “We rewrote the instructions for the travel expense agent. It feels better.”
>
> “Run the test set before it goes live. Last time a change felt good too, and the hit rate dropped from 90 to 70 percent.”
