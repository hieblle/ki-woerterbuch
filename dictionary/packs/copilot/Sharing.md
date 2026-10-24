---
description: Freigabe eines Copilot-Studio-Agenten an Personen oder Gruppen zum Bearbeiten, Nutzen oder Auswerten
english: Sharing
aliases: [Freigabe von Agenten, Agent teilen, Share agent, Collaborative Authoring, Analytics Viewer]
---

Sharing ist in Copilot Studio die Funktion, mit der du festlegst, wer deinen Agenten bearbeiten, nutzen oder auswerten darf. Das Wort „Freigabe“ ist dabei doppelt belegt: Der Hauptbegriff [Freigabe](./Freigabe.md) meint die Bestätigung einer kritischen Aktion durch einen Menschen. Hier geht es um die Freigabe des Agenten selbst, also um Zugriffsrechte.

Es gibt zwei Arten. Die Freigabe zum Nutzen gibst du an Einzelpersonen, an Sicherheitsgruppen oder an alle im Unternehmen. Diese Personen dürfen mit dem Agenten chatten, in Teams, in Microsoft Copilot oder auf einer Website mit Anmeldung. Die Freigabe zum Bearbeiten gibst du nur an einzelne Personen. Sie werden Mitautoren, brauchen in der Umgebung die Rolle Environment Maker und sehen in der Liste der Topics, wer gerade woran arbeitet. Konflikte erkennt Copilot Studio beim Speichern. Dazu kommen Rollen für das Zuschauen: „Analytics viewer“ darf die Nutzungsauswertung sehen, „Agent viewer“ darf [Agent Evaluations](./Agent Evaluations.md) ausführen, und wer Transkripte echter Gespräche lesen soll, braucht zusätzlich die Dataverse-Rolle „Bot Transcript Viewer“.

Wichtig ist der Zusammenhang mit der [Authentication](./Authentication.md). Die Freigabe zum Nutzen greift nur, wenn der Agent seine Nutzer kennt, also mit „Authenticate with Microsoft“ oder einer manuellen Entra-Anmeldung plus Anmeldepflicht. Bei einem Agenten ohne Anmeldung kann jeder mit dem Link chatten, egal was im Sharing steht. Für den Kanal Teams ist die Freigabe Pflicht, sonst findet niemand die App. Je nach Lizenzmodell müssen die Nutzer außerdem lizenziert sein oder der Verbrauch läuft über [Copilot Credits](./Copilot Credits.md), das klärst du mit deinem Admin.

Drei Dinge wandern nicht automatisch mit. [Agent Flows](./Agent Flows.md) teilst du separat in Power Automate. Verbindungen zu externen Systemen sind an Personen gebunden, entweder meldet sich jeder Nutzer selbst an oder du nutzt ein Dienstkonto beziehungsweise eine Verbindung auf Umgebungsebene. Und das Sharing selbst wird beim Transport zwischen Umgebungen nicht mitgenommen, in der Zielumgebung vergibst du es neu. Admins können in Managed Environments begrenzen, an wie viele Personen ein Ersteller freigeben darf, und eine Freigabe an alle im Unternehmen kann eine Admin-Zustimmung erfordern.

Eine Stolperfalle liegt bei Agenten, deren Tools mit den Anmeldedaten des Erstellers laufen. Jede Person, an die du freigibst, handelt dann mit deinen Rechten. Prüfe vor einer breiten Freigabe, welche Tools so eingestellt sind.

_Typischer Irrtum:_ Ein Agent, der im Teams-App-Store auftaucht, ist nicht automatisch für alle freigegeben. Nur wer im Sharing steht, kann ihn hinzufügen und nutzen.

_Im Alltag:_

> „Kann ich den HR-Agenten einfach an alle im Unternehmen freigeben?“
>
> „Erst prüfen: Ist die Anmeldung auf Microsoft gestellt und laufen alle Tools mit Nutzeranmeldedaten? Wenn ja, gib ihn an die Gruppe ‚Alle Mitarbeitenden‘ frei. Für Transkripte brauchen nur zwei Leute aus HR die Rolle Bot Transcript Viewer.“
