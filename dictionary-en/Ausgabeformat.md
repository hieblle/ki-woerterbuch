---
title: Output Format
description: Telling the AI what the result should look like, such as table, list, email, length, language or tone
aliases: [Ausgabeformat, Format, Response format]
---

The output format is the form in which the AI should deliver its result. Table or running text, bullet points or full sentences, three sentences or a page, email or memo, German or English, formal or casual. If you do not say, the AI decides for itself, and its default choice is often longer and more general than you need.

The format belongs in the [prompt](./Prompt.md), ideally as a separate sentence at the end. “Answer as a table with the columns supplier, price, delivery time.” “Write an email of at most 120 words, subject line included.” “Summarise the minutes in five bullet points, each no longer than one line.” The model usually follows this precisely, because format instructions are unambiguous. It is less precise with length: “about 100 words” is more likely to be respected than an exact number.

The format also controls what you can do with the result afterwards. A table can go straight into Excel. A finished email with a subject line can be pasted into Outlook. In Microsoft 365 Copilot, a table from the answer can be opened directly as an Excel file. If you say up front what the result is for, you save yourself the rebuilding afterwards. “I am putting this on a PowerPoint slide, so at most five bullet points of eight words each” produces something that fits on the slide.

Tone is part of the format. “Factual”, “friendly but firm”, “for colleagues without prior knowledge”, instructions like these work. Where words are not enough, [few-shot prompting](./Few-Shot Prompting.md) helps: a sample text shows the tone more precisely than any description. And if the result still misses the form, you say so in the next step and have it [refined](./Iterieren.md).

For tasks that come up often, it is worth writing the format permanently into the [system prompt](./Systemprompt.md) or a [prompt template](./Prompt-Vorlage.md). Then the whole team gets minutes, proposals or status reports in the same structure without describing it anew every time.

_Common misconception:_ Many people accept the first form the AI chooses and then rebuild it themselves. One sentence about the format in the prompt saves exactly that work.

_In practice:_

> “Gemini always gives me a huge wall of text for the supplier overview. But I need it for Excel.”
>
> “Then tell it the output format. Add: as a table, columns name, price, delivery time, rating. Then you copy the table straight across, done.”
