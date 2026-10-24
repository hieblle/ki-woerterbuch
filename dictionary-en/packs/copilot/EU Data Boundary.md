---
title: EU Data Boundary
description: Microsoft's commitment to store and process data of EU and EFTA customers within the EU and EFTA, including for Copilot
aliases: [EUDB, Data Residency, Flex Routing, Advanced Data Residency]
---

The EU Data Boundary (EUDB) is Microsoft's commitment to store and process customer data of companies in the EU and EFTA within that region. [Microsoft Copilot](./Microsoft Copilot.md) is one of the services this commitment covers. Your prompts, the responses and the data from the [Microsoft Graph](./Microsoft Graph.md) that Copilot draws on to answer therefore stay in European data centres. The [semantic index](./Semantischer Index.md) for EU customers is located in the EU as well.

It matters because it answers one of the most common data protection questions: where does my data go when I use Copilot? For [GDPR and AI](./DSGVO und KI.md), data residency is one building block among several. On its own it does not make the use lawful, but in normal operation it spares you the third-country transfer debate.

The mechanism of the model call: Copilot routes every request to the nearest data centre with free capacity. For EU users there is an additional rule that the traffic stays inside the EU Data Boundary. Since 2026 there has been an exception that admins control: flex routing. If it is allowed, the actual model computation may happen outside the EU during peak load, for example in the US, Canada or Australia. The data stays encrypted, storage stays in the EU, only the computing moves for a short time. For tenants created after 25 March 2026, flex routing is allowed by default. Older tenants should check the setting in the Microsoft 365 admin center under the Copilot settings. [Copilot Studio](./Copilot Studio.md) has its own setting in the Power Platform admin center, which follows the Microsoft 365 setting unless it is stricter.

Four exceptions are worth knowing, as of October 2026. Web search queries go to Bing and are not covered by the EUDB. Anthropic models are currently excluded from the EUDB and are therefore switched off by default for EU tenants. A small amount of pseudonymised data may cross the boundary for security and operations. And companies with a Multi-Geo configuration do not count as EUDB customers for Microsoft 365.

_Common misconception:_ “The data stays in the EU” does not mean nobody outside the EU could ever access it. The EUDB is a commitment about where data is stored and processed, not an answer to every question about access by authorities in third countries.

_In practice:_

> “Our data protection officer wants it in writing that Copilot sends nothing to the US.”
>
> “For storage and processing the EU Data Boundary applies, it's in the Product Terms. As a blanket statement it isn't true, though: web search goes to Bing, and if flex routing is allowed, the model computation can run outside during peak load. Check the setting, then you can document it properly.”
