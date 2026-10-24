---
description: Zwei Wege, in Copilot Studio einen Agenten in Teilagenten aufzuteilen oder an andere Agenten anzubinden
english: Child agents and connected agents
aliases: [Untergeordnete Agents, Verbundene Agents, Multi-Agent-Orchestrierung in Copilot Studio, Sub-Agents]
---

Child Agents und Connected Agents sind die beiden Wege, in Copilot Studio ein [Multi-Agent-System](./Multi-Agent-System.md) zu bauen. Ein Child Agent (untergeordneter Agent) lebt innerhalb deines Agenten und bündelt einen Teilbereich. Ein Connected Agent (verbundener Agent) ist ein eigenständiger Agent, an den dein Agent Aufgaben weitergibt. Beide findest du auf der Seite „Agents“ deines Agenten.

Ein Child Agent ist leichtgewichtig. Er hat eigene [Instructions](./Instructions.md), eigene [Tools](./Tools.md), eigenes Wissen und eigene Auslöser, aber keine eigene Veröffentlichung und keine eigene Lizenz. Du nutzt ihn, um Ordnung zu schaffen. Ein HR-Agent bekommt zum Beispiel einen Child Agent für Urlaub, einen für Reisekosten und einen für Onboarding. Jeder hat nur die Werkzeuge, die er braucht, und ein eigenes Tool-Limit. Microsoft empfiehlt die Aufteilung ab etwa 30 bis 40 Auswahlmöglichkeiten aus Tools, [Topics](./Topics.md) und Agenten, weil der Orchestrator sonst öfter danebengreift. Für jeden Child Agent legst du fest, wann er dran ist, mit Bedingung und Priorität, welche Eingaben er bekommt und was nach dem Lauf passiert.

Ein Connected Agent kann vieles sein: ein anderer Copilot-Studio-Agent aus derselben Umgebung, ein Agent aus Microsoft Foundry, ein Fabric Data Agent für Datenanalysen, ein mit dem Microsoft 365 Agents SDK gebauter Agent oder ein fremder Agent über das [A2A-Protokoll](./A2A-Protokoll.md). Die Anbindung von Foundry, Fabric und SDK-Agenten ist Stand Oktober 2026 in der Vorschau, A2A ist allgemein verfügbar. Der Hauptagent beschreibt die Aufgabe, der verbundene Agent arbeitet sie ab und liefert das Ergebnis zurück. Das ist ein [Handoff](./Handoff.md) zwischen Agenten.

Ausgewählt wird in beiden Fällen über die Beschreibung: Mit [Generative Orchestration](./Generative Orchestration.md) entscheidet der Hauptagent anhand der Anfrage, welchen Teil- oder Partneragenten er einsetzt. Alternativ leitest du aus einem Topic gezielt weiter. In den Instructions kannst du Agenten mit „/“ direkt benennen. Zwei Grenzen solltest du kennen: Ein Agent, der selbst Connected Agents hat, kann nicht als Connected Agent eines anderen dienen. Und jede Weitergabe kostet Zeit, mehr Stufen heißt längere Antworten.

_Typischer Irrtum:_ Mehr Agenten machen ein System nicht automatisch klüger. Teile erst auf, wenn ein einzelner Agent spürbar die falschen Werkzeuge wählt, und prüfe danach in der Activity Map, ob die Weitergabe wie geplant läuft.

_Im Alltag:_

> „Unser Service-Agent hat inzwischen 60 Tools und greift ständig daneben. Neu bauen?“
>
> „Nein, aufteilen. Mach aus den Bereichen Retouren, Rechnungen und Lieferstatus je einen Child Agent mit nur seinen Tools. Der Hauptagent verteilt dann nur noch.“
