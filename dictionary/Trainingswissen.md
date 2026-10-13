---
description: Was ein Sprachmodell aus seinem Training „auswendig“ weiß, ohne dass du ihm im Chat etwas mitgibst
english: Parametric knowledge
aliases: [Parametrisches Wissen]
---

Trainingswissen ist alles, was ein Sprachmodell aus seinem Training mitbringt, bevor du im Chat ein einziges Wort geschrieben hast. Es steckt fest im [Modell](./Modell.md), ähnlich wie das, was du aus der Schule noch im Kopf hast.

Das Modell hat dieses Wissen beim [Training](./Training.md) aus sehr großen Textmengen aufgenommen. Deshalb kann ChatGPT oder Claude dir erklären, wie eine Bilanz aufgebaut ist, wie man eine höfliche Absage formuliert oder was ein Lieferschein ist. Es ist breit, aber es hat zwei Lücken: Es endet an einem bestimmten Datum, dem [Knowledge Cutoff](./Knowledge Cutoff.md), und es weiß nichts über deine Firma. Eure Preisliste, euer Urlaubsantrag, der Name eurer Abteilungsleiterin, nichts davon ist im Modell.

Du merkst die Grenzen daran, dass Antworten allgemein bleiben oder veraltet wirken. Fragst du nach dem aktuellen Ansprechpartner bei einem Lieferanten, bekommst du entweder eine ausweichende Antwort oder eine erfundene, eine sogenannte [Halluzination](./Halluzination.md). Das Modell füllt Lücken gern mit plausibel klingendem Text. Wenn dir eine Antwort zu glatt vorkommt, frag nach, woher die Information stammt, oder gib das passende Material selbst mit.

Der Gegenspieler ist [Kontextwissen](./Kontextwissen.md): alles, was du dem Modell im Chat mitgibst, etwa ein hochgeladenes Dokument oder ein Suchergebnis. Als Faustregel gilt: Für allgemeine Fragen reicht Trainingswissen, für alles Aktuelle und alles Firmenspezifische brauchst du Kontext. Microsoft 365 Copilot kombiniert beides, indem er zum Trainingswissen des Modells Inhalte aus deinen Mails und Dateien hinzuholt. Ohne diese Ergänzung antwortet auch Copilot nur so gut wie ein Lehrbuch von vorgestern.

_Typischer Irrtum:_ Viele glauben, das Modell lerne aus ihren Chats dazu und kenne beim nächsten Mal die Firma. Das stimmt nicht, das Trainingswissen bleibt nach dem Training unverändert.

_Im Alltag:_

> „Ich hab Copilot gefragt, wie unser Reisekostenprozess läuft, und die Antwort war komplett allgemein.“
>
> „Klar, das ist nur Trainingswissen. Unsere Reisekostenrichtlinie kennt das Modell nicht, häng sie als Datei an, dann passt die Antwort.“
