---
description: Die Menge an Text, die ein Sprachmodell gleichzeitig verarbeiten kann, gemessen in Token
english: Context window
---

Das Kontextfenster ist die Menge an Text, die ein [Sprachmodell](./Sprachmodell.md) auf einmal „im Blick“ haben kann. Alles, was in einem Chat passiert, dein Prompt, die Antworten, angehängte Dateien, muss in dieses Fenster passen. Gemessen wird es in [Token](./Token.md), grob gesagt in Wortbausteinen. Ein Kontextfenster von einigen hunderttausend Token entspricht mehreren hundert Seiten Text, bei manchen Modellen deutlich mehr.

Das klingt nach viel, ist aber schnell voll. Ein langer Chat mit vielen Rückfragen, drei angehängte Verträge, ein kopiertes Protokoll, und der Platz wird knapp. Was dann passiert, hängt vom Produkt ab. Manche Werkzeuge schneiden vorne ab, dann vergisst die KI den Anfang des Gesprächs. Manche fassen den bisherigen Verlauf automatisch zusammen, wobei Details verloren gehen. Manche melden, dass die Datei zu groß ist.

Das Symptom ist [Kontextverlust](./Kontextverlust.md). Die KI hält sich nicht mehr an eine Vorgabe, die du am Anfang gemacht hast. Sie fragt nach etwas, das du schon erklärt hast. Sie widerspricht einer früheren Antwort. Oder sie bezieht sich nicht mehr auf die erste Datei, obwohl du sie hochgeladen hast. Wenn du das merkst, ist das Fenster vermutlich überfüllt.

Was du dann tust: Fang eine neue [Unterhaltung](./Unterhaltung.md) an und gib nur das mit, was für die aktuelle Aufgabe zählt. Bei großen Dokumenten hilft es, erst einzelne Abschnitte zu bearbeiten statt alles auf einmal. Wichtige Vorgaben wiederholst du im neuen Chat oder legst sie als dauerhafte [Anweisungen](./Anweisungen.md) ab.

Auch innerhalb des Fensters ist nicht alles gleich präsent. Modelle beachten Informationen am Anfang und am Ende eines langen Textes oft besser als die in der Mitte. Wenn eine Vorgabe wichtig ist, stell sie an den Schluss deines Prompts oder wiederhole sie.

_Typischer Irrtum:_ „Ich habe die Datei doch hochgeladen, also kennt die KI sie jetzt.“ Hochgeladen heißt nur, dass sie im Fenster ist. Wenn danach viel Text dazukommt, kann sie wieder herausfallen.

_Im Alltag:_

> „Copilot hat am Anfang meines Chats noch gewusst, dass alles auf Englisch sein soll. Jetzt antwortet er plötzlich auf Deutsch.“
>
> „Dein Chat ist wahrscheinlich zu lang geworden, dann rutscht das Kontextfenster weiter und die Anfangsanweisung ist weg. Mach einen neuen Chat auf und schreib die Sprachvorgabe gleich wieder rein.“
