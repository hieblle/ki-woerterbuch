---
title: Iterating
description: Treating the first answer as a draft and improving it through follow-up questions and corrections in the chat
aliases: [Refining, Iteration, Iterieren, Nachschärfen]
---

Iterating means not taking the AI's first answer as the final result but as a draft that you improve round by round in the conversation (refining). “Shorter.” “The second paragraph is too technical, rewrite it for the management team.” “Use the figures from the attached table, not estimates.” Each of these pieces of feedback leads to a new version, an iteration.

This is the normal way of working with a [chatbot](./Chatbot.md), not a sign that the first [prompt](./Prompt.md) was bad. Even with a good brief, a person does not get everything right in the first draft. Neither does the AI. The difference: the AI is not offended when you ask for the third version, and it needs seconds to produce it. If you make use of that, three short pieces of feedback often get you there faster than one perfectly crafted first prompt.

Specific feedback works better than general feedback. “I don't like it” gives the model nothing to work with. “The tone is too formal, we are on first-name terms with our customers” does. Best of all, say what should stay and what should change: “The structure is fine, but the opening should start with the benefit for the customer, not with our company history.” You can also highlight a passage and have only that changed. In Microsoft 365 Copilot this works directly in Word.

Iterating has limits. Within a [chat](./Chat.md), everything accumulates, including the discarded versions. After many rounds the chat gets long, and the AI loses track of what currently applies. It falls back into old versions or mixes requirements from different rounds. If you are annoyed about the same mistake for the third time, that is the signal for a new chat. Take the best version so far, word the task with everything you have learned in the meantime, and start fresh.

What you have learned is worth keeping. If after four rounds you know which requirements your minutes format needs, write them into a [prompt template](./Prompt-Vorlage.md). Next time, the first draft will land closer to the target.

_Common misconception:_ “If I have to correct it three times, the tool is no good.” Correcting three times is the normal case and usually still faster than writing from scratch yourself.

_In practice:_

> “Claude's draft is okay, but somehow not what I need. Should I try again completely from scratch?”
>
> “No, keep iterating in the same chat. Tell it exactly what is off: too long, wrong tone, missing figures. Two or three rounds and it is there. Starting over is only worth it if it has got stuck.”
