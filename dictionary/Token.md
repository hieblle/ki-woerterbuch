---
description: Die Einheit, in der ein Sprachmodell liest und schreibt, etwa ein Wortteil; bestimmt Kosten, Tempo und Grenzen
english: Token
---

Ein Token ist die kleinste Einheit, in der ein [Sprachmodell](./Sprachmodell.md) Text liest und schreibt. Ein Token ist meist ein Wortteil, manchmal ein ganzes kurzes Wort, manchmal nur ein Satzzeichen.

Ein Beispiel macht das greifbar. Der Satz „Die Rechnung ist überfällig.“ hat vier Wörter. Für das Modell sind es etwa sechs Tokens: „Die“, „Rechnung“, „ist“, „über“, „fällig“ und der Punkt. Häufige deutsche Wörter wie „und“ oder „nicht“ sind ein Token. Seltene oder lange Wörter wie „Lieferantenbewertung“ werden in mehrere Teile zerlegt. Als Faustregel gilt im Deutschen: Ein Wort entspricht etwa anderthalb bis zwei Tokens. Englischer Text braucht weniger Tokens als deutscher, weil die Modelle mit mehr englischem Text trainiert wurden.

Tokens bestimmen drei Dinge im Alltag. Erstens die Grenze dessen, was das Modell auf einmal verarbeiten kann. Das [Kontextfenster](./Kontextfenster.md) wird in Tokens gemessen, und ein Vertrag mit 40 Seiten kann an diese Grenze stoßen. Zweitens die Geschwindigkeit, denn das Modell erzeugt Token für Token, und eine lange Antwort dauert entsprechend länger. Drittens die Kosten, weil Anbieter die Nutzung über Schnittstellen nach Tokens abrechnen. Bei einer Lizenz wie Microsoft 365 Copilot siehst du davon nichts, aber die Grenzen gelten trotzdem.

Du merkst Tokens meist erst, wenn etwas nicht mehr passt. Das Modell bricht eine lange Zusammenfassung ab, meldet, dass das Dokument zu groß ist, oder vergisst den Anfang einer langen [Unterhaltung](./Unterhaltung.md). Dann hilft es, den Text zu kürzen, in Abschnitte zu teilen oder nur die relevanten Seiten mitzugeben.

Für das Schreiben von Prompts heißt das: Jedes Wort kostet Tokens, aber Knappheit ist kein Ziel an sich. Ein klarer Satz mehr, der ein Missverständnis verhindert, spart mehr, als er kostet.

_Typischer Irrtum:_ Ein Token ist nicht dasselbe wie ein Wort und auch nicht dasselbe wie ein Zeichen. Zählst du Wörter, liegst du bei deutschem Text deutlich zu niedrig.

_Im Alltag:_

> „Copilot sagt, mein Dokument sei zu lang. Es sind doch nur 60 Seiten.“
>
> „60 Seiten sind schnell über hunderttausend Tokens, das sprengt das Kontextfenster. Gib ihm nur das Kapitel, das du brauchst.“
