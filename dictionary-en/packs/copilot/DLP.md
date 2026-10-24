---
title: DLP
description: Purview policies with a dedicated Copilot location that decide which content and prompts Copilot is allowed to process
aliases: [Data Loss Prevention, Purview DLP, Microsoft 365 Copilot and Copilot Chat (DLP location)]
---

DLP (Data Loss Prevention) is the part of Microsoft Purview that stops confidential content from ending up where it does not belong. For Copilot there is a dedicated policy location called “Microsoft 365 Copilot and Copilot Chat”. Policies in this location control in real time what [Microsoft Copilot](./Microsoft Copilot.md), [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) and Cowork are allowed to process.

Here is the mechanism. A DLP policy is a condition plus an action. The most important condition for Copilot is “content carries a specific sensitivity label”. The matching action is “prevent Copilot from processing content”. A file labelled “Highly Confidential” may still show up as a hit in the citations, but its content does not flow into the answer. If you open such a file in Word, Excel or PowerPoint, the Copilot features there are switched off. How labels work is covered in [Sensitivity Labels](./Sensitivity Labels.md).

There are also rules for the prompt itself. If your input contains a sensitive information type, such as credit card numbers or IBANs, the policy can block web search for that prompt or refuse the answer altogether. You then see a notice with a link, which your company can point to its own explanation page. As of October 2026 there is also a preview rule that excludes external emails from [grounding](./Grounding.md). Microsoft positions it explicitly as protection against [prompt injection](./Prompt Injection.md), because emails from outside are a popular way to slip hidden instructions into Copilot.

A few limits are worth knowing. Labels and sensitive information types cannot sit in the same rule. Files you upload directly in the chat are not scanned, only the typed prompt is. Changes to a policy take up to four hours to apply everywhere. And agents from [Copilot Studio](./Copilot Studio.md) that draw on SharePoint knowledge are subject to the same restrictions as Copilot itself.

That makes DLP a central tool against [data leakage](./Datenabfluss.md) through AI. It does not replace tidy permissions, though. What a person could see without Copilot, they can usually still see with DLP in place, they just cannot have Copilot summarise it any more.

_Common misconception:_ The “data policies” in the Power Platform admin center are not the same thing as Purview DLP. They govern which connectors and capabilities an agent may use, while Purview DLP governs which content Copilot may process.

_In practice:_

> “Copilot just told me it can't summarise the salary list, even though I have access to the file.”
>
> “That's the DLP policy. The file carries the ‘Highly Confidential’ label, and Copilot is blocked from processing files with that label. You can still open it yourself, Copilot just stays out.”
