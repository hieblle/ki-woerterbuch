---
description: Die KI holt aktuelle Informationen aus dem Internet und verwendet sie als Kontext für die Antwort
english: Web search
aliases: [Live-Daten, Internetsuche]
---

Websuche bedeutet, dass die KI vor dem Antworten im Internet nachschlägt und die gefundenen Seiten als Kontext nutzt. ChatGPT hat eine eingebaute Suche, Microsoft 365 Copilot greift auf Bing zu, Gemini auf die Google-Suche, und Claude bringt ebenfalls eine Websuche mit.

Der Grund dafür ist einfach. Das [Trainingswissen](./Trainingswissen.md) eines Modells endet an seinem [Wissensstand](./Wissensstand.md). Fragst du nach dem aktuellen Leitzins, einer neuen Verordnung oder den Öffnungszeiten eines Amts, muss das Modell raten oder suchen. Mit Websuche holt es sich die Information frisch und legt sie als [Kontextwissen](./Kontextwissen.md) in den Chat. Du erkennst das daran, dass die Antwort Links oder Fußnoten enthält und oft eine kurze Meldung wie „Suche im Web“ erscheint.

Die Websuche löst nicht alle Probleme. Die KI findet, was im Netz steht, und das kann veraltet, einseitig oder falsch sein. Ein Blogbeitrag von vor drei Jahren wird genauso verarbeitet wie die aktuelle Seite des Ministeriums. Außerdem fasst das Modell die Fundstellen zusammen und kann dabei Details verdrehen. Deshalb gilt: Links öffnen und prüfen, ob die Quelle das wirklich sagt. Mehr dazu unter [Quellenangabe](./Quellenangabe.md).

Im Arbeitsalltag ist die Websuche nützlich für Marktrecherchen, Lieferantenprüfung, aktuelle Rechtslage oder Hintergrund zu einem Kunden vor einem Termin. Für Firmeninternes bringt sie nichts, dafür braucht es [RAG](./RAG.md) oder einen Upload. Bei manchen Werkzeugen kannst du die Suche ein- und ausschalten. Wenn die Antwort veraltet wirkt, prüfe zuerst, ob die Suche überhaupt aktiv war.

Bei vertraulichen Themen lohnt ein Blick in die Firmenregeln. Eine Suchanfrage mit Kundennamen oder Projektdetails verlässt das Unternehmen und landet beim Suchanbieter.

_Typischer Irrtum:_ „Die KI ist doch online, also weiß sie alles Aktuelle.“ Nur wenn die Websuche aktiv ist und für diese Frage auch ausgelöst wurde. Sonst antwortet sie aus dem Trainingswissen.

_Im Alltag:_

> „Gemini hat mir gesagt, die Förderung läuft noch, aber das ist seit Sommer vorbei.“
>
> „Dann war wahrscheinlich keine Websuche aktiv. Stell die Frage nochmal mit Suche und schau dir die verlinkte Seite an.“
