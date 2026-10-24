---
title: Skill
description: Packaged instructions with examples and rules that an agent loads when needed to do a task the company way
aliases: [Agent skill, Fähigkeit, Skills]
---

A skill is a packaged set of instructions that an [agent](./Agent.md) loads when needed: a sequence of steps, examples, rules, often templates or small helper programs too. A skill called “create quote in company template”, for example, contains the template, the pricing logic, three good sample quotes and the rule that discounts above ten percent need [approval](./Freigabe.md).

The difference from a [prompt template](./Prompt-Vorlage.md) is timing. A prompt template is a static text that you copy and paste yourself. A skill sits in a library, and the agent decides on its own when it needs it: if it recognises that you want a quote, it loads the skill and works from it. You do not need to know it exists. The difference from a tool ([tool use](./Tool Use.md)) is the kind of thing it is: a tool gives access to a system, such as SharePoint or the CRM. A skill tells the agent how to use that access to do a specific task correctly. Tools are the hands, skills are the knowledge of how to use them.

In everyday work you will meet skills in Claude, where you create them as files or activate ready-made ones from a catalogue, for example for Excel analyses or presentations. In Microsoft 365 Copilot, instructions and knowledge sources in the [Agent Builder](./Agent Builder.md) play a similar role, and ChatGPT knows the principle through [Custom GPTs](./Custom GPT.md). The idea is the same everywhere: write down once how something is done at your company instead of explaining it afresh in every chat.

Skills are built by whoever knows the task best, not by IT. The sales colleague who has written quotes for years describes the process, attaches the template and two successful examples and tests it with a real case. Sharing happens in the team through a shared folder, a library in the product or the admin who approves the skill company-wide. Important: a skill needs an owner who maintains it. If the company template changes, the skill has to follow, otherwise the agent produces quotes in the old format for months.

_Common misconception:_ A skill does not make the agent smarter. It only gives it the knowledge that until now existed only in colleagues’ heads.

_In practice:_

> “I explain to the agent every single time how our quotes are structured. It’s annoying.”
>
> “Put that in a skill: template, two examples, the discount rule. Then it loads it by itself as soon as someone wants a quote, and the whole team can use it.”
