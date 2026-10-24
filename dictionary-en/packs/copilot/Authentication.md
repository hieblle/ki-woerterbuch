---
title: Authentication
description: Copilot Studio setting that decides whether and how users sign in to the agent and whose permissions tools run with
aliases: [Authenticate with Microsoft, No authentication, Authenticate manually, End user credentials, Maker credentials]
---

Authentication in Copilot Studio determines whether users have to sign in to the agent and how. It decides which channels work, which knowledge sources and tools the agent may use, and whether you can control who talks to it. You find the setting under Settings, Security, Authentication. Changes only take effect after the next publish.

There are three options. “No authentication”: anyone with the link can chat, and the agent does not know who is in front of it. That is enough for a public website agent with general knowledge. Knowledge from SharePoint and tools with user permissions are not possible this way, and admins can forbid the option through a data policy. “Authenticate with Microsoft” is the default for new agents: sign-in through Microsoft Entra ID, usable without setup in Teams, Microsoft Copilot, SharePoint and Power Apps. Only with it can the agent search [knowledge](./Knowledge.md) in SharePoint with the permissions of the person asking, and only with it does [sharing](./Sharing.md) work as access control. “Authenticate manually” is for special cases: your own website with a login, certificates instead of secrets, or another identity provider via OAuth 2.0. In addition you can set “Require users to sign in”, so no conversation starts without a sign-in.

The second layer sits at the [tools](./Tools.md). Every tool has a connection, and you choose whose credentials it uses. “End user credentials”: each person connects their own account the first time, and the agent sees and does only what that person is allowed to. That is the safe default for business applications. “Maker-provided credentials”: all users act with the access of the person who built the agent. That is necessary when nobody is at the screen, meaning with an [event trigger](./Event Trigger.md) or usually with [computer use](./Computer Use in Copilot Studio.md). The danger: anyone allowed to use the agent can do things through it that they have no permission for themselves. Share such agents narrowly and give the maker account as few rights as possible. The mirror image, too much visible data, is described under [Oversharing](./Oversharing.md).

For the agent itself, Copilot Studio has created its own identity in Entra since 2026, the [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md). It complements user sign-in but does not replace it.

_Common misconception:_ “Authenticate with Microsoft” does not mean only employees can reach the agent. That is controlled by sharing. Sign-in only tells the agent who is there.

_In practice:_

> “Can I just create the tool connection with my own account? Then nobody has to sign in.”
>
> “Then everyone works with your permissions, including in the HR system. Set the tool to end user credentials, so each person only sees what they are allowed to see.”
