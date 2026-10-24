---
description: Microsofts Zusage, Kunden bei Urheberrechtsklagen wegen Copilot-Ausgaben zu verteidigen, wenn die Schutzmechanismen aktiv waren
english: Customer Copyright Commitment
aliases: [CCC, Copilot Copyright Commitment, Kundenzusage zum Urheberrecht]
---

Das Customer Copyright Commitment (CCC) ist eine Zusage in den Microsoft Product Terms: Wird ein Geschäftskunde von Dritten wegen Urheberrechtsverletzung verklagt, weil er Ausgaben von [Microsoft Copilot](./Microsoft Copilot.md) genutzt hat, übernimmt Microsoft die Verteidigung und zahlt Urteile oder Vergleiche. Voraussetzung ist, dass der Kunde die eingebauten Schutzmechanismen genutzt und nicht umgangen hat. Angekündigt wurde die Zusage 2023 unter dem Namen Copilot Copyright Commitment.

Der Hintergrund: Sprachmodelle lernen aus großen Textmengen, und es kommt vor, dass eine Ausgabe einem geschützten Werk sehr nahekommt. Microsoft baut deshalb Filter ein, die geschütztes Material in Antworten erkennen, und übernimmt im Gegenzug das Haftungsrisiko für den Fall, dass trotzdem etwas durchrutscht. Was das [Urheberrecht](./Urheberrecht.md) für KI-Ergebnisse allgemein bedeutet, erklärt der Hauptbegriff.

Die Voraussetzungen unterscheiden sich je nach Produkt. Bei Microsoft Copilot und Copilot Chat sind die Schutzmechanismen fest eingebaut, du musst nichts zusätzlich konfigurieren. Bei konfigurierbaren Diensten wie Azure OpenAI gelten eigene Anforderungen, die sogenannten Required Mitigations, etwa aktive Inhaltsfilter. Für [Copilot Studio](./Copilot Studio.md) ist wichtig: Die Zusage gilt für die Modelle, die Microsoft dort bereitstellt, einschließlich der Modelle von Anthropic. Bindest du ein eigenes Modell von außerhalb an, bist du nur abgedeckt, wenn es in Azure OpenAI mit den dortigen Schutzmaßnahmen läuft. Wer bei der [Model Selection](./Model Selection.md) oder über eigene Anbindungen experimentiert, sollte das vorher klären.

Was die Zusage nicht leistet: Sie sagt nichts darüber, ob dir die Ausgaben gehören oder ob sie selbst urheberrechtlich schutzfähig sind. Microsoft beansprucht kein Eigentum an den Ergebnissen, weist aber darauf hin, dass ähnliche Prompts ähnliche Ausgaben erzeugen können. Sie deckt auch nicht ab, was du selbst hochlädst. Wenn du ein fremdes Fachbuch einscannst und Copilot daraus Schulungsunterlagen erstellen lässt, hilft dir das CCC nicht, denn das Problem liegt dann in deiner Eingabe, nicht in der Ausgabe. Und sie ist eine vertragliche Zusage zwischen Microsoft und deinem Unternehmen, keine Garantie, dass ein Streit nie entsteht.

Im Zweifel gilt: Das CCC ist ein Argument für die Rechtsabteilung, keine Freigabe für dich. Ob und wie sich dein Unternehmen darauf verlässt, gehört in die [KI-Richtlinie](./KI-Richtlinie.md) und sollte juristisch geprüft werden.

_Typischer Irrtum:_ Das CCC bedeutet nicht, dass alles, was Copilot ausgibt, frei von Rechten Dritter ist. Es verschiebt im Streitfall das Risiko unter Bedingungen zu Microsoft.

_Im Alltag:_

> „Marketing will den Produkttext von Copilot eins zu eins auf die Website stellen. Wenn der irgendwo abgeschrieben ist, haften wir doch?“
>
> „Für Ansprüche Dritter wegen der Ausgabe greift das Customer Copyright Commitment, solange die Filter nicht umgangen wurden. Trotzdem: Text lesen, auf Eigenständigkeit prüfen, und bei Unsicherheit die Rechtsabteilung fragen.“
