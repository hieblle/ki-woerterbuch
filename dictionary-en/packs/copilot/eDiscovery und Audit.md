---
title: eDiscovery and Audit
description: Every Copilot interaction is logged in Audit, and prompts and responses can be searched with eDiscovery
aliases: [Purview Audit, Unified Audit Log, Content Search, CopilotInteraction]
---

eDiscovery and Audit are two Microsoft Purview functions that together keep the use of [Microsoft Copilot](./Microsoft Copilot.md) traceable. Audit records that an interaction took place. eDiscovery makes the content of those interactions findable, for example for a court case, an internal investigation or a data subject request.

Audit runs on its own. Every request to Copilot, Cowork or an agent creates a record of the type “CopilotInteraction”. It holds the user, the time, the app (Teams, Word, Outlook, the chat), the resources Copilot accessed together with their sensitivity label, the model that was used, and security signals such as a detected jailbreak or a detected [cross-prompt injection](./Cross-Prompt Injection.md). The text of the prompt and the response is not in the audit record. Only roles with a specific permission can see it, in the Activity Explorer of [DSPM for AI](./DSPM for AI.md). Admin actions are logged as well, for instance when someone changes Copilot settings or publishes an agent.

eDiscovery starts somewhere else. Prompts and responses are stored in a hidden folder in the person's Exchange mailbox. That means the same tools apply as for email: search, export, retention and deletion. Someone running eDiscovery picks the mailbox as the source and filters on “Copilot activity”. Web search queries that Copilot ran on your behalf can be found the same way. When someone leaves the company, the content moves to an inactive mailbox and the retention rules keep applying.

For your daily work this means a Copilot chat is not a private notepad. It is a business record your company can look at if it needs to, just like an email. You can delete your activity history in the My Account portal, but until the final deletion the entries remain visible to eDiscovery, and retention obligations take precedence.

For agent builders one point matters: interactions with agents from [Copilot Studio](./Copilot Studio.md) are captured too, with their own agent ID. Anyone who brings an agent into the company also creates log data that falls under [AI governance](./KI-Governance.md).

_Common misconception:_ Audit does not mean IT reads every chat. By default an admin sees only metadata, access to content is tied to separate roles and is itself logged.

_In practice:_

> “The works council is asking whether the company can see what employees type into Copilot.”
>
> “Technically yes. Every interaction lands in Audit, and the content sits in the mailbox where eDiscovery can find it. Who is allowed to access it is something you define in Purview through roles, and that is exactly what belongs in the [works agreement](./Betriebsvereinbarung.md).”
