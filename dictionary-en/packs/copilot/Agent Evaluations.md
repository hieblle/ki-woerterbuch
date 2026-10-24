---
title: Agent Evaluations
description: Automated tests in Copilot Studio that run a test set of questions against the agent and grade the answers
aliases: [Evaluations, Test sets, Agent evaluation]
---

Agent evaluations are the built-in testing feature of Copilot Studio. You create a test set of questions, run it against the agent and get a grade for each one. It is the Copilot Studio implementation of what the main entry [Evals](./Evals.md) describes in general. The feature has been generally available since March 2026.

A single response test set holds up to 100 test cases, each a question with an optional expected answer. A conversation test set holds up to 20 multi-turn dialogues of up to 12 messages, so follow-up questions and context get checked too. You write test cases yourself, import them with a CSV template, let AI generate them from [instructions](./Instructions.md) and [knowledge](./Knowledge.md), or take real user questions from analytics. Quickest start: add questions from the [test panel](./Test Panel und Activity Map.md) straight to a test set.

For grading you pick one or more test methods. “General quality” has a language model check whether the answer fits the question, rests on the sources, is complete and actually attempts an answer. It is the default. “Content safety” checks for hate, violence, self-harm and sexual content with an adjustable threshold. “Compare meaning” compares the meaning with your expected answer, “Text similarity” the wording, and “Exact match” demands the same text character for character. “Keyword match” checks for required words, “Tool use” checks whether the agent used the expected tool or topic. With “Custom” you write your own grading instructions and labels, for example “compliant” and “non-compliant” for an HR agent.

The result is a pass rate per method plus details per test case, including the activity map. You can rate the grader's verdict with thumbs up or down and compare several versions of the agent side by side. Runs can be automated through a Power Automate connector or a REST API. For people who only test, there is the “Agent viewer” role, which you grant through [sharing](./Sharing.md).

Microsoft recommends running a test set several times, because answers vary, and aiming for a pass rate of 80 to 90 percent, depending on the use case. One pitfall: “General quality” marks a justified refusal (“I have no information on that”) as a weakness. For such cases you need a custom method that defines the refusal as correct.

_Common misconception:_ A high pass rate does not prove that the agent never produces a [hallucination](./Halluzination.md). It only checks the cases you wrote down. Keep adding real questions that went wrong to the test set.

_In practice:_

> “We changed the travel policy. How do I know the agent now answers correctly everywhere?”
>
> “Run the test set with the 40 travel expense questions again and compare the version with last week's. Whatever turns red, we look at.”
