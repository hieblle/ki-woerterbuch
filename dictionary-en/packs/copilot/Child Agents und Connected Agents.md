---
title: Child Agents and Connected Agents
description: Two ways in Copilot Studio to split an agent into sub-agents or to link it to other agents
aliases: [Child agents, Connected agents, Multi-agent orchestration in Copilot Studio, Sub-agents]
---

Child agents and connected agents are the two ways to build a [multi-agent system](./Multi-Agent-System.md) in Copilot Studio. A child agent lives inside your agent and bundles one area of responsibility. A connected agent is a standalone agent to which your agent hands off tasks. You find both on the “Agents” page of your agent.

A child agent is lightweight. It has its own [instructions](./Instructions.md), its own [tools](./Tools.md), its own knowledge and its own triggers, but no separate publishing and no separate licence. You use it to create order. An HR agent, for example, gets one child agent for leave, one for travel expenses and one for onboarding. Each has only the tools it needs and its own tool limit. Microsoft suggests splitting once you reach roughly 30 to 40 options across tools, [topics](./Topics.md) and agents, because the orchestrator starts picking wrong more often beyond that. For each child agent you define when it is used, with a condition and a priority, which inputs it receives and what happens after it runs.

A connected agent can be many things: another Copilot Studio agent from the same environment, an agent from Microsoft Foundry, a Fabric data agent for data analysis, an agent built with the Microsoft 365 Agents SDK, or an external agent reached through the [A2A protocol](./A2A-Protokoll.md). As of October 2026 the Foundry, Fabric and SDK connections are in preview, while A2A is generally available. The main agent describes the task, the connected agent works on it and returns the result. That is a [handoff](./Handoff.md) between agents.

Selection works the same way in both cases: with [generative orchestration](./Generative Orchestration.md) the main agent decides from the request which child or partner agent to use, based on its description. Alternatively you redirect explicitly from a topic. In the instructions you can name agents directly with “/”. Two limits are worth knowing. An agent that has connected agents of its own cannot serve as a connected agent for another. And every hop costs time, so more levels mean slower answers.

_Common misconception:_ More agents do not automatically make a system smarter. Split only when a single agent noticeably picks the wrong tools, and then check in the activity map that the handoff works as planned.

_In practice:_

> “Our service agent has 60 tools by now and keeps picking the wrong one. Rebuild it?”
>
> “No, split it. Make a child agent each for returns, invoices and delivery status, each with only its own tools. The main agent then just routes.”
