---
description: Offener Standard, über den ein Copilot-Studio-Agent Aufgaben an fremde Agenten auf anderen Plattformen übergibt
english: A2A protocol
aliases: [Agent2Agent, Agent-to-Agent-Protokoll, A2A-Agent, A2A]
---

Das A2A-Protokoll (Agent2Agent) ist ein offener Standard dafür, wie ein Agent mit einem anderen Agenten spricht. Er beschreibt, wie ein Agent eine Aufgabe sendet, wie der andere sie annimmt, Rückfragen stellt und das Ergebnis liefert. Google hat den Standard gestartet, heute wird er bei der Linux Foundation gepflegt. In Copilot Studio nutzt du ihn, um einen Agenten auf einer fremden Plattform als [Connected Agent](./Child Agents und Connected Agents.md) anzubinden.

Der Unterschied zu [MCP](./MCP.md) ist einfach zu merken. MCP verbindet einen Agenten mit Werkzeugen: Datenbank abfragen, Ticket anlegen, Datei lesen. A2A verbindet einen Agenten mit einem anderen Agenten, der selbst denkt, plant und Werkzeuge nutzt. Bei MCP bekommt dein Agent eine Liste von Funktionen. Bei A2A bekommt er einen Ansprechpartner, dem er eine ganze Aufgabe übergibt. Microsoft fasst die Auswahl so zusammen: Für eine Schnittstelle nimmst du einen Custom Connector, für Werkzeuge einen MCP-Server, für einen fremden Agenten A2A.

So läuft es ab: Jeder A2A-Agent veröffentlicht eine Agent Card, eine kleine Beschreibungsdatei unter einer festen Adresse. Darin steht, was der Agent kann und wie man ihn erreicht. In Copilot Studio wählst du unter Agents „Add agent“ und dann „A2A agent“, trägst die Adresse ein und legst die Anmeldung fest: keine, ein API-Schlüssel oder OAuth 2.0. Technisch läuft die Verbindung über die Infrastruktur für Custom Connectors. Das bedeutet, dass Datenrichtlinien greifen und dass auch Agenten im eigenen Netzwerk erreichbar sind. Bei jeder Anfrage schickt Copilot Studio eine Kontext-ID mit, damit der fremde Agent ein Gespräch über mehrere Runden führen kann. Das Ergebnis kommt als [Handoff](./Handoff.md) zurück an deinen Hauptagenten.

Die Anbindung ist seit April 2026 allgemein verfügbar. Stand Oktober 2026 arbeitet Copilot Studio dabei als Client, also als der Agent, der anfragt. Ob ein Copilot-Studio-Agent selbst als A2A-Server von außen angesprochen werden kann, ist in der Microsoft-Dokumentation nicht beschrieben. Agenten aus dem Microsoft Foundry Agent Service bieten dagegen einen A2A-Endpunkt an.

Für dein Unternehmen heißt das: Prüfe vor der Anbindung, wem der fremde Agent gehört, welche Daten du ihm schickst und mit welcher [Agent-Identität](./Agent-Identität.md) er auftritt. Der fremde Agent arbeitet außerhalb deiner Kontrolle und bringt seine eigenen Fehler mit.

_Typischer Irrtum:_ A2A ersetzt MCP nicht und MCP ersetzt A2A nicht. Die beiden Standards lösen verschiedene Aufgaben und werden oft gemeinsam genutzt.

_Im Alltag:_

> „Der Logistikpartner bietet seinen Tracking-Agenten per A2A an. Ist das dasselbe wie ein MCP-Server?“
>
> „Nein. Über MCP würdest du seine Funktionen bekommen, über A2A übergibst du ihm die ganze Frage und er antwortet wie ein Kollege. Für Tracking-Fragen passt A2A gut.“
