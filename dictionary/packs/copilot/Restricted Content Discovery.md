---
description: Site-Einstellung, die SharePoint-Inhalte aus Copilot-Antworten und der organisationsweiten Suche nimmt, ohne Rechte zu ändern
aliases: [RCD, Eingeschränkte Inhaltsermittlung, Restrict content from Microsoft Copilot, Restricted SharePoint Search]
---

Restricted Content Discovery (RCD) ist eine Einstellung für einzelne SharePoint-Sites. Ist sie aktiv, tauchen die Inhalte dieser Site nicht mehr in Antworten von [Microsoft Copilot](./Microsoft Copilot.md) und nicht mehr in der organisationsweiten Suche auf. Die Berechtigungen bleiben unverändert: Wer Zugriff hat, kann die Dateien weiterhin direkt öffnen, nur Copilot und die Suche finden sie nicht mehr von selbst.

Damit ist RCD das schnellste Mittel gegen [Oversharing](./Oversharing.md). Bevor eine Firma Copilot ausrollt, weiß sie oft nicht, welche Sites zu breit freigegeben sind. Statt zuerst alle Rechte zu bereinigen, nimmt der Admin heikle Sites vorerst heraus: die HR-Site mit Gehaltsdaten, die Site der Geschäftsführung, alte Projektarchive. Später, wenn Freigaben aufgeräumt und [Sensitivity Labels](./Sensitivity Labels.md) gesetzt sind, wird die Einstellung wieder entfernt. Microsoft bezeichnet RCD ausdrücklich als vorübergehende Maßnahme.

Mechanik im Detail: Der Schalter heißt in den Site-Einstellungen „Inhalte vor Microsoft Copilot einschränken“. Die Site bekommt die Markierung „Restricted“, und auf ihr verschwinden auch die KI-Einstiegspunkte, etwa der Copilot-Button oder das Erstellen von [SharePoint-Agenten](./SharePoint-Agent.md). Öffnest du ein Dokument dieser Site in Word, kannst du es dort trotzdem von Copilot zusammenfassen lassen. Die Inhalte bleiben im Suchindex, sodass [eDiscovery und Audit](./eDiscovery und Audit.md) und automatische Labels weiter funktionieren. RCD gilt nur für SharePoint, nicht für OneDrive.

Zwei Dinge solltest du einplanen. Erstens dauert es, bis die Einstellung überall wirkt, bei sehr großen Sites laut Microsoft mehr als eine Woche. Zweitens verschlechtert zu viel RCD die Antworten: Wenn die halbe Firma ausgenommen ist, findet Copilot auch legitime Informationen nicht mehr. Ein Bericht zeigt, welche Sites eingeschränkt sind. Admins können die Verwaltung an Site-Admins delegieren, die dann eine Begründung angeben müssen.

RCD setzt eine Copilot-Lizenz und [SharePoint Advanced Management](./SharePoint Advanced Management.md) voraus, das in Copilot-Lizenzen enthalten ist. Der Vorgänger Restricted SharePoint Search arbeitete umgekehrt mit einer Erlaubnisliste von höchstens hundert Sites. Er läuft aus: Seit Ende Juli 2026 lässt er sich nicht mehr neu aktivieren, Microsoft empfiehlt den Umstieg auf RCD.

_Typischer Irrtum:_ Viele halten RCD für einen Schutz der Daten. Es versteckt sie nur vor Copilot und der Suche. Wer den Link kennt und Rechte hat, kommt weiterhin hinein.

_Im Alltag:_

> „Wir rollen Copilot nächsten Monat aus und haben noch nicht alle Freigaben geprüft. Müssen wir verschieben?“
>
> „Nicht unbedingt. Nimm die zehn heikelsten Sites mit Restricted Content Discovery heraus und bereinige sie in Ruhe. Die Einstellung hebst du auf, sobald eine Site sauber ist.“
