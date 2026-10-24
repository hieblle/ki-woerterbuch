---
title: Computer Use in Copilot Studio
description: Tool that lets a Copilot Studio agent operate websites and Windows apps with a virtual mouse and keyboard
aliases: [Computer use, Computer-Using Agent, CUA]
---

Computer use in Copilot Studio is a tool type that lets an agent operate a website or a Windows application the way a person would: it looks at the screen, clicks buttons, picks menus and types into fields. The main entry [Computer Use](./Computer Use.md) explains the principle. This entry covers how it works in Copilot Studio, where the feature has been generally available since May 2026.

You need it when a system has no interface, meaning neither a connector nor an MCP server. Typical cases are legacy business apps, supplier portals and web forms. You create the tool under [Tools](./Tools.md), give it a name, a description and instructions in plain language: “Open the invoice portal, filter to the last 24 hours, copy invoice number and amount into the form and submit it.” A vision model then reads screenshots and decides step by step what to click next, and it usually copes with small changes to the interface.

The tool does not run in your browser but on a machine you set up for it: a machine from Power Automate machine management, a cloud PC pool or a Windows 365 cloud PC. Microsoft recommends dedicated machines with minimal permissions. Several settings add protection. Access control defines a list of allowed websites and applications. Enforce HTTPS blocks unencrypted sites. Stored credentials keep logins for portals in a secure store instead of in the instructions. Human supervision names a person who is asked by email when the tool detects suspicious instructions on a page, for example an attempt at [prompt injection](./Prompt Injection.md). An audit log with session replay completes the picture.

The key question is whose permissions the tool uses. The default is the maker's credentials, which makes sense for an [autonomous agent](./Autonomer Agent.md). If you share such an agent, every user acts with your access on that machine. The alternative is end user credentials, in which case each person needs access to the machine. The details are under [Authentication](./Authentication.md).

Billing is per step in [Copilot Credits](./Copilot Credits.md), at a higher rate for premium models. Computer use is not included in the Microsoft 365 Copilot licence. As of October 2026 there are also standalone computer use tools for agent flows in preview.

_Common misconception:_ Computer use is not a substitute for a connector. It is the fallback when none exists. A connector is faster, cheaper and more reliable because it does not have to interpret screens.

_In practice:_

> “The supplier portal has no API. Can we still have order confirmations entered automatically?”
>
> “Yes, with computer use on a dedicated cloud PC. Restrict the tool to the portal address, put the login into stored credentials and watch the first runs in the test panel.”
