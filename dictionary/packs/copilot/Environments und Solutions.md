---
description: Umgebungen trennen Entwicklung, Test und Betrieb; Solutions transportieren Agenten mit allen Teilen dazwischen
english: Environments and solutions
aliases: [Umgebungen, Lösungen, ALM, Application Lifecycle Management, Power Platform Pipelines, Component Collections]
---

Environments (Umgebungen) und Solutions (Lösungen) sind die Bausteine, mit denen du Agenten in [Copilot Studio](./Copilot Studio.md) geordnet entwickeln, testen und in Betrieb nehmen kannst. Eine Umgebung ist ein abgeschlossener Bereich der Power Platform mit eigener Datenbank, eigenen Berechtigungen und eigenen Verbindungen. Jeder Agent lebt in genau einer Umgebung. Eine Solution ist ein Container, der einen Agenten mit allen Teilen verpackt, damit du ihn von einer Umgebung in die nächste bringen kannst.

Microsoft empfiehlt mindestens drei Umgebungen: eine zum Entwickeln, eine zum Testen und eine für den Betrieb. Die Betriebsumgebung bekommt den Typ „Production“, die anderen „Sandbox“. Wer in welche Umgebung darf, regelst du über Sicherheitsgruppen in Microsoft Entra. Neue Ersteller lenkt das Umgebungsrouting automatisch in eine eigene Entwicklerumgebung, damit nicht alle in der Standardumgebung bauen. Genau das ist die häufigste Stolperfalle: Agenten, die in der Standardumgebung entstanden sind, lassen sich schwer sauber transportieren und sind für alle Ersteller des Tenants sichtbar.

Der Transport läuft so: In der Entwicklungsumgebung arbeitest du in einer Solution mit eigenem Herausgeber und Präfix. Diese Solution exportierst du als „managed“, also schreibgeschützt, und importierst sie in Test und Betrieb. Dort bearbeitet niemand den Agenten direkt, Änderungen kommen immer über den nächsten Import. Was sich je Umgebung unterscheidet, etwa die SharePoint-Adresse oder der Name eines Dienstkontos, legst du in Umgebungsvariablen und Verbindungsreferenzen ab, nicht fest im Agenten. Mehr dazu unter [Entities und Variables](./Entities und Variables.md). Den Ablauf automatisieren Power Platform Pipelines, Azure DevOps oder GitHub Actions. Für Entwickler gibt es eine Copilot Studio Extension für Visual Studio Code. Diese ganze Disziplin heißt ALM, Application Lifecycle Management.

Nicht alles wandert mit. Verbundene [Channels](./Channels.md), das [Sharing](./Sharing.md), eine manuelle [Authentication](./Authentication.md) und Analyse-Anbindungen richtest du in der Zielumgebung neu ein. Für wiederverwendbare Bausteine wie Topics, Wissen, Tools, Child Agents oder MCP-Anbindungen gibt es Component Collections, die du zwischen Agenten exportieren und importieren kannst. Agenten aus dem [Agent Builder in Copilot](./Agent Builder in Copilot.md) laufen außerhalb dieses Modells und belegen keinen Speicher in der Umgebung.

_Typischer Irrtum:_ Eine Solution ist keine Sicherung. Sie transportiert einen Stand, aber die Versionsgeschichte und das Zurückrollen musst du selbst organisieren, etwa über Pipelines mit Git-Anbindung.

_Im Alltag:_

> „Der Agent läuft in meiner Umgebung super. Kann ich ihn einfach an die Produktion freigeben?“
>
> „Nein, so bleibt er in deiner Umgebung. Pack ihn in eine Solution, exportier sie als managed und importier sie in die Produktionsumgebung. Die SharePoint-Adresse kommt in eine Umgebungsvariable.“
