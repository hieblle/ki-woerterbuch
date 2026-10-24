---
description: Anbindungen, die Daten aus externen Systemen in Microsoft Graph und den semantischen Index holen, damit Copilot sie findet
english: Microsoft 365 Copilot connectors
aliases: [Graph Connectors, Microsoft Graph Connectors, Microsoft 365 Copilot Connectors, Copilot-Connectors, Synced Connectors, Federated Connectors]
---

Copilot Connectors sind Anbindungen, die Inhalte aus Systemen außerhalb von Microsoft 365 für Copilot auffindbar machen. Ohne sie kennt Copilot nur, was in Microsoft 365 liegt: Mails, Dateien, Chats, Kalender. Mit einem Copilot Connector kommen Daten aus ServiceNow, Salesforce, Confluence, einem Dateiserver oder einer eigenen Datenbank dazu. Bis 2025 hießen sie Microsoft Graph Connectors, der alte Name ist noch in vielen Oberflächen zu sehen.

Es gibt zwei Modelle. Ein synced Connector (synchronisiert) kopiert die Inhalte in den [Microsoft Graph](./Microsoft Graph.md), wo sie in den [semantischen Index](./Semantischer Index.md) aufgenommen werden. Copilot kann sie dann durchsuchen wie eine SharePoint-Bibliothek, mit den Zugriffsrechten des Quellsystems. Ein federated Connector (föderiert) kopiert nichts, sondern fragt das Quellsystem zur Laufzeit über [MCP](./MCP.md) ab. Das passt für Daten, die sich ständig ändern oder die aus Compliance-Gründen nicht kopiert werden dürfen.

Das Einrichten ist Admin-Sache. In der Galerie stehen über hundert fertige Connectors, einige wie Salesforce, ServiceNow Knowledge und Zendesk sind vorkonfiguriert. Der Admin verbindet das Quellsystem, legt fest, welche Inhalte indiziert werden und wie Berechtigungen übernommen werden. Erst danach kannst du als Agent-Bauer den Connector im [Agent Builder in Copilot](./Agent Builder in Copilot.md) oder in [Copilot Studio](./Copilot Studio.md) als [Knowledge](./Knowledge.md) auswählen. Entwickler können eigene Connectors bauen.

Wichtig ist die Abgrenzung zu [Power Platform Connectors](./Power Platform Connectors.md). Die klingen ähnlich, machen aber etwas anderes: Sie sind die Bausteine, mit denen ein Agent oder ein Flow Aktionen ausführt, etwa eine Zeile in einer Datenbank anlegen oder eine Mail schicken. Copilot Connectors liefern Wissen zum Nachschlagen, Power Platform Connectors liefern Hände zum Handeln. Beide sind ein [Connector](./Connector.md) im Sinn des Hauptwörterbuchs, gehören aber zu unterschiedlichen Produktwelten.

Zwei Dinge zur Lizenz und zum Datenschutz. Wissen aus Copilot Connectors in Copilot Studio nutzt das „Tenant graph grounding“, das für Nutzer ohne Microsoft 365 Copilot-Lizenz [Copilot Credits](./Copilot Credits.md) verbraucht. Und weil die Daten im Index liegen, gelten dieselben Fragen wie bei SharePoint: Wer darf was sehen, und sind die Berechtigungen im Quellsystem sauber gepflegt? Ein Connector auf ein schlecht berechtigtes Wiki macht dessen Inhalte für alle findbar, die im Wiki Zugriff haben, auch wenn vorher niemand hingeschaut hat.

_Typischer Irrtum:_ Ein Copilot Connector schreibt nichts ins Quellsystem. Er liest und indiziert. Wer Daten ändern will, braucht ein Tool mit einem Power Platform Connector oder ein [API-Plugin](./API-Plugin.md).

_Im Alltag:_

> „Copilot findet unsere ServiceNow-Tickets nicht. Muss ich die exportieren?“
>
> „Nein, dafür gibt es einen Copilot Connector. Den muss die IT einmal einrichten, dann sucht Copilot in den Tickets wie in SharePoint, mit denselben Rechten wie in ServiceNow.“
