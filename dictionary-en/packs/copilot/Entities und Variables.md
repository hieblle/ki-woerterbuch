---
title: Entities and Variables
description: Entities recognise details such as dates or emails in user replies, variables store values for the rest of the conversation
aliases: [Entities, Variables, Slot filling, Power Fx, Entitäten und Variablen]
---

Entities and variables are the two building blocks an agent in [Copilot Studio](./Copilot Studio.md) uses to recognise and keep details from a conversation. An entity describes a kind of information, such as a date, an email address, an amount of money or a choice from a list. A variable is the container where the recognised value lands and is reused later.

Entities work in the question nodes of a [topic](./Topics.md). If you ask “From when should the leave start?”, the prebuilt date entity also understands answers like “next Monday” and converts them into a real date. Copilot Studio ships many prebuilt entities: age, date, duration, email, money, location, phone number and more. You create your own custom entities as a closed list, for example your company's sites with their spelling variants, or as a regular expression for the format of your ticket numbers. If someone gives several details in one sentence, the agent fills the matching variables at once. This is called slot filling.

Variables come in four scopes. Topic variables apply only within one topic. Global variables apply to the whole conversation, for example the selected cost centre that several topics need. System variables are filled by Copilot Studio itself: the text of the last message, the conversation ID, name and email of the signed-in person, or whether the conversation is running in the test panel. Environment variables come from the Power Platform, such as the address of a test system versus the production system. They are read-only in Copilot Studio and are maintained through [environments and solutions](./Environments und Solutions.md). Every variable has a type such as text, number, yes/no, date or table.

You calculate and compare with variables using Power Fx, the formula language of the Power Platform. A condition like “If amount is greater than 500, go to the approval topic” is one. Variables also flow as inputs into [tools](./Tools.md) and [agent flows](./Agent Flows.md) and receive their results. During testing, a variables panel shows the current values, which helps with troubleshooting.

One restriction as of October 2026: with [generative orchestration](./Generative Orchestration.md) you cannot use custom entities as inputs for tools and topics. There you describe the input in words, and the agent fills it using AI.

_Common misconception:_ A variable is not [memory](./Memory.md). It remembers nothing beyond the conversation. If you want to store values permanently, you need an agent flow or a data source, not a global variable.

_In practice:_

> “The agent asks for the cost centre three times, once in every topic. People find it annoying.”
>
> “Turn the topic variable into a global variable. Then the cost centre applies to the whole conversation and the other topics simply read it.”
