---
description: Der KI eine Perspektive zuweisen, etwa „Du bist eine erfahrene HR-Referentin“, um Ton und Tiefe zu steuern
aliases: [Rolle vorgeben, Rollen-Prompt, Role Prompting]
---

Eine Persona ist eine Rolle, die du der KI am Anfang des [Prompts](./Prompt.md) vorgibst (Rolle vorgeben), damit sie aus dieser Perspektive antwortet. „Du bist eine erfahrene HR-Referentin, die seit Jahren Bewerbungsgespräche führt.“ Oder: „Du bist ein kritischer Einkaufsleiter, der dieses Angebot prüfen muss.“ Die KI richtet dann Tonfall, Tiefe und Schwerpunkte an dieser Persona aus. Im Englischen heißt die Technik Role Prompting.

Der Effekt ist spürbar, aber begrenzt. Ohne Persona antwortet ein [Sprachmodell](./Sprachmodell.md) im Durchschnitt aller Texte, die es kennt: freundlich, allgemein, für alle und niemanden. Mit der Persona „Steuerberaterin“ wählt es Formulierungen und Aspekte, die in steuerlichen Texten vorkommen. Mit der Persona „Werkstattleiter“ wird es direkter und praktischer. Die Persona wirkt wie ein Filter auf das, was das Modell ohnehin weiß.

Genau da liegt die Grenze. Die Persona macht die KI nicht fachkundiger. Wenn du „Du bist Fachanwältin für Arbeitsrecht“ schreibst, bekommst du Antworten, die wie Anwaltstexte klingen. Sie sind deshalb nicht richtiger. Das Modell hat kein Examen, und es kann in der Persona genauso [halluzinieren](./Halluzination.md) wie ohne. Für fachliche Fragen ist die Persona eine Stilhilfe, keine Qualitätsgarantie. Die Prüfung durch einen Menschen bleibt nötig.

Besonders nützlich ist die Persona als Gegenüber. Statt die KI als Autorin zu nutzen, lässt du sie als kritische Leserin arbeiten: „Du bist ein skeptischer Kunde. Lies dieses Angebot und nenne drei Stellen, an denen du zögern würdest.“ Oder im Vertrieb als Übungspartnerin für ein schwieriges Gespräch. In Microsoft 365 Copilot und ChatGPT kannst du solche Personas auch dauerhaft als eigenen Assistenten hinterlegen, etwa als [Custom GPT](./Custom GPT.md), damit das ganze Team denselben Sparringspartner nutzt.

Halte die Persona konkret. „Du bist ein Experte“ bringt wenig. „Du bist Teamleiterin in der Auftragsabwicklung und erklärst neuen Kolleginnen den Prozess“ gibt dem Modell etwas, womit es arbeiten kann. Und kombiniere die Persona mit echtem [Kontext](./Kontext.md): Die beste Persona hilft nicht, wenn das Material fehlt.

_Typischer Irrtum:_ „Wenn ich der KI sage, sie sei Ärztin, kann ich mich auf die medizinische Antwort verlassen.“ Nein. Die Persona ändert den Ton, nicht die Zuverlässigkeit.

_Im Alltag:_

> „Ich will, dass Copilot meinen Projektbericht mal so liest, wie es unser Geschäftsführer tun würde.“
>
> „Dann gib ihm genau diese Persona vor. Schreib: Du bist Geschäftsführer eines mittelständischen Betriebs, hast wenig Zeit und willst wissen, was das Projekt kostet und bringt. Dann kriegst du die Rückfragen, die du sonst erst im Meeting kriegst.“
