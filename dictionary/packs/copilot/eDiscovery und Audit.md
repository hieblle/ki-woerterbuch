---
description: Jede Copilot-Interaktion wird im Audit protokolliert, Prompts und Antworten sind per eDiscovery durchsuchbar
english: eDiscovery and Audit
aliases: [Purview Audit, Überwachungsprotokoll, Unified Audit Log, Content Search, Inhaltssuche, CopilotInteraction]
---

eDiscovery und Audit sind zwei Funktionen in Microsoft Purview, die zusammen dafür sorgen, dass die Nutzung von [Microsoft Copilot](./Microsoft Copilot.md) nachvollziehbar bleibt. Audit protokolliert, dass eine Interaktion stattgefunden hat. eDiscovery macht die Inhalte dieser Interaktionen auffindbar, zum Beispiel für ein Gerichtsverfahren, eine interne Untersuchung oder eine Datenschutzanfrage.

Audit läuft automatisch. Jede Anfrage an Copilot, Cowork oder einen Agenten erzeugt einen Datensatz vom Typ „CopilotInteraction“. Darin stehen Nutzer, Zeitpunkt, die App (Teams, Word, Outlook, der Chat), die Ressourcen, auf die Copilot zugegriffen hat, samt deren Vertraulichkeitsbezeichnung, das verwendete Modell und Sicherheitssignale wie ein erkannter Jailbreak oder eine erkannte [Cross-Prompt Injection](./Cross-Prompt Injection.md). Der Text des Prompts und der Antwort steht nicht im Audit-Datensatz. Den sehen nur Rollen mit besonderer Berechtigung im Activity Explorer von [DSPM for AI](./DSPM for AI.md). Auch Verwaltungsaktionen werden protokolliert, etwa wenn ein Admin Copilot-Einstellungen ändert oder einen Agenten veröffentlicht.

eDiscovery setzt woanders an. Prompts und Antworten werden in einem versteckten Ordner im Exchange-Postfach der jeweiligen Person gespeichert. Damit gelten für sie dieselben Werkzeuge wie für E-Mails: Suche, Export, Aufbewahrung und Löschung. Wer eDiscovery nutzt, wählt das Postfach als Quelle und filtert auf „Copilot activity“. Auch Websuchanfragen, die Copilot für dich gestellt hat, sind so auffindbar. Verlässt jemand das Unternehmen, wandern die Inhalte in ein inaktives Postfach, und die Aufbewahrungsregeln gelten weiter.

Für dich im Alltag heißt das: Ein Copilot-Chat ist kein privater Notizzettel. Er ist ein Geschäftsdokument, das dein Unternehmen bei Bedarf einsehen kann, so wie eine E-Mail auch. Du kannst deinen Aktivitätsverlauf zwar im My-Account-Portal löschen, bis zur endgültigen Löschung bleiben die Einträge aber für eDiscovery sichtbar, und Aufbewahrungspflichten gehen vor.

Für Agent-Bauer ist wichtig: Interaktionen mit Agenten aus [Copilot Studio](./Copilot Studio.md) werden ebenfalls erfasst, mit eigener Agent-ID. Wer einen Agenten ins Unternehmen bringt, erzeugt also auch Protokolldaten, die unter die [KI-Governance](./KI-Governance.md) fallen.

_Typischer Irrtum:_ Audit heißt nicht, dass die IT jeden Chat mitliest. Standardmäßig sieht ein Admin nur Metadaten, der Zugriff auf Inhalte ist an eigene Rollen gebunden und wird selbst protokolliert.

_Im Alltag:_

> „Der Betriebsrat fragt, ob die Firma sehen kann, was Mitarbeitende in Copilot eintippen.“
>
> „Technisch ja. Jede Interaktion landet im Audit, und die Inhalte liegen im Postfach, wo eDiscovery sie finden kann. Wer darauf zugreifen darf, regelt ihr in Purview über Rollen, und genau das gehört in die [Betriebsvereinbarung](./Betriebsvereinbarung.md).“
