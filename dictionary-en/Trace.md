---
title: Trace
description: The record of an agent's steps that shows which tools it called, what came back and what it did with that
aliases: [Trace, Tracing, Activity log, Observability, Activity Map]
---

A trace is the record of the steps an [agent](./Agent.md) took on the way to its result: which tools it called with which inputs, what came back, how it judged that and what it did next. In a chat you check an answer. With an agent, the trace lets you also check the path that led there.

In everyday use you mostly see traces as expandable intermediate steps. Microsoft 365 Copilot shows “Searching SharePoint” or “Reading file”, ChatGPT Agent and Claude show which page they opened and which command they ran. In Copilot Studio the detailed view is called Activity Map: for each run you see which knowledge source the agent queried, which action it triggered and where it stopped.

The trace helps you in three situations. First, when checking a result: did the agent really read the current price list or a version from two years ago? With [tool use](./Tool Use.md), the trace states exactly which file was opened. Second, when finding faults: if an agent regularly returns wrong figures, the trace shows whether it picks the wrong source, misreads the right one, or reads correctly and calculates wrongly. Each of these needs a different fix. Third, for security: during a [prompt injection](./Prompt Injection.md), the agent suddenly does something that was not part of the task, such as sending an email to an outside address. In the trace that step stands out, in the final result it often does not.

For companies, the trace is also part of [AI governance](./KI-Governance.md). Anyone who later has to explain why an agent placed an order or rejected an application needs the record. For certain uses the [EU AI Act](./EU AI Act.md) explicitly requires this kind of logging. So clarify how long traces are kept and who may view them, because they often contain the same confidential data as the task itself.

You do not have to read every trace. But when a result surprises you, it is the first place to look.

_Common misconception:_ A trace shows what the agent did, not whether it was right. Checking is still your job.

_In practice:_

> “The agent says the delivery date is 12 March. Where did it get that from?”
>
> “Expand the steps. The trace shows which file it read. If it is the old order list, you know where the error comes from.”
