---
description: Dieselbe Frage führt bei einem Sprachmodell nicht immer zur selben Antwort; das ist normal und kein Fehler
english: Non-determinism
---

Nicht-Determinismus (Non-determinism) bedeutet, dass ein [Sprachmodell](./Sprachmodell.md) auf dieselbe Eingabe nicht immer dieselbe Antwort gibt. Stellst du Copilot zweimal dieselbe Frage, bekommst du zwei verschiedene Texte. Das ist kein Fehler, sondern Teil der Arbeitsweise.

Der Grund liegt im Mechanismus. Das Modell berechnet für jedes nächste Wort mehrere Kandidaten mit unterschiedlicher Wahrscheinlichkeit und wählt dann einen davon, mit etwas Zufall. Nach dem ersten anderen Wort läuft der Rest der Antwort in eine andere Richtung. Anbieter bauen diesen Zufall absichtlich ein, weil die Antworten sonst steif und wiederholend klingen. Im Chat gibt es keinen Knopf, der ihn ganz abschaltet.

Ein Taschenrechner oder eine Excel-Formel ist deterministisch. Dieselbe Eingabe, dasselbe Ergebnis, immer. Ein Sprachmodell ist das nicht. Wer das nicht weiß, sucht den Fehler schnell bei sich selbst: „Gestern hat es das richtig gemacht, heute nicht, was habe ich anders eingegeben?“ Oft nichts.

Für die Prüfung von Ergebnissen hat das zwei Folgen. Erstens kannst du aus einem guten Durchlauf nicht schließen, dass der nächste auch gut wird. Wenn ein Modell eine Vertragsklausel zehnmal prüft und neunmal den Fehler findet, bleibt das zehnte Mal. Das Prinzip [Human-in-the-Loop](./Human-in-the-Loop.md) gilt deshalb bei jedem Ergebnis, nicht nur beim ersten. Zweitens lohnt es sich, bei wichtigen Aufgaben mehrere Durchläufe zu vergleichen. Stimmen drei Zusammenfassungen in den Kernaussagen überein, ist das ein gutes Zeichen. Weichen sie ab, weißt du, wo du genauer hinsehen musst.

Für Vorlagen heißt das: Eine [Prompt-Vorlage](./Prompt-Vorlage.md), die im Test gut lief, liefert im Einsatz ähnliche, aber keine identischen Ergebnisse. Je genauer du das [Ausgabeformat](./Ausgabeformat.md) vorgibst, etwa eine Tabelle mit festen Spalten oder eine Liste mit höchstens fünf Punkten, desto kleiner wird die Schwankung. Den Inhalt kann das Format aber nicht festnageln.

Du kannst den Nicht-Determinismus auch nutzen. Lässt du dir für einen Betreff oder eine Überschrift drei Varianten erzeugen, bekommst du drei echte Alternativen und kannst die beste nehmen.

_Typischer Irrtum:_ Eine andere Antwort auf dieselbe Frage ist kein Zeichen dafür, dass das Werkzeug kaputt ist oder dass jemand die Einstellungen verändert hat.

_Im Alltag:_

> „Ich habe denselben Prompt wie Sabine benutzt, aber meine Tabelle sieht ganz anders aus.“
>
> „Das ist Nicht-Determinismus, jeder Durchlauf fällt etwas anders aus. Gib die Spalten fest vor, dann wird es stabiler. Gleich wird es nie.“
