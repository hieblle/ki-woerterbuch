---
title: Power Platform Connectors
description: Prebuilt or custom connections to services that Copilot Studio shares with Power Automate and Power Apps
aliases: [Standard connectors, Premium connectors, Custom connectors, Knowledge connectors, Konnektoren]
---

Power Platform connectors are prebuilt connections to services such as Outlook, SharePoint, Dataverse, Salesforce, SAP or ServiceNow. They belong to the Microsoft Power Platform and are the same connectors that Power Automate and Power Apps use. In [Copilot Studio](./Copilot Studio.md) you add them as [tools](./Tools.md) so that your [agent](./Agent.md) can read data or trigger actions. What a connector is in general is explained in the entry [connector](./Connector.md).

There are three classes. Standard connectors cover the Microsoft 365 world, such as Outlook, Teams, SharePoint and OneDrive. Premium connectors reach business systems beyond it, for example SQL databases, Salesforce, SAP or Dynamics 365. They require a suitable licence; the standalone Copilot Studio licence includes premium connectors. Custom connectors are built by your IT team for an internal API that no ready-made connector covers. Before agent makers can use them, they have to be shared within the organisation.

Every connector needs a connection, meaning credentials. For each tool you decide whether it runs with the permissions of the person chatting with the agent or with your own as the maker. The difference is significant: with user permissions, everyone sees only what they could see anyway. With maker permissions, all users see what you see. The entry [authentication](./Authentication.md) has more on this.

For some time connectors have also been available as a knowledge source, in preview as of October 2026: Salesforce, ServiceNow, Azure SQL, Snowflake, Confluence, SAP OData, Google Sheets and others. Nothing is indexed; the agent queries the system at runtime with the user's token. See [knowledge](./Knowledge.md).

The most important distinction: Power Platform connectors are not the same as [Copilot connectors](./Copilot Connectors.md), formerly known as Graph connectors. Copilot connectors bring external content into [Microsoft Graph](./Microsoft Graph.md) so that Microsoft Copilot can search it as knowledge. Power Platform connectors let an agent act. Both are called “connector”, but they are set up in different places and managed differently.

For admins, connectors are a central lever. Through data policies ([DLP](./DLP.md)) in the Power Platform admin center they classify connectors as business, non-business or blocked. A blocked connector appears greyed out in Copilot Studio. An agent's permissions through connectors also show up in its [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md) as API permissions.

_Common misconception:_ “We have the Salesforce connector” does not mean the agent has Salesforce knowledge. As a tool it can search and write there on request; as a knowledge source you have to connect it separately.

_In practice:_

> “Can I just hook the agent up to our ticketing system?”
>
> “If there is a ready-made connector, yes. For ServiceNow, for example, that is a premium connector. If there is none, IT has to build a custom connector and share it.”
