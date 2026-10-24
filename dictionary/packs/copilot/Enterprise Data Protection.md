---
description: Microsofts Schutzzusagen für Copilot und Copilot Chat, etwa kein Training mit Firmendaten und Speicherung im eigenen Tenant
english: Enterprise Data Protection
aliases: [EDP, Unternehmensdatenschutz, Commercial Data Protection, Bing Chat Enterprise]
---

Enterprise Data Protection (EDP, deutsch: Unternehmensdatenschutz) ist der Sammelbegriff für die Schutzzusagen, die Microsoft für Prompts und Antworten in [Microsoft Copilot](./Microsoft Copilot.md) und [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) gibt. Kurz gesagt: Deine Eingaben in Copilot werden so behandelt wie deine E-Mails in Exchange und deine Dateien in SharePoint. Dieselben Verträge, dieselbe Verschlüsselung, dieselben Richtlinien. Früher hieß das Ganze Commercial Data Protection, aus der Zeit von Bing Chat Enterprise.

EDP gilt automatisch, sobald du dich mit deinem Firmenkonto (Microsoft Entra) anmeldest. Ein Admin muss nichts einschalten. In der Oberfläche erkennst du es am grünen Schild-Symbol und am Hinweis „Work“. Fehlt das Schild, bist du vermutlich mit einem privaten Konto angemeldet, und dann gelten die Verbraucherbedingungen, nicht EDP.

Microsoft fasst EDP in fünf Zusagen zusammen. Erstens: Die Daten sind gesichert, verschlüsselt bei der Übertragung und im Ruhezustand, und logisch von anderen Kunden getrennt. Zweitens: Die Daten sind privat, es gelten das Data Protection Addendum, die DSGVO und die [EU Data Boundary](./EU Data Boundary.md). Drittens: Deine Zugriffsrechte und Richtlinien gelten auch in Copilot, also Berechtigungen, [Sensitivity Labels](./Sensitivity Labels.md), Aufbewahrung und Audit. Viertens: Du bist gegen KI-Risiken abgesichert, durch Filter für schädliche Inhalte, Schutz vor Prompt Injection und das [Customer Copyright Commitment](./Customer Copyright Commitment.md). Fünftens, und das fragen die meisten zuerst: Deine Prompts, Antworten und Firmendaten werden nicht zum Training der Sprachmodelle verwendet. Das gilt auch gegenüber OpenAI und Anthropic, deren Modelle Microsoft als Subprozessoren unter denselben Vertragsbedingungen einsetzt.

Die Kehrseite der Nachvollziehbarkeit: Mit EDP werden Prompts und Antworten im Tenant gespeichert und stehen für Audit, eDiscovery und Aufbewahrungsrichtlinien zur Verfügung. Deine Chats sind also vor Microsoft und vor Dritten geschützt, nicht aber vor den Compliance-Werkzeugen deines eigenen Unternehmens. Hochgeladene Dateien liegen in deinem OneDrive in einem eigenen Ordner.

Zwei Fußnoten sind wichtig. Websuchanfragen, die Copilot an Bing schickt, fallen nicht unter die EU Data Boundary. Und EDP schützt deine Daten gegenüber dem Anbieter, es verhindert nicht, dass du selbst etwas aus einer Antwort kopierst und per Mail an die falsche Person schickst. Gegen diese Art von [Datenabfluss](./Datenabfluss.md) helfen DLP und gesunder Menschenverstand.

_Typischer Irrtum:_ Viele glauben, EDP sei ein Zusatzprodukt oder an die Premium-Lizenz gebunden. Es gilt für jeden Nutzer mit Entra-Konto, auch in Copilot Chat ohne Premium-Lizenz.

_Im Alltag:_

> „Darf ich die Vertragsentwürfe in Copilot Chat einfügen? Ich habe Sorge, dass Microsoft damit trainiert.“
>
> „Solange das grüne Schild da ist, bist du mit dem Firmenkonto drin und EDP gilt: kein Training, die Daten bleiben im Tenant. Was du trotzdem nicht einfügen darfst, regelt unsere [KI-Richtlinie](./KI-Richtlinie.md), nicht Microsoft.“
