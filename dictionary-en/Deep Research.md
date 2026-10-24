---
title: Deep Research
description: A mode in which the AI researches for several minutes, reads many sources and delivers a report with citations
aliases: [Tiefenrecherche, Research mode, Deep research report]
---

Deep Research is a mode in ChatGPT, Gemini, Claude and Microsoft 365 Copilot in which the AI does not answer right away but works first. It searches the web or your company data, reads dozens of pages, compares, searches again and finally writes a longer report with source references. This often takes five to thirty minutes.

The difference from an ordinary [web search](./Websuche.md) is depth. A normal answer with web search relies on a handful of hits and arrives in seconds. Deep Research plans the research, formulates sub-questions, visits pages, notices what is missing and keeps looking. The result reads like a dossier: an outline, figures, footnotes with links.

The mode makes sense for questions you would otherwise hand to an intern for half a day. Examples: a market overview of time-tracking software vendors for purchasing, a summary of the funding programs for employee training in Austria for HR, a comparison of the warranty terms of three machine manufacturers for production. It makes less sense for quick questions or for topics the web has little on.

You still have to check, and you should do it deliberately. Deep Research does provide citations, but the AI can misquote a source or treat a weak source like a strong one. So click on the three most important figures or claims and read whether the source really says that. Watch the dates of the sources too; a report can sound current and still rest on old pages. More on handling evidence under [grounding](./Grounding.md).

You can tell the mode was the wrong choice when the report is long but says nothing you did not already know, or when many of the sources lead back to the same website. Then it helps to narrow the question and to state in the [prompt](./Prompt.md) which kinds of sources you want, such as manufacturer sites, public authorities or the trade press.

_Common misconception:_ “With sources it is reliable now.” Sources make the report checkable, not automatically correct. You have only checked once you have read the source.

_In practice:_

> “I need an overview by Friday of which time-tracking vendors there are, with interfaces and licensing models.”
>
> “Let Deep Research do that, it gives you a report with links. I’d then look up the licensing details on the vendors’ sites myself, those are often out of date.”
