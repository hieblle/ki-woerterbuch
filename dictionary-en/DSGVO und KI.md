---
title: GDPR and AI
description: What the General Data Protection Regulation requires when personal data ends up in AI tools
aliases: [GDPR, DSGVO, Data protection]
---

The GDPR applies to AI tools just as it does to any other software that works with data about people. As soon as you write [personal data](./Personenbezogene Daten.md) into a [prompt](./Prompt.md) or upload a file containing names, processing takes place, and that needs a legal basis.

Three things usually decide whether a use is acceptable. First, the legal basis: is your company allowed to use this data for this purpose at all, for example because there is a contract with the person or a legitimate interest? Second, the contract with the provider: if an external service processes data for you, you need a data processing agreement (DPA) that regulates what the provider may and may not do with the data. Third, data minimisation: enter only as much data as the task requires.

This is where the difference between a free account and a [business license](./Business-Lizenz.md) lies. With the free versions of ChatGPT, Gemini or Claude there is usually no DPA, and inputs may be used for [training](./Training.md). That is hard to reconcile with the GDPR where customer data is concerned. Business and enterprise offerings, such as Microsoft 365 Copilot with a company account, generally provide a DPA, storage in the EU and exclusion from training. Only then does your company have a basis for entering data about people at all.

In practice this means: with the approved company tool, you may generally process data that you also use elsewhere in your work, for example having a customer email summarised. Special categories such as health data, religious affiliation or trade union membership always need a separate assessment. Automated decisions with legal effect, such as rejecting an applicant purely by AI, are generally not permitted without human involvement. With private or free accounts, you should not enter any data about other people, however harmless it seems. That would be a typical case of [data leakage](./Datenabfluss.md).

In Austria, the Data Protection Authority is responsible. Whether a specific use is permitted depends on the data, the purpose and the tool. When in doubt, ask the data protection officer or the legal department before you enter anything.

_Common misconception:_ Many people believe that anything without a name is anonymous. If a person can be identified from department, date and incident, it is still personal data.

_In practice:_

> “I pasted Ms Huber's complaint into ChatGPT so I could get a nice reply.”
>
> “With your private account? That is not allowed, we have no DPA there. Use Copilot through your company account, and leave out the name, you do not need it for the reply.”
