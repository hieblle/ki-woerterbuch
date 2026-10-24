---
description: Der einfache Agenten-Editor direkt in Copilot Chat, Agent beschreiben, Wissen anhängen, testen, teilen, ohne Copilot Studio zu öffnen
english: Agent Builder in Copilot
aliases: [Microsoft Copilot Agent Builder, Copilot Studio Agent Builder, Agent-Generator, Copilot Studio lite, Microsoft 365 Copilot Builder]
---

Der Agent Builder in Copilot ist der einfache Weg, einen eigenen [Agenten](./Agent.md) zu bauen. Du öffnest ihn direkt in Copilot Chat, beschreibst in normaler Sprache, was der Agent können soll, hängst Wissen an und probierst ihn im selben Fenster aus. Programmieren musst du nichts, und du verlässt Copilot dafür nicht. Das allgemeine Konzept solcher Werkzeuge erklärt der Eintrag [Agent Builder](./Agent Builder.md), hier geht es um die Ausführung bei Microsoft.

Der Builder hat zwei Ansichten. Im Tab „Describe“ führst du ein Gespräch: „Ich brauche einen Agenten, der Fragen zu unserer Reisekostenrichtlinie beantwortet und bei Unklarheiten an HR verweist.“ Copilot formuliert daraus Name, Beschreibung und Anweisungen. Im Tab „Configure“ siehst du dieselben Felder als Formular und passt sie von Hand an: die [Instructions](./Instructions.md), also den Systemprompt des Agenten, die Wissensquellen und die Gesprächseinstiege. Als Wissen kommen SharePoint-Ordner und -Dateien, Inhalte aus [Copilot Connectors](./Copilot Connectors.md) und das Web in Frage. Rechts daneben testest du den Agenten sofort.

Was dabei entsteht, ist ein [deklarativer Agent](./Deklarativer Agent.md): Er nutzt das Modell und die Orchestrierung von Copilot und bringt nur Anweisungen und Wissen mit. Du kannst ihn für dich behalten, mit einzelnen Personen teilen oder einen Link an das Team geben. Nutzer rufen ihn in Copilot Chat per @-Erwähnung auf oder öffnen ihn aus der Agentenliste.

Die Grenzen sind bewusst eng. Ein Agent aus dem Builder kann antworten, aber nicht handeln: kein Ticket anlegen, keine Mail senden, keinen Workflow starten, keine Anbindung an Fremdsysteme. Er funktioniert nicht in Teams-Gruppenchats. Und er hat keinen Lebenszyklus mit Test- und Produktivumgebung. Brauchst du eines davon, wechselst du zu [Copilot Studio](./Copilot Studio.md). Dort gibt es die Option, einen Builder-Agenten zu kopieren und weiterzubauen. Im Hintergrund läuft der Agent Builder ohnehin auf der Technik von Copilot Studio.

Lizenz: Mit [Microsoft Copilot](./Microsoft Copilot.md)-Lizenz ist der Builder enthalten. Ohne Lizenz kannst du Agenten bauen, die nur mit Anweisungen und Web arbeiten. Sobald ein Agent Firmendaten als Wissen nutzt, braucht das Unternehmen eine nutzungsbasierte Abrechnung. Admins sehen alle Builder-Agenten im Microsoft 365 Admin Center und können das Teilen einschränken.

Wie bei jedem Agenten gilt: Wissen klein und aktuell halten, eine Anweisung für den Fall „steht nicht in meinen Unterlagen“ mitgeben und mit echten Fragen aus dem Alltag testen, bevor der Link ins Team geht.

_Typischer Irrtum:_ Der Agent Builder ist keine kleine Version von Copilot Studio mit weniger Knöpfen. Er ist ein anderes Werkzeug für einen anderen Zweck: schnelle Frage-Antwort-Agenten für dich und dein Team, ohne Aktionen und ohne Betrieb.

_Im Alltag:_

> „Ich will einen Agenten, der unsere Lieferantenfragen beantwortet und bei Bedarf eine Bestellung im Einkaufssystem anlegt.“
>
> „Den ersten Teil schaffst du im Agent Builder in einer Stunde. Für das Anlegen der Bestellung brauchst du Copilot Studio, weil der Builder keine Aktionen ausführt. Fang mit dem Fragenteil an.“
