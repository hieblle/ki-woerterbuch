---
description: Die Software um das Sprachmodell herum, die aus dem Modell einen Agenten macht, mit Systemprompt, Werkzeugen und Schleife
english: Harness
aliases: [Agent-Harness, Agenten-Umgebung, Laufzeitumgebung]
---

Ein Harness ist die Software um das Sprachmodell herum, die aus dem Modell einen [Agenten](./Agent.md) macht. Das Modell selbst kann nur Text lesen und Text schreiben. Alles andere, was ein Agent braucht, liefert der Harness: den Systemprompt, die Werkzeuge, die Verwaltung des Kontexts, die Freigaben und die Schleife, die das Ganze am Laufen hält.

Du kannst dir das wie das Verhältnis zwischen einer Fachkraft und ihrem Arbeitsplatz vorstellen. Das [Sprachmodell](./Sprachmodell.md) ist die Fachkraft, die denkt und formuliert. Der Harness ist der Arbeitsplatz: die Stellenbeschreibung ([Systemprompt](./Systemprompt.md)), der Zugang zu Programmen und Daten ([Tool Use](./Tool Use.md)), die Regel, wann vor einer Aktion eine [Freigabe](./Freigabe.md) nötig ist, und der Ablauf, der nach jedem Schritt entscheidet, was als Nächstes passiert. Der Harness ruft das Modell auf, führt aus, was das Modell vorschlägt, und zeigt dem Modell das Ergebnis. Dann geht es von vorn los, bis die Aufgabe erledigt ist.

Das erklärt, warum dasselbe Modell in verschiedenen Produkten unterschiedlich gut arbeitet. Claude im Chat, Claude in einem Agenten-Werkzeug und ein Copilot Agent können auf demselben Modell laufen und sich trotzdem anders verhalten, weil der Harness andere Werkzeuge, andere Anweisungen und andere Grenzen setzt. Wer einen Agenten verbessern will, dreht meist am Harness und nicht am Modell: bessere Anweisungen, passendere Werkzeuge, strengere Freigaben.

Im Alltag begegnet dir der Begriff zunehmend direkt in der Oberfläche. In Copilot Studio wählst du beim Erstellen eines Agenten einen Harness aus, etwa einen für Kundengespräche oder einen allgemeinen (Stand Oktober 2026). Damit legst du fest, welche Grundausstattung dein Agent bekommt, bevor du eigene Anweisungen und Wissensquellen ergänzt. Das Modell dahinter bleibt dasselbe. Auch [Compaction](./Compaction.md), also das Zusammenfassen des Verlaufs, wenn das Kontextfenster voll wird, übernimmt der Harness und nicht das Modell.

_Typischer Irrtum:_ Wenn ein Agent schlecht arbeitet, liegt es selten am Modell. Meist fehlen im Harness die richtigen Werkzeuge oder klare Anweisungen.

_Im Alltag:_

> „In Copilot Studio soll ich einen Harness auswählen. Was ist das?“
>
> „Die Grundausstattung um das Modell herum: Werkzeuge, Regeln, Freigaben. Du wählst damit, was für einen Arbeitsplatz dein Agent bekommt. Das Modell ist bei allen dasselbe.“
