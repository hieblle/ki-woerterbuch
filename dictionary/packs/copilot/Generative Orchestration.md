---
description: Modus in Copilot Studio, in dem der Agent pro Anfrage selbst wählt, welche Topics, Tools und Wissensquellen er einsetzt
english: Generative orchestration
aliases: [Generative Orchestrierung, Classic Orchestration, Klassische Orchestrierung, Generative Actions, Dynamic Chaining]
---

Generative Orchestration ist der Modus in [Copilot Studio](./Copilot Studio.md), in dem der Agent selbst entscheidet, wie er eine Anfrage beantwortet. Ein Sprachmodell liest die Nachricht, schaut sich die Beschreibungen aller [Topics](./Topics.md), [Tools](./Tools.md), Wissensquellen und verbundenen Agenten an und stellt daraus einen Plan zusammen. Fehlen Angaben, fragt der Agent nach. Am Ende formuliert er die Antwort aus den Ergebnissen. Beide Orchestrierungsarten gehören zum Standard [Harness](./Harness.md) von Copilot Studio.

Das Gegenstück heißt Classic Orchestration (klassische Orchestrierung). Dort vergleicht Copilot Studio deine Nachricht mit den Trigger Phrases der Topics und startet genau das eine Topic, das am besten passt. Tools laufen nur, wenn ein Topic sie ausdrücklich aufruft. Wissen kommt erst zum Zug, wenn kein Topic greift. Dieser Modus ist vorhersehbar, aber starr: Was kein Topic abdeckt, kann der Agent nicht.

Mit generativer Orchestration ändert sich die Arbeit beim Bauen. Statt Trigger Phrases zu sammeln, schreibst du gute Beschreibungen: Wofür ist dieses Topic da, was kann dieses Tool, was steht in dieser Wissensquelle. Danach richtet sich der Planer. Dazu kommen die [Instructions](./Instructions.md), die Ton, Grenzen und Vorgehen vorgeben. Eine schwammige Beschreibung führt dazu, dass der Agent ein Tool zur falschen Zeit oder gar nicht nutzt. Beim Umschalten von klassisch auf generativ erzeugt Copilot Studio erste Beschreibungen aus den vorhandenen Trigger Phrases, die du dann nachschärfst.

Für neue Agenten ist generative Orchestration die Voreinstellung. Viele neuere Funktionen setzen sie voraus, zum Beispiel [Event Trigger](./Event Trigger.md), [MCP in Copilot Studio](./MCP in Copilot Studio.md), Computer Use, Websuche, Deep Reasoning und verbundene Agenten. Administratoren können den Modus pro Umgebung abschalten. Wer einen älteren Agenten mit vielen Topics betreibt, sollte vor dem Umschalten testen, weil sich das Verhalten spürbar ändert.

Einige Grenzen gibt es, Stand Oktober 2026: Eigene Entities funktionieren nicht als Eingaben für Tools und Topics, mehrdeutige Anfragen werden nicht automatisch nachgefragt, und der Agent berücksichtigt nur einen begrenzten Teil des Gesprächsverlaufs. In der Abrechnung zählt ein Werkzeugaufruf aus dem Planer als Agent Action und kostet mehr [Copilot Credits](./Copilot Credits.md) als eine klassische Antwort.

_Typischer Irrtum:_ Generative Orchestration macht Topics nicht überflüssig. Für feste Abläufe wie eine Schadensmeldung mit Pflichtfeldern bleibt ein Topic das richtige Mittel, der Planer entscheidet nur, wann es startet.

_Im Alltag:_

> „Unser Agent hat auf die Frage nach dem Urlaubsantrag plötzlich das Reisekosten-Topic gestartet. Woran liegt das?“
>
> „Schau dir die Beschreibungen der beiden Topics an. Bei generativer Orchestration wählt der Agent danach aus, nicht mehr nach Trigger Phrases. Wenn beide nur ‚Anträge‘ erwähnen, verwechselt er sie.“
