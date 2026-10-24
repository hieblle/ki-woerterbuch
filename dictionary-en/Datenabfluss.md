---
title: Data Leakage
description: Confidential data reaches the provider, the training data or other people's answers through AI tools
aliases: [Datenabfluss, Datenleck, Data leak, Data exfiltration]
---

Data leakage means that confidential information reaches places it does not belong through an AI tool. That could be the provider, a model's training dataset or the answer that another person receives.

The most common route is typing it in. You paste a customer contract, a salary list or a cost calculation into a free tool to get a summary. With many free offerings, the provider is generally allowed to use such inputs to improve its models. The data then sits on someone else's servers, and you no longer have any control over it. A [business licence](./Business-Lizenz.md) usually guarantees by contract that inputs are not used for [training](./Training.md) and stay within the company. That is why the licence makes a difference, even when the tool looks the same.

The second route is [connectors](./Connector.md) with too many permissions. Microsoft 365 Copilot shows you everything your account has access to. If a salary list has been sitting in an open SharePoint folder for years, nobody found it before. Now the AI finds it in response to the question “What does the head of department earn?” The data has not newly leaked, but the gap becomes visible. The same applies to an agent that has been given read access to the entire drive.

Usually you do not notice it at all, and that is the problem. Warning signs are answers that contain internal details you never entered, or colleagues who see documents through Copilot that were not meant for them. What you do then: report it to IT or the data protection officer, correct the access to the folder, and if [personal data](./Personenbezogene Daten.md) is involved, have the GDPR notification deadlines checked. As a precaution, put confidential material only into approved tools, grant as few permissions as necessary, and read the [AI policy](./KI-Richtlinie.md) when in doubt.

_Common misconception:_ “I left out the name, so it's anonymous.” A contract with scope of delivery, price and term can often still be traced back.

_In practice:_

> “I'll just drop the supplier's quote into my personal ChatGPT so I can understand the payment terms.”
>
> “Better do that in Copilot with your company account. In a personal free account that can be data leakage, and the quote is confidential.”
