---
description: Ergebnisse der KI ungeprüft übernehmen, weil sie fertig und überzeugend aussehen
aliases: [Übervertrauen, Overreliance, Automatisierungsvertrauen]
---

Automation Bias (Übervertrauen, auch Overreliance) ist die Neigung, ein Ergebnis zu übernehmen, weil es von einer Maschine kommt und gut aussieht. Die Prüfung fällt aus, nicht weil sie unmöglich wäre, sondern weil nichts danach aussieht, als müsste man prüfen.

Der Mechanismus ist menschlich, nicht technisch. Eine Antwort von Microsoft 365 Copilot kommt in sauberer Sprache, mit Struktur und ohne Zögern. Das wirkt wie die Arbeit eines sorgfältigen Kollegen. Ein Mensch, der so schreibt, hat meist auch geprüft. Beim Modell gilt das nicht, es schreibt immer so, auch bei einer [Halluzination](./Halluzination.md). Dazu kommt Zeitdruck. Wenn die Zusammenfassung schon da ist, fühlt sich das Nachlesen im Original wie doppelte Arbeit an.

Zwei Beispiele. Du lässt Copilot in Excel eine Formel bauen, die Umsätze nach Region summiert. Die Zahlen sehen plausibel aus, das Blatt geht an die Geschäftsführung. Eine Region fehlte, weil der Bereich eine Zeile zu kurz war. Oder du lässt einen Liefervertrag zusammenfassen und liest nur die Zusammenfassung. Die Haftungsklausel war darin mit einem Satz abgetan, im Vertrag ist sie eine Seite lang.

Du merkst es daran, dass du nicht sagen kannst, welche Stelle du zuletzt selbst nachgeprüft hast. Oder daran, dass du KI-Ergebnisse direkt weitergibst, ohne sie zu öffnen. Was du dann tust: Leg fest, was eine Prüfung bei dieser Aufgabe bedeutet, bevor du die KI startest. Bei Zahlen heißt das Stichproben gegen die Quelle, bei Verträgen das Lesen der Originalstellen, auf die die Zusammenfassung verweist. Je größer die Folgen, desto strenger, siehe [Human-in-the-Loop](./Human-in-the-Loop.md). Und verlang ein [Grounding](./Grounding.md) mit Quellenangaben, damit die Prüfung schnell geht.

_Typischer Irrtum:_ „Ich habe es gelesen, also habe ich es geprüft.“ Lesen ist keine Prüfung, Vergleichen mit der Quelle ist eine.

_Im Alltag:_

> „Die Copilot-Zusammenfassung vom Rahmenvertrag ist klar, ich schick sie so an den Einkauf.“
>
> „Welche Klauseln hast du im Original gegengelesen? Wenn keine, ist das Automation Bias. Zahlungsziel und Haftung schauen wir vorher noch selbst nach.“
