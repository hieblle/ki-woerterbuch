---
title: Computer Use
description: An agent that operates websites and programs like a person would, meaning it clicks, types and reads the screen
aliases: [Computer agent, Browser agent, Browser use, Operator]
---

Computer use means that an [agent](./Agent.md) operates websites and programs the way a person would: it sees the screen, clicks buttons, types into fields and reads what appears afterwards.

The mechanism runs in a loop of seeing and acting. The agent takes a screenshot or reads the structure of the page, works out what the next sensible step is, and carries it out, for example “click on Sign in” or “type the invoice number into the search field”. Then it looks again and checks whether what it expected has happened. This repeats until the task is done. Technically, this is a special form of [tool use](./Tool Use.md) in which mouse, keyboard and screen are the tools. If only websites are involved, people also speak of a browser agent (browser use). In ChatGPT the feature was first called Operator and is now part of ChatGPT Agent.

The big advantage is with systems that have no technical interface. Many companies have old programs, a supplier portal or a government website that can only be operated through the user interface. An agent with computer use needs no technical integration for these, it uses the same interface you do. Examples: downloading delivery notes from a portal, transferring data from a legacy system into Excel, comparing prices on five retailer sites. ChatGPT Agent, Claude and Copilot offer such features to varying depths.

The risks are greater than with a chat. The agent operates real systems with your permissions. If it clicks wrong, it has ordered, deleted or sent something. On top of that, it reads everything that appears on the screen, including hidden instructions on a third-party website. That makes it vulnerable to [prompt injection](./Prompt Injection.md). So the rule is: run computer use only with restricted accounts or in a [sandbox](./Sandbox.md), enter passwords and payment details yourself, and protect critical actions with an [approval](./Freigabe.md) step. Watch the first runs on screen before you leave the agent with a task unsupervised. Agents with computer use are also slow, and they break off when a website behaves differently than expected, for example because of a pop-up or a bot check.

_Common misconception:_ Computer use is not a macro that repeats the same clicks every time. The agent decides anew at each step based on what it sees. That makes it more flexible, but also less predictable.

_In practice:_

> “Our supplier portal has no technical interface. Could an agent fetch the delivery notes for us?”
>
> “Yes, with computer use an agent operates the portal through the user interface like you do. But set up a separate account for it with read-only rights and watch the first run.”
