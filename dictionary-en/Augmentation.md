---
title: Augmentation
description: AI supports a person with a task instead of taking over a work step entirely, with consequences for risk and review
aliases: [Augmentation or automation, Support, Automation]
---

Augmentation means that AI helps a person who still carries out the task themselves and sees every result before it goes any further. The counterpart is automation: the AI takes over a work step completely, and nobody checks the result before it takes effect. The difference sounds small, but it decides risk, review effort and legal position.

Augmentation is the normal case in the office. Microsoft 365 Copilot suggests a reply to a customer email, and you read it, change two sentences and send it. Claude summarizes a contract, and you decide whether the summary is enough or whether you read the original. Responsibility stays with you, and you see every result before it goes further. Mistakes by the AI get noticed because a person stands in between.

Automation is different. An [agent](./Agent.md) sorts incoming invoices, assigns them to cost centers and releases them for payment. Or a chatbot answers customer questions directly on the website without anyone reading along. Here the result takes effect immediately. A [hallucination](./Halluzination.md) is not noticed but lands with the customer or in the accounts. That is why automation needs different safeguards, such as spot checks, limits on amounts, an [approval](./Freigabe.md) for exceptions and a log that shows what happened.

The question matters legally as well. Decisions about people, for example on job applications, promotions or loans, generally may not be made in a fully automated way under the GDPR, and the [EU AI Act](./EU AI Act.md) classifies many of these cases as high-risk. As augmentation, where a person decides, the same tools are usually far less problematic. When in doubt, have it reviewed.

The practical rule is therefore: start with augmentation. Only once a workflow has run stably for weeks and the error rate is known can you consider automating individual steps. And even then, the principle of [human-in-the-loop](./Human-in-the-Loop.md) applies to important results.

_Common misconception:_ Many people equate AI with automation. But most of the benefit in the office comes from augmentation, where people work faster and better, not from workflows without people.

_In practice:_

> “Can't we just hand quote preparation over to Copilot completely?”
>
> “Let's start with augmentation. Copilot writes the draft, you check prices and terms. If that runs cleanly for three months, we can talk about automating individual steps.”
