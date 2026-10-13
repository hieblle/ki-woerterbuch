---
description: Die Fähigkeit einer KI, selbst zu suchen, zu rechnen, Dateien zu lesen oder Programme aufzurufen, statt nur Text zu schreiben
aliases: [Werkzeugnutzung, Function Calling, Tools]
---

Tool Use (Werkzeugnutzung, auch Function Calling) bedeutet, dass eine KI nicht nur Text schreibt, sondern selbst etwas tun kann: im Web suchen, rechnen, eine Datei lesen, eine Mail verschicken oder ein Programm aufrufen.

Die Mechanik ist einfacher, als es klingt. Das [Sprachmodell](./Sprachmodell.md) selbst kann nichts ausführen. Es kann nur Text erzeugen. Also schreibt es einen Aufruf in einer vereinbarten Form, zum Beispiel: „Suche in SharePoint nach Angebot Monitore 2026.“ Die Software drumherum erkennt diesen Aufruf, führt die Suche tatsächlich aus und gibt das Ergebnis als Text an das Modell zurück. Das Modell liest das Ergebnis und entscheidet, wie es weitergeht. Du siehst davon meist nur einen Hinweis wie „Durchsucht SharePoint“ oder „Führt Berechnung aus“.

Dieses Hin und Her unterscheidet Tool Use vom reinen Antworten. Ohne Werkzeug rät das Modell, was in deinem Angebot steht. Mit Werkzeug liest es die Datei. Ohne Werkzeug rechnet es im Kopf und verrechnet sich manchmal. Mit Werkzeug ruft es einen Rechner auf. Deshalb sinkt die Gefahr einer [Halluzination](./Halluzination.md), wenn die KI Werkzeuge hat, die an echte Daten herankommen.

Im Arbeitsalltag siehst du Tool Use in Microsoft 365 Copilot, wenn er Mails, Kalender oder Dateien einbezieht. ChatGPT nutzt Websuche, Codeausführung und angebundene Apps. Claude liest Dateien, greift auf [Connectors](./Connector.md) zu und kann mit angebundenen Systemen arbeiten. Welche Werkzeuge zur Verfügung stehen, hängt vom Produkt, von der Lizenz und von den Freigaben deiner IT ab. Der Standardstecker für solche Anbindungen heißt [MCP](./MCP.md). Ein Werkzeug gibt Zugriff auf ein System, ein [Skill](./Skill.md) gibt dem Agenten die Anleitung, wie er es sinnvoll nutzt.

Werkzeuge erweitern auch die Fehlermöglichkeiten. Ein Modell kann das falsche Werkzeug wählen, falsche Angaben übergeben oder das Ergebnis falsch deuten. Schreibt ein Werkzeug nach außen, etwa eine Mail oder einen Datenbankeintrag, ist der Fehler nicht mehr nur ein Satz auf dem Bildschirm. Darum fragen gute Produkte bei solchen Aktionen vorher nach oder lassen den Agenten zuerst in einer [Sandbox](./Sandbox.md) arbeiten.

_Typischer Irrtum:_ Wenn ChatGPT oder Copilot „im Web gesucht“ hat, war das nicht das Modell selbst. Das Modell hat einen Suchauftrag formuliert, ein Programm hat gesucht, das Modell hat die Treffer gelesen.

_Im Alltag:_

> „Copilot hat mir gerade die Summe aus drei Excel-Dateien ausgerechnet. Kann der das wirklich oder hat er geraten?“
>
> „Wenn er daneben anzeigt, dass er die Dateien gelesen und gerechnet hat, war das Tool Use. Dann stimmt es meistens. Ohne diesen Hinweis wäre ich vorsichtig.“
