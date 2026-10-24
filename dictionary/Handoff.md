---
description: Übergabe einer Aufgabe samt bisherigem Kontext von einem Agenten an einen anderen Agenten oder an einen Menschen
english: Handoff
aliases: [Übergabe, Eskalation, Escalation, Weiterleitung an einen Menschen]
---

Ein Handoff (Übergabe) ist der Moment, in dem ein [Agent](./Agent.md) eine Aufgabe oder ein Gespräch weitergibt: an einen anderen Agenten, der auf diesen Teil spezialisiert ist, oder an einen Menschen, wenn der Agent nicht weiterkommt oder nicht entscheiden darf. Mit übergeben wird der bisherige [Kontext](./Kontext.md), also was die Person wollte, was schon geklärt ist und was noch offen ist.

Die Übergabe an einen Menschen heißt oft Eskalation. Ein Support-Agent beantwortet Fragen zur Rechnung, erkennt aber eine Beschwerde über einen Mitarbeiter und reicht das Gespräch an eine Kollegin weiter. Gut gemacht sieht die Kollegin den bisherigen Verlauf und eine kurze Zusammenfassung und muss nicht von vorn beginnen. Schlecht gemacht fängt der Kunde zum dritten Mal an, sein Anliegen zu erklären. In Copilot Studio legst du für einen Agenten fest, auf welchem Weg er an eine Person übergibt und wann, etwa bei bestimmten Stichworten, nach zwei erfolglosen Versuchen oder auf Wunsch des Kunden.

Die Übergabe an einen anderen Agenten ist das Grundprinzip vieler Systeme mit mehreren Agenten. Ein Agent für den Erstkontakt klärt, worum es geht, und reicht dann an den Agenten für Reisekosten, für IT-Störungen oder für Vertragsfragen weiter. Der Unterschied zum [Multi-Agent-System](./Multi-Agent-System.md) mit zentraler Steuerung: Dort behält ein Orchestrator die Kontrolle und sammelt die Ergebnisse ein. Beim Handoff wechselt die Kontrolle. Der neue Agent führt das Gespräch weiter, der alte ist raus.

Vom Handoff zu unterscheiden ist die [Freigabe](./Freigabe.md). Bei der Freigabe fragt der Agent dich kurz und macht dann selbst weiter. Beim Handoff gibt er die Aufgabe ab. Beides sind Formen von [Human-in-the-Loop](./Human-in-the-Loop.md), aber mit unterschiedlicher Rolle für dich: einmal bestätigst du, einmal übernimmst du.

Für dich zählt vor allem, was bei einer Übergabe ankommt. Prüfe bei einem Agenten, der an dein Team eskaliert, ob der Kontext vollständig mitkommt und ob der Kunde erfährt, dass jetzt ein Mensch übernimmt. Und lege fest, wer zuständig ist, wenn der Agent übergibt und gerade niemand da ist.

_Typischer Irrtum:_ Ein Handoff ist kein Scheitern des Agenten. Ein Agent, der im richtigen Moment abgibt, ist besser als einer, der jede Frage selbst beantwortet.

_Im Alltag:_

> „Der Support-Agent hat mir das Gespräch zugeschoben, aber ich sehe nur die letzte Nachricht des Kunden.“
>
> „Dann fehlt beim Handoff die Zusammenfassung. Das lässt sich im Agenten einstellen, damit du beim Übernehmen den ganzen Verlauf siehst.“
