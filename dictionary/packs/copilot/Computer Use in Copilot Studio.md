---
description: Tool, mit dem ein Copilot-Studio-Agent Websites und Windows-Programme per virtueller Maus und Tastatur bedient
english: Computer use in Copilot Studio
aliases: [Computer use, Computernutzung, Computer-Using Agent, CUA]
---

Computer Use in Copilot Studio ist ein Tool-Typ, mit dem ein Agent eine Website oder ein Windows-Programm so bedient, wie ein Mensch es tun würde: Er sieht den Bildschirm, klickt auf Schaltflächen, wählt Menüs und tippt in Felder. Das Prinzip erklärt der Hauptbegriff [Computer Use](./Computer Use.md). Hier geht es um die Umsetzung in Copilot Studio, wo die Funktion seit Mai 2026 allgemein verfügbar ist.

Du brauchst es, wenn ein System keine Schnittstelle hat, also weder einen Connector noch einen MCP-Server. Typische Fälle sind alte Fachanwendungen, Lieferantenportale oder Formulare auf Websites. Du legst das Tool unter [Tools](./Tools.md) an, gibst ihm einen Namen, eine Beschreibung und Anweisungen in normaler Sprache: „Öffne das Rechnungsportal, filtere auf die letzten 24 Stunden, übertrage Rechnungsnummer und Betrag in das Formular und sende es ab.“ Ein Modell mit Bildverständnis liest dann Bildschirmfotos und entscheidet Schritt für Schritt, was es als Nächstes anklickt. Ändert sich die Oberfläche leicht, kommt es meist trotzdem zurecht.

Das Tool läuft nicht in deinem Browser, sondern auf einem Rechner, den du dafür einrichtest: einer Maschine aus dem Power Automate Machine Management, einem Cloud-PC-Pool oder einem Windows 365 Cloud-PC. Microsoft empfiehlt dafür eigene, abgeschottete Maschinen mit möglichst wenig Rechten. Mehrere Einstellungen schützen dich zusätzlich. Mit Access Control legst du eine Liste erlaubter Websites und Programme fest. Enforce HTTPS verbietet unverschlüsselte Seiten. Stored Credentials hinterlegen Anmeldedaten für Portale sicher, statt sie in die Anweisungen zu schreiben. Human Supervision benennt eine Person, die per E-Mail gefragt wird, wenn das Tool verdächtige Anweisungen auf einer Seite erkennt, zum Beispiel einen Versuch von [Prompt Injection](./Prompt Injection.md). Dazu kommt ein Audit-Protokoll mit Aufzeichnung der Sitzung.

Wichtig ist die Frage, mit wessen Rechten das Tool arbeitet. Standard sind die Anmeldedaten des Erstellers, was für einen [autonomen Agenten](./Autonomer Agent.md) sinnvoll ist. Teilst du einen solchen Agenten, handeln alle Nutzer mit deinem Zugang auf der Maschine. Die Alternative sind Nutzeranmeldedaten, dann braucht jede Person Zugriff auf die Maschine. Details dazu stehen unter [Authentication](./Authentication.md).

Abgerechnet wird pro Schritt in [Copilot Credits](./Copilot Credits.md), mit einem höheren Satz für Premium-Modelle. Computer Use ist nicht in der Microsoft 365 Copilot-Lizenz enthalten, auch nicht für lizenzierte Nutzer. Stand Oktober 2026 gibt es zusätzlich eigenständige Computer-Use-Tools für Agent Flows in der Vorschau.

_Typischer Irrtum:_ Computer Use ist kein Ersatz für einen Connector, sondern die Notlösung, wenn es keinen gibt. Ein Connector ist schneller, billiger und zuverlässiger, weil er keine Bildschirme deuten muss.

_Im Alltag:_

> „Das Lieferantenportal hat keine Schnittstelle. Können wir die Bestellbestätigungen trotzdem automatisch eintragen lassen?“
>
> „Ja, mit Computer Use auf einem eigenen Cloud-PC. Beschränke das Tool auf die Portal-Adresse, hinterlege die Zugangsdaten in Stored Credentials und lass die ersten Läufe im Test-Panel mitlaufen.“
