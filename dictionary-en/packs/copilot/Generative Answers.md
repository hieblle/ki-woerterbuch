---
title: Generative Answers
description: A Copilot Studio agent's ability to answer questions straight from knowledge sources, without a topic built for them
aliases: [Conversational boosting, Boost conversations, Generative answers node, Generative Antworten]
---

Generative answers are a [Copilot Studio](./Copilot Studio.md) [agent's](./Agent.md) ability to answer a question directly from its knowledge sources, even when nobody has built a [topic](./Topics.md) for it. The agent searches the sources connected under [knowledge](./Knowledge.md), condenses what it finds into an answer, and attaches citations.

The feature used to be called boost conversations, later conversational boosting; German documentation also uses “Konversationsoptimierung”. The name lives on in the system topic “Conversational boosting” that every agent comes with. It holds a “Create generative answers” node that kicks in automatically under classic orchestration when no topic matches. Only when the knowledge search also finds nothing does the user end up in the fallback topic.

You can also place the generative answers node deliberately inside your own topics. Then you control which sources it searches (“Search only selected sources”) and can store the answer in a variable, for example to check it or to present it in an adaptive card. One example: a “Product question” topic first asks for the product number, narrows the search to the matching SharePoint library, and lets generative answers do the rest. Besides the regular knowledge sources, the node also accepts Bing Custom Search, Azure OpenAI on your data, or a variable holding your own text as a source.

Under [generative orchestration](./Generative Orchestration.md) the “Conversational boosting” system topic plays no part. The orchestrator searches the knowledge directly as a built-in tool before it answers. For users the result looks the same: an answer with citations. The difference is who decides when to search.

Quality depends on the same things as [grounding](./Grounding.md) in general: well-maintained sources, clear [instructions](./Instructions.md) on citing, and the decision whether the agent may answer from model knowledge when nothing matches. In Teams the agent shows at most 20 citations per answer. If you present the answer through an adaptive card, you have to render the citations yourself.

For billing, every generative answer in the standard [harness](./Harness.md) counts as two [Copilot Credits](./Copilot Credits.md). For users with a Microsoft 365 Copilot licence no credits are charged.

_Common misconception:_ Generative answers are not free-form chatting with the model. They are bound to the sources. If the agent still answers too generally, “Allow ungrounded responses” is usually switched on.

_In practice:_

> “Do I have to create a separate topic for every question from the employee handbook?”
>
> “No. Attach the handbook as a knowledge source and the agent answers those questions through generative answers. You only need topics for fixed flows like the leave request.”
