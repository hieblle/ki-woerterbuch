---
title: Microsoft Copilot
description: Microsoft's AI assistant for work with access to your work data, formerly Microsoft 365 Copilot, unlocked by the Copilot license
aliases: [Microsoft 365 Copilot, M365 Copilot, Copilot for Microsoft 365, Copilot license]
---

Microsoft Copilot is Microsoft's AI assistant for work. It sits inside Word, Excel, PowerPoint, Outlook, Teams and a dedicated Copilot app, and it knows your work data: mail, calendar, chats, files. Until October 2026 the product was called Microsoft 365 Copilot. The license that unlocks the full scope is still called “Microsoft 365 Copilot”, see [Copilot Premium and Basic](./Copilot Premium und Basic.md).

The name is the most common stumbling block, because Microsoft calls several products “Copilot”. [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) is the free chat for everyone with a Microsoft 365 account. It works with the web and with whatever you hand it, but without a license it does not reach into your work data on its own. GitHub Copilot is a coding assistant for developers and is licensed separately. The Copilot app on Windows for personal Microsoft accounts and Security Copilot for security teams are separate products as well.

What the license includes: Copilot in the Office apps (drafts in Word, analysis in Excel, slides in PowerPoint, summaries in Outlook and Teams), the chat with [work grounding](./Work-Grounding und Web-Grounding.md), meaning automatic access to your work data through the [Microsoft Graph](./Microsoft Graph.md), the reasoning agents [Researcher and Analyst](./Researcher und Analyst.md), [Copilot Pages](./Copilot Pages.md), [Copilot Notebooks](./Copilot Notebooks.md), the [Agent Builder in Copilot](./Agent Builder in Copilot.md) and priority access when the service is busy.

Grounding is the real difference from a general-purpose chatbot. Copilot does not answer from training knowledge alone. It first fetches relevant mail, documents and meetings and builds the answer on them ([grounding](./Grounding.md)). It only sees what you are allowed to see. That is why two colleagues get different answers to the same question when their access rights differ. It is also why old sharing mistakes surface: a file that was accidentally readable by everyone suddenly shows up in answers ([oversharing](./Oversharing.md)).

Day to day, Copilot is an [AI assistant](./KI-Assistent.md) that takes over the groundwork but still needs checking. It summarises a long email thread, drafts the reply, prepares you for a meeting with the latest files, or searches across Teams and SharePoint for what was last discussed on the Huber project. Prompts and answers stay inside the company and are not used to train the models ([Enterprise Data Protection](./Enterprise Data Protection.md)).

_Common misconception:_ “We have Copilot” often just means Copilot Chat is available. You can tell whether you have the license by whether Copilot finds your mail and files on its own or whether you have to hand them over every time.

_In practice:_

> “I have Copilot in Teams, but it can't find my emails. Is it broken?”
>
> “You probably only have Copilot Chat without a license. It doesn't see your mail by itself. Ask IT whether you can get a Copilot license, or attach the email directly.”
