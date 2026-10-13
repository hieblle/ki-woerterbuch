---
description: KI-System, das eine Aufgabe in mehreren Schritten selbstständig erledigt, aus Sprachmodell, Werkzeugen, Anweisungen und Schleife
english: Agent
aliases: [KI-Agent]
---

Ein Agent ist ein KI-System, das eine Aufgabe in mehreren Schritten selbstständig erledigt. Er besteht aus vier Teilen: einem Sprachmodell, Werkzeugen, Anweisungen und einer Schleife, die das Ganze zusammenhält.

Das [Sprachmodell](./Sprachmodell.md) ist der Teil, der denkt und formuliert. Es liest die Aufgabe, überlegt, was zu tun ist, und entscheidet, welches Werkzeug als Nächstes dran ist. Die Werkzeuge sind das, womit der Agent nach außen greift: Websuche, Dateizugriff, Kalender, E-Mail, ein Taschenrechner oder eine Firmendatenbank. Wie dieser Zugriff technisch abläuft, beschreibt der Eintrag [Tool Use](./Tool Use.md). Die Anweisungen legen fest, was der Agent darf, wie er sich verhalten soll und wann er fertig ist. Sie kommen vom Hersteller oder von deinem Unternehmen, ergänzt durch deinen eigenen [Prompt](./Prompt.md), einen geladenen [Skill](./Skill.md) oder das, was der Agent sich im [Memory](./Memory.md) gemerkt hat.

Die Schleife macht aus einem [Chatbot](./Chatbot.md) einen Agenten. Der Ablauf wiederholt sich: Modell überlegt, ruft ein Werkzeug auf, bekommt das Ergebnis zurück, überlegt erneut. Das geht so lange, bis die Aufgabe erledigt ist, ein Fehler auftritt oder eine Grenze erreicht ist, zum Beispiel eine maximale Anzahl an Schritten. Du musst nicht nach jedem Schritt nachfragen.

Im Alltag begegnen dir Agenten unter verschiedenen Namen. Copilot Agents in Microsoft 365 erledigen Aufgaben in Teams, SharePoint oder Outlook. ChatGPT Agent kann im Browser recherchieren und Formulare ausfüllen. Claude arbeitet mit Dateien, Connectors und eigenen Werkzeugen. Ein Beispiel aus HR: „Sammle alle Bewerbungen für die Stelle im Controlling aus dem Postfach, lege sie im Bewerberordner ab und erstelle eine Übersicht mit Name, Eingangsdatum und Abschluss.“ Der Agent liest, sortiert, speichert und berichtet.

Ein Agent ist nur so gut wie seine Werkzeuge und Anweisungen. Hat er keinen Zugriff auf SharePoint, kann er dort nichts ablegen. Ist die Aufgabe unklar formuliert, plant er in die falsche Richtung und arbeitet mehrere Schritte lang am Falschen. Deshalb lohnt es sich, das Ziel und den gewünschten Endzustand genau zu beschreiben und das Ergebnis am Ende zu prüfen.

_Typischer Irrtum:_ „Agent“ ist kein geschütztes Wort. Manche Produkte nennen auch einen einfachen Chatbot mit festem Skript so. Ein echter Agent plant seine Schritte selbst und nutzt Werkzeuge.

_Im Alltag:_

> „Was ist eigentlich der Unterschied zwischen dem Copilot-Chat und einem Copilot Agent?“
>
> „Der Chat antwortet dir. Der Agent bekommt eine Aufgabe, nutzt Werkzeuge wie SharePoint oder Outlook und arbeitet in Schleife, bis sie erledigt ist.“
