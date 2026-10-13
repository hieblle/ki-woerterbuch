---
description: Mehrere KI-Agenten mit verteilten Rollen, bei denen einer koordiniert und andere recherchieren, schreiben oder prüfen
english: Multi-agent system
aliases: [Subagent, Orchestrator]
---

Ein Multi-Agent-System besteht aus mehreren [Agenten](./Agent.md), die sich eine Aufgabe teilen. Einer koordiniert, die anderen übernehmen Teilaufgaben wie Recherchieren, Schreiben oder Prüfen.

Die Rollen haben feste Namen. Der Orchestrator ist der Agent, der die Aufgabe entgegennimmt, sie in Teile zerlegt, diese Teile verteilt und am Ende die Ergebnisse zusammensetzt. Ein Subagent ist ein Agent, der einen solchen Teil erledigt und sein Ergebnis an den Orchestrator zurückgibt. Jeder Subagent hat eigene Anweisungen, oft eigene Werkzeuge und einen eigenen [Kontext](./Kontext.md), also sein eigenes Gedächtnis für diese eine Teilaufgabe. Der Orchestrator sieht nicht jeden Zwischenschritt, sondern nur den Bericht.

Ein Beispiel aus dem Vertrieb macht die Arbeitsteilung sichtbar. Die Aufgabe lautet: „Bereite eine Unterlage für das Erstgespräch mit der Firma Huber Maschinenbau vor.“ Der Orchestrator schickt einen Subagenten auf Websuche nach Unternehmensdaten und aktuellen Nachrichten, einen zweiten in das CRM nach bisherigen Kontakten, einen dritten in SharePoint nach ähnlichen Angeboten. Ein vierter schreibt aus den drei Berichten die Unterlage, ein fünfter prüft sie auf Lücken und Widersprüche. Du bekommst das fertige Dokument. [Deep Research](./Deep Research.md) in ChatGPT oder Gemini und manche Copilot Agents arbeiten intern so.

Aufteilen hilft aus zwei Gründen. Erstens bleibt jeder Agent bei seiner Sache, statt eine riesige Aufgabe in einem einzigen [Kontextfenster](./Kontextfenster.md) zu verwalten, wo wichtige Details verloren gehen. Zweitens können mehrere Subagenten gleichzeitig arbeiten, was Zeit spart. Ein Prüfer, der den Text nicht selbst geschrieben hat, findet außerdem eher Fehler als der Autor.

Unübersichtlich wird es, wenn niemand mehr nachvollziehen kann, wer was entschieden hat. Ein Subagent kann einen Fehler machen, den der Orchestrator ungeprüft übernimmt und der Schreiber ausformuliert. Dann steht die falsche Zahl selbstbewusst in der fertigen Unterlage. Je mehr Agenten beteiligt sind, desto wichtiger ist, dass das System seine Quellen und Zwischenergebnisse zeigt und du das Endergebnis stichprobenartig prüfst. Mehr Agenten bedeuten auch mehr Kosten und längere Laufzeit, oft ohne besseres Ergebnis, wenn die Aufgabe gar nicht teilbar ist.

_Typischer Irrtum:_ Mehrere Agenten sind nicht automatisch klüger als einer. Sie sind sinnvoll, wenn eine Aufgabe sich sauber in Teile zerlegen lässt, die unabhängig voneinander bearbeitet werden können.

_Im Alltag:_

> „Die Recherche hat zehn Minuten gedauert und dann kam ein 20-seitiges Dossier. Was ist da im Hintergrund passiert?“
>
> „Das war ein Multi-Agent-System. Ein Orchestrator hat mehrere Subagenten losgeschickt, die parallel gesucht haben, und einer hat am Ende alles zusammengeschrieben. Prüf die Zahlen trotzdem.“
