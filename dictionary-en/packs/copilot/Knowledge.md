---
title: Knowledge
description: The knowledge sources of a Copilot Studio agent, such as SharePoint, files, websites or Dataverse, that its answers rest on
aliases: [Knowledge sources, Ungrounded responses, Wissensquellen]
---

Knowledge is the area in [Copilot Studio](./Copilot Studio.md) where you define what your [agent](./Agent.md) draws its answers from. The German interface calls it “Wissen”. The individual sources are called knowledge sources. Technically this is [grounding](./Grounding.md): the agent searches the sources and composes an answer with citations from what it finds, instead of answering from the model's training knowledge. The method behind it is [RAG](./RAG.md).

You can connect these knowledge sources: public websites (searched via Bing, limited to your domains), uploaded files, SharePoint sites and OneDrive folders, Dataverse tables, enterprise data via [Copilot connectors](./Copilot Connectors.md) in [Microsoft Graph](./Microsoft Graph.md), Azure AI Search, and, in preview, business systems through [Power Platform connectors](./Power Platform Connectors.md). Which sources are available depends on the [harness](./Harness.md).

Permissions are preserved. For SharePoint, Dataverse and connectors the user has to sign in, and the agent answers only from content she could open herself. Uploaded files, on the other hand, live with the agent and are visible to everyone allowed to use it. That is the most common cause of unintended sharing: someone uploads an internal document and shares the agent with the whole company.

A few settings decide the quality. “Allow ungrounded responses” lets the agent answer from general model knowledge when the sources return nothing. For an HR agent that should answer only from the handbook, you switch that off. “Web search” adds a Bing search. “Tenant graph grounding with semantic search” uses the [semantic index](./Semantischer Index.md) of Microsoft Copilot, requires signing in with Microsoft, and costs [Copilot Credits](./Copilot Credits.md) for users without a Copilot licence. On top there is content moderation in several levels; at a strict setting it returns “no answer found” more often.

Limits under generative orchestration, as of October 2026: 25 websites and 25 SharePoint addresses each, Dataverse and connectors unlimited. Beyond 25 sources a model pre-filters which ones to search. More sources do not make answers better; outdated documents next to current ones lead to contradictions. Prefer a few well-maintained sources and name a person who keeps them current.

Under classic orchestration, knowledge sources are used only when no [topic](./Topics.md) matches, through [generative answers](./Generative Answers.md). Under generative orchestration the agent searches the knowledge directly as a built-in tool.

_Common misconception:_ Knowledge is not “trained into” the model. The agent looks it up in the sources at runtime. Change the document and the answer changes, without rebuilding the agent.

_In practice:_

> “The agent is making up deadlines that are not in our travel policy.”
>
> “Check whether ‘Allow ungrounded responses’ is on. Turn it off, and when it finds nothing it will say so instead of guessing from model knowledge.”
