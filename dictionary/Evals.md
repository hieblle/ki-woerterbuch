---
description: Systematische Tests mit festen Beispielaufgaben, die zeigen, ob ein Agent oder Prompt zuverlässig gute Ergebnisse liefert
english: Evals
aliases: [Evaluation, Testset, Qualitätsprüfung, Agent Evaluations]
---

Evals (kurz für Evaluations) sind systematische Tests für einen [Agenten](./Agent.md) oder einen Prompt. Du stellst eine feste Sammlung von Beispielaufgaben zusammen, legst fest, wie eine gute Antwort aussieht, und lässt den Agenten alle Aufgaben durchlaufen. Das Ergebnis ist eine Zahl: Wie viele der 50 Testfälle hat er richtig gelöst? Diesen Durchlauf wiederholst du vor und nach jeder Änderung.

Ohne Evals bleibt Qualitätsprüfung beim Gefühl: „Hab ich dreimal ausprobiert, ging.“ Das reicht wegen des [Nicht-Determinismus](./Nicht-Determinismus.md) nicht. Dieselbe Aufgabe kann beim vierten Mal anders ausgehen, und drei Versuche sagen wenig darüber, wie der Agent bei 500 echten Anfragen im Monat abschneidet. Ein Testset mit 30 bis 100 typischen Fällen, darunter bewusst schwierige und Grenzfälle, zeigt das deutlich klarer.

Ein Beispiel aus HR: Ein Agent beantwortet Fragen zur Reisekostenrichtlinie. Das Testset enthält 40 echte Fragen aus dem Postfach, mit der jeweils richtigen Antwort aus der Richtlinie. Dazu fünf Fragen, auf die die Richtlinie keine Antwort gibt, bei denen der Agent sagen soll, dass er es nicht weiß, statt zu raten ([Halluzination](./Halluzination.md)). Nach jeder Änderung an den Anweisungen oder Wissensquellen läuft das Testset durch. Wird die Trefferquote schlechter, hat die Änderung geschadet, auch wenn sie sich beim Ausprobieren gut angefühlt hat.

Die Bewertung übernimmt entweder ein Mensch, der die Antworten durchsieht, oder ein zweites Modell, das anhand von Kriterien prüft. Letzteres ist schneller, braucht aber Stichproben durch Menschen, damit der Prüfer nicht dieselben Fehler macht wie der Geprüfte. Copilot Studio bietet dafür Agent Evaluations an: Du lädst ein Testset hoch, wählst Bewertungskriterien und bekommst eine Auswertung je Durchlauf. Ähnliche Funktionen gibt es auf den Entwicklerplattformen von OpenAI, Anthropic und Google.

Evals sind der Schritt, an dem viele [Pilot](./Pilot.md)-Projekte scheitern oder nicht in den Regelbetrieb kommen. Beim [Iterieren](./Iterieren.md) an einem Agenten zeigen sie, ob eine Änderung wirklich eine Verbesserung ist. Das Testset baut idealerweise, wer die Aufgabe kennt: echte Fälle sammeln, richtige Antworten festhalten und das Set pflegen, wenn sich die Richtlinie ändert.

_Typischer Irrtum:_ Evals sind kein einmaliger Abnahmetest. Sie laufen bei jeder Änderung erneut, sonst merkt niemand, wenn der Agent schleichend schlechter wird.

_Im Alltag:_

> „Wir haben die Anweisungen vom Reisekosten-Agenten umgeschrieben. Fühlt sich besser an.“
>
> „Lass das Testset durchlaufen, bevor es live geht. Letztes Mal hat sich eine Änderung auch gut angefühlt, und die Trefferquote ist von 90 auf 70 Prozent gefallen.“
