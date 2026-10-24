---
title: Human-in-the-Loop
description: The principle that a person checks AI results and keeps responsibility for them before they take effect
aliases: [HITL, Human review, Four-eyes principle]
---

Human-in-the-loop (HITL, or simply: a person checks) means that a person reviews the result of an AI and takes responsibility for it before it takes effect. The AI delivers a suggestion, the decision stays with you. This is not a formality but the most important safeguard against the mistakes a [language model](./Sprachmodell.md) makes.

Review is mandatory in four areas. In customer communication, because every email and every quote goes out in the company's name. In HR, because it concerns people, and decisions about applications or performance reviews are given special legal protection. With numbers, because language models can calculate and quote, but neither reliably. And with anything that has legal effect, from contract clauses to deadlines. Whatever you pass on unchecked here, you are still accountable for.

Checking does not mean redoing everything. The skill lies in checking selectively. For a summary, you read the passages of the original that matter, such as amounts, names and dates. For a reply email, you check facts and commitments, not the pleasantries. For a table, you recalculate one row and compare two values with the source. For quotations, you open the source and look at whether it really says that, because a [hallucination](./Halluzination.md) looks just as convincing as a correct result.

One aid is to put the AI itself to work on the review. You can ask Microsoft 365 Copilot to list all the numbers and names in a draft, and then check only that list against the original. That does not replace your own look, but it makes it faster.

The more a workflow is automated, the more deliberately the review step has to be built in. The comparison of [augmentation](./Augmentation.md) and automation is about exactly this question, and with agents the [approval](./Freigabe.md) takes on this role. The risk is not the AI making mistakes, but the [automation bias](./Automation Bias.md) that sets in after a few weeks without errors and lets the review slide.

_Common misconception:_ Human-in-the-loop does not mean someone glances at it and nods it through. It means the person understands the result well enough to stand behind it.

_In practice:_

> “Copilot has done the summary of the supplier contract. Can I send it to management as it is?”
>
> “Check the figures and deadlines in the original first. Human-in-the-loop still applies when the summary sounds good.”
