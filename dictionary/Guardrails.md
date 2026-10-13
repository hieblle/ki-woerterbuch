---
description: Leitplanken, die festlegen, was ein Agent nie tun darf, technisch durch Sperren und Filter, organisatorisch durch Richtlinien
aliases: [Leitplanken, Schutzmaßnahmen]
---

Guardrails (Leitplanken) sind feste Grenzen, die ein [Agent](./Agent.md) nicht überschreiten kann oder darf, egal, was im Prompt steht. Sie legen fest, was nie passieren soll: keine Mail an externe Adressen, kein Löschen in SharePoint, keine Bestellung über 1.000 Euro, keine Weitergabe von Gehaltsdaten.

Technische Guardrails sind in das System eingebaut. Dazu gehören gesperrte Aktionen (der Agent hat schlicht kein Werkzeug zum Löschen), Filter, die Eingaben und Ausgaben auf Personendaten oder verbotene Inhalte prüfen, Grenzen wie eine maximale Zahl von Schritten oder ein Budget, eine [Sandbox](./Sandbox.md) mit Testdaten und die Freigabepflicht für bestimmte Aktionen. In Microsoft 365 Copilot setzt der Admin solche Grenzen über Berechtigungen und Richtlinien, in Copilot Studio oder Claude legst du beim Bauen fest, welche Werkzeuge ein Agent überhaupt bekommt und welche Aktionen gesperrt bleiben. Was ein Agent nicht kann, kann er auch nicht versehentlich oder durch [Prompt Injection](./Prompt Injection.md) tun. Das ist der stärkste Schutz.

Organisatorische Guardrails sind Regeln für den Einsatz. Dazu gehört, welche Aufgaben ein Agent überhaupt übernehmen darf, wer ihn freigibt, wer die Ergebnisse stichprobenartig prüft und was bei einem Fehler passiert. Sie stehen in der [KI-Richtlinie](./KI-Richtlinie.md) oder in der Beschreibung des Agenten und werden von Menschen eingehalten, nicht von Technik erzwungen. Beides zusammen gehört zur [KI-Governance](./KI-Governance.md).

Der Unterschied zur [Freigabe](./Freigabe.md): Eine Freigabe ist eine Entscheidung im Einzelfall. Der Agent fragt, du sagst Ja oder Nein. Ein Guardrail ist eine Entscheidung vorab, die für alle Fälle gilt und keine Rückfrage mehr braucht. Der Unterschied zur KI-Richtlinie: Die Richtlinie sagt Menschen, wie sie KI nutzen sollen. Guardrails sagen der KI, was sie nicht darf. Gute Guardrails ersetzen viele Freigaben: Wenn der Agent gar nicht nach außen mailen kann, musst du auch nicht bei jeder Mail gefragt werden.

Guardrails sollten zur Aufgabe passen und mit dem [Autonomiegrad](./Autonomiegrad.md) mitwachsen. Ein Agent, der nur liest und zusammenfasst, braucht wenige. Ein Agent, der bestellt oder Personaldaten ändert, braucht enge. Beginne mit engen Grenzen und lockere sie erst, wenn du dem Agenten über Wochen vertraust.

_Typischer Irrtum:_ Ein Satz im Prompt wie „Lösche niemals Dateien“ ist kein Guardrail. Das Modell kann ihn vergessen oder durch manipulierte Inhalte umgangen werden. Ein echter Guardrail nimmt dem Agenten das Werkzeug dafür.

_Im Alltag:_

> „Ich habe dem Agenten in die Anweisung geschrieben, dass er nie an Kunden mailt. Reicht das?“
>
> „Als Richtlinie ja, als Guardrail nein. Lass die IT das Senden an externe Adressen für diesen Agenten sperren, dann kann er es auch nicht, wenn er die Anweisung mal ignoriert.“
