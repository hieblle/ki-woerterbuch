---
description: Vorgefertigte oder eigene Verbindungen zu Diensten, die Copilot Studio mit Power Automate und Power Apps teilt
aliases: [Konnektoren, Standard Connectors, Premium Connectors, Custom Connectors, Benutzerdefinierte Connectors, Knowledge-Connectors]
---

Power Platform Connectors sind vorgefertigte Verbindungen zu Diensten wie Outlook, SharePoint, Dataverse, Salesforce, SAP oder ServiceNow. Sie gehören zur Microsoft Power Platform und sind dieselben Connectors, die auch Power Automate und Power Apps nutzen. In [Copilot Studio](./Copilot Studio.md) bindest du sie als [Tools](./Tools.md) ein, damit dein [Agent](./Agent.md) Daten lesen oder Aktionen auslösen kann. Was ein Connector grundsätzlich ist, erklärt der Eintrag [Connector](./Connector.md).

Es gibt drei Klassen. Standard-Connectors decken die Microsoft-365-Welt ab, etwa Outlook, Teams, SharePoint und OneDrive. Premium-Connectors verbinden mit Geschäftssystemen außerhalb, zum Beispiel SQL-Datenbanken, Salesforce, SAP oder Dynamics 365. Sie setzen eine passende Lizenz voraus; die eigenständige Copilot-Studio-Lizenz schließt Premium-Connectors ein. Custom Connectors (benutzerdefinierte Connectors) baut eure IT selbst für eine interne API, die kein fertiger Connector abdeckt. Damit Agent-Bauer sie nutzen können, müssen sie in der Organisation freigegeben sein.

Jeder Connector braucht eine Verbindung, also Zugangsdaten. Du entscheidest pro Tool, ob sie mit den Rechten der Person läuft, die mit dem Agenten chattet, oder mit deinen eigenen als Ersteller. Der Unterschied ist groß: Mit Nutzerrechten sieht jeder nur, was er auch sonst sehen darf. Mit Ersteller-Rechten sehen alle Nutzer das, was du siehst. Mehr dazu im Eintrag [Authentication](./Authentication.md).

Seit einiger Zeit gibt es Connectors auch als Wissensquelle, Stand Oktober 2026 in der Vorschau: Salesforce, ServiceNow, Azure SQL, Snowflake, Confluence, SAP OData, Google Sheets und weitere. Dabei wird nichts indiziert, der Agent fragt das System zur Laufzeit mit dem Token der Nutzerin ab. Siehe [Knowledge](./Knowledge.md).

Die wichtigste Abgrenzung: Power Platform Connectors sind nicht dasselbe wie [Copilot Connectors](./Copilot Connectors.md), die früher Graph Connectors hießen. Copilot Connectors bringen externe Inhalte in den [Microsoft Graph](./Microsoft Graph.md), damit Microsoft Copilot sie als Wissen durchsuchen kann. Power Platform Connectors lassen einen Agenten handeln. Beide heißen „Connector“, werden aber an anderer Stelle eingerichtet und anders verwaltet.

Für Admins sind Connectors ein zentraler Hebel. Über Data Policies ([DLP](./DLP.md)) im Power Platform Admin Center stufen sie Connectors als Business, Non-Business oder Blocked ein. Ein blockierter Connector erscheint in Copilot Studio ausgegraut. Die Berechtigungen eines Agenten über Connectors tauchen außerdem in seiner [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md) als API-Berechtigungen auf.

_Typischer Irrtum:_ „Wir haben den Salesforce-Connector“ heißt nicht, dass der Agent Salesforce-Wissen hat. Als Tool kann er dort gezielt suchen und schreiben; als Wissensquelle musst du ihn gesondert anbinden.

_Im Alltag:_

> „Kann ich den Agenten einfach an unser Ticketsystem hängen?“
>
> „Wenn es einen fertigen Connector gibt, ja. Bei ServiceNow ist das zum Beispiel ein Premium-Connector. Gibt es keinen, muss die IT einen Custom Connector bauen und freigeben.“
