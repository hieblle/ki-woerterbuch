---
description: Der KI ein oder zwei Musterbeispiele im Prompt zeigen, damit sie Stil und Form trifft (Few-Shot)
english: Few-shot prompting
aliases: [Few-Shot]
---

Beispiele geben heißt, der KI im [Prompt](./Prompt.md) ein oder zwei fertige Muster zu zeigen, statt lange zu beschreiben, was du willst. Im Englischen heißt das Few-Shot Prompting, weil das Modell mit wenigen Beispielen versteht, worauf es hinausläuft. Ein Beispiel, das du selbst gut findest, sagt mehr als drei Absätze Erklärung.

Der Grund liegt in der Arbeitsweise eines [Sprachmodells](./Sprachmodell.md). Es setzt Muster fort. Wenn du ihm zwei Produktbeschreibungen in eurem Hausstil zeigst und dann die Rohdaten für ein drittes Produkt gibst, erzeugt es eine dritte Beschreibung im gleichen Stil. Länge, Satzbau, Ansprache, Fachbegriffe, alles wird aus den Beispielen übernommen. Beschreibungen wie „locker, aber professionell“ sind dagegen dehnbar. Jeder versteht etwas anderes darunter, das Modell auch.

So sieht das in der Praxis aus. Du willst, dass Microsoft 365 Copilot Besprechungsprotokolle in eurem Format schreibt. Statt das Format zu erklären, fügst du ein gutes altes Protokoll ein und schreibst: „Hier ist ein Protokoll, so wie wir es machen. Erstelle aus der folgenden Transkription ein Protokoll im gleichen Aufbau.“ Oder im Vertrieb: zwei gelungene Nachfass-Mails einfügen, dann die Kundendaten für die dritte.

Ein paar Regeln helfen. Nimm Beispiele, die wirklich gut sind, denn Fehler werden mitkopiert. Markiere klar, was Beispiel ist und was Aufgabe, etwa mit „Beispiel 1:“ und „Jetzt deine Aufgabe:“. Ein bis drei Beispiele reichen meist. Mehr füllt das [Kontextfenster](./Kontextfenster.md), ohne viel zu verbessern. Und achte darauf, was in den Beispielen steckt: Echte Kundennamen oder [personenbezogene Daten](./Personenbezogene Daten.md) gehören vorher raus, wenn du ein öffentliches Werkzeug nutzt.

Beispiele und [Ausgabeformat](./Ausgabeformat.md) ergänzen sich. Das Format sagt, was herauskommen soll, das Beispiel zeigt es. Wer beides kombiniert, bekommt Ergebnisse, die kaum noch nachbearbeitet werden müssen.

_Typischer Irrtum:_ Viele versuchen, ihren Stil in Worten zu beschreiben, und sind enttäuscht, dass die KI ihn nicht trifft. Ein eingefügter Mustertext löst das meist beim ersten Versuch.

_Im Alltag:_

> „Ich hab ChatGPT fünfmal erklärt, wie unsere Stellenanzeigen klingen sollen. Er trifft es einfach nicht.“
>
> „Hör auf zu erklären und gib ihm Beispiele. Kopier zwei von unseren besten Anzeigen rein und sag: So soll es klingen, jetzt mach das für die Sachbearbeiter-Stelle. Das funktioniert fast immer.“
