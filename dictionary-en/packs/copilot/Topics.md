---
title: Topics
description: Conversation flows in Copilot Studio, built from nodes on a canvas, that script one part of a conversation
aliases: [Topic, System topics, Custom topics, Themen]
---

A topic is a scripted section of a conversation in [Copilot Studio](./Copilot Studio.md). The German interface calls it “Thema”. With a topic you define what the [agent](./Agent.md) says, asks and does in a specific situation, step by step.

You build a topic on the authoring canvas out of nodes. There are nodes for a message, a question with answer options, a condition, setting a variable, calling a [tool](./Tools.md) and redirecting to another topic. Linked together they form a flow, much like a flowchart. A “Leave request” topic, for example, asks for the dates and a stand-in, checks that the dates make sense, and then creates the request in the HR system through a tool.

Every topic starts with a [trigger](./Trigger.md). It decides when the topic runs: when the user types certain phrases, when the agent chooses it under [generative orchestration](./Generative Orchestration.md), or when something happens in the conversation. Topics can accept inputs and return results. Under generative orchestration the agent fills missing inputs from the conversation history or asks for them.

Copilot Studio distinguishes two kinds. Custom topics are the ones you create. System topics come with every agent, such as “Conversation Start” for the greeting, “Fallback” when nothing matches, “Escalate” for handing over to a person, or “End of Conversation”. You can edit and disable system topics, but not delete them.

In practice you need topics where the flow has to be binding: mandatory questions in a fixed order, a check before a booking, a handover to support. For plain knowledge questions, [knowledge](./Knowledge.md) and [generative answers](./Generative Answers.md) usually do the job without you ever touching a topic. If you pour everything into topics, you rebuild the rigid chatbot of years past.

A few pitfalls: topic names must not contain periods, or exporting to solutions breaks. Two topics with very similar triggers make the agent ask which one is meant. The code editor shows each topic as YAML, which is handy for copying between agents. Since June 2026 topics belong to the standard [harness](./Harness.md) of Copilot Studio; the newer GitHub Copilot harness works without them.

_Common misconception:_ Many people assume a Copilot Studio agent is made of topics. Under generative orchestration, topics are just one building block next to [instructions](./Instructions.md), knowledge and tools, and often not needed at all.

_In practice:_

> “Our agent should always ask for location, device and urgency first when someone reports a fault. Is an instruction enough for that?”
>
> “I would build a topic for that. Three question nodes in a fixed order, then a tool that creates the ticket. That way it is guaranteed to ask for everything.”
