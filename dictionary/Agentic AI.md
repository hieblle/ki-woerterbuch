---
description: KI, die eine Aufgabe nicht nur beantwortet, sondern in mehreren Schritten mit Werkzeugen selbst erledigt
english: Agentic AI
aliases: [Agentische KI]
---

Agentic AI bezeichnet KI-Systeme, die nicht nur antworten, sondern handeln. Sie zerlegen eine Aufgabe in Schritte, nutzen Werkzeuge, prüfen das Ergebnis und machen weiter, bis die Aufgabe erledigt ist.

Der Unterschied zum Chat liegt in der Schleife. Im klassischen [Chatbot](./Chatbot.md) stellst du eine Frage und bekommst eine Antwort, dann bist du wieder dran. Ein agentisches System bekommt ein Ziel und arbeitet selbstständig mehrere Runden: Es plant, führt einen Schritt aus, schaut sich das Ergebnis an und entscheidet, was als Nächstes passiert. Du siehst erst das Endergebnis oder wirst zwischendurch um eine [Freigabe](./Freigabe.md) gebeten.

Ein Beispiel aus dem Einkauf macht das greifbar. Du gibst Microsoft 365 Copilot den Auftrag: „Finde die drei Angebote für die neuen Monitore in meinem Postfach, vergleiche Preis, Lieferzeit und Garantie, und lege eine Tabelle dazu in SharePoint ab.“ Ein Chat würde dir erklären, wie du das machen könntest. Ein [Agent](./Agent.md) sucht die Mails, liest die Anhänge, baut die Tabelle, speichert sie und meldet sich mit dem Link. Dafür braucht er Zugriff auf Postfach und SharePoint, also [Tool Use](./Tool Use.md).

Im Arbeitsalltag begegnet dir Agentic AI in Produkten wie Copilot Agents, ChatGPT Agent, Claude oder Coding-Agenten wie Claude Code (siehe [Vibe Coding](./Vibe Coding.md)). Die Aufgaben, die sich eignen, haben ein klares Ziel, einen überprüfbaren Endzustand und mehrere Zwischenschritte, die man auch einem Menschen delegieren würde. Für eine schnelle Frage brauchst du keinen Agenten.

Mehr Handlungsspielraum bedeutet mehr Verantwortung bei dir. Ein Agent kann Fehler machen und sie in die nächsten Schritte mitnehmen. Deshalb gilt: Ergebnis prüfen, bevor es weitergeht, und kritische Aktionen wie Mail senden oder Daten löschen nur nach Rückfrage erlauben oder über [Guardrails](./Guardrails.md) ganz sperren. Wie viel du einem Agenten überlässt, beschreibt der [Autonomiegrad](./Autonomiegrad.md).

_Typischer Irrtum:_ Agentic AI ist nicht „ein schlaueres Modell“. Oft steckt dasselbe [Sprachmodell](./Sprachmodell.md) dahinter wie im Chat, nur mit Werkzeugen, Anweisungen und einer Schleife darum herum.

_Im Alltag:_

> „Ich habe Copilot gebeten, die Angebote zu vergleichen, und jetzt liegt die Tabelle schon in SharePoint. Ich habe gar nichts selbst gemacht.“
>
> „Das ist Agentic AI. Er hat deine Mails durchsucht, die Anhänge gelesen und die Tabelle angelegt. Schau sie dir aber an, bevor du sie an die Geschäftsführung schickst.“
