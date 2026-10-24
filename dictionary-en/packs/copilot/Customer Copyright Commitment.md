---
title: Customer Copyright Commitment
description: Microsoft's commitment to defend customers against copyright claims over Copilot output, provided the safeguards were in place
aliases: [CCC, Copilot Copyright Commitment]
---

The Customer Copyright Commitment (CCC) is a commitment in the Microsoft Product Terms: if a commercial customer is sued by a third party for copyright infringement because they used output from [Microsoft Copilot](./Microsoft Copilot.md), Microsoft takes over the defence and pays judgments or settlements. The condition is that the customer used the built-in safeguards and did not bypass them. It was announced in 2023 as the Copilot Copyright Commitment.

The background: language models learn from large amounts of text, and sometimes an output comes very close to a protected work. Microsoft therefore builds in filters that detect protected material in answers and, in return, carries the liability risk if something slips through anyway. What [copyright](./Urheberrecht.md) means for AI output in general is explained in the main entry.

The conditions differ by product. In Microsoft Copilot and Copilot Chat the safeguards are built in, there is nothing extra to configure. For configurable services such as Azure OpenAI there are separate requirements, the so-called Required Mitigations, such as active content filters. For [Copilot Studio](./Copilot Studio.md) the key point: the commitment covers the models Microsoft provides there, including the models from Anthropic. If you connect your own model from outside, you are only covered if it runs in Azure OpenAI with the safeguards there. Anyone experimenting with [Model Selection](./Model Selection.md) or custom connections should check this first.

What the commitment does not do: it says nothing about whether the output belongs to you or whether it is itself eligible for copyright protection. Microsoft claims no ownership of the results, but points out that similar prompts can produce similar outputs. It also does not cover what you upload yourself. If you scan someone else's textbook and have Copilot turn it into training material, the CCC does not help, because the problem then lies in your input, not the output. And it is a contract between Microsoft and your company, not a guarantee that no dispute will ever arise.

When in doubt: the CCC is an argument for the legal department, not a green light for you. Whether and how your company relies on it belongs in the [AI policy](./KI-Richtlinie.md) and should be reviewed by a lawyer.

_Common misconception:_ The CCC does not mean that everything Copilot produces is free of third-party rights. It shifts the risk to Microsoft in the event of a dispute, under conditions.

_In practice:_

> “Marketing wants to put the product copy from Copilot on the website word for word. If it's lifted from somewhere, we're the ones liable, aren't we?”
>
> “For third-party claims over the output, the Customer Copyright Commitment applies, as long as the filters weren't bypassed. Still: read the text, check that it's original, and ask legal if you're unsure.”
