---
title: Uploading Documents
description: Attach a file to the chat so the AI can work with it, instead of typing out the content
aliases: [File upload, Attachment, Upload, Dokumente hochladen]
---

Uploading documents means attaching a file directly to the chat so the AI can read its content and work with it. In ChatGPT, Claude, Gemini and Microsoft 365 Copilot you do this with a paperclip or plus icon next to the input field. Typical formats are PDF, Word, Excel, PowerPoint and images.

When you upload a file, it is converted to text and placed in the conversation as [contextual knowledge](./Kontextwissen.md). The AI can then answer questions about it, summarize it, analyze tables, or search a contract for specific clauses. The file does not change the model and does not become part of its [parametric knowledge](./Trainingswissen.md). In the next chat you have to attach it again.

There are limits. Very large files do not fit completely into the [context window](./Kontextfenster.md). The AI then reads only part of the file, and you notice it in answers that ignore later chapters. Scanned PDFs without a text layer are just images for many tools; running text recognition first helps. With Excel files that have many sheets, it pays to upload only the relevant sheet and say which columns matter.

What you are allowed to upload depends on your [AI policy](./KI-Richtlinie.md) and your license. With a [business license](./Business-Lizenz.md), content is usually not used for training; with free personal accounts this can be different. Personnel files, customer data and contracts therefore belong only in tools your company has approved. More on this under [confidentiality](./Vertraulichkeit.md).

A practical tip: tell the AI what to do with the file right when you upload it. “Here are the meeting minutes, create a task list with owners” gives better results than an upload without instructions.

_Common misconception:_ Many people type out paragraphs from a PDF or describe a table in words. That is unnecessary. Attaching the file itself is faster and more accurate.

_In practice:_

> “I described the quote comparison to Copilot, but the numbers are wrong.”
>
> “Upload the Excel file directly and tell it which sheet counts. Then it calculates with the real values instead of your description.”
>
> “Am I even allowed to do that?”
>
> “With our company license, yes. In private ChatGPT, no. That is what the AI policy says.”
