---
title: Approval
description: An agent checking back before a critical action such as sending an email, deleting a file or placing an order
aliases: [Approval, Permission, Confirmation, Freigabe]
---

An approval is the moment when an [agent](./Agent.md) stops before a critical action and asks you: “Shall I send this email now?” Only after your yes does it carry on.

Critical actions are those that cannot easily be undone or that have an effect outside the company. An email to a customer, deleting a file, an order, cancelling an appointment, a change in the HR system. A search in SharePoint or reading a file, on the other hand, needs no approval, because nothing happens if the result turns out to be useless. Good products distinguish between these two kinds of action and ask only for the first.

In the product, you see the approval as a dialog. Microsoft 365 Copilot shows you the email draft and waits for “Send”. ChatGPT Agent stops before it submits a form or buys something in the browser and asks you to take over. Claude asks before actions that change data and shows what exactly would happen. Some systems let you set which actions always need approval, which are blocked and which the agent may do on its own, as part of its [guardrails](./Guardrails.md). That is the practical lever for the [level of autonomy](./Autonomiegrad.md).

The check-back is not a shortcoming, it is a safety net. An agent works through several steps in a row and can be wrong in one of them: wrong recipient, wrong file, wrong quantity. Without approval, the mistake goes out. With approval, you see it before it has consequences. That costs you a few seconds but saves you explanations to the customer or to accounting. It is the same logic as the [human-in-the-loop](./Human-in-the-Loop.md) principle: the AI prepares, the person takes responsibility.

The approval loses its value if you grant it blindly. Anyone who clicks “Yes” immediately on every check-back effectively has an agent without control. Read what the agent intends to do, especially recipients, amounts and file names. If the check-backs become too frequent, that is a sign to cut the task smaller or to release the non-critical actions, not all of them.

_Common misconception:_ An agent asking does not mean it is unsure or poor. It means it has recognised an action as consequential.

_In practice:_

> “The agent asks me with every email whether it may send it. Can't that be switched off?”
>
> “You can, but I would leave it on. Last week it would have sent a price list to the wrong customer, and the approval caught it.”
