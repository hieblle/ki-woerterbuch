---
description: KI unterstützt den Menschen bei einer Aufgabe, statt einen Arbeitsschritt ganz zu übernehmen, mit Folgen für Risiko und Prüfung
aliases: [Unterstützung oder Automatisierung, Unterstützung, Automatisierung]
---

Augmentation (Unterstützung) heißt, dass die KI einem Menschen hilft, der die Aufgabe weiterhin selbst erledigt und jedes Ergebnis sieht, bevor es weitergeht. Das Gegenstück ist die Automatisierung (Automation): Die KI übernimmt einen Arbeitsschritt vollständig, und niemand prüft das Ergebnis, bevor es wirkt. Der Unterschied klingt klein, entscheidet aber über Risiko, Prüfaufwand und Rechtslage.

Augmentation ist der Normalfall im Büro. Microsoft 365 Copilot schlägt eine Antwort auf eine Kundenmail vor, und du liest sie, änderst zwei Sätze und schickst sie ab. Claude fasst einen Vertrag zusammen, und du entscheidest, ob die Zusammenfassung reicht oder du das Original liest. Die Verantwortung bleibt bei dir, und du siehst jedes Ergebnis, bevor es weitergeht. Fehler der KI fallen auf, weil ein Mensch dazwischen steht.

Automatisierung ist anders. Ein [Agent](./Agent.md) sortiert eingehende Rechnungen, ordnet sie Kostenstellen zu und gibt sie zur Zahlung frei. Oder ein Chatbot beantwortet Kundenfragen direkt auf der Website, ohne dass jemand mitliest. Hier wirkt das Ergebnis sofort. Eine [Halluzination](./Halluzination.md) wird nicht bemerkt, sondern landet beim Kunden oder in der Buchhaltung. Deshalb braucht Automatisierung andere Sicherungen, etwa Stichproben, Grenzen für Beträge, eine [Freigabe](./Freigabe.md) bei Ausnahmen und ein Protokoll, das zeigt, was passiert ist.

Rechtlich ist die Frage ebenfalls wichtig. Entscheidungen über Menschen, etwa bei Bewerbungen, Beförderungen oder Kreditvergaben, dürfen nach DSGVO in der Regel nicht vollständig automatisiert getroffen werden, und der [EU AI Act](./EU AI Act.md) stuft viele dieser Fälle als Hochrisiko ein. Als Augmentation, bei der ein Mensch entscheidet, sind dieselben Werkzeuge meist unproblematischer. Lass das im Zweifel prüfen.

Die praktische Regel lautet daher: Beginne mit Augmentation. Erst wenn ein Ablauf über Wochen stabil läuft und die Fehlerquote bekannt ist, kannst du überlegen, einzelne Schritte zu automatisieren. Und auch dann gilt bei wichtigen Ergebnissen der Grundsatz [Human-in-the-Loop](./Human-in-the-Loop.md).

_Typischer Irrtum:_ Viele setzen KI mit Automatisierung gleich. Der größte Teil des Nutzens im Büro entsteht aber durch Augmentation, bei der Menschen schneller und besser arbeiten, nicht durch Abläufe ohne Menschen.

_Im Alltag:_

> „Können wir die Angebotserstellung nicht einfach komplett dem Copilot überlassen?“
>
> „Lass uns erst mit Augmentation anfangen. Der Copilot schreibt den Entwurf, du prüfst Preise und Konditionen. Wenn das drei Monate sauber läuft, reden wir über Automatisierung einzelner Schritte.“
