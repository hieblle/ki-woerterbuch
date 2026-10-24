---
title: Sharing
description: Granting people or groups access to a Copilot Studio agent for editing, using or reviewing it
aliases: [Share agent, Agent sharing, Collaborative authoring, Analytics viewer]
---

Sharing in Copilot Studio is the feature that defines who may edit, use or review your agent. The German word “Freigabe” is used for two things: the main entry [Freigabe](./Freigabe.md) means a person approving a critical action. This entry is about sharing the agent itself, meaning access rights.

There are two kinds. Sharing for use goes to individuals, to security groups or to everyone in the organisation. These people may chat with the agent, in Teams, in Microsoft Copilot or on a website with sign-in. Sharing for editing goes to individuals only. They become co-authors, need the Environment Maker role in the environment, and see in the topic list who is currently working on what. Copilot Studio detects conflicts on save. On top come roles for looking on: “Analytics viewer” may see usage analytics, “Agent viewer” may run [agent evaluations](./Agent Evaluations.md), and anyone who should read transcripts of real conversations additionally needs the Dataverse role “Bot Transcript Viewer”.

The link to [Authentication](./Authentication.md) matters. Sharing for use only works when the agent knows its users, meaning with “Authenticate with Microsoft” or a manual Entra sign-in plus mandatory sign-in. With an agent without authentication, anyone with the link can chat, whatever the sharing says. For the Teams channel, sharing is mandatory, otherwise nobody finds the app. Depending on the licensing model, users may also need a licence, or usage is billed in [Copilot Credits](./Copilot Credits.md); clarify that with your admin.

Three things do not travel along automatically. [Agent flows](./Agent Flows.md) are shared separately in Power Automate. Connections to external systems are tied to people: either every user signs in themselves, or you use a service account or an environment-level connection. And the sharing itself is not carried over when you move between environments; you set it up again in the target environment. In managed environments, admins can limit how many people a maker may share with, and sharing with everyone in the organisation can require admin approval.

One pitfall concerns agents whose tools run with the maker's credentials. Every person you share with then acts with your permissions. Before a broad share, check which tools are set up that way.

_Common misconception:_ An agent that appears in the Teams app store is not automatically shared with everyone. Only people listed in the sharing can add and use it.

_In practice:_

> “Can I just share the HR agent with everyone in the company?”
>
> “Check first: is authentication set to Microsoft and do all tools run with end user credentials? If so, share it with the ‘All employees’ group. For transcripts only two people from HR need the Bot Transcript Viewer role.”
