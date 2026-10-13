---
description: Die KI übergeht im langen Chat oder in großen Dateien Vorgaben, die sie vorher noch beachtet hat
english: Context loss
---

Kontextverlust bedeutet, dass die KI Vorgaben nicht mehr beachtet, die du ihr früher im Gespräch oder in einer Datei gegeben hast. Sie „vergisst“ nichts im menschlichen Sinn, aber die Information wirkt nicht mehr auf die Antwort.

Der Grund ist das [Kontextfenster](./Kontextfenster.md). Ein Modell kann nur eine begrenzte Menge Text gleichzeitig verarbeiten. Alles, was im [Chat](./Chat.md) steht, zählt dazu, also deine Nachrichten, die Antworten und hochgeladene Dateien. Wird das zu viel, fallen ältere Teile heraus oder das Modell gewichtet sie schwächer. Auch innerhalb des Fensters gilt: Was in der Mitte eines sehr langen Dokuments steht, wird eher übersehen als Anfang und Ende.

Du merkst es daran, dass das Modell ein Format ignoriert, das du vorgegeben hast, und plötzlich Fließtext statt einer Tabelle liefert. Es wechselt die Anrede oder die Sprache. Es widerspricht einer Aussage aus seiner eigenen früheren Antwort. Bei einer großen Datei nennt es nur Punkte aus den ersten Seiten, und bei einem Vertrag mit 60 Seiten fehlt in der Zusammenfassung die Klausel von Seite 41.

Was du dann tust: Starte einen neuen Chat, wenn das Gespräch lang geworden ist, und fasse die geltenden Vorgaben in der ersten Nachricht zusammen. Wiederhole wichtige Anweisungen bei jeder neuen Aufgabe, statt dich auf den Verlauf zu verlassen. Teile große Dokumente in Abschnitte und lass jeden einzeln bearbeiten. In Microsoft 365 Copilot hilft es, die Datei gezielt zu nennen und nach einer bestimmten Stelle zu fragen, statt nach „allem Wichtigen“. Eine [Prompt-Vorlage](./Prompt-Vorlage.md) mit deinen festen Vorgaben spart dir das Wiederholen.

Kontextverlust ist eine häufige Ursache für die zweite Art von [Halluzination](./Halluzination.md), bei der das Modell vom mitgegebenen Material abweicht.

_Typischer Irrtum:_ Ein großes Kontextfenster bedeutet nicht, dass alles darin gleich gut berücksichtigt wird.

_Im Alltag:_

> „Gemini hat am Anfang alle Protokolle im gleichen Schema gemacht, beim achten schreibt es auf einmal einen Aufsatz.“
>
> „Kontextverlust, der Chat ist zu lang geworden. Mach einen neuen auf und pack das Schema wieder in die erste Nachricht, dann passt es.“
