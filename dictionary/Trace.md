---
description: Protokoll der Schritte eines Agenten, das zeigt, welche Werkzeuge er aufgerufen hat, was zurückkam und was er daraus machte
english: Trace
aliases: [Aktivitätsprotokoll, Tracing, Nachvollziehbarkeit, Observability, Activity Map]
---

Ein Trace ist das Protokoll der Schritte, die ein [Agent](./Agent.md) auf dem Weg zu seinem Ergebnis gemacht hat: welche Werkzeuge er mit welchen Angaben aufgerufen hat, was zurückkam, wie er das bewertet hat und was er daraufhin als Nächstes tat. Beim Chat prüfst du eine Antwort. Beim Agenten prüfst du mit dem Trace auch den Weg dorthin.

Im Alltag siehst du Traces meist als aufklappbare Zwischenschritte. Microsoft 365 Copilot zeigt „Durchsucht SharePoint“ oder „Liest Datei“, ChatGPT Agent und Claude zeigen, welche Seite sie geöffnet und welchen Befehl sie ausgeführt haben. In Copilot Studio heißt die ausführliche Ansicht Activity Map: Dort siehst du pro Lauf, welche Wissensquelle der Agent befragt hat, welche Aktion er ausgelöst hat und an welcher Stelle er abgebrochen ist.

Der Trace hilft dir in drei Situationen. Erstens beim Prüfen eines Ergebnisses: Hat der Agent wirklich die aktuelle Preisliste gelesen oder eine Version von vor zwei Jahren? Beim [Tool Use](./Tool Use.md) steht im Trace genau, welche Datei geöffnet wurde. Zweitens bei der Fehlersuche: Liefert ein Agent regelmäßig falsche Zahlen, zeigt der Trace, ob er die falsche Quelle nimmt, die richtige falsch liest oder richtig liest und falsch rechnet. Jeder dieser Fälle braucht eine andere Korrektur. Drittens bei der Sicherheit: Bei einer [Prompt Injection](./Prompt Injection.md) tut der Agent plötzlich etwas, das nicht im Auftrag stand, etwa eine Mail an eine fremde Adresse senden. Im Trace fällt so ein Schritt auf, im Endergebnis oft nicht.

Für Unternehmen ist der Trace außerdem Teil der [KI-Governance](./KI-Governance.md). Wer im Nachhinein erklären muss, warum ein Agent eine Bestellung ausgelöst oder einen Antrag abgelehnt hat, braucht das Protokoll. Für bestimmte Anwendungen verlangt der [EU AI Act](./EU AI Act.md) eine solche Aufzeichnung ausdrücklich. Kläre deshalb, wie lange Traces aufbewahrt werden und wer sie einsehen darf, denn sie enthalten oft dieselben vertraulichen Daten wie die Aufgabe selbst.

Du musst nicht jeden Trace lesen. Aber wenn ein Ergebnis überrascht, ist er der erste Ort, an dem du nachsiehst.

_Typischer Irrtum:_ Ein Trace zeigt, was der Agent getan hat, nicht, ob es richtig war. Das Prüfen bleibt bei dir.

_Im Alltag:_

> „Der Agent sagt, der Liefertermin ist der 12. März. Woher hat er das?“
>
> „Klapp die Schritte auf. Im Trace steht, welche Datei er gelesen hat. Wenn es die alte Auftragsliste ist, weißt du, wo der Fehler liegt.“
