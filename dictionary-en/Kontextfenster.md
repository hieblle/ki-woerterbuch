---
title: Context Window
description: The amount of text a language model can process at once, measured in tokens
aliases: [Kontextfenster, Context length, Context size]
---

The context window is the amount of text a [language model](./Sprachmodell.md) can “keep in view” at one time. Everything that happens in a chat, your prompt, the answers, attached files, has to fit into this window. It is measured in [tokens](./Token.md), roughly speaking in word fragments. A context window of a few hundred thousand tokens corresponds to several hundred pages of text, and with some models considerably more.

That sounds like a lot, but it fills up fast. A long chat with many follow-up questions, three attached contracts, a pasted meeting transcript, and space gets tight. What happens then depends on the product. Some tools cut off the beginning, so the AI forgets how the conversation started. Some automatically summarise the conversation so far, and details get lost. Some report that the file is too large.

The symptom is [context loss](./Kontextverlust.md). The AI no longer sticks to an instruction you gave at the start. It asks about something you already explained. It contradicts an earlier answer. Or it stops referring to the first file even though you uploaded it. If you notice this, the window is probably overfull.

What to do then: start a new [chat](./Chat.md) and include only what matters for the current task. With large documents it helps to work on individual sections first instead of everything at once. Important instructions you repeat in the new chat or store as a permanent [system prompt](./Systemprompt.md).

Even within the window, not everything is equally present. Models often pay closer attention to information at the beginning and end of a long text than to what is in the middle. If an instruction is important, put it at the end of your prompt or repeat it.

_Common misconception:_ “I uploaded the file, so the AI knows it now.” Uploaded only means it is in the window. If a lot of text is added afterwards, it can drop out again.

_In practice:_

> “At the start of my chat Copilot still knew everything should be in English. Now it suddenly answers in German.”
>
> “Your chat has probably got too long, so the context window has moved on and the opening instruction is gone. Open a new chat and put the language instruction straight back in.”
