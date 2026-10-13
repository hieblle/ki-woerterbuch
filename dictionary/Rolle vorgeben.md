---
description: Der KI eine Perspektive zuweisen, etwa „Du bist eine erfahrene HR-Referentin“, um Ton und Tiefe zu steuern
english: Role prompting
aliases: [Persona]
---

Eine Rolle vorgeben heißt, der KI am Anfang des [Prompts](./Prompt.md) zu sagen, aus welcher Perspektive sie antworten soll. „Du bist eine erfahrene HR-Referentin, die seit Jahren Bewerbungsgespräche führt.“ Oder: „Du bist ein kritischer Einkaufsleiter, der dieses Angebot prüfen muss.“ Die KI richtet dann Tonfall, Tiefe und Schwerpunkte an dieser Rolle aus.

Der Effekt ist spürbar, aber begrenzt. Ohne Rolle antwortet ein [Sprachmodell](./Sprachmodell.md) im Durchschnitt aller Texte, die es kennt: freundlich, allgemein, für alle und niemanden. Mit der Rolle „Steuerberaterin“ wählt es Formulierungen und Aspekte, die in steuerlichen Texten vorkommen. Mit der Rolle „Werkstattleiter“ wird es direkter und praktischer. Die Rolle wirkt wie ein Filter auf das, was das Modell ohnehin weiß.

Genau da liegt die Grenze. Die Rolle macht die KI nicht fachkundiger. Wenn du „Du bist Fachanwältin für Arbeitsrecht“ schreibst, bekommst du Antworten, die wie Anwaltstexte klingen. Sie sind deshalb nicht richtiger. Das Modell hat kein Examen, und es kann in der Rolle genauso [halluzinieren](./Halluzination.md) wie ohne. Für fachliche Fragen ist die Rolle eine Stilhilfe, keine Qualitätsgarantie. Die Prüfung durch einen Menschen bleibt nötig.

Besonders nützlich ist die Rolle als Gegenüber. Statt die KI als Autorin zu nutzen, lässt du sie als kritische Leserin arbeiten: „Du bist ein skeptischer Kunde. Lies dieses Angebot und nenne drei Stellen, an denen du zögern würdest.“ Oder im Vertrieb als Übungspartnerin für ein schwieriges Gespräch. In Microsoft 365 Copilot und ChatGPT kannst du solche Rollen auch dauerhaft in einen [eigenen Assistenten](./Eigene Assistenten.md) packen, damit das ganze Team denselben Sparringspartner nutzt.

Halte die Rolle konkret. „Du bist ein Experte“ bringt wenig. „Du bist Teamleiterin in der Auftragsabwicklung und erklärst neuen Kolleginnen den Prozess“ gibt dem Modell etwas, womit es arbeiten kann. Und kombiniere die Rolle mit echtem [Kontext](./Kontext.md): Die beste Rolle hilft nicht, wenn das Material fehlt.

_Typischer Irrtum:_ „Wenn ich der KI sage, sie sei Ärztin, kann ich mich auf die medizinische Antwort verlassen.“ Nein. Die Rolle ändert den Ton, nicht die Zuverlässigkeit.

_Im Alltag:_

> „Ich will, dass Copilot meinen Projektbericht mal so liest, wie es unser Geschäftsführer tun würde.“
>
> „Dann gib ihm genau diese Rolle vor. Schreib: Du bist Geschäftsführer eines mittelständischen Betriebs, hast wenig Zeit und willst wissen, was das Projekt kostet und bringt. Dann kriegst du die Rückfragen, die du sonst erst im Meeting kriegst.“
