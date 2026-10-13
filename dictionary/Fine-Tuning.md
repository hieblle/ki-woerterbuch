---
description: Ein fertiges Modell mit eigenen Beispielen nachtrainieren, damit es einen bestimmten Stil oder ein Format beherrscht
english: Fine-tuning
aliases: [Feinabstimmung, Nachtraining]
---

Fine-Tuning heißt, ein fertiges Sprachmodell mit eigenen Beispielen nachzutrainieren. Das [Modell](./Modell.md) wird dabei tatsächlich verändert, nicht nur mit Kontext versorgt. Es ist eine zweite, kleinere Runde [Training](./Training.md) auf Basis eines bestehenden Modells.

Für den Arbeitsalltag ist Fine-Tuning selten die richtige Wahl. Es braucht Hunderte bis Tausende sauber aufbereitete Beispiele, Fachleute, Rechenzeit und ein eigenes Modell, das jemand betreiben und warten muss. Ändert sich etwas, muss neu trainiert werden. In den meisten Fällen, in denen jemand „die KI auf unsere Firma trainieren“ möchte, ist [RAG](./RAG.md) gemeint: Dokumente ablegen, pro Frage die passenden Stellen heraussuchen. Das ist günstiger, sofort aktuell und lässt sich prüfen.

Die beiden Ansätze lösen unterschiedliche Probleme. RAG bringt Wissen ins Spiel: Was steht in unserer Richtlinie, welche Lieferzeit hat Artikel X. Fine-Tuning bringt Verhalten bei: Wie formulieren wir, in welchem Format, mit welchem Tonfall. Ein Modell, das per Fine-Tuning gelernt hat, Schadensmeldungen immer im gleichen Schema zu erfassen, macht das zuverlässig, weiß aber trotzdem nichts über den Fall von gestern.

| Ziel                                     | Geeignetes Mittel                                                       |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| Aktuelles Firmenwissen nutzen            | RAG oder Upload                                                         |
| Festen Stil oder festes Format erzwingen | Fine-Tuning, oft reicht aber eine [Prompt-Vorlage](./Prompt-Vorlage.md) |
| Fachsprache einer Nische beherrschen     | Fine-Tuning                                                             |
| Einzelne Aufgabe schnell lösen           | Prompt mit [Beispielen](./Beispiele geben.md)                           |

Bevor eine Firma über Fine-Tuning nachdenkt, lohnt der Blick auf einfachere Mittel. Eine gute Prompt-Vorlage mit zwei, drei Beispielen oder ein [Eigener Assistent](./Eigene Assistenten.md) in ChatGPT oder Copilot deckt den Stilwunsch meist ab. Fine-Tuning bleibt für Anbieter und große Unternehmen interessant, die ein Modell für eine eng umrissene Aufgabe in hoher Stückzahl einsetzen.

_Typischer Irrtum:_ „Wir müssen das Modell mit unseren Daten trainieren, damit es uns kennt.“ Meist nicht. Was das Modell kennen soll, gibst du ihm als Kontext mit, per Upload oder RAG. Fine-Tuning ändert, wie das Modell schreibt, nicht, was es über euch weiß.

_Im Alltag:_

> „Der Dienstleister bietet an, ChatGPT auf unsere Produktdaten zu fine-tunen.“
>
> „Frag nach, was er genau meint. Für Produktdaten, die sich monatlich ändern, wäre RAG sinnvoller. Fine-Tuning lohnt sich eher, wenn wir einen festen Antwortstil brauchen.“
