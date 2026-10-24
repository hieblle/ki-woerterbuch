---
title: Agent Flows
description: Fixed automations in Copilot Studio made of a trigger and actions, called by an agent as a tool or run on their own
aliases: [Agent flows, Power Automate flows in Copilot Studio, Cloud flows, Agent-Flows]
---

Agent flows are fixed sequences in [Copilot Studio](./Copilot Studio.md): a trigger, then a chain of actions that runs the same way every time. An example: when the agent takes a leave request, the flow writes it to a SharePoint list, sends the manager a Teams message asking for approval and reports the result back. That is [workflow automation](./Workflow-Automatisierung.md), right inside the agent.

Agent flows are the successors of Power Automate flows in Copilot Studio. Microsoft introduced them in March 2025. You build them in Copilot Studio, either in the graphical designer or by describing the process in plain language and letting a draft be generated. The actions come from the same [Power Platform connectors](./Power Platform Connectors.md) that Power Automate uses: Outlook, SharePoint, Dataverse, SAP, ServiceNow and many more. On top come AI actions: a prompt node, a node that calls another Copilot Studio agent, a node that extracts data from documents, and a “Request information” step that asks a person for input or approval. That is how you build [human-in-the-loop](./Human-in-the-Loop.md) directly into the process.

The difference from the agent itself is predictability. With [generative orchestration](./Generative Orchestration.md), the agent decides case by case what to do. A flow always does the same thing. So everything that has to be reliable and traceable belongs in a flow: creating records, collecting approvals, keeping systems in sync. The agent handles understanding and asking back, and calls the flow as a [tool](./Tools.md). A flow can also run without an agent, for example on a schedule or when an email arrives.

Agent flows are billed through Copilot Studio capacity in [Copilot Credits](./Copilot Credits.md), by the number of actions run, not through Power Automate licences. Test runs are free. An existing Power Automate cloud flow can be converted into an agent flow; there is no way back. Flows live in solutions so you can move them between [environments](./Environments und Solutions.md).

Since 2026 there are also “workflows” on the GitHub Copilot [harness](./Harness.md) of Copilot Studio, a new format with its own AI nodes. As of October 2026 both exist side by side, and agent flows cannot be converted into workflows automatically.

_Common misconception:_ An agent flow is not “AI” just because it lives in Copilot Studio. The AI sits in individual nodes or in the calling agent; the flow itself is a fixed sequence.

_In practice:_

> “Should the agent create the purchase order in the ERP directly, or should that be a flow?”
>
> “A flow. The agent collects the details and asks back, the flow creates the record and gets procurement's approval first. That way it happens the same every time.”
