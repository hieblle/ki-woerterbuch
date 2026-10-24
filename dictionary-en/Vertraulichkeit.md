---
title: Confidentiality
description: Protecting trade secrets, customer data and contracts, including when using AI tools
aliases: [Vertraulichkeit, Trade secret, Business secret]
---

Confidentiality means that information is accessible only to the people who need it for their work. In a company this covers trade secrets, customer data, contracts, costings, personnel files and plans that are not yet public. AI tools are a new exit route for this information, and many people do not see them as one.

The mechanism is simple. What you enter in ChatGPT, Gemini or Claude leaves your company and ends up on the provider’s servers. What happens with it there depends on the contract. With free accounts, inputs can be used for [training](./Training.md) and reviewed by the provider’s staff. With a [business license](./Business-Lizenz.md), both are usually excluded, and there are contractual commitments on storage location and deletion. Microsoft 365 Copilot in a company account stays within the permissions your company has already granted anyway.

One rule of thumb helps with almost every decision: what you would not be allowed to send to an external service provider without a contract must not go into a free tool either. You would not email the price proposal for an ongoing tender to an unknown translator, so it does not belong in a private ChatGPT account either. The same logic applies to source code, recipes, customer lists and draft contracts. A breach is almost impossible to repair afterwards, because the data does not come back. More on this under [data leakage](./Datenabfluss.md).

Trade secrets have a particular feature. They are legally protected only if the company takes reasonable steps to keep them secret. Anyone who feeds confidential documents unprotected into external tools may lose that protection. With contracts there is the added point that they often contain confidentiality clauses prohibiting disclosure to third parties, and an AI provider is a third party.

In practice this means: use the approved tool with your company account. Enter only what the task needs, and trim documents to the relevant part. Remove [personal data](./Personenbezogene Daten.md) where it is not necessary. For contracts from customers or partners, ask first whether passing them to an AI tool is permitted. Which data is allowed in which tool should be set out in the [AI policy](./KI-Richtlinie.md). If there is none, ask legal when in doubt.

_Common misconception:_ Many people think the chat is private because only they can see it. Depending on the contract, the provider can see it too, and with free accounts the content can flow into future models.

_In practice:_

> “I’ll quickly have the AI tool compare the draft contracts from the supplier.”
>
> “With which account? The contracts have a confidentiality clause. Through our Copilot in the company account that works, in a private chat it doesn’t.”
