---
title: Multi-Agent System
description: Several AI agents with distributed roles, where one coordinates and others research, write or review
aliases: [Subagent, Orchestrator, Multi-Agent-System]
---

A multi-agent system consists of several [agents](./Agent.md) that share a task. One coordinates, the others take on subtasks such as researching, writing or checking.

The roles have fixed names. The orchestrator is the agent that receives the task, breaks it into parts, hands those parts out and assembles the results at the end. A subagent is an agent that completes one such part and reports its result back to the orchestrator. Each subagent has its own instructions, often its own tools and its own [context](./Kontext.md), meaning its own memory for this one subtask. The orchestrator does not see every intermediate step, only the report.

An example from sales shows the division of labour. The task is: “Prepare a briefing for the first meeting with Huber Maschinenbau.” The orchestrator sends one subagent to search the web for company data and recent news, a second into the CRM for previous contacts, a third into SharePoint for similar quotes. A fourth writes the briefing from the three reports, and a fifth checks it for gaps and contradictions. You receive the finished document. [Deep Research](./Deep Research.md) in ChatGPT or Gemini and some Copilot agents work this way internally.

Splitting the work helps for two reasons. First, each agent stays focused on its own job instead of managing one huge task in a single [context window](./Kontextfenster.md), where important details get lost. Second, several subagents can work at the same time, which saves time. A reviewer who did not write the text is also more likely to spot errors than the author.

It gets messy when nobody can trace who decided what. A subagent can make a mistake that the orchestrator adopts unchecked and the writer spells out in full. Then the wrong number sits confidently in the finished briefing. The more agents involved, the more important it is that the system shows its sources and intermediate results and that you spot-check the final output. More agents also mean higher cost and longer run times, often without a better result if the task cannot really be split.

_Common misconception:_ Several agents are not automatically smarter than one. They make sense when a task can be cleanly broken into parts that can be worked on independently of each other.

_In practice:_

> “The research took ten minutes and then a 20-page dossier came back. What happened in the background?”
>
> “That was a multi-agent system. An orchestrator sent out several subagents that searched in parallel, and one wrote it all up at the end. Check the numbers anyway.”
