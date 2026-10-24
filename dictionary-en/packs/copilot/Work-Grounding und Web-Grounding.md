---
title: Work Grounding and Web Grounding
description: Copilot anchors answers in company data (work) or in web results (web), switchable and governed separately
aliases: [Work and Web mode, Web content toggle, Web search in Copilot]
---

Work grounding and web grounding are the two sources that feed an answer from [Microsoft Copilot](./Microsoft Copilot.md). With work grounding, Copilot pulls content from [Microsoft Graph](./Microsoft Graph.md): your emails, files, chats and meetings. With web grounding, it sends a search query to Bing and uses current web pages. What [grounding](./Grounding.md) means in general is covered in the main entry.

In [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) you see both as the modes “Work” and “Web”. In work mode, Copilot answers from company data and can add web results when the web content toggle is on. In web mode it uses public sources only and has no access to your data. Answers separate the two origins into sections such as “From your company's data” and “From the web”, each with citations.

The two paths are technically separate. Web grounding does not change any Microsoft 365 permissions. Nor does it send your whole prompt to the web: Copilot generates a short search query of a few words from your question. Files, emails, uploaded documents and your user identity do not go to Bing. In Copilot Chat you can read the exact search queries that were sent.

Even so, web searches play by different rules than company data. According to Microsoft they fall outside the data protection terms for Microsoft 365 and outside the [EU Data Boundary](./EU Data Boundary.md). Microsoft commits not to use the queries for advertising or for training models. For organisations with strict requirements, this is still a reason to look closely.

Admins control web grounding with a policy that has three settings: web on, web off, or web only in web mode and Copilot Chat but not in work mode. Without a policy, web grounding is on. Individual domains can also be excluded from web search. As a user you find the “Web content” toggle in the settings; it applies across all your devices.

In practice: questions about projects, people and documents belong in work mode. Questions about current laws, market prices or news need the web. Combining both helps with tasks like “Compare our offer with the competitor's public prices”. Check web sources as you would with any [web search](./Websuche.md) before passing them on.

_Common misconception:_ Many people assume everything stays in-house in work mode. As long as the web toggle is on, Copilot can send a search query to Bing for the same question.

_In practice:_

> “I asked Copilot for the new travel allowance rate. Why does it show me our old policy first?”
>
> “Because you are in work mode and the policy sits on SharePoint. Turn on web content or ask in web mode, and you get the current rate from a public source.”
