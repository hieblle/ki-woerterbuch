---
title: Level of Autonomy
description: How much an AI system decides and does on its own, from suggesting through acting after approval to acting independently
aliases: [Autonomiegrad, Autonomy level, Degree of autonomy]
---

The level of autonomy describes how much an AI decides and carries out on its own without you stepping in. The range runs from “suggests” to “does it independently”.

In practice, four levels can be distinguished. The boundaries are fluid, but the levels help you place what a tool is currently doing.

| Level                                   | What the AI does                                       | Example from the office                                              |
| --------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| 1 Suggest                               | Writes a draft, you decide everything                  | Copilot suggests a reply email, you send it                          |
| 2 Act after [approval](./Freigabe.md)   | Plans and prepares, asks before every action           | Agent creates the order, you confirm before it is sent               |
| 3 Act within limits                     | Carries out defined actions alone, reports exceptions  | Agent files invoices up to 500 euros, larger ones it brings to you   |
| 4 Independent                           | Completes the task entirely, you see the result        | Agent answers standard support requests without checking back        |

Most office tools today work at level 1 or 2. An [AI assistant](./KI-Assistent.md) such as Microsoft 365 Copilot makes suggestions that you accept or discard. An [agent](./Agent.md) moves up to level 2 or 3 when it files documents or sends emails. Level 4 is found in automations that run without a human, for example in the pre-sorting of incoming mail.

The more autonomy, the more important control becomes. At level 1 you catch every mistake, because nothing happens without you. At level 4 you notice a mistake only once it has had consequences. That is why higher levels need clear [guardrails](./Guardrails.md): what the agent may do alone, when it has to ask, who checks samples. In the company, this is part of [AI governance](./KI-Governance.md).

The right level depends on the task, not on the tool. For finding a meeting slot in the team, level 3 is enough. For a termination, an order above budget or an email to a customer, level 2 is appropriate. A good starting point is to begin new tasks in a [sandbox](./Sandbox.md) at level 1 or 2 and to raise the autonomy only once you have trusted the results for several weeks.

_Common misconception:_ More autonomy is not automatically better. An agent that acts without checking back saves time, but it shifts the responsibility for mistakes further down the line, where they cost more.

_In practice:_

> “The new purchasing agent should trigger orders straight away, that saves us all the approval hassle.”
>
> “Let it run at level 2 first, so it prepares and asks us. If it suggests nothing wrong for four weeks, we can talk about more autonomy.”
