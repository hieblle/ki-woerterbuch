---
description: Der Harness fasst den bisherigen Verlauf zusammen, wenn das Kontextfenster voll wird, und der Agent arbeitet mit der Kurzfassung weiter
english: Compaction
aliases: [Kontextkomprimierung, Autocompact, Context compaction, Verlauf zusammenfassen]
---

Compaction bedeutet, dass der [Harness](./Harness.md) den bisherigen Verlauf eines Agenten zusammenfasst, wenn das [Kontextfenster](./Kontextfenster.md) voll wird. Der [Agent](./Agent.md) arbeitet danach mit der Kurzfassung weiter statt mit dem vollständigen Verlauf. Das passiert oft mitten in der Aufgabe und ohne dass du es ausgelöst hast.

Der Grund: Ein Agent läuft länger als ein Chat. Jeder Werkzeugaufruf, jede gelesene Datei und jedes Zwischenergebnis landet im Kontext. Bei einer Aufgabe mit 40 Schritten ist das Fenster irgendwann voll. Statt abzubrechen, lässt der Harness das Modell den Verlauf zusammenfassen: Was war die Aufgabe, was ist erledigt, was ist offen. Die Zusammenfassung ersetzt den alten Verlauf, und es ist wieder Platz. Manche Produkte zeigen das an, etwa Claude mit einem kurzen Hinweis, dass der Verlauf komprimiert wurde. Andere machen es still im Hintergrund.

Bei jeder Zusammenfassung gehen Details verloren. Eine Vorgabe aus deiner zweiten Nachricht, etwa „alle Beträge in Euro ohne Nachkommastellen“, überlebt die Kurzfassung vielleicht nicht. Das Symptom kennst du vom [Kontextverlust](./Kontextverlust.md): Der Agent ändert plötzlich das Format, wechselt die Anrede, stellt eine Frage, die längst beantwortet war, oder beginnt einen erledigten Schritt von vorn. Der Unterschied: Beim Kontextverlust im Chat ist das lange Gespräch selbst die Ursache. Bei Compaction entscheidet der Harness, und du siehst den Verlauf noch vollständig, obwohl der Agent nur noch die Kurzfassung kennt.

Was du dagegen tust: Lege wichtige Vorgaben dort ab, wo sie die Zusammenfassung überleben. Das ist eine Datei, die der Agent erneut lesen kann, das [Memory](./Memory.md) oder die Anweisungen des Agenten selbst, nicht eine Nachricht im Verlauf. Schneide große Aufgaben in kleinere Läufe, jeder mit frischem Kontext und klarem Ziel. Wenn du merkst, dass ein Lauf lang wird, lass den Agenten den Stand in eine Datei schreiben und starte bewusst neu, statt auf die automatische Zusammenfassung zu warten. Und prüfe nach einem langen Lauf das Ergebnis gezielt auf die Vorgaben vom Anfang.

_Typischer Irrtum:_ Compaction ist kein Fehler, sondern eine Notlösung, damit der Agent überhaupt weiterarbeiten kann. Das Problem ist nicht, dass sie passiert, sondern dass Vorgaben nur im Verlauf standen.

_Im Alltag:_

> „Der Agent hat die ersten zwanzig Rechnungen sauber in Euro gebucht, ab der einundzwanzigsten plötzlich mit Cent-Beträgen und auf Englisch.“
>
> „Da war Compaction im Spiel: Der Verlauf wurde zusammengefasst und die Formatvorgabe ist rausgefallen. Schreib das Format in die Anweisungen des Agenten, nicht in den Chat.“
