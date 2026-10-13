---
description: Werkzeuge, mit denen Fachabteilungen eigene Agenten ohne Programmieren zusammenstellen, etwa Copilot Studio oder GPT Builder
aliases: [Copilot Studio, No-Code-Agent, GPT Builder]
---

Ein Agent Builder ist ein Werkzeug, mit dem du einen eigenen [Agenten](./Agent.md) zusammenklickst, ohne zu programmieren. Du beschreibst in normaler Sprache, was der Agent tun soll, hängst Wissen an und wählst aus, auf welche Systeme er zugreifen darf.

Die bekanntesten Beispiele: In Microsoft 365 Copilot gibt es den Agent Builder direkt im Chat für einfache Agenten und Copilot Studio für größere mit Anbindung an Firmensysteme. ChatGPT hat den GPT Builder, mit dem du [Custom GPTs](./Custom GPT.md) anlegst. Bei Claude erfüllen Projekte eine ähnliche Rolle, ergänzt um [Skills](./Skill.md) und [Connectors](./Connector.md). Die Oberflächen sehen unterschiedlich aus, abgefragt wird überall dasselbe.

Konfiguriert werden vier Dinge. Erstens die Anweisungen, also der [Systemprompt](./Systemprompt.md): Wer ist der Agent, welche Aufgabe hat er, in welchem Ton antwortet er, was soll er nicht tun. Zweitens das Wissen: hochgeladene Dateien, ein SharePoint-Ordner, eine Website, aus denen der Agent seine Antworten holt. Drittens die Tools ([Tool Use](./Tool Use.md)), also was der Agent tun darf: nur antworten, in Outlook suchen, ein Ticket anlegen, einen [Workflow](./Workflow-Automatisierung.md) starten. Viertens die [Freigaben](./Freigabe.md): welche Aktionen er allein ausführt, wo er fragt, und wer im Unternehmen den fertigen Agenten überhaupt nutzen darf.

Typische erste Agenten in Fachabteilungen sind Nachschlage-Agenten. HR baut einen Agenten, der Fragen zu Urlaub, Reisekosten und Elternzeit aus dem Mitarbeiterhandbuch beantwortet. Der Vertrieb baut einen, der Produktdaten und Preislisten kennt und Angebotstexte entwirft. Die Verwaltung baut einen, der erklärt, wie man Bestellungen im Einkaufssystem anlegt. Alle drei brauchen nur Anweisungen und Wissen, keine Tools, und sind an einem Nachmittag fertig.

Typische Fehler wiederholen sich ebenso. Zu viel Wissen auf einmal, sodass der Agent veraltete und aktuelle Dokumente mischt. Keine Anweisung, was er bei Unsicherheit tun soll, sodass er lieber [halluziniert](./Halluzination.md), als zu sagen „das steht nicht in meinen Unterlagen“. Zu breite Zugriffsrechte, sodass der Agent Dateien sieht, die nicht alle Nutzer sehen dürften. Und kein Verantwortlicher, der den Agenten pflegt, wenn sich das Handbuch ändert. Vor der Veröffentlichung im Team hilft ein Test in der [Sandbox](./Sandbox.md) mit zwanzig echten Fragen aus dem Alltag.

_Typischer Irrtum:_ Ein Agent aus dem Builder ist nicht automatisch sicher, nur weil die IT das Produkt freigegeben hat. Wer ihn baut, entscheidet über Wissen und Rechte und trägt dafür die Verantwortung.

_Im Alltag:_

> „Ich würde gern einen Agenten für die häufigsten HR-Fragen bauen. Muss ich dafür die IT bemühen?“
>
> „Für den Anfang nicht. Nimm den Agent Builder in Copilot, lade das Mitarbeiterhandbuch hoch und schreib rein, dass er bei Unsicherheit auf HR verweisen soll. Teste ihn mit den Fragen aus der letzten Woche.“
