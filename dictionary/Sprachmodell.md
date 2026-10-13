---
description: Das Programm hinter dem Chat, das Wort für Wort das wahrscheinlich nächste Wort vorhersagt und so Texte erzeugt
english: Large Language Model (LLM)
aliases: [LLM, Large Language Model]
---

Ein Sprachmodell (Large Language Model, LLM) ist das Programm hinter dem Chatfenster von ChatGPT, Microsoft 365 Copilot, Claude oder Gemini. Es erzeugt Text, indem es Wort für Wort vorhersagt, welches Wort wahrscheinlich als Nächstes kommt.

Der Mechanismus ist einfacher, als das Ergebnis vermuten lässt. Das [Modell](./Modell.md) hat im [Training](./Training.md) sehr viele Texte gelesen und dabei gelernt, welche Wortfolgen üblich sind. Bekommt es den Anfang „Sehr geehrte Frau Huber, vielen Dank für“, setzt es mit „Ihre Anfrage“ oder „Ihr Schreiben“ fort, weil das in Millionen Geschäftsbriefen so stand. Genau genommen arbeitet es nicht mit Wörtern, sondern mit [Tokens](./Token.md), also Wortteilen. Das Prinzip bleibt gleich.

Daraus erklärt sich, warum die Antworten so flüssig klingen. Das Modell wählt immer die Fortsetzung, die zum bisherigen Text passt. Grammatik, Tonfall und Aufbau stimmen deshalb fast immer. Ob der Inhalt stimmt, ist eine andere Frage. Das Modell prüft keine Fakten, es setzt plausible Wörter aneinander. Ein erfundener Paragraf liest sich genauso sicher wie ein echter. Dieses Verhalten heißt [Halluzination](./Halluzination.md).

Im Arbeitsalltag merkst du den Mechanismus an zwei Stellen. Erstens antwortet das Modell auch dann, wenn es die Antwort nicht kennt, weil es Fortsetzungen erzeugt und nicht nachschlägt. Zweitens reagiert es stark auf das, was du vorne hineingibst. Ein klarer [Prompt](./Prompt.md) mit Beispielen und dem passenden Dokument verändert die wahrscheinlichste Fortsetzung, und damit die Antwort.

Der Begriff Sprachmodell beschreibt die Technik. Ein konkretes Produkt, etwa die GPT-Familie oder Claude, nennt man Modell. Der Chat drumherum, mit Oberfläche, Dateianhängen und Websuche, ist noch einmal etwas anderes.

_Typischer Irrtum:_ Ein Sprachmodell „versteht“ deine Frage nicht so, wie ein Kollege sie versteht. Es berechnet, welche Antwort zu deiner Frage passen würde. Das reicht oft erstaunlich weit, aber es ersetzt keine Prüfung.

_Im Alltag:_

> „Der Text von Copilot klingt perfekt, aber die Zahl zum Jahresumsatz stimmt nicht.“
>
> „Typisch Sprachmodell. Es schreibt die wahrscheinlichste Fortsetzung, nicht die richtige Zahl. Häng den Jahresbericht an, dann hat es die echte Zahl vor sich.“
