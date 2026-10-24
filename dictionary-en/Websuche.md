---
title: Web Search
description: The AI fetches current information from the internet and uses it as context for its answer
aliases: [Live data, Internet search, Browsing, Websuche]
---

Web search means the AI looks things up on the internet before answering and uses the pages it finds as context. ChatGPT has a built-in search, Microsoft 365 Copilot uses Bing, Gemini uses Google Search, and Claude comes with a web search as well.

The reason is simple. A model's [parametric knowledge](./Trainingswissen.md) ends at its [knowledge cutoff](./Knowledge Cutoff.md). If you ask about the current base interest rate, a new regulation, or the opening hours of a government office, the model has to guess or search. With web search it fetches the information fresh and places it in the chat as [contextual knowledge](./Kontextwissen.md). You can tell by the links or footnotes in the answer, and often a short note like “Searching the web” appears.

Web search does not solve every problem. The AI finds what is on the web, and that can be outdated, one-sided or wrong. A blog post from three years ago is processed just like the ministry's current page. The model also summarizes what it finds and can twist details along the way. So the rule is: open the links and check whether the source really says that. More on this under [grounding](./Grounding.md).

In everyday work, web search is useful for market research, checking suppliers, the current legal situation, or background on a customer before a meeting. For internal company matters it is no help; that takes [RAG](./RAG.md) or an upload. In some tools you can switch the search on and off. If an answer seems out of date, first check whether the search was active at all.

For confidential topics, take a look at your company rules. A search query containing customer names or project details leaves the company and ends up with the search provider.

_Common misconception:_ “The AI is online, so it knows everything current.” Only if web search is active and was actually triggered for this question. Otherwise it answers from parametric knowledge.

_In practice:_

> “Gemini told me the subsidy program is still running, but it ended in the summer.”
>
> “Then web search probably was not active. Ask the question again with search on and look at the linked page.”
