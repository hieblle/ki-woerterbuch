---
description: Datenschicht von Microsoft 365 mit Mails, Dateien, Chats, Kalendern und Personen, aus der Copilot seine Antworten holt
aliases: [Graph, Microsoft Graph API]
---

Microsoft Graph ist die Datenschicht von Microsoft 365. Dort liegen die Inhalte deines Unternehmens und die Verbindungen zwischen ihnen: E-Mails, Dateien in OneDrive und SharePoint, Teams-Chats, Kalender, Besprechungen, Kontakte und die Information, wer mit wem woran arbeitet. [Microsoft Copilot](./Microsoft Copilot.md) holt sich über den Graph Inhalt und Kontext, um Antworten in deinen Arbeitsdaten zu verankern.

Der Graph speichert nicht nur Dokumente, sondern auch Beziehungen. Er weiß, dass du gestern mit zwei Kolleginnen in einer Besprechung warst, dass dir danach eine Datei geschickt wurde und dass du diese Datei noch nicht geöffnet hast. Genau diese Verknüpfungen machen Copilot nützlich. Wenn du fragst „Was habe ich zum Projekt Nordlicht verpasst?“, sucht Copilot im Graph nach Mails, Chats und Dateien zu diesem Projekt und setzt daraus eine Antwort zusammen. Das ist [Grounding](./Grounding.md): Das Sprachmodell bekommt deine echten Daten mit, statt zu raten.

Wichtig ist, was der Graph nicht tut. Er hebt keine Rechte auf. Jede Anfrage läuft im Namen der Person, die sie stellt, und liefert nur Inhalte, die diese Person ohnehin öffnen dürfte. Copilot sieht also nicht mehr als du, aber es findet schneller, was du theoretisch sehen könntest. Warum das zum Problem werden kann, erklärt der Eintrag [Oversharing](./Oversharing.md).

Drei Begriffe werden oft vermischt. Der Graph ist der Datenbestand. Der [Semantische Index](./Semantischer Index.md) ist die Suchschicht darüber, die nach Bedeutung statt nur nach Wörtern sucht. Work IQ heißt die neuere Schicht, über die Agenten auf Daten und Werkzeuge im Graph zugreifen. Für den Alltag reicht: Ohne Graph kennt Copilot deine Arbeit nicht.

Das Grounding im Graph ist an die Lizenz gebunden. Stand Oktober 2026 bekommt nur die Premium-Lizenz automatischen Zugriff auf Graph-Daten. In Copilot Chat ohne Premium musst du Dateien selbst hochladen oder geöffnete Inhalte nutzen. Details stehen unter [Copilot Premium und Basic](./Copilot Premium und Basic.md). Daten aus Systemen außerhalb von Microsoft 365, etwa einem Ticketsystem oder einem Wiki, kommen über [Copilot Connectors](./Copilot Connectors.md) in den Graph und werden dort mit ihren Zugriffsrechten indexiert.

_Typischer Irrtum:_ Viele glauben, Copilot durchsuche „das Internet der Firma“ und finde dort alles. Tatsächlich sieht es nur den Graph, und darin nur das, was für dich freigegeben ist.

_Im Alltag:_

> „Copilot hat mir eben eine Zusammenfassung der Lieferantenverhandlung geliefert. Woher weiß es das alles?“
>
> „Aus dem Graph. Deine Mails, der Teams-Chat mit dem Einkauf und die Protokolldatei auf SharePoint hängen alle an diesem Thema. Copilot liest nur, was du selbst öffnen dürftest.“
