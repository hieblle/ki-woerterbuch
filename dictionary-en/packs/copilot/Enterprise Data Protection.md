---
title: Enterprise Data Protection
description: Microsoft's protection commitments for Copilot and Copilot Chat, such as no training on company data and storage in your own tenant
aliases: [EDP, Commercial Data Protection, Bing Chat Enterprise]
---

Enterprise Data Protection (EDP) is the umbrella term for the protection commitments Microsoft makes for prompts and responses in [Microsoft Copilot](./Microsoft Copilot.md) and [Microsoft Copilot Chat](./Microsoft Copilot Chat.md). In short: what you type into Copilot is treated the same way as your emails in Exchange and your files in SharePoint. Same contracts, same encryption, same policies. It used to be called Commercial Data Protection, in the days of Bing Chat Enterprise.

EDP applies automatically as soon as you sign in with your work account (Microsoft Entra). No admin has to switch anything on. In the interface you recognise it by the green shield icon and the “Work” label. If the shield is missing, you are probably signed in with a personal account, and then the consumer terms apply, not EDP.

Microsoft sums EDP up in five commitments. First: your data is secured, encrypted in transit and at rest, and logically separated from other customers. Second: your data is private, covered by the Data Protection Addendum, the GDPR and the [EU Data Boundary](./EU Data Boundary.md). Third: your access controls and policies apply to Copilot, meaning permissions, [sensitivity labels](./Sensitivity Labels.md), retention and audit. Fourth: you are protected against AI risks through filters for harmful content, protection against prompt injection and the [Customer Copyright Commitment](./Customer Copyright Commitment.md). Fifth, and this is what most people ask first: your prompts, responses and company data are not used to train the language models. This also holds for OpenAI and Anthropic, whose models Microsoft uses as subprocessors under the same contractual terms.

The flip side of traceability: with EDP, prompts and responses are stored in the tenant and are available for audit, eDiscovery and retention policies. Your chats are protected from Microsoft and from third parties, but not from your own company's compliance tools. Uploaded files sit in a dedicated folder in your OneDrive.

Two footnotes matter. Web search queries that Copilot sends to Bing are not covered by the EU Data Boundary. And EDP protects your data from the provider, it does not stop you from copying something out of an answer and emailing it to the wrong person. DLP and common sense help against that kind of [data leakage](./Datenabfluss.md).

_Common misconception:_ Many people think EDP is an add-on product or tied to the Premium licence. It applies to every user with an Entra account, including Copilot Chat without a Premium licence.

_In practice:_

> “Can I paste the contract drafts into Copilot Chat? I'm worried Microsoft will train on them.”
>
> “As long as the green shield is there, you're in with your work account and EDP applies: no training, and the data stays in the tenant. What you still shouldn't paste is governed by our [AI policy](./KI-Richtlinie.md), not by Microsoft.”
