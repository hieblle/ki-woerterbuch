---
title: Context Loss
description: In a long chat or large files, the AI ignores instructions it was still following earlier
aliases: [Kontextverlust, Lost in the middle, Context drift]
---

Context loss means that the AI no longer follows instructions you gave it earlier in the conversation or in a file. It does not “forget” in the human sense, but the information no longer has any effect on the answer.

The reason is the [context window](./Kontextfenster.md). A model can only process a limited amount of text at once. Everything in the [chat](./Chat.md) counts towards that limit: your messages, the answers and any uploaded files. When it becomes too much, older parts drop out or the model gives them less weight. Even inside the window, the middle of a very long document is more likely to be overlooked than its beginning and end.

You notice it when the model ignores a format you specified and suddenly delivers prose instead of a table. It switches the form of address or the language. It contradicts a statement from one of its own earlier answers. With a large file, it only mentions points from the first few pages, and in a 60-page contract the summary is missing the clause from page 41.

What you do about it: start a new chat when the conversation has grown long, and summarise the rules that still apply in the first message. Repeat important instructions with every new task instead of relying on the history. Split large documents into sections and have each one processed separately. In Microsoft 365 Copilot, it helps to name the file explicitly and ask about a specific passage rather than for “everything important”. A [prompt template](./Prompt-Vorlage.md) with your standing instructions saves you the repetition.

Context loss is a common cause of the second kind of [hallucination](./Halluzination.md), where the model drifts away from the material it was given.

_Common misconception:_ A large context window does not mean that everything in it is taken into account equally well.

_In practice:_

> “Gemini did all the minutes in the same format at first. On the eighth one it suddenly writes an essay.”
>
> “Context loss. The chat has grown too long. Open a new one and put the format back into the first message, then it will work.”
