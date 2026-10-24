---
title: Researcher and Analyst
description: Two built-in reasoning agents in Copilot, Researcher for deep research with sources, Analyst for data analysis with Python
aliases: [Researcher, Analyst, Researcher agent, Analyst agent, reasoning agents]
---

Researcher and Analyst are two agents that Microsoft ships with Copilot. Both use [reasoning](./Reasoning.md) models that work through several thinking steps before answering, and both take noticeably longer than the normal chat. Researcher is built for research, Analyst for numbers.

Researcher works like [deep research](./Deep Research.md) in other products, but with access to your work environment. It breaks a question into sub-questions, often asks clarifying questions first, then searches mail, meetings, files, Teams chats, connected systems and the web, and delivers a structured report with citations. That takes a few minutes, and for big questions considerably longer. Typical requests: “Summarise what we know internally about entering the Polish market and add current market data” or “Prepare a competitor overview for the strategy meeting, using our latest quotes as a comparison”.

Analyst reasons step by step over data, writes Python code to do so, runs it and shows you the code. You give it an Excel sheet or several files and ask for patterns, forecasts or charts. Example from sales: “Here are the revenues for the last three years by region. Where are we dropping off, and what would a forecast for next year look like?” According to Microsoft, Analyst is the better choice for Excel-type tasks, Researcher for anything that needs text and sources.

Both agents are only available with a [Microsoft Copilot](./Microsoft Copilot.md) license. For Copilot Chat users without a license they are not available, not even through usage-based billing. There is also a monthly quota: as of October 2026, Microsoft states 25 requests per person per month for both agents combined. A quick factual question belongs in the chat, not with Researcher.

What comes out is groundwork, not a finished result. Researcher cites its sources, and you should open the important ones before a figure goes into the board paper ([hallucination](./Halluzination.md)). Analyst can misinterpret the data even when the code runs correctly. Both only see what you are allowed to see and follow the company's data protection rules, such as [DLP](./DLP.md) policies.

Admins can block both agents for the company. As of October 2026 you can choose between several models in Researcher if your admins have enabled that.

_Common misconception:_ Researcher is not just “chat with web search”. It plans, asks back, searches in several rounds and takes minutes to do so. If you want an answer in seconds, the normal chat is the better place.

_In practice:_

> “I asked Researcher when the next team meeting is, and it took five minutes.”
>
> “That's not what it's for, and you've used up one of your 25 requests. Ask the chat questions like that. Use Researcher for the market analysis that would otherwise take you a day.”
