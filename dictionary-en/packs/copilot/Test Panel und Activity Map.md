---
title: Test Panel and Activity Map
description: The test chat in the Copilot Studio designer and the map that makes every step of the agent visible
aliases: [Test your agent, Activity map, Activity, Track between topics]
---

The test panel is the chat on the right side of Copilot Studio where you try out your agent while building it. The activity map is the map next to it that shows what the agent did internally for each answer. Together they are the Copilot Studio version of a [trace](./Trace.md): you see not just the answer but the path to it.

In the test panel you write like a user would. Click an agent response and the designer jumps to the node in the [topic](./Topics.md) that produced it. With “Track between topics” the designer follows the conversation from topic to topic automatically. The “Variables” tab shows live which values the agent has stored so far. “Save snapshot” saves the conversation plus diagnostics as a zip file, for example for support. Be careful: the file contains the complete content of the agent.

The activity map is only available with [generative orchestration](./Generative Orchestration.md). It shows the orchestrator's plan as a chain of nodes: which topics, tools, knowledge sources and agents it selected, with which inputs, with which result and how long each step took. Errors such as a missing input value are highlighted. On a knowledge node you see the search query the agent built from your question, the sources it used and the sources it searched but did not use. “Show rationale” produces an AI-generated explanation of why a tool was chosen. That explanation can be wrong, so treat it as a hint, not as proof.

The maps do not disappear after the test. On the “Activity” page you find historical maps and transcripts for test conversations, for agents in Teams, Microsoft Copilot and SharePoint, and for runs started by an [event trigger](./Event Trigger.md). By default you only see your own conversations. Whether you may see other users' conversations is controlled by the admin through [sharing](./Sharing.md).

Two limits: timer-based triggers such as inactivity triggers do not fire reliably in the test panel, so test them in Teams after publishing. And a test is not proof of quality. For repeatable checks with many questions use [agent evaluations](./Agent Evaluations.md), which you can start directly from the test panel.

_Common misconception:_ The demo website is not a test panel. It exists to let colleagues try an agent and shows no activity map.

_In practice:_

> “The agent answers the travel expense question with the old rule. Where did it get that?”
>
> “Open the activity map and click the knowledge node. It shows which document it used. The old policy is probably still sitting in the SharePoint folder.”
