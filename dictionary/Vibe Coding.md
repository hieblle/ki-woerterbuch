---
description: Software per Chat erstellen lassen, ohne selbst Code zu schreiben, mit Coding-Agenten wie Claude Code, GitHub Copilot oder Lovable
aliases: [Coding-Agent, KI-Programmierung]
---

Vibe Coding heißt, Software per Chat erstellen zu lassen, ohne selbst eine Zeile Code zu schreiben. Du beschreibst, was das Programm tun soll, ein Coding-Agent schreibt und startet den Code, und du sagst, was noch anders sein soll.

Dahinter stecken [Agenten](./Agent.md), die auf Programmieren spezialisiert sind: Claude Code, GitHub Copilot, Lovable, Replit oder Codex in ChatGPT. Sie schreiben nicht nur Code, sondern testen ihn in einer [Sandbox](./Sandbox.md), lesen Fehlermeldungen und bessern nach, in derselben Schleife wie jeder andere Agent. Der Name kommt daher, dass man dem Gefühl (Vibe) folgt, statt den Code zu verstehen: Funktioniert es? Gut. Wenn nicht, beschreibst du das Problem, und der Agent versucht es noch einmal.

Für Nicht-Entwickler ist das ein Weg, kleine Werkzeuge selbst zu bauen. Im Controlling wird aus einer Excel-Auswertung, die bisher jeden Monat zwei Stunden Handarbeit war, ein kleines Skript, das die Dateien einliest und die Zusammenfassung erzeugt. Im Vertrieb entsteht in einer Stunde ein Prototyp für einen Angebotsrechner. In der Verwaltung ein Formular, das Anträge in eine Liste schreibt. Typisch sind Dinge, die bisher zu klein für die IT waren.

Die Grenze liegt dort, wo andere von dem Programm abhängen. Wartung: Wenn das Skript in drei Monaten nicht mehr läuft, weil sich das Excel-Format geändert hat, muss jemand den Fehler finden, und du hast den Code nie gelesen. Sicherheit: Ein Agent schreibt Code, der funktioniert, nicht unbedingt Code, der Passwörter schützt oder Eingaben prüft. Firmen-IT: Ein Tool, das auf Kundendaten zugreift, in der Firma verteilt wird oder an Systeme angebunden ist, fällt unter die Regeln der IT und der [KI-Richtlinie](./KI-Richtlinie.md), ganz gleich, wer es gebaut hat. Sonst entsteht eine neue Form von [Schatten-KI](./Schatten-KI.md): Programme, die im Unternehmen laufen, aber niemand verantwortet.

Eine gute Faustregel: Vibe Coding für Dinge, die du allein nutzt, die mit unkritischen Daten arbeiten und die du notfalls wegwerfen kannst. Alles, was bleiben soll, geht zur IT, und dort ist der Prototyp eine gute Vorlage, weil er zeigt, was du brauchst.

_Typischer Irrtum:_ Dass der Code läuft, heißt nicht, dass er richtig ist. Ein Skript kann die Summe falsch bilden und trotzdem fehlerfrei durchlaufen. Prüfe das Ergebnis mit einem Fall, den du von Hand nachgerechnet hast.

_Im Alltag:_

> „Ich habe mir mit Claude Code ein Skript gebaut, das die Monatsauswertung aus fünf Excel-Dateien zusammenfasst. Soll ich das dem ganzen Team geben?“
>
> „Für dich selbst super. Wenn das Team damit arbeiten soll, zeig es der IT. Die muss wissen, dass es existiert, und jemand muss es pflegen, wenn sich das Format ändert.“
