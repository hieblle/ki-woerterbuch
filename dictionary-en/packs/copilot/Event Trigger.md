---
title: Event Trigger
description: Trigger in Copilot Studio that starts an agent through an event, such as a new email, a form or a schedule
aliases: [Event triggers, Recurrence trigger, Ereignistrigger]
---

An event trigger is a trigger in [Copilot Studio](./Copilot Studio.md) that starts a whole agent through an event. The event comes from outside: a new email, a new row in a table or database, an uploaded file, a submitted form or a schedule. As soon as an agent has such a trigger, it is an [autonomous agent](./Autonomer Agent.md).

Do not confuse the event trigger with the [trigger](./Trigger.md) of a topic. A topic trigger decides, within a conversation, which topic is up next, for example because the user writes “request leave”. The event trigger sits one level higher. It starts the agent itself, without anyone typing in a chat.

This is how it works. Event triggers come from the same library as the triggers in Power Automate, that is from the [Power Platform connectors](./Power Platform Connectors.md). In the agent you pick a trigger such as “When a new email arrives” and connect it to the mailbox. When the event occurs, Copilot Studio turns it into a message to the agent, the trigger payload. It contains the data of the event, for example subject, sender and body of the email. You can add instructions to the payload that apply only to this trigger. General rules belong in the agent's [instructions](./Instructions.md). The agent reads the payload and then picks its own [tools](./Tools.md) and topics, which requires [generative orchestration](./Generative Orchestration.md).

A few pitfalls. Event triggers run with the credentials of the person who built the agent, not those of a user. Copilot Studio shows a warning about this before publishing. The tools the agent uses in such runs must therefore also work with maker credentials. Every triggered message counts as an action and consumes [Copilot credits](./Copilot Credits.md). A recurrence trigger every ten minutes produces 144 runs a day, even when there is nothing to do. Admins can block certain triggers through data policies, in which case they appear greyed out. And the test panel can only partly simulate events, so test with a real test mailbox or a test table.

Microsoft recommends keeping a run started by an event to fewer than 15 actions or topics in a row. Longer chains become unreliable and expensive.

_Common misconception:_ An event trigger is not a Power Automate flow. The flow executes fixed steps, the agent decides for itself what to do after being triggered. The two can be combined.

_In practice:_

> “I gave the agent a trigger on our job applications mailbox. Now it has permissions I never intended.”
>
> “Event triggers always run with the permissions of the person who built the agent. Check what your account can do and keep the agent's permissions as small as possible.”
