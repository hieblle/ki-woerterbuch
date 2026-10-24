---
description: Feste Automatisierungen in Copilot Studio aus Auslöser und Aktionen, die ein Agent als Tool aufruft oder die allein laufen
english: Agent flows
aliases: [Agent-Flows, Agentenflüsse, Power Automate Flows in Copilot Studio, Cloud Flows]
---

Agent Flows sind feste Abläufe in [Copilot Studio](./Copilot Studio.md): ein Auslöser, dann eine Kette von Aktionen, die jedes Mal gleich durchläuft. Ein Beispiel: Wenn der Agent einen Urlaubsantrag entgegennimmt, trägt der Flow ihn in eine SharePoint-Liste ein, schickt der Führungskraft eine Teams-Nachricht zur Freigabe und meldet das Ergebnis zurück. Das ist [Workflow-Automatisierung](./Workflow-Automatisierung.md), direkt im Agenten.

Agent Flows sind die Nachfolger der Power Automate Flows in Copilot Studio. Microsoft hat sie im März 2025 eingeführt. Sie werden in Copilot Studio gebaut, entweder im grafischen Designer oder indem du den Ablauf in normaler Sprache beschreibst und einen Entwurf generieren lässt. Die Aktionen kommen aus denselben [Power Platform Connectors](./Power Platform Connectors.md), die auch Power Automate nutzt: Outlook, SharePoint, Dataverse, SAP, ServiceNow und viele mehr. Dazu kommen KI-Aktionen: ein Prompt-Knoten, ein Knoten, der einen anderen Copilot-Studio-Agenten aufruft, ein Knoten zum Extrahieren von Daten aus Dokumenten und ein Schritt „Request information“, der einen Menschen um Eingabe oder Freigabe bittet. Damit baust du [Human-in-the-Loop](./Human-in-the-Loop.md) direkt in den Ablauf ein.

Der Unterschied zum Agenten selbst liegt in der Vorhersehbarkeit. Der Agent entscheidet mit [generativer Orchestration](./Generative Orchestration.md) von Fall zu Fall, was er tut. Ein Flow tut immer dasselbe. Deshalb gehört alles, was zuverlässig und nachvollziehbar sein muss, in einen Flow: Datensätze anlegen, Genehmigungen einholen, Systeme abgleichen. Der Agent übernimmt das Verstehen und Nachfragen und ruft den Flow als [Tool](./Tools.md) auf. Ein Flow kann aber auch ohne Agenten laufen, zum Beispiel nach Zeitplan oder wenn eine E-Mail eintrifft.

Abgerechnet werden Agent Flows über die Kapazität von Copilot Studio in [Copilot Credits](./Copilot Credits.md), nach Anzahl der ausgeführten Aktionen, nicht über Power-Automate-Lizenzen. Testläufe kosten nichts. Ein bestehender Power Automate Cloud Flow lässt sich in einen Agent Flow umwandeln, der Weg zurück ist nicht vorgesehen. Flows liegen in Solutions, damit du sie zwischen [Environments](./Environments und Solutions.md) transportieren kannst.

Seit 2026 gibt es daneben „Workflows“ auf dem GitHub Copilot [Harness](./Harness.md) von Copilot Studio, ein neues Format mit eigenen KI-Knoten. Stand Oktober 2026 bestehen beide nebeneinander, und Agent Flows lassen sich nicht automatisch in Workflows überführen.

_Typischer Irrtum:_ Ein Agent Flow ist nicht „KI“, nur weil er in Copilot Studio liegt. Die KI steckt in einzelnen Knoten oder im aufrufenden Agenten, der Flow selbst ist eine feste Abfolge.

_Im Alltag:_

> „Soll der Agent die Bestellung direkt im ERP anlegen, oder lieber ein Flow?“
>
> „Ein Flow. Der Agent sammelt die Angaben und fragt nach, der Flow legt den Datensatz an und holt vorher die Freigabe vom Einkauf. So passiert das jedes Mal gleich.“
