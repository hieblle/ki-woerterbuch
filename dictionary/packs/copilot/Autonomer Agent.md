---
description: Agent in Copilot Studio, der durch ein Ereignis startet statt durch eine Chat-Eingabe, etwa eine neue Mail oder einen Zeitplan
english: Autonomous Agent
aliases: [Autonomous Agent, Ereignisgesteuerter Agent, Autonomer Agent in Copilot Studio]
---

Ein autonomer Agent ist ein [Agent](./Agent.md) in [Copilot Studio](./Copilot Studio.md), der ohne Chat-Eingabe loslegt. Nicht ein Mensch startet ihn, sondern ein Ereignis: eine neue E-Mail im Postfach, ein ausgefülltes Formular, eine neue Datei in SharePoint oder ein Zeitplan, der alle zehn Minuten feuert.

Technisch macht ein [Event Trigger](./Event Trigger.md) den Unterschied. Sobald ein Agent mindestens einen solchen Auslöser hat, gilt er als autonom. Das Ereignis liefert eine Nachricht an den Agenten, die sogenannte Trigger-Payload, zum Beispiel Text und Absender der E-Mail. Der Agent liest sie, schaut in seine [Instructions](./Instructions.md) und entscheidet mit [Generative Orchestration](./Generative Orchestration.md) selbst, welche [Tools](./Tools.md) oder Topics er einsetzt. Am Ende steht ein Ergebnis, das niemand im Chat angefordert hat: ein angelegtes Ticket, eine beantwortete Mail, ein befüllter Datensatz.

Ein Beispiel aus dem Einkauf: Eine Lieferantenrechnung kommt per Mail. Der Agent liest sie, prüft die Bestellnummer im ERP-System, legt den Vorgang an und schickt bei Abweichungen eine Rückfrage an die Sachbearbeiterin. Ein Beispiel aus dem Vertrieb: Ein Formular auf der Website geht ein, der Agent qualifiziert die Anfrage, legt einen Lead an und schlägt eine Antwort vor.

Damit steigt der [Autonomiegrad](./Autonomiegrad.md) deutlich. Niemand sitzt daneben und liest jede Antwort mit, bevor sie rausgeht. Deshalb gelten die Regeln für Agenten hier besonders streng: Für Schritte mit Außenwirkung, etwa das Versenden einer Mail oder das Ändern von Stammdaten, sollte eine [Freigabe](./Freigabe.md) durch einen Menschen eingebaut sein. Die Anweisungen müssen auch den Fall abdecken, dass die Daten unvollständig oder widersprüchlich sind.

Drei Punkte sind in der Praxis wichtig. Erstens läuft ein autonomer Agent mit den Rechten der Person, die ihn gebaut hat, denn es gibt keinen angemeldeten Nutzer. Was du darfst, darf dann der Agent. Zweitens kostet jeder Lauf [Copilot Credits](./Copilot Credits.md), auch wenn das Ereignis belanglos war. Ein Zeitplan, der alle zehn Minuten feuert, erzeugt rund um die Uhr Verbrauch. Drittens lassen sich die Läufe in der Monitor-Ansicht von Copilot Studio nachvollziehen. Das solltest du nach dem Start regelmäßig tun.

[Deklarative Agenten](./Deklarativer Agent.md) in Microsoft Copilot können nicht autonom laufen. Autonomie gibt es in Copilot Studio oder bei [Custom Engine Agents](./Custom Engine Agent.md).

_Typischer Irrtum:_ Autonom heißt nicht unkontrolliert. Du legst mit Anweisungen, Werkzeugrechten und Freigabeschritten fest, wie weit der Agent allein gehen darf.

_Im Alltag:_

> „Kann unser Rechnungs-Agent nicht einfach selbst loslegen, wenn eine Mail reinkommt?“
>
> „Ja, dann wird er ein autonomer Agent mit einem Event Trigger auf das Postfach. Aber lass ihn Buchungen nur vorbereiten, die Freigabe bleibt bei dir. Und denk dran, er arbeitet mit deinen Rechten.“
