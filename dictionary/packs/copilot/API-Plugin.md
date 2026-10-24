---
description: Anbindung eines externen Systems an einen deklarativen Agenten über eine OpenAPI-Beschreibung, damit er dort Aktionen ausführen kann
english: API Plugin
aliases: [API Plugin, Plugin, Actions, Aktionen, Plugin Actions, Message Extension Plugin]
---

Ein API-Plugin verbindet einen [deklarativen Agenten](./Deklarativer Agent.md) mit einem externen System, damit der Agent dort nicht nur nachlesen, sondern handeln kann. Grundlage ist eine API (Programmierschnittstelle) des Systems und eine Beschreibung davon im Format OpenAPI. Diese Beschreibung sagt dem Agenten, welche Funktionen es gibt, welche Angaben sie brauchen und was zurückkommt.

So läuft es ab. Das Ticketsystem deines Unternehmens hat eine API mit der Funktion „Ticket anlegen“, die Titel, Beschreibung und Priorität erwartet. Das API-Plugin bringt diese Funktion in den Agenten. Schreibt eine Kollegin im Chat „Leg ein Ticket an, der Drucker im dritten Stock druckt nicht“, erkennt das Modell, dass die Funktion passt, füllt die Felder aus der Nachricht und ruft sie auf. Das ist [Tool Use](./Tool Use.md) in der Copilot-Welt. Je besser die Funktion beschrieben ist, desto treffsicherer wählt der Agent sie aus.

Die Namen haben sich mehrfach geändert, was im Alltag verwirrt. 2023 bis 2025 hieß so gut wie jede Erweiterung von Copilot „Plugin“, vor allem API-Plugins und Plugins auf Basis von Teams-Nachrichtenerweiterungen. Dann sprach Microsoft von „Actions“ (Aktionen). In [Copilot Studio](./Copilot Studio.md) heißt derselbe Baustein heute [Tools](./Tools.md), dort als Tool vom Typ „REST API“. Und seit 2026 ist „Plugin“ der Oberbegriff für ein ganzes Paket, das Agenten, Skills, Connectors und MCP-Server bündeln kann. Wenn jemand „Plugin“ sagt, frag nach, was gemeint ist.

Für neue Anbindungen empfiehlt Microsoft seit 2026 bevorzugt einen MCP-Server statt einer OpenAPI-Beschreibung, siehe [MCP](./MCP.md). Ein MCP-Server beschreibt seine Werkzeuge selbst und funktioniert auch mit anderen KI-Produkten. API-Plugins bleiben nützlich, wenn ein System bereits eine gepflegte OpenAPI-Beschreibung hat.

Zwei Punkte sind heikel. Erstens die Anmeldung: Das Plugin muss sich am Zielsystem ausweisen, möglichst im Namen des Nutzers, damit der Agent nicht mehr darf als die Person im Chat. Das wird gesondert konfiguriert und unterscheidet sich von der Einrichtung von [Copilot Connectors](./Copilot Connectors.md). Zweitens die Sicherheit: Was aus der API zurückkommt, landet im Kontext des Modells. Enthält ein Datensatz eingeschleusten Text, kann das zu einer [Prompt Injection](./Prompt Injection.md) führen. Aktionen mit Außenwirkung sollten deshalb vom Nutzer bestätigt werden müssen.

Bauen können API-Plugins in der Regel Entwickler, zum Beispiel mit dem Microsoft 365 Agents Toolkit. Als Fachanwender formulierst du, welche Funktionen der Agent braucht, und testest, ob er sie richtig auswählt.

_Typischer Irrtum:_ Ein API-Plugin ist kein Copilot Connector. Der Connector holt Inhalte zum Nachschlagen in den Index, das Plugin ruft Funktionen auf und verändert etwas.

_Im Alltag:_

> „Unser Agent kennt die Tickets, kann aber keins anlegen. Woran liegt das?“
>
> „Lesen geht über den Connector, Anlegen braucht ein API-Plugin oder einen MCP-Server für euer Ticketsystem. Das muss die Entwicklung anbinden, du kannst dann im Chat testen.“
