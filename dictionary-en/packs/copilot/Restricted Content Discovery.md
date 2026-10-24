---
title: Restricted Content Discovery
description: Site setting that removes SharePoint content from Copilot answers and organisation-wide search without changing permissions
aliases: [RCD, Restrict content from Microsoft Copilot, Restricted SharePoint Search]
---

Restricted Content Discovery (RCD) is a setting for individual SharePoint sites. When it is on, the content of that site no longer appears in answers from [Microsoft Copilot](./Microsoft Copilot.md) or in organisation-wide search. Permissions stay exactly as they are: anyone with access can still open the files directly, but Copilot and search no longer find them on their own.

That makes RCD the fastest remedy for [oversharing](./Oversharing.md). Before rolling out Copilot, a company often does not know which sites are shared too widely. Instead of cleaning up every permission first, the admin takes sensitive sites out for the time being: the HR site with salary data, the management site, old project archives. Later, once sharing is tidied up and [sensitivity labels](./Sensitivity Labels.md) are in place, the setting is removed again. Microsoft explicitly describes RCD as a temporary measure.

The mechanics in detail: the switch in the site settings is called “Restrict content from Microsoft Copilot”. The site gets a “Restricted” tag, and the AI entry points on it disappear too, such as the Copilot button or the creation of [SharePoint agents](./SharePoint-Agent.md). If you open a document from that site in Word, you can still have Copilot summarise it there. The content stays in the search index, so [eDiscovery and audit](./eDiscovery und Audit.md) and automatic labelling keep working. RCD applies only to SharePoint, not to OneDrive.

Plan for two things. First, the setting takes time to propagate; for very large sites Microsoft says more than a week. Second, too much RCD degrades answers: if half the company is excluded, Copilot stops finding legitimate information as well. A report shows which sites are restricted. Admins can delegate management to site admins, who then have to give a reason.

RCD requires a Copilot licence and [SharePoint Advanced Management](./SharePoint Advanced Management.md), which is included in Copilot licences. Its predecessor, Restricted SharePoint Search, worked the other way round with an allow list of at most one hundred sites. It is being retired: since the end of July 2026 it can no longer be newly enabled, and Microsoft recommends moving to RCD.

_Common misconception:_ Many people treat RCD as data protection. It only hides content from Copilot and search. Anyone who knows the link and has permissions can still get in.

_In practice:_

> “We are rolling out Copilot next month and have not checked all the sharing yet. Do we need to postpone?”
>
> “Not necessarily. Take the ten most sensitive sites out with Restricted Content Discovery and clean them up at your own pace. Lift the setting as soon as a site is clean.”
