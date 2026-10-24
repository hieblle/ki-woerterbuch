---
description: Tool-Typ in Copilot Studio, mit dem ein Agent alle Werkzeuge eines MCP-Servers auf einmal anbindet
english: MCP in Copilot Studio
aliases: [Model Context Protocol in Copilot Studio, MCP-Server, MCP Connector, MCP-Tool]
---

MCP in Copilot Studio ist ein Tool-Typ, mit dem du einen Agenten an einen MCP-Server anschließt. Das [Model Context Protocol](./MCP.md) ist ein offener Standard, über den Agenten die Werkzeuge und Datenquellen eines fremden Systems finden und aufrufen. In Copilot Studio fügst du den Server einmal als [Tool](./Tools.md) hinzu, und alle Werkzeuge, die er anbietet, stehen dem Agenten zur Verfügung.

Der Unterschied zu einem einzelnen Tool aus den [Power Platform Connectors](./Power Platform Connectors.md) liegt in der Menge und in der Pflege. Ein Connector-Tool ist eine Aktion, etwa „Ticket anlegen“. Ein MCP-Server bringt oft ein ganzes Bündel mit: Tickets suchen, anlegen, kommentieren, schließen. Copilot Studio liest diese Liste vom Server und aktualisiert sie, wenn der Betreiber etwas ändert. Du musst nichts nachziehen. Unterstützt werden MCP-Tools und MCP-Ressourcen, also Werkzeuge und Dateninhalte. MCP-Prompts, also vorgefertigte Prompt-Vorlagen des Servers, nutzt Copilot Studio nicht.

Technisch läuft ein MCP-Server über die Infrastruktur für Custom Connectors. Das hat zwei Folgen, die für dein Unternehmen wichtig sind. Erstens gelten dieselben Datenrichtlinien ([DLP](./DLP.md)): Admins können einen MCP-Server wie jeden anderen Connector erlauben, einschränken oder sperren. Zweitens läuft jeder Aufruf über eine Verbindung mit Anmeldedaten, die entweder vom Ersteller oder vom jeweiligen Nutzer stammen (siehe [Authentication](./Authentication.md)). MCP setzt [Generative Orchestration](./Generative Orchestration.md) voraus, weil der Agent anhand der Beschreibungen selbst entscheidet, welches Werkzeug er wann aufruft.

Woher kommen die Server? Microsoft liefert eigene, zum Beispiel für Dataverse, für Work IQ oder den Windows 365 for Agents MCP Server, über den ein Agent einen Cloud-PC bedient. Drittanbieter und deine eigene IT können weitere bauen. Seit Juli 2026 können Anbieter ihre Server bei Microsoft zur Zertifizierung einreichen, Stand Oktober 2026 noch in der Vorschau. Zertifiziert heißt: Microsoft hat Zuverlässigkeit, Sicherheit und Compliance geprüft. Nicht zertifizierte Server darfst du trotzdem nutzen, die Verantwortung dafür liegt dann bei deinem Unternehmen.

Eine Stolperfalle: Ein MCP-Server erweitert den Agenten um viele Werkzeuge auf einmal, und jedes davon kann etwas auslösen. Prüfe deshalb mit der [Activity Map](./Test Panel und Activity Map.md), welche Werkzeuge der Agent wirklich aufruft, und aktiviere für Aktionen, die etwas verändern, die Option „Ask the end user before running“, also eine [Freigabe](./Freigabe.md) durch den Nutzer.

_Typischer Irrtum:_ MCP ist kein Microsoft-Produkt und kein Ersatz für Connectors. Es ist ein Standard, der neben den Power Platform Connectors steht, und beides lebt in Copilot Studio nebeneinander.

_Im Alltag:_

> „Unser Ticketsystem hat jetzt einen MCP-Server. Muss ich trotzdem für jede Aktion ein eigenes Tool bauen?“
>
> „Nein. Du fügst den Server einmal als Tool hinzu, dann kennt der Agent alle Aktionen daraus. Schau danach in der Activity Map, welche er tatsächlich benutzt.“
