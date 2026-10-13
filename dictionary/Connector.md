---
description: Verbindung der KI zu Systemen wie SharePoint, CRM oder Jira, über die sie Daten lesen und manchmal ändern kann
english: Connector / Plugin
aliases: [Plugin, Integration]
---

Ein Connector verbindet die KI mit einem System, in dem deine Daten liegen: SharePoint, Google Drive, das CRM, Jira, das Ticketsystem oder die Buchhaltung. Ohne Connector kennt die KI nur, was du in das Chatfenster tippst oder hochlädst. Mit Connector kann sie dort selbst nachsehen. Andere Namen für dieselbe Idee sind Plugin, Integration oder Anbindung.

Technisch stellt der Connector eine Frage an das andere System und gibt die Antwort an die KI weiter. Fragst du im Microsoft 365 Copilot „Welche offenen Tickets hat Kunde Huber?“, holt der Connector für Jira oder ServiceNow die Liste, und die KI formuliert daraus eine Antwort. In ChatGPT und Claude heißen solche Anbindungen Connectors oder Apps; ein offener Standard dafür ist [MCP](./MCP.md).

Was die KI dann sehen kann, hängt von zwei Dingen ab: welche Systeme angebunden sind und welche Berechtigungen du dort hast. In der Regel arbeitet der Connector mit deinem Benutzerkonto. Die KI sieht also die Kundenakte, die du auch im CRM öffnen könntest, und nicht die Gehaltsliste, auf die du keinen Zugriff hast. Das ist beruhigend, solange die Berechtigungen stimmen. Sind sie zu großzügig vergeben, weil vor Jahren mal „alle“ Leserecht auf einen Ordner bekommen haben, findet die KI diese Dateien ohne Mühe. Viele Unternehmen räumen deshalb vor dem Anbinden auf.

Manche Connectors können auch schreiben: ein Ticket anlegen, einen Termin eintragen, einen Datensatz ändern. Das ist der Schritt vom Nachschlagen zum Handeln, und da lohnt es sich, genau hinzusehen, wer was erlaubt hat, siehe [Freigabe](./Freigabe.md). Ein weiteres Risiko: Inhalte aus angebundenen Systemen können Anweisungen enthalten, die die KI befolgt, etwa in einer E-Mail oder einem Ticket, siehe [Prompt Injection](./Prompt Injection.md).

Du erkennst einen fehlenden Connector daran, dass die KI sagt, sie habe keinen Zugriff, oder allgemein antwortet, obwohl die Daten im System liegen. Dann hilft ein Blick in die Einstellungen, welche Anbindungen für dich aktiv sind, oder eine Frage an die IT.

_Typischer Irrtum:_ „Wenn die KI an SharePoint hängt, kann sie alles lesen.“ Nein, nur das, was dein Konto lesen darf. Die Frage ist, ob das wirklich nur das ist, was es sein sollte.

_Im Alltag:_

> „Ich will, dass der Copilot mir die Kundenhistorie aus dem CRM zusammenfasst, aber er kennt das CRM nicht.“
>
> „Dafür braucht es einen Connector, den muss die IT freischalten. Frag nach, ob der für Dynamics oder Salesforce bei uns schon angebunden ist.“
