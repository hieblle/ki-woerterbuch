---
title: Persona
description: Giving the AI a perspective, such as “You are an experienced HR officer”, to steer tone and depth
aliases: [Role prompting, Role prompt, Assigning a role]
---

A persona is a role you assign to the AI at the start of a [prompt](./Prompt.md) so that it answers from that perspective. “You are an experienced HR officer who has conducted job interviews for years.” Or: “You are a critical head of purchasing who has to review this quote.” The AI then aligns its tone, depth and focus with that persona. The technique is also known as role prompting.

The effect is noticeable but limited. Without a persona, a [language model](./Sprachmodell.md) answers as the average of all the texts it knows: friendly, general, for everyone and no one. With the persona “tax advisor” it picks wording and aspects that appear in tax texts. With the persona “workshop manager” it becomes more direct and practical. The persona acts like a filter on what the model already knows.

That is exactly where the limit lies. A persona does not make the AI more knowledgeable. If you write “You are a specialist lawyer for employment law”, you get answers that sound like legal texts. That does not make them more correct. The model has not passed the bar, and it can [hallucinate](./Halluzination.md) just as much in a persona as without one. For technical questions the persona is a stylistic aid, not a guarantee of quality. Human review remains necessary.

The persona is especially useful as a counterpart. Instead of using the AI as an author, you let it work as a critical reader: “You are a sceptical customer. Read this quote and name three points where you would hesitate.” Or in sales as a practice partner for a difficult conversation. In Microsoft 365 Copilot and ChatGPT you can also set up such personas permanently as a dedicated assistant, for example as a [Custom GPT](./Custom GPT.md), so the whole team uses the same sparring partner.

Keep the persona concrete. “You are an expert” achieves little. “You are a team lead in order processing explaining the process to new colleagues” gives the model something to work with. And combine the persona with real [context](./Kontext.md): the best persona does not help if the material is missing.

_Common misconception:_ “If I tell the AI it is a doctor, I can rely on the medical answer.” No. The persona changes the tone, not the reliability.

_In practice:_

> “I want Copilot to read my project report the way our managing director would.”
>
> “Then give it exactly that persona. Write: You are the managing director of a mid-sized company, you have little time and you want to know what the project costs and what it delivers. Then you get the questions you would otherwise only hear in the meeting.”
