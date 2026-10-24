---
description: Eigene Identität für KI-Agenten in Microsoft Entra, damit sie wie Nutzer angemeldet, berechtigt, überwacht und abgeschaltet werden
aliases: [Entra Agent ID, Agent Identity, Agent Identity Blueprint, Agent User, App Registration für Agenten, Conditional Access for Agents, Bedingter Zugriff für Agenten]
---

Microsoft Entra Agent ID gibt jedem KI-Agenten eine eigene Identität im Verzeichnisdienst Microsoft Entra, so wie Mitarbeitende ein Benutzerkonto haben. Damit lässt sich ein Agent anmelden, berechtigen, überwachen und abschalten, mit denselben Werkzeugen, die die IT für Menschen und Anwendungen schon kennt. Es ist Microsofts Antwort auf die Frage nach der [Agent-Identität](./Agent-Identität.md): Mit wessen Rechten handelt der Agent eigentlich?

Entra kennt dafür drei Bausteine. Die Agent Identity ist das Konto des einzelnen Agenten. Der Agent Identity Blueprint ist eine Vorlage, aus der viele Agent-Identitäten entstehen und die Richtlinien an alle Kinder weitergibt. Der Agent User ist ein vollwertiges Nutzerkonto für Agenten, die wie ein digitaler Mitarbeitender mit Postfach und Teams-Präsenz arbeiten. [Copilot Studio](./Copilot Studio.md) legt seit Mai 2026 für jeden neuen Agenten automatisch eine Agent ID an, schon beim Erstellen, nicht erst beim Veröffentlichen. Wird der Agent gelöscht, verschwindet auch die Identität. Davor bekam jeder Agent eine eigene App-Registrierung in Azure, ältere Agenten werden umgestellt. Agenten aus dem [Agent Builder](./Agent Builder in Copilot.md) haben Stand Oktober 2026 noch keine eigene Agent ID.

Der praktische Nutzen zeigt sich bei drei Zugriffsarten. Handelt der Agent im Namen des angemeldeten Nutzers, gelten dessen Rechte, und er sieht nur, was diese Person sehen darf. Das ist der Normalfall in Copilot Chat und schützt vor [Oversharing](./Oversharing.md). Läuft ein [autonomer Agent](./Autonomer Agent.md) ohne Nutzer, etwa nachts auf einen Trigger hin, handelt er mit seiner eigenen Agent ID. Arbeitet er als Agent User, hat er ein eigenes Postfach und eigene Freigaben. Für jede dieser Arten kann die IT Conditional Access (bedingter Zugriff) einrichten: nur aus dem Firmennetz, nur zu bestimmten Zeiten, nur auf bestimmte Dienste, Sperre bei verdächtigem Verhalten. Anmelde- und Audit-Protokolle zeigen, was der Agent wann getan hat.

Die [Connector](./Power Platform Connectors.md)-Berechtigungen eines Agenten erscheinen als API-Berechtigungen an seiner Identität. Ein Admin sieht also auf einen Blick, dass der Reisekosten-Agent auf SharePoint und Outlook zugreifen darf, aber nicht auf die Personalakte.

Die Agent ID selbst gibt es für alle Entra-Kunden. Die Schutzfunktionen für Agenten, also Conditional Access, Risikoerkennung und Lebenszyklus-Governance, setzen [Microsoft Agent 365](./Microsoft Agent 365.md) voraus. Fremde Agenten, etwa aus n8n oder AWS, lassen sich über ein SDK oder Workload Identity Federation anbinden.

_Typischer Irrtum:_ Eine eigene Identität bedeutet nicht, dass der Agent mehr darf. Sie bedeutet, dass genau festgelegt und nachvollziehbar ist, was er darf, und dass man ihn einzeln sperren kann, ohne das Konto der Erstellerin anzurühren.

_Im Alltag:_

> „Die Kollegin, die den Onboarding-Agenten gebaut hat, verlässt uns. Stirbt der Agent mit ihrem Konto?“
>
> „Nein, der Agent hat in Entra eine eigene Agent ID. Wir tragen eine neue Verantwortliche ein und prüfen die Berechtigungen, mehr ist nicht nötig.“
