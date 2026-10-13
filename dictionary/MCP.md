---
description: Model Context Protocol, ein Standard, über den Agenten Werkzeuge und Datenquellen anbinden, ähnlich wie USB bei Geräten
english: Model Context Protocol
aliases: [Model Context Protocol]
---

MCP steht für Model Context Protocol. Es ist ein offener Standard, der festlegt, wie ein KI-System Werkzeuge und Datenquellen anbindet. Man kann es sich wie USB vorstellen: ein Stecker, der an viele Geräte passt.

Das Problem davor war die Vielfalt. Jedes KI-Produkt brauchte für jedes Zielsystem eine eigene Anbindung. SharePoint an Copilot, SharePoint an Claude, SharePoint an ChatGPT, jedes Mal anders. Mit MCP stellt der Anbieter eines Systems einmal einen MCP-Server bereit, und jede KI, die den Standard spricht, kann ihn nutzen. Der Server beschreibt, welche Werkzeuge er anbietet, etwa „Datei suchen“, „Datei lesen“ oder „Ticket anlegen“, und welche Angaben sie brauchen. Die KI liest diese Beschreibung und weiß dann, wie sie den Aufruf formulieren muss. Das Prinzip dahinter ist [Werkzeugnutzung](./Werkzeugnutzung.md).

Für dich als Mitarbeitende zeigt sich MCP in den Einstellungen. In Claude heißen diese Anbindungen [Connectors](./Connector.md), in ChatGPT Apps oder Connectors, in Microsoft 365 Copilot findest du sie unter Connectors oder Plugins. Dahinter steckt oft ein MCP-Server. Du siehst eine Liste wie „SharePoint“, „Jira“, „Salesforce“ oder „Firmenwiki“, aktivierst, was du brauchst, und die KI kann ab diesem Moment dort lesen oder schreiben.

Ein Beispiel aus der Verwaltung: Deine IT stellt einen MCP-Server für das Ticketsystem bereit. Du aktivierst ihn in Claude oder Copilot und fragst: „Welche offenen Tickets der Abteilung Einkauf sind älter als zwei Wochen?“ Die KI ruft über den Server die Ticketliste ab und fasst sie zusammen. Ohne MCP müsstest du die Liste exportieren und hochladen.

Mit der Anbindung kommt Verantwortung. Ein MCP-Server gibt der KI Zugriff auf Daten, manchmal auch Schreibrechte. Welche Server freigegeben sind und mit welchen Rechten, sollte die IT entscheiden, nicht jeder Einzelne. Ein Server aus unbekannter Quelle kann zu [Datenabfluss](./Datenabfluss.md) führen oder versteckte Anweisungen mitschicken. Darum gilt: nur Connectors nutzen, die dein Unternehmen freigegeben hat, und beim ersten Einsatz prüfen, was die KI tatsächlich liest.

_Typischer Irrtum:_ MCP ist kein Produkt und keine KI. Es ist nur die Steckverbindung. Ob ein Agent gut mit dem angebundenen System arbeitet, hängt vom Modell und seinen Anweisungen ab.

_Im Alltag:_

> „In den Claude-Einstellungen steht jetzt ein Connector für unser CRM. Was ist das?“
>
> „Das ist ein MCP-Server, den die IT freigegeben hat. Wenn du ihn aktivierst, kann Claude direkt im CRM nachsehen, statt dass du Exporte hochlädst.“
