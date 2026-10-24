---
title: Oversharing
description: Content is shared more widely than necessary, and Copilot surfaces it on request even though it changes no permissions
aliases: [Overshared content, Excessive sharing]
---

Oversharing means content is accessible to more people than it needs to be. Typical causes: a link set to “People in your organisation”, a Teams group with hundreds of members, an old project site with no owner, or a library where someone broke permission inheritance years ago. As long as nobody looks, it goes unnoticed. [Microsoft Copilot](./Microsoft Copilot.md) changes that.

The reason lies in the permission model. Copilot only shows you content you have at least read access to. Every request runs in your security context, and the [semantic index](./Semantischer Index.md) returns only hits you could open anyway. So Copilot does not lift permissions or invent access. But it finds in seconds what previously only someone searching the right site on purpose would have found. If an employee asks “How much does my team lead earn?” and a salary list sits on a site with an organisation-wide link, Copilot provides the answer. Microsoft puts it this way: generative AI amplifies the risk of oversharing because it surfaces content quickly and without searching.

This is why oversharing counts as the most important risk when rolling out Copilot. Not because Copilot is insecure, but because it exposes years of sharing habits. Every company has this legacy, and the rollout is the moment to clean it up.

There are tiered tools for that. Short term, you take sensitive sites out of Copilot with [Restricted Content Discovery](./Restricted Content Discovery.md). Medium term, you find problem areas with the reports in [SharePoint Advanced Management](./SharePoint Advanced Management.md) and have site owners review their sharing. Long term, [sensitivity labels](./Sensitivity Labels.md) and [DLP](./DLP.md) protect sensitive files regardless of where they sit. A security dashboard in the Microsoft 365 admin center summarises the current state.

You contribute as a user too. Share files with specific people instead of “everyone”. Check whether old sites are still needed. And if Copilot shows you something you should not be seeing, report it instead of using it. The entry on [data leakage](./Datenabfluss.md) describes what happens when such content leaves the company.

_Common misconception:_ Many people blame Copilot when confidential data appears. The sharing was wrong before; Copilot only found it faster.

_In practice:_

> “Copilot just summarised the management bonus list for me. I was not even looking for it.”
>
> “Then the file sits somewhere with an organisation-wide link. Send me the link, I will tell the site owner and IT. And please do not forward it.”
