---
title: Environments and Solutions
description: Environments separate development, test and production; solutions move agents with all their parts between them
aliases: [Environments, Solutions, ALM, Application lifecycle management, Power Platform pipelines, Component collections]
---

Environments and solutions are the building blocks that let you develop, test and run agents in [Copilot Studio](./Copilot Studio.md) in an orderly way. An environment is a self-contained area of the Power Platform with its own database, its own permissions and its own connections. Every agent lives in exactly one environment. A solution is a container that packages an agent with all its parts so you can carry it from one environment to the next.

Microsoft recommends at least three environments: one for development, one for testing and one for production. The production environment gets the type “Production”, the others “Sandbox”. Who may enter which environment is governed by security groups in Microsoft Entra. Environment routing automatically sends new makers into a developer environment of their own, so that not everyone builds in the default environment. That is the most common pitfall: agents created in the default environment are hard to move cleanly and are visible to every maker in the tenant.

The transport works like this. In the development environment you work inside a solution with your own publisher and prefix. You export that solution as “managed”, meaning read-only, and import it into test and production. Nobody edits the agent there directly; changes always arrive with the next import. Anything that differs per environment, such as the SharePoint address or the name of a service account, goes into environment variables and connection references rather than being hard-coded in the agent. See [Entities and Variables](./Entities und Variables.md) for more. Power Platform pipelines, Azure DevOps or GitHub Actions automate the process. Developers also get a Copilot Studio extension for Visual Studio Code. This whole discipline is called ALM, application lifecycle management.

Not everything travels along. Connected [channels](./Channels.md), the [sharing](./Sharing.md), a manual [authentication](./Authentication.md) setup and analytics connections are set up again in the target environment. For reusable building blocks such as topics, knowledge, tools, child agents or MCP connections there are component collections, which you can export and import between agents. Agents from the [Agent Builder in Copilot](./Agent Builder in Copilot.md) run outside this model and use no storage in the environment.

_Common misconception:_ A solution is not a backup. It transports one state, but version history and rollback are up to you, for example through pipelines with Git integration.

_In practice:_

> “The agent runs great in my environment. Can I just share it with production?”
>
> “No, that keeps it in your environment. Put it in a solution, export it as managed and import it into the production environment. The SharePoint address goes into an environment variable.”
