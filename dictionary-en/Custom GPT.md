---
title: Custom GPT
description: A preconfigured AI helper for a recurring task, called an agent in Copilot, a Gem in Gemini and a project in Claude
aliases: [Custom assistant, Copilot agent, Gem, Project, GPTs]
---

A Custom GPT is an AI helper that you set up once for a recurring task and then call up again and again (your own preconfigured assistant). Instead of explaining what you need every time, the explanation is built in. The name comes from ChatGPT. In Microsoft 365 Copilot such helpers are called agents, which you put together in Agent Builder; in Gemini they are Gems, and in Claude they are projects. They all mean the same thing, and this entry uses Custom GPT as the umbrella term.

Three things go into a Custom GPT. First, the [system prompt](./Systemprompt.md): a fixed text that describes what the helper should do, in what tone and under what rules. Second, knowledge: documents you store with it, such as the travel policy, product data sheets or standard wording for quotes. Third, tools: access to web search, to specific SharePoint folders or to other systems, see [connector](./Connector.md).

An example from purchasing: you build a Custom GPT called “Supplier Inquiry” that knows your standard questions, the cover letter template and your purchasing terms. A colleague only enters the supplier and the item and gets a finished inquiry in the company’s tone. In HR, a Custom GPT could answer questions about leave and flexitime from the staff handbook, with a note that the HR department has the final say.

The advantage is repeatability. Everyone on the team gets answers on the same basis, and a good [prompt template](./Prompt-Vorlage.md) no longer has to be passed around; it is built in. The downside: whoever built the Custom GPT is responsible for what is inside it. If the stored policy goes out of date, the helper answers wrongly for months and nobody notices.

You can spot a badly built Custom GPT when it stays generic or invents things that are not in its documents. Usually the system prompt is too vague or the knowledge files are incomplete. An instruction such as “Answer only from the stored documents and say so if something is not in them” helps.

_Common misconception:_ “A Custom GPT is its own trained model.” No, it is the same model as in the normal chat, just with fixed instructions and attached documents.

_In practice:_

> “I explain to Copilot every single time what our quotes are supposed to look like.”
>
> “Build yourself an agent in Agent Builder, that’s Copilot’s equivalent of a Custom GPT. Put the instructions in, add two sample quotes as knowledge, and the whole team can use it.”
