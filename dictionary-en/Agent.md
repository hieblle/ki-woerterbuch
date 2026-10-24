---
title: Agent
description: An AI system that completes a task in several steps on its own, built from a language model, tools, instructions and a loop
aliases: [AI agent, KI-Agent]
---

An agent is an AI system that completes a task in several steps on its own. It consists of four parts: a language model, tools, instructions, and a loop that holds everything together.

The [language model](./Sprachmodell.md) is the part that thinks and writes. It reads the task, works out what needs doing, and decides which tool comes next. The tools are how the agent reaches outside itself: web search, file access, calendar, email, a calculator or a company database. How that access works technically is described in the entry on [tool use](./Tool Use.md). The instructions define what the agent may do, how it should behave and when it is finished. They come from the vendor or from your company, supplemented by your own [prompt](./Prompt.md), a loaded [skill](./Skill.md) or whatever the agent has stored in its [memory](./Memory.md).

The loop is what turns a [chatbot](./Chatbot.md) into an agent. The sequence repeats: the model thinks, calls a tool, gets the result back, thinks again. This continues until the task is done, an error occurs or a limit is reached, for example a maximum number of steps. You do not have to prompt it after every step.

In everyday work you meet agents under various names. Copilot agents in Microsoft 365 handle tasks in Teams, SharePoint or Outlook. ChatGPT Agent can research in the browser and fill in forms. Claude works with files, connectors and its own tools. An example from HR: “Collect all applications for the controlling position from the mailbox, file them in the applicants folder and create an overview with name, date received and degree.” The agent reads, sorts, saves and reports back.

An agent is only as good as its tools and instructions. If it has no access to SharePoint, it cannot file anything there. If the task is worded unclearly, it plans in the wrong direction and spends several steps working on the wrong thing. That is why it pays to describe the goal and the desired end state precisely and to check the result at the end.

_Common misconception:_ “Agent” is not a protected term. Some products use it for a simple chatbot with a fixed script. A real agent plans its own steps and uses tools.

_In practice:_

> “What is actually the difference between the Copilot chat and a Copilot agent?”
>
> “The chat answers you. The agent is given a task, uses tools like SharePoint or Outlook and works in a loop until it is done.”
