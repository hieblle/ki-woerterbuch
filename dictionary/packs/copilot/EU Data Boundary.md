---
description: Microsofts Zusage, Daten von EU- und EFTA-Kunden innerhalb der EU und EFTA zu speichern und zu verarbeiten, auch für Copilot
english: EU Data Boundary
aliases: [EUDB, EU-Datengrenze, Datenresidenz, Flex Routing, Advanced Data Residency]
---

Die EU Data Boundary (EUDB, deutsch: EU-Datengrenze) ist Microsofts Zusage, Kundendaten von Unternehmen aus der EU und der EFTA innerhalb dieser Region zu speichern und zu verarbeiten. [Microsoft Copilot](./Microsoft Copilot.md) gehört zu den Diensten, für die diese Zusage gilt. Deine Prompts, die Antworten und die Daten aus dem [Microsoft Graph](./Microsoft Graph.md), die Copilot zur Beantwortung heranzieht, bleiben also in europäischen Rechenzentren. Auch der [Semantische Index](./Semantischer Index.md) liegt für EU-Kunden in der EU.

Das Thema ist wichtig, weil es eine der häufigsten Datenschutzfragen beantwortet: Wohin gehen meine Daten, wenn ich Copilot nutze? Für [DSGVO und KI](./DSGVO und KI.md) ist Datenresidenz einer von mehreren Bausteinen. Sie allein macht die Nutzung nicht rechtskonform, aber sie erspart dir im Normalbetrieb die Diskussion über Übermittlungen in Drittländer.

Die Mechanik beim Modellaufruf: Copilot leitet jede Anfrage an das nächstgelegene Rechenzentrum mit freier Kapazität. Für EU-Nutzer gilt dabei die zusätzliche Regel, dass der Verkehr innerhalb der EU Data Boundary bleibt. Seit 2026 gibt es dazu eine Ausnahme, die Admins steuern können: Flex Routing. Ist es erlaubt, darf die eigentliche Modellberechnung bei Spitzenlast außerhalb der EU stattfinden, etwa in den USA, Kanada oder Australien. Die Daten bleiben dabei verschlüsselt, die Speicherung bleibt in der EU, nur das Rechnen wandert kurzzeitig. Für Tenants, die nach dem 25. März 2026 angelegt wurden, ist Flex Routing standardmäßig erlaubt. Ältere Tenants sollten die Einstellung im Microsoft 365 Admin Center unter den Copilot-Einstellungen prüfen. Für [Copilot Studio](./Copilot Studio.md) gibt es eine eigene Einstellung im Power Platform Admin Center, die der Microsoft-365-Einstellung folgt, sofern sie nicht strenger ist.

Vier Ausnahmen solltest du kennen, Stand Oktober 2026. Websuchanfragen gehen an Bing und fallen nicht unter die EUDB. Modelle von Anthropic sind derzeit von der EUDB ausgenommen und für EU-Tenants deshalb standardmäßig abgeschaltet. Eine kleine Menge pseudonymisierter Daten darf für Sicherheit und Betrieb die Grenze verlassen. Und Unternehmen mit Multi-Geo-Konfiguration gelten für Microsoft 365 nicht als EUDB-Kunden.

_Typischer Irrtum:_ „Die Daten bleiben in der EU“ heißt nicht, dass niemand außerhalb der EU darauf zugreifen könnte. Die EUDB ist eine Zusage zum Speicher- und Verarbeitungsort, keine Antwort auf alle Fragen zum Zugriff durch Behörden aus Drittstaaten.

_Im Alltag:_

> „Unser Datenschutzbeauftragter will schriftlich, dass Copilot nichts in die USA schickt.“
>
> „Für Speicherung und Verarbeitung gilt die EU Data Boundary, das steht in den Product Terms. Ganz pauschal stimmt es aber nicht: Websuche geht an Bing, und wenn Flex Routing erlaubt ist, kann die Modellberechnung bei Spitzenlast außerhalb laufen. Prüf die Einstellung, dann könnt ihr das sauber dokumentieren.“
