---
title: DSPM for AI
description: Purview surface that shows how AI is used across the company, which data is involved and where the risks are
aliases: [Data Security Posture Management for AI, Microsoft Purview AI Hub, AI Hub, DSPM for AI (classic), AI observability]
---

DSPM for AI (Data Security Posture Management for AI) is the central surface in Microsoft Purview where you see how AI is being used in your company and which data is involved. The name is clumsy, the idea is simple: an overview of AI usage plus recommendations on what to do to protect the data. The feature started in 2024 as the Microsoft Purview AI Hub.

The surface has several areas. The overview shows how many interactions there were with [Microsoft Copilot](./Microsoft Copilot.md), agents and other AI apps, and how often sensitive information came up. Reports split this into three categories: Copilot and agents, registered enterprise AI such as ChatGPT Enterprise or Claude Enterprise, and other AI apps. The last group is detected through browser activity, for example when someone opens the consumer version of ChatGPT or Gemini. That makes DSPM for AI the tool a company uses to make [shadow AI](./Schatten-KI.md) visible instead of merely suspecting it exists.

The Activity Explorer lists individual AI interactions along with the sensitive information types that were detected. The actual wording of prompt and response is visible only to people with the matching role. The recommendations lead to one-click policies, such as “Protect sensitive data from Copilot processing” via [DLP](./DLP.md) or “Detect risky AI usage” via Insider Risk Management.

The data risk assessments are especially useful. Every week Purview automatically checks the hundred most used SharePoint sites for content that is shared too broadly or labelled too loosely. This is the direct route to finding [oversharing](./Oversharing.md) before Copilot surfaces it in answers. From the assessment you can trigger countermeasures: restrict access by label, take a site out of Copilot search, start an access review or notify the site owner.

As of October 2026 there are two generations. The older one is now called “DSPM for AI (classic)” and is no longer being developed. The new one is simply called “Data Security Posture Management” and includes an “AI observability” page that also shows agents from [Microsoft Agent 365](./Microsoft Agent 365.md) with their own risk level.

_Common misconception:_ DSPM for AI does not block anything by itself. It shows, recommends and creates policies on request, while the actual enforcement is done by DLP, labels and the other Purview tools.

_In practice:_

> “Honestly, we have no idea which AI tools people use alongside Copilot.”
>
> “Look in DSPM for AI. Under ‘Other AI apps’ you can see which AI websites are opened from the company browser and whether sensitive data was entered. For that the devices need to be onboarded and the browser extension has to be running.”
