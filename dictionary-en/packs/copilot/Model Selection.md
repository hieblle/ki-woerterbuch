---
title: Model Selection
description: Setting in Copilot Studio where you choose an agent's primary language model, including models from external providers
aliases: [Primary AI model, Orchestration model, External models, Modellauswahl]
---

Model selection is the setting in [Copilot Studio](./Copilot Studio.md) where you decide which [language model](./Sprachmodell.md) your agent uses at its core. You find it on the agent's overview page under “Model”. The chosen model is called the primary model, formerly the orchestration model: with [generative orchestration](./Generative Orchestration.md) it plans which topics and tools to use and writes the answers.

The list contains models from OpenAI, Anthropic, xAI and Mistral. Each model carries tags: Default for the preset, General for everyday tasks, Deep for reasoning models, Auto for models that switch between fast and thorough on their own, plus GA, Preview or Experimental for maturity, and Cross-geo when data may leave your region. Microsoft changes the default model regularly. The old one stays available as Retired for about a month, so you can check whether your agent still behaves the same.

Models from Anthropic, xAI and Mistral count as external models. They do not run in Azure but with the respective provider. Administrators therefore have to enable them first: once in the Power Platform admin center (“Turn on external models”) and additionally per provider in the Microsoft 365 admin center. Preview and experimental models have their own switch per environment. Until then, these entries appear greyed out or not at all. If you work in the EU, also check the Cross-geo tag, because such models may process data outside your region.

Besides the primary model there are further model settings, often confused with it. Deep reasoning is, as of October 2026, a preview feature: the agent brings in a [reasoning](./Reasoning.md) model for individual difficult steps, either on its own or because the word “reason” appears in the [instructions](./Instructions.md). According to Microsoft it is not available in all regions and costs additional [Copilot Credits](./Copilot Credits.md). The [prompt tool](./Prompt Tool.md) has its own model choice, there also with your own models from Azure AI Foundry. And agents on the GitHub Copilot [harness](./Harness.md) have their own model list.

A model switch is not a casual click. Answers get longer or shorter, tools are called more or less often, phrasing changes. After every switch, test with the same questions as before, for example with [agent evaluations](./Agent Evaluations.md), before everyone sees the agent.

_Common misconception:_ A bigger or newer model is not automatically the better choice. For a lookup agent with clear knowledge sources, the default model is often enough, and it answers faster.

_In practice:_

> “I don't see a Claude model in our list. Don't we have it?”
>
> “External models have to be enabled by IT first, in the Power Platform admin center and in the Microsoft 365 admin center. Ask there whether that is wanted for your environment.”
