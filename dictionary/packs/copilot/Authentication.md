---
description: Einstellung in Copilot Studio, ob und wie sich Nutzer beim Agenten anmelden und mit wessen Rechten Tools laufen
english: Authentication
aliases: [Authentifizierung, Authenticate with Microsoft, No authentication, Authenticate manually, End User Credentials, Maker Credentials]
---

Authentication (Authentifizierung) legt in Copilot Studio fest, ob sich Nutzer beim Agenten anmelden müssen und wie. Davon hängt ab, welche Kanäle funktionieren, welche Wissensquellen und Tools der Agent nutzen darf und ob du steuern kannst, wer mit ihm spricht. Du findest die Einstellung unter Settings, Security, Authentication. Änderungen gelten erst nach dem nächsten Veröffentlichen.

Es gibt drei Optionen. „No authentication“: Jeder mit dem Link kann chatten, der Agent weiß nicht, wer vor ihm sitzt. Das reicht für einen öffentlichen Website-Agenten mit allgemeinem Wissen. Wissen aus SharePoint und Tools mit Nutzerrechten sind damit nicht möglich, und Admins können diese Option per Datenrichtlinie verbieten. „Authenticate with Microsoft“ ist der Standard für neue Agenten: Anmeldung über Microsoft Entra ID, ohne Einrichtung nutzbar in Teams, Microsoft Copilot, SharePoint und Power Apps. Erst damit kann der Agent [Knowledge](./Knowledge.md) aus SharePoint mit den Rechten des Fragenden durchsuchen und erst damit greift das [Sharing](./Sharing.md) als Zugangskontrolle. „Authenticate manually“ brauchst du für Sonderfälle: eine eigene Website mit Anmeldung, Zertifikate statt Geheimnisse, oder einen anderen Anmeldedienst über OAuth 2.0. Zusätzlich kannst du „Require users to sign in“ setzen, dann startet kein Gespräch ohne Anmeldung.

Die zweite Ebene liegt bei den [Tools](./Tools.md). Jedes Tool hat eine Verbindung, und du wählst, wessen Anmeldedaten sie nutzt. „End user credentials“: Jede Person verbindet beim ersten Mal ihr eigenes Konto, der Agent sieht und tut nur, was diese Person darf. Das ist der sichere Normalfall für Fachanwendungen. „Maker-provided credentials“: Alle Nutzer handeln mit dem Zugang der Person, die den Agenten gebaut hat. Das ist nötig, wenn niemand vor dem Bildschirm sitzt, also bei einem [Event Trigger](./Event Trigger.md) oder meist bei [Computer Use](./Computer Use in Copilot Studio.md). Die Gefahr: Wer den Agenten nutzen darf, kann über ihn Dinge tun, für die er selbst keine Rechte hat. Teile solche Agenten nur eng und gib dem Ersteller-Konto so wenig Rechte wie möglich. Das Gegenstück, nämlich ein Zuviel an sichtbaren Daten, beschreibt [Oversharing](./Oversharing.md).

Für den Agenten selbst legt Copilot Studio seit 2026 eine eigene Identität in Entra an, die [Microsoft Entra Agent ID](./Microsoft Entra Agent ID.md). Sie ergänzt die Nutzeranmeldung, ersetzt sie aber nicht.

_Typischer Irrtum:_ „Authenticate with Microsoft“ bedeutet nicht, dass nur Mitarbeitende den Agenten erreichen. Das steuert erst das Sharing. Die Anmeldung sagt dem Agenten nur, wer da ist.

_Im Alltag:_

> „Kann ich die Tool-Verbindung einfach mit meinem Konto anlegen? Dann muss sich niemand anmelden.“
>
> „Dann arbeiten alle mit deinen Rechten, auch im Personalsystem. Stell das Tool auf End user credentials, dann sieht jeder nur, was er selbst sehen darf.“
