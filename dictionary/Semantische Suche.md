---
description: Suche nach Bedeutung statt nach Stichwort, damit „Urlaubsantrag“ auch Texte über „Abwesenheit beantragen“ findet
english: Semantic search / embeddings
aliases: [Embeddings, Vektorsuche]
---

Semantische Suche findet Texte nach ihrer Bedeutung, nicht nach dem genauen Wortlaut. Suchst du nach „Urlaubsantrag“, findet sie auch ein Dokument, in dem nur „Abwesenheit beantragen“ steht, weil beides dasselbe meint.

Die klassische Stichwortsuche, wie du sie aus Windows oder dem Intranet kennst, prüft nur, ob ein Wort vorkommt. Schreibt die Richtlinie „Dienstreise“ und du suchst „Geschäftsreise“, bleibt die Trefferliste leer. Die semantische Suche umgeht das mit einem Trick: Jeder Textabschnitt wird in eine lange Zahlenreihe umgerechnet, ein sogenanntes Embedding. Diese Zahlen beschreiben, worum es im Text geht. Texte mit ähnlicher Bedeutung bekommen ähnliche Zahlen und liegen damit „nahe beieinander“.

Ein Bild dafür: Stell dir ein riesiges Regal vor, in dem alle Dokumente nicht alphabetisch, sondern nach Thema stehen. Alles über Reisen landet in einer Ecke, alles über Gehalt in einer anderen. Deine Frage wird ebenfalls in Zahlen übersetzt und ins Regal gelegt. Was daneben steht, ist der Treffer. Weil solche Zahlenreihen in der Technik „Vektoren“ heißen, spricht man auch von Vektorsuche.

Im Alltag begegnet dir die semantische Suche meist versteckt. Sie ist der Suchschritt in [RAG](./RAG.md) und damit in fast jedem Firmen-Chatbot. Microsoft 365 Copilot nutzt sie über den Microsoft Graph, um zu deiner Frage die passenden Mails und Dateien zu finden. Auch das [Sprachmodell](./Sprachmodell.md) selbst arbeitet intern mit ähnlichen Zahlenreihen, deshalb versteht es Umschreibungen so gut.

Die Grenze: Nähe in der Bedeutung heißt nicht Richtigkeit. Zwei Versionen derselben Richtlinie liegen im Regal direkt nebeneinander, die Suche kann die alte erwischen. Sehr spezifische Begriffe wie eine Artikelnummer findet die Stichwortsuche oft besser, gute Systeme kombinieren deshalb beides. Woran du es merkst: Der Chatbot liefert thematisch passende, aber nicht die gewünschte Stelle. Dann hilft es, die Frage konkreter zu stellen oder den genauen Begriff aus dem Dokument zu verwenden.

_Typischer Irrtum:_ „Die KI hat alle unsere Dokumente gelesen.“ Nein, sie bekommt pro Frage nur die wenigen Abschnitte, die die semantische Suche als passend bewertet.

_Im Alltag:_

> „Ich hab im Intranet nach ‚Homeoffice‘ gesucht und nichts gefunden, dabei gibt es doch eine Regelung.“
>
> „Die heißt bei uns ‚mobiles Arbeiten‘. Frag den Copilot, der sucht semantisch und findet das trotzdem.“
