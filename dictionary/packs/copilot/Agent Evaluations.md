---
description: Automatisierte Tests in Copilot Studio, bei denen ein Testset mit Fragen gegen den Agenten läuft und bewertet wird
english: Agent evaluations
aliases: [Evaluations, Auswertungen, Testsets, Test Sets, Agent Evaluation]
---

Agent Evaluations sind die eingebaute Testfunktion von Copilot Studio. Du legst ein Testset mit Fragen an, lässt es gegen den Agenten laufen und bekommst für jede Frage eine Bewertung. Das ist die Copilot-Studio-Umsetzung dessen, was der Hauptbegriff [Evals](./Evals.md) allgemein beschreibt. Seit März 2026 ist die Funktion allgemein verfügbar.

Ein Testset für Einzelantworten enthält bis zu 100 Testfälle, jeweils eine Frage und optional eine erwartete Antwort. Ein Gesprächstestset enthält bis zu 20 mehrstufige Dialoge mit bis zu 12 Nachrichten, damit du auch Rückfragen und Verlauf prüfen kannst. Testfälle schreibst du selbst, importierst sie per CSV-Vorlage, lässt sie von KI aus [Instructions](./Instructions.md) und [Knowledge](./Knowledge.md) erzeugen oder übernimmst echte Nutzerfragen aus der Analyse. Der schnellste Einstieg: Fragen aus dem [Test Panel](./Test Panel und Activity Map.md) direkt in ein Testset übernehmen.

Für die Bewertung wählst du eine oder mehrere Testmethoden. „General quality“ lässt ein Sprachmodell prüfen, ob die Antwort zur Frage passt, auf den Quellen beruht, vollständig ist und überhaupt eine Antwort versucht. Das ist der Standard und braucht keine erwartete Antwort. „Content safety“ prüft auf Hass, Gewalt, Selbstverletzung und sexuelle Inhalte mit einstellbarer Schwelle. „Compare meaning“ vergleicht den Sinn mit deiner erwarteten Antwort, „Text similarity“ den Wortlaut, „Exact match“ verlangt Zeichen für Zeichen dasselbe. „Keyword match“ prüft auf Pflichtwörter, „Tool use“ darauf, ob der Agent das erwartete Tool oder Topic eingesetzt hat. Mit „Custom“ schreibst du eigene Prüfanweisungen und Labels, etwa „konform“ und „nicht konform“ für einen HR-Agenten.

Das Ergebnis ist eine Trefferquote je Methode plus Details je Testfall, inklusive Activity Map. Du kannst die Bewertung des Prüfmodells mit Daumen hoch oder runter kommentieren und mehrere Versionen des Agenten nebeneinander vergleichen. Läufe lassen sich über einen Connector in Power Automate oder per REST-API automatisieren, etwa vor jeder Veröffentlichung. Für Personen, die nur testen sollen, gibt es die Rolle „Agent viewer“, die du beim [Sharing](./Sharing.md) vergibst.

Microsoft empfiehlt, ein Testset mehrfach laufen zu lassen, weil Antworten schwanken, und eine Trefferquote von 80 bis 90 Prozent als Ziel zu setzen, je nach Anwendungsfall. Eine Stolperfalle: „General quality“ stuft eine berechtigte Verweigerung („Dazu habe ich keine Information“) als Mangel ein. Für solche Fälle brauchst du eine Custom-Methode, die die Verweigerung als richtig definiert.

_Typischer Irrtum:_ Eine Evaluation mit hoher Trefferquote beweist nicht, dass der Agent keine [Halluzination](./Halluzination.md) produziert. Sie prüft nur die Fälle, die du hineingeschrieben hast. Ergänze das Testset laufend um echte Fragen, die schiefgingen.

_Im Alltag:_

> „Wir haben die Reiserichtlinie geändert. Woher weiß ich, dass der Agent jetzt überall richtig antwortet?“
>
> „Lass das Testset mit den 40 Reisekostenfragen noch mal laufen und vergleich die Version mit der von letzter Woche. Was rot wird, schauen wir uns an.“
