---
description: Die KI bitten, erst zu überlegen und dann zu antworten, damit weniger Flüchtigkeitsfehler passieren
english: Chain of Thought
aliases: [Chain of Thought]
---

Schritt für Schritt heißt, die KI zu bitten, eine Aufgabe nicht in einem Zug zu beantworten, sondern erst ihre Überlegungen aufzuschreiben und dann das Ergebnis zu nennen. Im Englischen heißt das Chain of Thought, Gedankenkette. Ein Satz im [Prompt](./Prompt.md) genügt: „Geh Schritt für Schritt vor und erkläre deine Überlegungen, bevor du die Antwort gibst.“

Der Nutzen liegt in der Funktionsweise eines [Sprachmodells](./Sprachmodell.md). Es erzeugt Text Wort für Wort, und jedes Wort baut auf dem vorigen auf. Wenn es sofort mit „Die Antwort lautet“ beginnen muss, fehlt der Platz zum Nachdenken. Wenn es stattdessen erst die Teilschritte aufschreibt, kann es sich beim nächsten Schritt auf die vorigen beziehen. Bei Rechenaufgaben, bei Abwägungen und bei Aufgaben mit mehreren Bedingungen sinkt dadurch die Zahl der Flüchtigkeitsfehler deutlich.

Ein Beispiel aus dem Einkauf. Du fragst: „Welcher der drei Lieferanten ist günstiger, wenn wir 800 Stück bestellen und Lieferant B ab 500 Stück fünf Prozent Rabatt gibt?“ Ohne Aufforderung nennt die KI vielleicht gleich einen Namen, und der kann falsch sein. Mit „Rechne jeden Lieferanten einzeln durch“ listet sie die Rechnung auf, und du kannst sie prüfen. Das ist der zweite Vorteil: Du siehst, wie die Antwort entstanden ist, und erkennst Fehler, bevor du damit arbeitest.

Neuere Modelle haben diese Technik eingebaut. Im [Reasoning-Modus](./Reasoning-Modus.md) überlegt das Modell von sich aus, oft länger und gründlicher, bevor es antwortet. In ChatGPT, Claude und Gemini ist das als eigener Modus wählbar oder springt bei schwierigen Fragen automatisch an. Für einfache Aufgaben brauchst du das nicht. Eine Übersetzung oder eine kurze Zusammenfassung wird durch Überlegen nicht besser, nur langsamer.

Schritt für Schritt ersetzt keine Prüfung. Die Überlegungen klingen schlüssig, auch wenn ein Zwischenschritt falsch ist. Lies die Kette mit, besonders bei Zahlen. Wenn ein Schritt nicht stimmt, sag es und lass neu rechnen. Das ist Teil des [Nachschärfens](./Nachschärfen.md).

_Typischer Irrtum:_ „Wenn die KI ihre Schritte zeigt, ist das Ergebnis sicher richtig.“ Die Fehlerquote sinkt, aber sie wird nicht null. Sichtbare Schritte machen Fehler nur leichter auffindbar.

_Im Alltag:_

> „Copilot hat mir bei der Urlaubsberechnung für die Teilzeitkräfte einfach eine Zahl hingeworfen, und die war falsch.“
>
> „Schreib dazu, dass er Schritt für Schritt rechnen soll, erst die Wochentage, dann den Anteil, dann die Tage. Dann siehst du, wo er sich verrechnet, und meistens verrechnet er sich dann gar nicht mehr.“
