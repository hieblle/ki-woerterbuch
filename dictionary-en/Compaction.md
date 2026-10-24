---
title: Compaction
description: The harness summarises the history when the context window fills up, and the agent carries on with the short version
aliases: [Compaction, Context compaction, Autocompact, Context compression]
---

Compaction means that the [harness](./Harness.md) summarises an agent's history so far when the [context window](./Kontextfenster.md) fills up. The [agent](./Agent.md) then continues with the short version instead of the full history. This often happens in the middle of a task and without you triggering it.

The reason: an agent runs longer than a chat. Every tool call, every file it reads and every intermediate result ends up in the context. In a task with 40 steps, the window eventually fills up. Instead of stopping, the harness has the model summarise the history: what the task was, what is done, what is still open. The summary replaces the old history and there is room again. Some products show this, for example Claude with a short note that the history was compacted. Others do it silently in the background.

Every summary loses details. An instruction from your second message, such as “all amounts in euros without decimals”, may not survive the short version. You know the symptom from [context loss](./Kontextverlust.md): the agent suddenly changes the format, switches the form of address, asks a question that was answered long ago or starts a finished step again. The difference: with context loss in a chat, the long conversation itself is the cause. With compaction, the harness decides, and you still see the full history even though the agent only knows the short version.

What you do about it: put important instructions where they survive the summary. That is a file the agent can read again, its [memory](./Memory.md) or the agent's own instructions, not a message in the history. Cut large tasks into smaller runs, each with fresh context and a clear goal. If you notice a run getting long, have the agent write its status to a file and start again deliberately instead of waiting for the automatic summary. And after a long run, check the result specifically against the instructions from the beginning.

_Common misconception:_ Compaction is not a bug but a workaround so the agent can keep working at all. The problem is not that it happens, but that the instructions only lived in the history.

_In practice:_

> “The agent booked the first twenty invoices neatly in euros, and from the twenty-first it suddenly used cents and switched to English.”
>
> “That was compaction. The history got summarised and the format rule fell out. Put the format in the agent's instructions, not in the chat.”
