---
description: Copilot verankert Antworten in Firmendaten (Work) oder in Web-Ergebnissen (Web), umschaltbar und getrennt geregelt
english: Work Grounding and Web Grounding
aliases: [Arbeit und Web, Work-Modus und Web-Modus, Webinhalte-Schalter, Web search in Copilot]
---

Work-Grounding und Web-Grounding sind die beiden Quellen, aus denen [Microsoft Copilot](./Microsoft Copilot.md) eine Antwort speist. Beim Work-Grounding holt Copilot Inhalte aus [Microsoft Graph](./Microsoft Graph.md), also aus deinen Mails, Dateien, Chats und Besprechungen. Beim Web-Grounding schickt es eine Suchanfrage an Bing und nutzt aktuelle Webseiten. Was [Grounding](./Grounding.md) grundsätzlich bedeutet, erklärt der Hauptbegriff.

In [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) siehst du beides als Modi „Arbeit“ und „Web“. Im Arbeitsmodus antwortet Copilot aus Firmendaten und kann zusätzlich das Web dazunehmen, wenn der Schalter für Webinhalte an ist. Im Webmodus arbeitet es nur mit öffentlichen Quellen und ohne Zugriff auf deine Daten. In der Antwort trennt Copilot die Herkunft in Abschnitte wie „Aus den Daten deines Unternehmens“ und „Aus dem Web“, jeweils mit Quellenangaben.

Die beiden Wege sind technisch getrennt. Web-Grounding ändert keine Berechtigungen in Microsoft 365. Und es schickt nicht deinen ganzen Prompt ins Web: Copilot erzeugt aus deiner Frage eine kurze Suchanfrage aus wenigen Wörtern. Dateien, E-Mails, hochgeladene Dokumente und deine Nutzerkennung gehen nicht an Bing. In Copilot Chat kannst du die tatsächlich gesendeten Suchanfragen nachlesen.

Trotzdem gelten für Websuchen andere Regeln als für Firmendaten. Laut Microsoft fallen sie nicht unter die Datenschutzvereinbarung für Microsoft 365 und nicht unter die [EU Data Boundary](./EU Data Boundary.md). Microsoft sagt zu, Suchanfragen nicht für Werbung und nicht zum Training von Modellen zu nutzen. Für Unternehmen mit strengen Vorgaben ist das dennoch ein Grund, genau hinzusehen.

Admins steuern das Web-Grounding über eine Richtlinie mit drei Stufen: Web an, Web aus, oder Web nur im Webmodus und in Copilot Chat, aber nicht im Arbeitsmodus. Ohne Richtlinie ist Web-Grounding an. Zusätzlich lassen sich einzelne Domänen von der Websuche ausschließen. Du selbst findest in den Einstellungen den Schalter „Webinhalte“, der geräteübergreifend gilt.

Im Alltag gilt: Fragen zu Projekten, Personen und Dokumenten gehören in den Arbeitsmodus. Fragen nach aktuellen Gesetzen, Marktpreisen oder Nachrichten brauchen das Web. Die Kombination hilft bei Aufgaben wie „Vergleiche unser Angebot mit den öffentlichen Preisen des Wettbewerbers“. Prüfe Webquellen wie bei jeder [Websuche](./Websuche.md), bevor du sie weitergibst.

_Typischer Irrtum:_ Viele glauben, im Arbeitsmodus bleibe alles im Haus. Solange der Webschalter an ist, kann Copilot für dieselbe Frage auch eine Suchanfrage an Bing schicken.

_Im Alltag:_

> „Copilot soll mir die neue Reisekostenpauschale nennen. Warum zeigt es mir zuerst unsere alte Richtlinie?“
>
> „Weil du im Arbeitsmodus bist und die Richtlinie auf SharePoint liegt. Schalte Webinhalte dazu oder frag im Webmodus, dann bekommst du den aktuellen Satz aus einer öffentlichen Quelle.“
