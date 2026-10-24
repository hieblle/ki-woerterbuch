---
title: Grounding
description: Basing answers on specific documents or links, visible through source references, so you can verify the statement
aliases: [Source references, Citations, References, Quellenangabe]
---

Grounding means an AI answer is based on specific sources: a document, an email or a web page that the model actually had in front of it while answering. You can see it in the source references, that is, footnotes, links or file names in the answer. They make it possible to check a statement instead of having to take it on faith.

Grounding happens when the model works with material that was brought into the chat. With [web search](./Websuche.md) that is the pages it found, with [RAG](./RAG.md) the retrieved document passages, with an upload the attached file. Microsoft 365 Copilot describes itself as “grounded in Microsoft Graph”: before it answers, it fetches matching emails, files and Teams messages from your Microsoft environment and shows numbered references to the sources it used under many of its answers. ChatGPT, Gemini and Claude show links when using web search.

The benefit is obvious. Without a source you can only guess whether a figure comes from the current contract or from the model's [parametric knowledge](./Trainingswissen.md). With a source you open the document, find the passage, and see within a minute whether the statement is correct. That is the core of [human-in-the-loop](./Human-in-the-Loop.md): not recalculating everything, but checking where things come from before anything goes out.

Still, be careful: sources can be invented too. A model without web search or RAG has no grounding and can produce convincing-sounding titles, authors and links from its parametric knowledge that do not exist. That is a form of [hallucination](./Halluzination.md). You recognize it when the link leads nowhere, the document does not exist, or the cited passage says something else. Hence the rule: open the link, read the passage. A source you have not looked at is not a check.

A second error is quieter. The source exists, but it is the wrong one: an old version, a draft, a document about a different product. Here a glance at the date and file path helps.

In everyday work it pays to actively demand grounding. Adding “For every statement, say which document it comes from” to your [prompt](./Prompt.md) makes the answer checkable and shows where the model had no basis.

_Common misconception:_ “If there are links, the answer is backed up.” Only once you have opened the link and found the passage is it backed up.

_In practice:_

> “Copilot says the delivery period was shortened to 14 days, with a source.”
>
> “Which file is it citing? Open it and see whether that is the signed version or the draft from purchasing.”
>
> “The draft.”
>
> “Then the answer is grounded in the draft, not in the contract. Ask again for the signed version.”
