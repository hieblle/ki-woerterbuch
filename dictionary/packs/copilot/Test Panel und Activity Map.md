---
description: Testchat im Copilot Studio Designer und die Karte, die jeden Schritt des Agenten sichtbar macht
english: Test panel and activity map
aliases: [Test your agent, Testbereich, Aktivitätskarte, Activity, Track between topics]
---

Das Test Panel ist der Chat am rechten Rand von Copilot Studio, in dem du deinen Agenten während des Bauens ausprobierst. Die Activity Map ist die Karte daneben, die zeigt, was der Agent bei jeder Antwort intern getan hat. Zusammen sind sie die Copilot-Studio-Version eines [Trace](./Trace.md): Du siehst nicht nur die Antwort, sondern den Weg dorthin.

Im Test Panel schreibst du wie ein Nutzer. Klickst du auf eine Antwort des Agenten, springt der Designer zu dem Knoten im [Topic](./Topics.md), der sie erzeugt hat. Mit „Track between topics“ folgt der Designer dem Gespräch automatisch von Topic zu Topic. Über den Reiter „Variables“ siehst du live, welche Werte der Agent gerade gespeichert hat. „Save snapshot“ sichert den Gesprächsverlauf samt Diagnosedaten als Zip-Datei, zum Beispiel für den Support. Vorsicht, die Datei enthält den kompletten Inhalt des Agenten.

Die Activity Map gibt es nur mit [Generative Orchestration](./Generative Orchestration.md). Sie zeigt den Plan des Orchestrators als Kette von Knoten: welche Topics, Tools, Wissensquellen und Agenten er ausgewählt hat, mit welchen Eingaben, mit welchem Ergebnis und wie lange jeder Schritt gedauert hat. Fehler, etwa ein fehlender Eingabewert, sind markiert. Bei einem Wissensknoten siehst du die Suchanfrage, die der Agent aus deiner Frage gemacht hat, die Quellen, die er verwendet hat, und die Quellen, die er durchsucht, aber nicht genutzt hat. „Show rationale“ liefert eine von KI erzeugte Begründung, warum ein Werkzeug gewählt wurde. Diese Begründung kann falsch sein, nimm sie als Hinweis, nicht als Beweis.

Die Karten verschwinden nicht nach dem Test. Auf der Seite „Activity“ findest du historische Karten und Transkripte für Testgespräche, für Agenten in Teams, Microsoft Copilot und SharePoint sowie für Läufe, die ein [Event Trigger](./Event Trigger.md) gestartet hat. Du siehst standardmäßig nur deine eigenen Gespräche. Ob du auch die anderer Nutzer sehen darfst, regelt der Admin über das [Sharing](./Sharing.md).

Zwei Grenzen: Zeitgesteuerte Auslöser wie Inaktivitäts-Trigger feuern im Test Panel nicht zuverlässig, teste sie nach dem Veröffentlichen in Teams. Und ein Test ist kein Beweis für Qualität. Für wiederholbare Prüfungen mit vielen Fragen nutzt du [Agent Evaluations](./Agent Evaluations.md), die du direkt aus dem Test Panel heraus starten kannst.

_Typischer Irrtum:_ Die Demo-Website ist kein Test Panel. Sie dient dazu, Kolleginnen und Kollegen einen Agenten zum Ausprobieren zu geben, und zeigt keine Activity Map.

_Im Alltag:_

> „Der Agent antwortet auf die Reisekostenfrage mit dem alten Satz. Woher hat er den?“
>
> „Öffne die Activity Map und klick auf den Wissensknoten. Da steht, welches Dokument er benutzt hat. Wahrscheinlich liegt die alte Richtlinie noch im SharePoint-Ordner.“
