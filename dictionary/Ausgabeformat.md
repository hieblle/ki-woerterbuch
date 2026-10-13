---
description: Der KI sagen, wie das Ergebnis aussehen soll, etwa Tabelle, Liste, E-Mail, Länge, Sprache oder Tonalität
english: Output format
---

Das Ausgabeformat ist die Form, in der die KI ihr Ergebnis liefern soll. Tabelle oder Fließtext, Stichpunkte oder ganze Sätze, drei Sätze oder eine Seite, E-Mail oder Memo, Deutsch oder Englisch, förmlich oder locker. Wenn du es nicht sagst, entscheidet die KI selbst, und ihre Standardwahl ist oft länger und allgemeiner, als du brauchst.

Das Format gehört in den [Prompt](./Prompt.md), am besten in einem eigenen Satz am Ende. „Antworte als Tabelle mit den Spalten Lieferant, Preis, Lieferzeit.“ „Schreib eine E-Mail mit höchstens 120 Wörtern, Betreffzeile inklusive.“ „Fass das Protokoll in fünf Stichpunkten zusammen, jeder höchstens eine Zeile.“ Das Modell hält sich daran meist genau, weil Formatangaben eindeutig sind. Bei Längenangaben ist es ungenauer, „etwa 100 Wörter“ wird eher eingehalten als eine exakte Zahl.

Mit dem Format steuerst du auch die Weiterverwendung. Eine Tabelle kannst du direkt in Excel kopieren. Eine fertige Mail mit Betreff kannst du in Outlook einfügen. In Microsoft 365 Copilot lässt sich eine Tabelle aus der Antwort direkt als Excel-Datei öffnen. Wer vorher sagt, wofür das Ergebnis gedacht ist, spart sich das Umbauen danach. „Ich füge das in eine PowerPoint-Folie ein, also höchstens fünf Stichpunkte mit je acht Wörtern“ führt zu etwas, das auf die Folie passt.

Tonalität ist Teil des Formats. „Sachlich“, „freundlich, aber bestimmt“, „für Kolleginnen ohne Vorwissen“, solche Angaben wirken. Wo Worte nicht reichen, hilft es, [Beispiele zu geben](./Beispiele geben.md): Ein Mustertext zeigt den Ton genauer als jede Beschreibung. Und wenn das Ergebnis die Form noch nicht trifft, sagst du es im nächsten Schritt und lässt es [nachschärfen](./Nachschärfen.md).

Für Aufgaben, die oft vorkommen, lohnt es sich, das Format fest in [Anweisungen](./Anweisungen.md) oder eine [Prompt-Vorlage](./Prompt-Vorlage.md) zu schreiben. Dann bekommt das ganze Team Protokolle, Angebote oder Statusberichte in derselben Struktur, ohne es jedes Mal neu zu beschreiben.

_Typischer Irrtum:_ Viele nehmen die erste Form hin, die die KI wählt, und bauen dann selbst um. Ein Satz zum Format im Prompt erspart genau diese Arbeit.

_Im Alltag:_

> „Gemini liefert mir zur Lieferantenübersicht immer einen Riesentext. Ich brauch das aber für Excel.“
>
> „Dann sag ihm das Ausgabeformat. Schreib dazu: als Tabelle, Spalten Name, Preis, Lieferzeit, Bewertung. Dann kopierst du die Tabelle direkt rüber, fertig.“
