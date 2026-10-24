---
description: Zwei mitgelieferte Reasoning-Agenten in Copilot, Researcher für Tiefenrecherche mit Quellen, Analyst für Datenanalyse mit Python
english: Researcher and Analyst
aliases: [Researcher, Analyst, Researcher Agent, Analyst Agent, Reasoning-Agenten]
---

Researcher und Analyst sind zwei Agenten, die Microsoft in Copilot mitliefert. Beide nutzen [Reasoning](./Reasoning.md)-Modelle, die vor der Antwort mehrere Denkschritte durchlaufen, und beide brauchen dafür deutlich länger als der normale Chat. Researcher ist für Recherche gebaut, Analyst für Zahlen.

Researcher arbeitet wie [Deep Research](./Deep Research.md) in anderen Produkten, aber mit Zugriff auf deine Arbeitsumgebung. Er zerlegt eine Frage in Teilfragen, stellt oft erst Rückfragen, sucht dann in Mails, Meetings, Dateien, Teams-Chats, angebundenen Systemen und im Web und liefert einen gegliederten Bericht mit Quellenangaben. Das dauert einige Minuten, bei großen Fragen deutlich länger. Typische Aufträge: „Fasse zusammen, was wir intern über den Markteintritt in Polen wissen, und ergänze aktuelle Marktdaten“ oder „Bereite eine Wettbewerbsübersicht für das Strategiemeeting vor, mit unseren letzten Angeboten als Vergleich“.

Analyst denkt Schritt für Schritt über Daten nach, schreibt dafür Python-Code, führt ihn aus und zeigt dir den Code, wenn du willst. Du gibst ihm eine Excel-Tabelle oder mehrere Dateien und fragst nach Mustern, Prognosen oder Diagrammen. Beispiel Vertrieb: „Hier sind die Umsätze der letzten drei Jahre je Region. Wo brechen wir ein, und wie sähe eine Prognose für nächstes Jahr aus?“ Laut Microsoft ist Analyst für Excel-nahe Aufgaben die bessere Wahl, Researcher für alles, was Text und Quellen braucht.

Beide Agenten gibt es nur mit [Microsoft Copilot](./Microsoft Copilot.md)-Lizenz. Für Nutzer von Copilot Chat ohne Lizenz sind sie nicht verfügbar, auch nicht gegen Verbrauchsabrechnung. Außerdem gilt ein monatliches Kontingent: Stand Oktober 2026 nennt Microsoft 25 Anfragen pro Person und Monat für beide Agenten zusammen. Jede Anfrage will also überlegt sein. Eine schnelle Faktenfrage gehört in den Chat, nicht zum Researcher.

Was dabei herauskommt, ist Vorarbeit, kein fertiges Ergebnis. Researcher zitiert seine Quellen, und du solltest die wichtigsten öffnen, bevor eine Zahl in die Vorstandsvorlage wandert ([Halluzination](./Halluzination.md)). Analyst kann sich bei der Deutung irren, auch wenn der Code korrekt läuft. Beide sehen nur, was du selbst sehen darfst, und halten sich an die Datenschutzregeln des Unternehmens, etwa an [DLP](./DLP.md)-Richtlinien.

Admins können beide Agenten für das Unternehmen blockieren. Entfernen oder entpinnen kannst du sie als Nutzer nicht. Stand Oktober 2026 kannst du im Researcher zwischen mehreren Modellen wählen, wenn die Admins das freigegeben haben.

_Typischer Irrtum:_ Researcher ist nicht einfach „Chat mit Websuche“. Er plant, fragt nach, sucht in mehreren Runden und braucht dafür Minuten. Wer in Sekunden eine Antwort will, ist im normalen Chat besser aufgehoben.

_Im Alltag:_

> „Ich habe Researcher gefragt, wann das nächste Teammeeting ist, und er hat fünf Minuten gebraucht.“
>
> „Dafür ist er nicht gedacht, und du hast eine deiner 25 Anfragen verbraucht. Solche Fragen stellst du dem Chat. Researcher nimmst du für die Marktanalyse, die sonst einen Tag dauert.“
