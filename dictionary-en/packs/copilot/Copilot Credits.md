---
title: Copilot Credits
description: The unit Microsoft uses to meter agents, Copilot Studio and usage-based Copilot features, formerly called messages
aliases: [Messages, Copilot Studio messages, Message packs, Pay-as-you-go, Usage-based billing, Consumption billing]
---

Copilot Credits are the unit in which Microsoft counts and bills the use of agents and other consumption-based Copilot features. Until August 2025 they were called “messages” in [Copilot Studio](./Copilot Studio.md); since September 2025 the credit has been the common currency. The quantities per pack stayed the same, only the name changed.

How many credits an action costs depends on what the agent has to do for it. An answer from a fixed [topic](./Topics.md) is cheap, a [generative answer](./Generative Answers.md) costs more, and a step of an [autonomous agent](./Autonomer Agent.md), a search through company data or an [agent flow](./Agent Flows.md) costs considerably more. [Computer use](./Computer Use in Copilot Studio.md) is counted per step. So when you design an agent, you are also deciding what it will consume in operation. Microsoft provides an estimator you can use for a rough calculation before you build.

A company buys credits in three ways. As a prepaid pack: a fixed amount per month for the whole tenant, which the admin can distribute across [environments](./Environments und Solutions.md). As pay-as-you-go: the environment is linked to an Azure subscription and the actual consumption is paid at the end of the month, with no minimum. Or as a one-year prepurchase. Unused credits from a monthly pack expire. If the prepaid allowance is exceeded by a wide margin, Microsoft switches custom agents off until capacity is available again. The admin can set a monthly cap per agent so that one agent cannot eat the whole budget. That is a [rate limit](./Rate Limit.md) your own company defines.

What matters most day to day is zero-rating. If a user has the Premium licence ([Copilot Premium and Basic](./Copilot Premium und Basic.md)) and uses an agent in [Copilot Chat](./Microsoft Copilot Chat.md), Teams or SharePoint, then answers, grounding in company data and agent actions cost no credits. Fair-use limits apply. Computer use is excluded. For users without a licence, and for agents on a website or in customer service, the credits do run.

Since December 2025 credits have also been the currency for newer features such as Cowork, Code or the Work IQ API. For these the admin creates spending policies under Cost Management in the Microsoft 365 admin center: who may use which services, with what limit, and when an alert goes out.

_Common misconception:_ “We have Copilot licences, so Copilot Studio costs nothing extra.” That is only true for licensed employees in Copilot Chat, Teams and SharePoint. An agent for customers on the website, or for colleagues without a licence, consumes credits.

_In practice:_

> “Our HR agent has been down since yesterday. Copilot Studio says something about exceeded capacity.”
>
> “Then someone used up the monthly allowance, probably the new agent on the website. Let's set a cap per agent and put the website agent on pay-as-you-go.”
