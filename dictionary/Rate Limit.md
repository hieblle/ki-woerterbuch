---
description: Obergrenze, wie viel du in einem Zeitraum nutzen darfst, etwa Nachrichten, Token oder Credits; Agenten erreichen sie schneller
english: Rate limit
aliases: [Nutzungslimit, Kontingent, Nachrichtenlimit, Quota, Credits]
---

Ein Rate Limit (Nutzungslimit) ist eine Obergrenze dafür, wie viel du von einem KI-Dienst in einem bestimmten Zeitraum nutzen darfst: Nachrichten pro Tag, [Token](./Token.md) pro Minute oder Credits pro Monat. Ist die Grenze erreicht, bekommst du eine Meldung wie „Du hast dein Limit erreicht, versuch es in zwei Stunden wieder“, oder der Dienst schaltet auf ein kleineres Modell um.

Was gezählt wird, unterscheidet sich je nach Produkt. ChatGPT und Claude zählen Nachrichten oder Token in einem Zeitfenster, das sich laufend verschiebt. Microsoft 365 Copilot zeigt im Chat selten Grenzen, rechnet aber Agenten aus Copilot Studio und automatische Aktionen über Credits ab, die das Unternehmen einkauft. Welche Grenzen für dich gelten, hängt von der [Business-Lizenz](./Business-Lizenz.md) ab, die dein Unternehmen hat. Die Limits von Einzelkonten und Firmenkonten unterscheiden sich oft deutlich.

Mit Agenten wird das Thema wichtiger. Ein [Agent](./Agent.md) stellt nicht eine Anfrage, sondern viele: Jeder Schritt seiner Schleife ist ein eigener Aufruf des Modells, und jede gelesene Datei zählt als Eingabe. Eine Aufgabe, die dir wie eine Frage vorkommt, kann im Hintergrund aus 30 oder 50 Anfragen bestehen. Ein [Multi-Agent-System](./Multi-Agent-System.md) vervielfacht das noch einmal. Deshalb erreichst du mit Agenten ein Limit, das dir im Chat nie aufgefallen ist, und deshalb dauert ein Agentenlauf Minuten statt Sekunden.

Du merkst ein Rate Limit daran, dass der Agent mitten in der Aufgabe stehen bleibt, eine Fehlermeldung zeigt oder deutlich langsamer wird. Manche Produkte warten automatisch und machen später weiter, andere brechen ab. Prüfe in diesem Fall, was bis dahin erledigt wurde, bevor du den Lauf neu startest, sonst macht der Agent die ersten Schritte doppelt.

Was du tun kannst: Fasse mehrere kleine Fragen in einen Auftrag zusammen, statt den Agenten zehnmal einzeln loszuschicken. Gib ihm die passenden Dateien direkt mit, statt ihn danach suchen zu lassen, denn jede Suche kostet Anfragen. Plane große Läufe nicht kurz vor einem Termin ein. Und wenn dein Team regelmäßig an Grenzen stößt, ist das ein Hinweis für Einkauf oder IT, dass die Lizenz nicht mehr zur Nutzung passt.

_Typischer Irrtum:_ Ein Rate Limit sagt nichts über die Qualität des Modells. Es ist eine Mengenregel des Anbieters, keine Schwäche der KI.

_Im Alltag:_

> „Der Agent ist bei der Auswertung nach der Hälfte stehen geblieben. Gestern ging das noch.“
>
> „Wahrscheinlich das Rate Limit. Der Lauf besteht aus Dutzenden Anfragen, da ist das Kontingent schneller voll als im Chat. Schau, was schon fertig ist, und lass ihn in einer Stunde den Rest machen.“
