---
title: SharePoint Advanced Management
description: Governance package in the SharePoint admin center with oversharing reports, site access reviews and site lifecycle for Copilot
aliases: [SAM, Syntex SharePoint Advanced Management, Data Access Governance, Site Access Reviews]
---

SharePoint Advanced Management (SAM) is a set of administration features in the SharePoint admin center. Admins use it to find content that is shared too widely, get it cleaned up, and keep sites in order across their lifecycle. Microsoft positions SAM as preparation for [Microsoft Copilot](./Microsoft Copilot.md), and because Copilot licences include the package, most companies have it without an extra purchase. It used to be called Syntex SharePoint Advanced Management.

At its core are the Data Access Governance (DAG) reports, often called oversharing reports. They show which sites are broadly shared: sites with “Anyone” or “People in your organisation” links, sites with the group “Everyone except external users”, sites with many sharing events in the last 28 days, and sites holding files with [sensitivity labels](./Sensitivity Labels.md). A baseline report across all permissions gives the overall picture. An AI feature summarises the reports in plain language and suggests actions.

From the reports you start the cleanup. Site access reviews send the owner of a flagged site a request to review their sharing. The owner sees groups, links and items, tidies up, and closes the review with a comment. This is delegated on purpose, because admins are often not allowed to look into the files themselves for privacy reasons. For hard cases there is Restricted Access Control, which limits a site to defined groups and overrides existing links, and [Restricted Content Discovery](./Restricted Content Discovery.md), which hides a site from Copilot.

The third building block is lifecycle. Inactive site policies contact owners when a site has not been used for a long time and archive it if needed. Ownership policies make sure every site has responsible people. Copilot does not use archived content, which removes old project sites as a source of outdated answers.

Microsoft recommends an order: first the inventory in the assessment, then lifecycle, then [oversharing](./Oversharing.md), and repeat the whole cycle every thirty days. In addition, [DSPM for AI](./DSPM for AI.md) in Purview checks the most used sites for risks every week. SAM does not replace [AI governance](./KI-Governance.md); it supplies the facts for it.

_Common misconception:_ Many people expect SAM to fix oversharing automatically. It finds and delegates. People still have to decide and clean up.

_In practice:_

> “Management wants to know whether we are ready for Copilot. How do I answer that with numbers?”
>
> “Pull the oversharing baseline report from SharePoint Advanced Management. It shows how many sites have organisation-wide links. Start a site access review for the top 20 and report in four weeks how many have been cleaned up.”
