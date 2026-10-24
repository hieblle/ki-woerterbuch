---
description: Governance-Paket im SharePoint Admin Center mit Oversharing-Berichten, Site Access Reviews und Site-Lebenszyklus für Copilot
aliases: [SAM, Erweiterte SharePoint-Verwaltung, Syntex SharePoint Advanced Management, Data Access Governance, Site Access Reviews]
---

SharePoint Advanced Management (SAM) ist ein Paket von Verwaltungsfunktionen im SharePoint Admin Center. Admins finden damit zu weit freigegebene Inhalte, lassen sie bereinigen und halten Sites über ihren Lebenszyklus in Ordnung. Microsoft positioniert SAM als Vorbereitung auf [Microsoft Copilot](./Microsoft Copilot.md), und weil Copilot-Lizenzen das Paket enthalten, ist es für die meisten Firmen ohne Zusatzkauf verfügbar. Früher hieß es Syntex SharePoint Advanced Management.

Das Herzstück sind die Berichte zur Data Access Governance (DAG), oft Oversharing-Berichte genannt. Sie zeigen, welche Sites breit freigegeben sind: Sites mit Links für „Jeder“ oder „Jeder in der Organisation“, Sites mit der Gruppe „Jeder außer externen Benutzern“, Sites mit vielen Freigaben in den letzten 28 Tagen und Sites, auf denen Dateien mit [Sensitivity Labels](./Sensitivity Labels.md) liegen. Ein Basisbericht über alle Berechtigungen gibt den Gesamtüberblick. Eine KI-Funktion fasst die Berichte in Klartext zusammen und schlägt Maßnahmen vor.

Aus den Berichten heraus startest du die Bereinigung. Site Access Reviews schicken dem Besitzer einer auffälligen Site eine Aufforderung, seine Freigaben zu prüfen. Der Besitzer sieht Gruppen, Links und Elemente, räumt auf und schließt die Prüfung mit einem Kommentar ab. Das ist bewusst delegiert, weil Admins aus Datenschutzgründen oft nicht in die Dateien selbst schauen dürfen. Für harte Fälle gibt es Restricted Access Control, das eine Site auf definierte Gruppen begrenzt und bestehende Links übersteuert, sowie [Restricted Content Discovery](./Restricted Content Discovery.md), das eine Site vor Copilot verbirgt.

Der dritte Baustein ist der Lebenszyklus. Richtlinien für inaktive Sites melden sich bei Besitzern, wenn eine Site lange nicht genutzt wurde, und archivieren sie bei Bedarf. Richtlinien für Besitzer sorgen dafür, dass jede Site Verantwortliche hat. Archivierte Inhalte nutzt Copilot nicht, womit alte Projektsites als Quelle veralteter Antworten wegfallen.

Microsoft empfiehlt eine Reihenfolge: erst die Bestandsaufnahme im Assessment, dann Lebenszyklus, dann [Oversharing](./Oversharing.md), und das Ganze alle dreißig Tage wiederholen. Ergänzend prüft [DSPM for AI](./DSPM for AI.md) in Purview wöchentlich die meistgenutzten Sites auf Risiken. SAM ersetzt die [KI-Governance](./KI-Governance.md) nicht, es liefert ihr die Fakten.

_Typischer Irrtum:_ Viele erwarten, dass SAM Oversharing automatisch behebt. Es findet und delegiert. Entscheiden und aufräumen müssen weiterhin Menschen.

_Im Alltag:_

> „Die Geschäftsführung will wissen, ob wir für Copilot bereit sind. Wie beantworte ich das mit Zahlen?“
>
> „Zieh den Oversharing-Basisbericht aus SharePoint Advanced Management. Er zeigt, wie viele Sites mit Jeder-Links es gibt. Starte für die Top 20 eine Site Access Review und berichte in vier Wochen, wie viele bereinigt sind.“
