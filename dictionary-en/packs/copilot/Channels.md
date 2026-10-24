---
title: Channels
description: Surfaces through which users reach a published Copilot Studio agent, such as Teams, Copilot or a website
aliases: [Publish, Publishing, Demo website, Custom website]
---

Channels are the places where users talk to an agent built in [Copilot Studio](./Copilot Studio.md). As long as you only work in the test panel, nobody sees the agent. Only “Publish” writes the current state to all connected channels. Before the first publish you cannot connect a channel. After a change you must publish again, otherwise the old version keeps running outside. Ongoing conversations only get the new version in their next session.

The most important channel in a company is “Teams and Microsoft Copilot” (formerly “Microsoft Teams + Microsoft 365”). It makes the agent available as a Teams app and, with one checkbox, also in [Microsoft Copilot](./Microsoft Copilot.md), where users address it with an @mention. It requires sign-in via [Authentication](./Authentication.md) with Microsoft and [sharing](./Sharing.md) with the people or groups who should use it. In the Teams app store it first appears under “Built with Power Platform” for the users it was shared with. If the maker submits it for admin approval, it moves to “Built for your org” and can be preinstalled and pinned by policy. The route into the [Agent Store](./Agent Store.md) works in a similar way.

Other channels: the demo website, a link hosted by Microsoft for collecting feedback from colleagues, explicitly not meant for production. The custom website, where you embed a code snippet into your own site or intranet. The SharePoint channel, which embeds the agent on a site. Plus WhatsApp, a mobile app connection through Direct Line, Facebook, the Azure Bot Service channels such as Slack or Telegram, and telephony for voice agents. Which channels are allowed in your tenant is controlled by admins in the Power Platform admin center through “Agent access channels” and through data policies that block individual channels.

Two pitfalls: connected channels do not travel along when you move the agent between [environments](./Environments und Solutions.md); you reconnect them in the target environment. And the same agent from development and production can carry the same name in Teams. A display name suffix per environment, in preview as of October 2026, prevents mix-ups.

_Common misconception:_ Publishing does not mean everyone in the company can see the agent. Sharing decides who may use it; the channel only decides where.

_In practice:_

> “I published the agent, but nobody can find it in Teams.”
>
> “Did you connect it in the ‘Teams and Microsoft Copilot’ channel and share it with the department? Publishing alone is not enough; colleagues have to add it under ‘Built with Power Platform’.”
