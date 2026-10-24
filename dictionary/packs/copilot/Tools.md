---
description: Bausteine in Copilot Studio, mit denen ein Agent andere Systeme anspricht, etwa Konnektoren, Flows, Prompts, APIs und MCP-Server
aliases: [Actions, Aktionen, Plugins, Plugin Actions, Werkzeuge, Tool Groups]
---

Tools sind in [Copilot Studio](./Copilot Studio.md) die Bausteine, mit denen ein [Agent](./Agent.md) über das Antworten hinaus etwas tut: Daten abfragen, einen Datensatz anlegen, eine E-Mail schicken, einen Ablauf starten. Das allgemeine Prinzip dahinter beschreibt der Eintrag [Tool Use](./Tool Use.md). Hier geht es darum, wie es in Copilot Studio konkret aussieht.

Der Name hat sich mehrfach geändert. Anfangs hießen diese Bausteine Plugins, dann Actions (Aktionen), seit 2025 Tools. In Menüs steht heute „Tool hinzufügen“, der Knoten in einem [Topic](./Topics.md) heißt aber teils noch Aktionsknoten. Ältere Anleitungen und Schulungsvideos verwenden die alten Namen, gemeint ist dasselbe.

Ein Tool kann verschiedene Dinge sein: ein [Power Platform Connector](./Power Platform Connectors.md) zu Outlook, SharePoint, Dataverse, SAP oder ServiceNow, ein [Agent Flow](./Agent Flows.md) für mehrstufige Automatisierung, ein [Prompt Tool](./Prompt Tool.md), das einen eigenen Modellaufruf kapselt, eine REST-API, ein MCP-Server (siehe [MCP in Copilot Studio](./MCP in Copilot Studio.md)) oder [Computer Use](./Computer Use in Copilot Studio.md). Jedes Tool hat einen Namen, eine Beschreibung, Eingaben und ein Verhalten nach dem Aufruf.

Die Beschreibung ist wichtiger, als sie aussieht. Bei [Generative Orchestration](./Generative Orchestration.md) entscheidet der Agent anhand von Beschreibung und Gesprächskontext, ob und wann er ein Tool nutzt. Eine vage Beschreibung wie „Hilft bei Bestellungen“ führt zu falschen Aufrufen. Besser: „Legt eine Bestellanforderung im Einkaufssystem an. Nicht für Statusabfragen.“ Bei klassischer Orchestrierung ruft nur ein Topic ein Tool explizit auf.

In den Einstellungen eines Tools legst du fest, ob der Agent es selbst wählen darf, ob er den Nutzer vorher um [Freigabe](./Freigabe.md) fragen soll, ob Eingaben vom Modell gefüllt oder fest vorgegeben werden, und ob das Tool mit den Rechten der Nutzerin oder des Erstellers läuft. Außerdem, was nach dem Aufruf passiert: nichts antworten, eine KI-formulierte Antwort schreiben oder eine feste Nachricht beziehungsweise Adaptive Card ausgeben.

Grenzen: Ein Agent darf bis zu 128 Tools haben, Microsoft empfiehlt deutlich weniger, etwa 25 bis 30, weil die Auswahl sonst ungenau wird. Tools, die eine [DLP](./DLP.md)-Richtlinie blockiert, erscheinen ausgegraut. Im GitHub Copilot [Harness](./Harness.md) findest du Tools im Build-Tab, mit Work IQ als vorinstalliertem Standard-Tool.

_Typischer Irrtum:_ Ein Tool ist kein Zugriff auf alles in einem System. Es ist eine konkrete Fähigkeit, etwa „E-Mail senden“, mit genau den Rechten, die die hinterlegte Verbindung hat.

_Im Alltag:_

> „Ich habe den SharePoint-Connector als Tool hinzugefügt, aber der Agent legt keine Dateien ab.“
>
> „Schau auf die Beschreibung und auf die Verbindung. Steht da, dass das Tool Dateien speichert? Und läuft es mit deinen Rechten oder denen des Nutzers?“
