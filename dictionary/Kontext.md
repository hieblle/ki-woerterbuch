---
description: Alles, was die KI gerade über deine Aufgabe weiß, weil es im Chat steht oder angehängt ist
english: Context
---

Kontext ist alles, was die KI in diesem Moment über deine Aufgabe weiß. Dazu zählen dein [Prompt](./Prompt.md), der bisherige Gesprächsverlauf, angehängte Dateien und ein fester [Systemprompt](./Systemprompt.md), der im Hintergrund mitläuft. Was nicht in diesem Paket steckt, kennt die KI nicht. Dieses Paket bewusst zusammenzustellen, nennt man [Context Engineering](./Context Engineering.md). Sie weiß nicht, in welcher Firma du arbeitest, wer dein Chef ist oder was gestern in der Besprechung gesagt wurde, außer du schreibst es ihr.

Das ist der häufigste Grund für enttäuschende Antworten. Du fragst nach einem „Entwurf für die Kundenmail“, und die KI schreibt eine allgemeine, höfliche Mail an niemanden Bestimmten. Sie konnte nicht anders. Der Kunde, der Anlass, der bisherige Schriftverkehr, euer Tonfall, nichts davon war im Kontext. Das Sprachmodell hat zwar sehr viel [Trainingswissen](./Trainingswissen.md) über Kundenmails im Allgemeinen, aber nichts über diese eine Situation.

Das Symptom ist leicht zu erkennen. Die Antwort ist korrekt, aber austauschbar. Sie könnte für jedes Unternehmen gelten. Sie enthält Platzhalter wie „Name des Kunden“ oder Floskeln, die bei euch niemand verwenden würde. Wenn du das siehst, fehlt Kontext. Die Lösung ist kein besserer Trick, sondern mehr Information: den Mailverlauf einfügen, die Produktbeschreibung anhängen, zwei Sätze zur Situation dazuschreiben.

Microsoft 365 Copilot kann einen Teil des Kontexts selbst beschaffen. Wenn du eine Datei aus SharePoint verweist oder nach einer E-Mail fragst, holt sich Copilot den Inhalt. Das ersetzt aber nicht deine Erklärung, worum es geht. Copilot weiß dann, was in der Datei steht, aber nicht, was du damit vorhast.

Kontext hat eine Grenze. Die KI kann nur eine bestimmte Menge Text gleichzeitig verarbeiten, das sogenannte [Kontextfenster](./Kontextfenster.md). Und Kontext aus einem Chat ist im nächsten Chat weg. Jeder neue [Chat](./Chat.md) beginnt bei null, außer du gibst die Informationen erneut mit.

_Typischer Irrtum:_ Viele nehmen an, die KI wisse, wer sie sind, weil sie eingeloggt sind. Das Login identifiziert dich gegenüber dem Dienst, aber die KI selbst sieht nur den Chat.

_Im Alltag:_

> „Gemini soll mir die Absage an den Bewerber schreiben, aber da kommt nur so ein Standardtext raus.“
>
> „Hast du ihm gesagt, um welche Stelle es ging und warum ihr absagt? Ohne den Kontext kann der nur Standard schreiben. Gib ihm die Stellenanzeige und zwei Sätze zum Grund, dann wird das konkret.“
