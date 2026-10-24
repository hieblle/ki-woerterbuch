---
title: Trigger
description: The start condition of a topic in Copilot Studio, such as phrases the user types or the agent's own decision
aliases: [Topic trigger, Trigger phrases, Trigger node, Auslöser]
---

A trigger defines when a [topic](./Topics.md) starts in [Copilot Studio](./Copilot Studio.md). Every topic begins with exactly one trigger node. Without a fitting trigger the topic never runs, however well the flow behind it is built.

The two most important kinds of trigger depend on the orchestration mode. Under classic orchestration the trigger is called “User says a phrase”. You enter trigger phrases, five to ten example sentences such as “I want to request leave” or “book vacation”. When someone types something similar, the language understanding recognises the topic. Under [generative orchestration](./Generative Orchestration.md) the trigger is called “The agent chooses”. Instead of example sentences you write a description of what the topic can do, and the [language model](./Sprachmodell.md) decides from that description and the conversation context whether to call it. When you switch modes, Copilot Studio generates a first description from your trigger phrases automatically.

There are also triggers for events inside the conversation: a message arrives, the user has been inactive for a while, another topic redirects here, a plan of the generative orchestration completes, or an AI response is about to be sent. The last two let you intercept and check the agent's answers before they go out. [Child agents](./Child Agents und Connected Agents.md) use the same trigger types, plus a condition and a priority.

The key distinction is from the [event trigger](./Event Trigger.md). A topic trigger works inside a running conversation. An event trigger starts the whole agent from the outside, with nobody chatting, for example when an email arrives or on a schedule. That is the basis of autonomous agents and has its own entry.

Typical pitfalls: trigger phrases that overlap between two topics lead to the “Multiple Topics Matched” question. Descriptions for “The agent chooses” should say what the topic does and what it is not meant for, or the agent will pick it for unrelated requests. And the inactivity trigger does not fire reliably in the [test panel](./Test Panel und Activity Map.md); test such cases in the real channel instead.

_Common misconception:_ Trigger phrases are not keywords that have to appear word for word. They are examples from which the system learns the intent. Ten varied phrasings help more than twenty nearly identical ones.

_In practice:_

> “The agent won't start my expenses topic, even though I entered ten trigger phrases.”
>
> “Is the agent running on generative orchestration? Then the description counts, not the phrases. Write in that the topic submits expense reports, and test again.”
