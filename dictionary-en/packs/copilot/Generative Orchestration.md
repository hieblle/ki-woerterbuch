---
title: Generative Orchestration
description: Copilot Studio mode in which the agent decides per request which topics, tools and knowledge sources to use
aliases: [Generative orchestration, Classic orchestration, Generative actions, Dynamic chaining]
---

Generative orchestration is the mode in [Copilot Studio](./Copilot Studio.md) in which the agent works out for itself how to answer a request. A language model reads the message, looks at the descriptions of all [topics](./Topics.md), [tools](./Tools.md), knowledge sources and connected agents, and builds a plan from them. If something is missing, the agent asks. At the end it writes the answer from the results. Both kinds of orchestration belong to the standard [harness](./Harness.md) of Copilot Studio.

The counterpart is classic orchestration. There, Copilot Studio compares your message with the trigger phrases of the topics and starts exactly the one topic that matches best. Tools only run when a topic calls them explicitly. Knowledge is used only as a fallback when no topic matches. This mode is predictable but rigid: whatever no topic covers, the agent cannot do.

Generative orchestration changes how you build. Instead of collecting trigger phrases, you write good descriptions: what this topic is for, what this tool can do, what this knowledge source contains. The planner follows those. On top come the [instructions](./Instructions.md), which set tone, limits and procedure. A vague description means the agent uses a tool at the wrong moment or not at all. When you switch an agent from classic to generative, Copilot Studio generates first descriptions from the existing trigger phrases, which you then sharpen.

For new agents, generative orchestration is the default. Many newer features require it, for example [event triggers](./Event Trigger.md), [MCP in Copilot Studio](./MCP in Copilot Studio.md), computer use, web search, deep reasoning and connected agents. Administrators can turn the mode off per environment. If you run an older agent with many topics, test before switching, because the behaviour changes noticeably.

There are some limits as of October 2026: custom entities do not work as inputs for tools and topics, ambiguous requests are not disambiguated automatically, and the agent only considers a limited part of the conversation history. For billing, a tool call made by the planner counts as an agent action and costs more [Copilot Credits](./Copilot Credits.md) than a classic answer.

_Common misconception:_ Generative orchestration does not make topics redundant. For fixed procedures such as a damage report with mandatory fields, a topic is still the right tool; the planner only decides when it starts.

_In practice:_

> “Someone asked our agent about a leave request and it suddenly started the travel expenses topic. Why?”
>
> “Look at the descriptions of the two topics. With generative orchestration the agent chooses by description, not by trigger phrases any more. If both just mention ‘requests’, it mixes them up.”
