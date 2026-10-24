---
description: Microsofts Kontrollebene für alle Agenten im Unternehmen, Register, Identität, Zugriff, Datenschutz und Überwachung an einem Ort
aliases: [Agent 365, Agent Registry, Agentenregister, Control Plane for Agents]
---

Microsoft Agent 365 ist die Kontrollebene, mit der ein Unternehmen alle seine KI-[Agenten](./Agent.md) im Blick behält, steuert und absichert. Microsoft fasst das in drei Verben zusammen: observe (beobachten), govern (steuern), secure (schützen). Laut Microsoft ist Agent 365 seit Mai 2026 allgemein verfügbar und wird pro Nutzer lizenziert. Es ist in Microsoft 365 E7 enthalten und als Zusatz zu E5 und Business Premium erhältlich (Stand Oktober 2026).

Der Kern ist das Agent Registry im Microsoft 365 Admin Center: ein Verzeichnis aller Agenten, unabhängig davon, wo sie gebaut wurden. Dazu gehören Agenten aus [Copilot Studio](./Copilot Studio.md), aus dem [Agent Builder](./Agent Builder in Copilot.md), aus Microsoft Foundry, von Partnern aus dem [Agent Store](./Agent Store.md) und, über ein eigenes SDK, auch selbst entwickelte oder fremde Agenten. Pro Agent siehst du, wer ihn erstellt hat, wer ihn nutzt, auf welche Daten und Tools er zugreift, welche Berechtigungen er hat und ob Risiken erkannt wurden. Eine Agent Map zeigt die Verbindungen zwischen Agenten, Nutzern und Datenquellen.

Steuern heißt: Lebenszyklus und Zugriff regeln. Admins genehmigen, blockieren oder entfernen Agenten, weisen verwaiste Agenten einer Verantwortlichen zu und wenden Richtlinienvorlagen an. Die Identität liefert [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md), damit ein Agent wie ein Nutzer angemeldet und per Conditional Access eingeschränkt werden kann. Für Daten greift Microsoft Purview: [DLP](./DLP.md), [Audit und eDiscovery](./eDiscovery und Audit.md) und [DSPM for AI](./DSPM for AI.md) behandeln einen Agenten mit eigenem Konto wie eine Person. Dateien muss man so einem Agenten ausdrücklich freigeben, er erbt keine Rechte. Microsoft Defender ergänzt die Erkennung von Angriffen, etwa wenn ein Agent plötzlich ungewöhnlich viele Dateien liest.

Die Abgrenzung: Copilot Studio ist der Ort, an dem Agenten gebaut werden. Die Copilot-Einstellungen im Admin Center regeln die Grundverwaltung. Agent 365 legt die übergreifende Schicht darüber und schließt auch Agenten ein, die nicht aus dem Microsoft-Ökosystem stammen. Ohne Agent-365-Lizenz bleiben im Admin Center Teile wie der Sicherheits-Tab und die Risikospalte leer.

Für die [KI-Governance](./KI-Governance.md) ist Agent 365 das technische Gegenstück zum Register der KI-Anwendungen: Die Liste, die bisher jemand von Hand in SharePoint pflegte, entsteht hier automatisch. Die organisatorischen Fragen bleiben: Wer verantwortet welchen Agenten, wer prüft neue Agenten, wann wird einer abgeschaltet.

_Typischer Irrtum:_ Agent 365 baut keine Agenten und macht sie auch nicht besser. Es macht sichtbar, was es schon gibt, und gibt der IT die Hebel, um einzugreifen.

_Im Alltag:_

> „Wie viele Agenten laufen eigentlich bei uns? Jede Abteilung hat irgendwas gebaut.“
>
> „Schau ins Agent Registry. Da stehen alle, auch die aus dem Agent Builder, mit Ersteller, Nutzern und Datenzugriff. Die ohne Verantwortlichen können wir direkt blockieren.“
