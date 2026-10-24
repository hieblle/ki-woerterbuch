---
description: Verbrauchseinheit, mit der Microsoft Agenten, Copilot Studio und nutzungsbasierte Copilot-Funktionen abrechnet, früher Messages
aliases: [Copilot-Credits, Messages, Copilot Studio Messages, Message Packs, Nachrichtenpakete, Pay-as-you-go, Usage-based Billing, Nutzungsbasierte Abrechnung]
---

Copilot Credits sind die Einheit, in der Microsoft die Nutzung von Agenten und anderen verbrauchsabhängigen Copilot-Funktionen zählt und abrechnet. Bis August 2025 hießen sie in [Copilot Studio](./Copilot Studio.md) „Messages“ (Nachrichten), seit September 2025 ist der Credit die gemeinsame Währung. Die Mengen pro Paket blieben gleich, nur der Name änderte sich.

Wie viele Credits eine Aktion kostet, hängt davon ab, was der Agent dafür tun muss. Eine Antwort aus einem festen [Topic](./Topics.md) ist günstig, eine [generative Antwort](./Generative Answers.md) kostet mehr, ein Schritt eines [autonomen Agenten](./Autonomer Agent.md), das Durchsuchen von Firmendaten oder ein [Agent Flow](./Agent Flows.md) kostet deutlich mehr. [Computer Use](./Computer Use in Copilot Studio.md) wird pro Schritt gezählt. Beim Entwurf eines Agenten entscheidest du also mit, was er später im Betrieb verbraucht. Microsoft stellt einen Schätzer bereit, mit dem du vor dem Bau grob rechnen kannst.

Credits kauft das Unternehmen auf drei Wegen. Als Prepaid-Paket: eine feste Menge pro Monat für den ganzen Tenant, die der Admin auf [Environments](./Environments und Solutions.md) verteilen kann. Als Pay-as-you-go: Das Environment wird mit einem Azure-Abo verknüpft, und am Monatsende wird der tatsächliche Verbrauch bezahlt, ohne Mindestmenge. Oder als Vorauskauf für ein Jahr. Ungenutzte Credits aus einem Monatspaket verfallen. Wird das Prepaid-Kontingent deutlich überschritten, schaltet Microsoft eigene Agenten ab, bis wieder Kapazität da ist. Der Admin kann pro Agent eine monatliche Obergrenze setzen, damit ein einzelner Agent nicht das ganze Budget aufbraucht. Das ist ein [Rate Limit](./Rate Limit.md), das dein Unternehmen selbst bestimmt.

Wichtig für den Alltag ist das Zero-Rating. Hat ein Nutzer die Premium-Lizenz ([Copilot Premium und Basic](./Copilot Premium und Basic.md)) und nutzt einen Agenten in [Copilot Chat](./Microsoft Copilot Chat.md), Teams oder SharePoint, dann kosten Antworten, Grounding in Firmendaten und Agent-Aktionen keine Credits. Es gelten Fair-Use-Grenzen. Computer Use ist davon ausgenommen. Für Nutzer ohne Lizenz und für Agenten auf einer Website oder im Kundenservice laufen die Credits dagegen mit.

Seit Dezember 2025 dienen Credits auch als Währung für neuere Funktionen wie Cowork, Code oder die Work IQ API. Dafür legt der Admin im Microsoft 365 Admin Center unter Cost Management Spending Policies an: wer welche Dienste nutzen darf, mit welchem Limit, und ab wann eine Warnung kommt.

_Typischer Irrtum:_ „Wir haben Copilot-Lizenzen, also kostet Copilot Studio nichts extra.“ Das stimmt nur für lizenzierte Mitarbeitende in Copilot Chat, Teams und SharePoint. Ein Agent für Kunden auf der Website oder für Kolleginnen ohne Lizenz verbraucht Credits.

_Im Alltag:_

> „Unser HR-Agent ist seit gestern aus. In Copilot Studio steht etwas von überschrittener Kapazität.“
>
> „Dann hat jemand das Monatskontingent aufgebraucht, wahrscheinlich der neue Agent auf der Website. Lass uns pro Agent ein Limit setzen und für den Website-Agenten Pay-as-you-go einrichten.“
