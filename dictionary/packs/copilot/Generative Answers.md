---
description: Fähigkeit eines Copilot-Studio-Agenten, Fragen direkt aus Wissensquellen zu beantworten, ohne dass ein Topic dafür existiert
aliases: [Generative Antworten, Conversational Boosting, Boost Conversations, Konversationsoptimierung, Generative Answers Node]
---

Generative Answers (generative Antworten) sind in [Copilot Studio](./Copilot Studio.md) die Fähigkeit eines [Agenten](./Agent.md), eine Frage direkt aus seinen Wissensquellen zu beantworten, auch wenn niemand ein [Topic](./Topics.md) dafür gebaut hat. Der Agent durchsucht die unter [Knowledge](./Knowledge.md) angebundenen Quellen, fasst die Treffer zu einer Antwort zusammen und hängt Quellenangaben an.

Früher hieß die Funktion Boost Conversations, später Conversational Boosting; in der deutschen Doku taucht auch „Konversationsoptimierung“ auf. Der Name steckt noch im System Topic „Conversational boosting“, das jeder Agent mitbringt. Dort sitzt ein Knoten „Create generative answers“, der bei klassischer Orchestrierung automatisch greift, wenn kein Topic passt. Erst wenn auch die Wissenssuche nichts findet, landet die Nutzerin im Fallback-Topic.

Du kannst den Knoten für generative Antworten auch gezielt in eigene Topics setzen. Dann bestimmst du, welche Quellen er durchsucht („Search only selected sources“), und kannst die Antwort in einer Variablen speichern, zum Beispiel um sie zu prüfen oder in einer Adaptive Card auszugeben. Ein Beispiel: Ein Topic „Produktfrage“ fragt erst die Produktnummer ab, schränkt die Suche dann auf das passende SharePoint-Verzeichnis ein und lässt generative Antworten den Rest erledigen. Neben den normalen Wissensquellen akzeptiert der Knoten auch Bing Custom Search, Azure OpenAI on your data oder eine Variable mit eigenem Text als Quelle.

Bei [Generative Orchestration](./Generative Orchestration.md) spielt das System Topic „Conversational boosting“ keine Rolle. Der Orchestrator durchsucht das Wissen direkt als eingebautes Werkzeug, bevor er antwortet. Das Ergebnis sieht für Nutzer gleich aus: eine Antwort mit Zitaten. Der Unterschied liegt darin, wer entscheidet, wann gesucht wird.

Die Qualität hängt an denselben Dingen wie beim [Grounding](./Grounding.md) allgemein: gepflegte Quellen, klare [Instructions](./Instructions.md) zum Zitieren und die Entscheidung, ob der Agent bei fehlenden Treffern aus dem Modellwissen antworten darf. In Teams zeigt der Agent höchstens 20 Zitate pro Antwort. Gibst du die Antwort über eine Adaptive Card aus, musst du die Zitate selbst darstellen.

Für die Abrechnung zählt jede generative Antwort im Standard [Harness](./Harness.md) mit zwei [Copilot Credits](./Copilot Credits.md). Für Nutzer mit Microsoft-365-Copilot-Lizenz fallen keine Credits an.

_Typischer Irrtum:_ Generative Antworten sind kein freies Chatten mit dem Modell. Sie sind an die Quellen gebunden. Antwortet der Agent trotzdem zu allgemein, ist meist „Allow ungrounded responses“ aktiv.

_Im Alltag:_

> „Muss ich für jede Frage aus dem Mitarbeiterhandbuch ein eigenes Topic anlegen?“
>
> „Nein. Häng das Handbuch als Wissensquelle an, dann beantwortet der Agent die Fragen über generative Antworten. Topics brauchst du nur für feste Abläufe wie den Urlaubsantrag.“
