---
description: Microsofts Werkzeug zum Bauen, Testen und Veröffentlichen von Agenten mit Wissen, Tools und Kanälen, früher Power Virtual Agents
english: Microsoft Copilot Studio
aliases: [Microsoft Copilot Studio, Power Virtual Agents, PVA]
---

Copilot Studio ist Microsofts Werkzeug zum Bauen von [Agenten](./Agent.md), die mehr können als Fragen beantworten. Du arbeitest in einer grafischen Oberfläche, meist ohne Code, und legst fest, was der Agent weiß, was er tun darf, wie er sich verhält und wo Nutzer ihn erreichen. Das Produkt hieß bis 2023 Power Virtual Agents und gehört technisch zur Power Platform.

Vier Bausteine machen einen Agenten in Copilot Studio aus. [Knowledge](./Knowledge.md) sind die Wissensquellen, aus denen er antwortet: SharePoint, Dateien, Websites, Datenbanken, angebundene Fachsysteme. [Tools](./Tools.md) sind die Fähigkeiten, mit denen er handelt: ein Ticket anlegen, einen Datensatz suchen, eine Mail schicken, einen Workflow starten. Früher hießen sie Actions, davor Plugins. [Topics](./Topics.md) sind vorgezeichnete Gesprächsabläufe für Fälle, die immer gleich laufen sollen, etwa eine Urlaubsanfrage mit festen Rückfragen. Und [Channels](./Channels.md) sind die Orte, an denen der fertige Agent läuft: Teams, Microsoft Copilot, eine Website, SharePoint, ein Messenger oder das Telefon. Dazu kommen die [Instructions](./Instructions.md), die das Verhalten in normaler Sprache beschreiben.

Der Ablauf im Alltag: Du legst den Agenten an, schreibst die Anweisungen, hängst Wissen an, fügst Tools hinzu, testest im Testfenster, veröffentlichst und verbindest einen Kanal. Danach siehst du in der Auswertung, welche Fragen der Agent nicht beantworten konnte, und besserst nach. Ein Agent ist kein Projekt mit Ende, sondern braucht jemanden, der ihn pflegt.

Die Abgrenzung zum [Agent Builder in Copilot](./Agent Builder in Copilot.md) ist eine Frage der Reichweite. Der Agent Builder reicht für Frage-Antwort-Agenten für dich und dein Team. Copilot Studio nimmst du, wenn der Agent handeln soll, Fachsysteme anbindet, für eine Abteilung oder für Kunden gedacht ist, zeitgesteuert oder durch Ereignisse von selbst loslaufen soll oder einen geregelten Weg von Test nach Produktion braucht.

Seit 2026 unterscheidet Microsoft in Copilot Studio mehrere Laufzeiten, sogenannte Harnesses. Die klassische Laufzeit arbeitet mit Topics und Agent Flows. Eine neuere ist für lange, mehrstufige Aufgaben mit Dateien gedacht und wird nach Verbrauch abgerechnet, schon beim Bauen. Welche Laufzeit du wählst, bestimmt Funktionsumfang und Kosten.

Lizenz: Für Nutzer mit [Microsoft Copilot](./Microsoft Copilot.md)-Lizenz sind Agenten aus Copilot Studio in Copilot, Teams und SharePoint weitgehend enthalten. Für alle anderen Fälle rechnet Microsoft in [Copilot Credits](./Copilot Credits.md) ab, vorausbezahlt oder nach Verbrauch. Admins steuern über das Power Platform Admin Center, welche Verbindungen und Kanäle erlaubt sind.

_Typischer Irrtum:_ „Ohne Code“ heißt nicht „ohne Aufwand“. Ein Agent mit Tools und Fachsystemen braucht klare Anforderungen, Tests mit echten Fällen, Berechtigungen und einen Verantwortlichen für den Betrieb, genau wie andere Software.

_Im Alltag:_

> „Die IT sagt, unser HR-Agent soll in Copilot Studio gebaut werden, nicht im Agent Builder. Warum der Aufwand?“
>
> „Weil er Urlaubsanträge ins HR-System schreiben soll. Dafür braucht er ein Tool, und das gibt es nur in Copilot Studio. Reines Nachschlagen im Handbuch hätte der Agent Builder geschafft.“
