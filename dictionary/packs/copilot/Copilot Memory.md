---
description: Personalisierung in Copilot mit gespeicherten Erinnerungen und eigenen Anweisungen, die über einzelne Chats hinaus gelten
aliases: [Memory in Copilot, Saved Memories, Custom Instructions, Enhanced Personalization, Personalisierung in Copilot]
---

Copilot Memory ist die Personalisierung in Microsoft Copilot. Copilot merkt sich Dinge über dich, die über einen einzelnen Chat hinaus gelten: deine Rolle, bevorzugte Sprache, laufende Projekte, wie du Zusammenfassungen gern hast. Beim nächsten Gespräch nutzt er das, ohne dass du es wiederholst. Das Grundprinzip beschreibt der Eintrag [Memory](./Memory.md), hier geht es um die Umsetzung in Copilot.

Die Personalisierung hat drei Teile, die du in den Einstellungen unter Personalization findest. Saved Memories (gespeicherte Erinnerungen) sind einzelne Fakten, die Copilot aus deinen Chats ableitet oder die du ihm ausdrücklich gibst: „Merk dir, dass ich im Einkauf arbeite und Angebote immer netto brauche.“ Custom Instructions (eigene Anweisungen) sind Vorgaben, die für jede Antwort gelten, etwa „Antworte kurz, auf Deutsch, ohne Aufzählungen“. Dazu kommt der Chatverlauf, aus dem Copilot bei Bedarf Zusammenhänge zieht. Zusätzlich kennt Copilot mit Lizenz deine Arbeitsumgebung über den [Microsoft Graph](./Microsoft Graph.md), das ist aber kein Memory, sondern Grounding.

Was gespeichert ist, kannst du einsehen, einzeln löschen oder komplett abschalten. Das Löschen eines Chats löscht die daraus entstandenen Erinnerungen nicht, dafür gibt es die eigene Liste. Die Daten liegen laut Microsoft in einem versteckten Ordner deines Exchange-Postfachs, also innerhalb des Unternehmens. Admins steuern die Funktion über die Einstellung Enhanced Personalization. Ist sie aus, können Nutzer Memory nicht einschalten.

Stand Oktober 2026 führt Microsoft Teile der Funktion noch als Vorschau, und der Termin für die allgemeine Verfügbarkeit wurde mehrfach verschoben. Ob und in welchem Umfang Memory bei dir aktiv ist, siehst du in den Einstellungen. Die Funktion steht laut Microsoft auch in [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) ohne Lizenz zur Verfügung.

Im Alltag spart Memory Wiederholungen. Wer Copilot jeden Tag für Mails nutzt, legt einmal fest, dass Entwürfe per Sie und ohne Floskeln formuliert werden. Wer ein Projekt betreut, lässt sich merken, wer die Ansprechpartner sind und welche Vorlage gilt. Aber Memory sammelt auch, was du nebenbei erwähnst: Namen von Kunden, eine Krankmeldung, einen Konflikt im Team. Darum lohnt ein regelmäßiger Blick in die Liste. Was dort nicht hingehört, löschst du ([Personenbezogene Daten](./Personenbezogene Daten.md)).

Für die Compliance gibt es eine Besonderheit: Erinnerungen fallen laut Microsoft nicht unter die üblichen Aufbewahrungsrichtlinien, sind aber über eDiscovery auffindbar. Wer dafür zuständig ist, sollte das kennen ([eDiscovery und Audit](./eDiscovery und Audit.md)).

_Typischer Irrtum:_ Memory bedeutet nicht, dass Copilot alle alten Chats kennt. Er speichert ausgewählte Fakten. Was nicht als Erinnerung angelegt wurde, ist im nächsten Chat nicht da.

_Im Alltag:_

> „Copilot schreibt meine Mailentwürfe plötzlich auf Englisch, obwohl ich das nie wollte.“
>
> „Schau in den Einstellungen unter Personalisierung nach. Wahrscheinlich hat er sich aus einem englischen Projekt etwas gemerkt. Lösch den Eintrag oder schreib in die eigenen Anweisungen, dass Mails auf Deutsch sein sollen.“
