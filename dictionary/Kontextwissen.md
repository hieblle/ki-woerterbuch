---
description: Alles, was du der KI im Chat mitgibst, etwa Text, Dateien oder Suchergebnisse, damit sie damit arbeiten kann
english: Contextual knowledge
aliases: [Kontextuelles Wissen]
---

Kontextwissen ist alles, was du einem Sprachmodell im Chat mitgibst: ein eingefügter Text, eine angehängte Datei, ein Suchergebnis oder eine Mail, die Copilot aus deinem Postfach holt. Das Modell liest diese Inhalte im Moment der Anfrage und stützt seine Antwort darauf.

Der Unterschied zum [Trainingswissen](./Trainingswissen.md) ist wichtig. Trainingswissen steckt fest im Modell und ist weder aktuell noch firmenspezifisch. Kontextwissen bringst du selbst mit, es ist genau so aktuell wie dein Material. Deshalb ist es in der Regel zuverlässiger: Das Modell muss nicht raten, was in eurem Angebot steht, es hat den Text vor sich.

Der Kontext landet im [Kontextfenster](./Kontextfenster.md), dem Arbeitsspeicher der Unterhaltung. Dort hat alles Platz, was du in diesem Chat geschrieben oder hochgeladen hast. Bei einem neuen Chat ist das Fenster wieder leer. Wenn du also gestern eine Tabelle hochgeladen hast, kennt die KI sie heute nicht mehr.

Die einfachste Regel lautet: erst Material geben, dann fragen. Statt „Fasse unsere Lieferbedingungen zusammen“ hängst du die Lieferbedingungen an und schreibst dann die Frage. Das gilt für ChatGPT genauso wie für Claude oder Gemini. Microsoft 365 Copilot nimmt dir einen Teil dieser Arbeit ab, weil er passende Dokumente aus SharePoint und Outlook selbst heraussucht, das Prinzip bleibt aber dasselbe.

Woran du merkst, dass Kontext fehlt: Die Antwort bleibt vage, nennt erfundene Details oder widerspricht dem, was du weißt. Dann prüfst du, ob das Material wirklich im Chat ist, und reichst es nach.

Drei Wege bringen Kontext in den Chat: [Dokumente hochladen](./Dokumente hochladen.md), die [Websuche](./Websuche.md) und [RAG](./RAG.md), bei dem ein System die passenden Firmendokumente automatisch heraussucht.

_Typischer Irrtum:_ „Die KI hat doch Zugriff auf alles in der Firma.“ Nein, sie sieht nur, was im aktuellen Chat ist oder was ein Werkzeug wie Copilot für diese eine Anfrage geholt hat.

_Im Alltag:_

> „Kann ich ChatGPT einfach fragen, was in unserem neuen Rahmenvertrag steht?“
>
> „Nur wenn du ihn vorher reinkopierst. Ohne Kontextwissen kennt das Modell den Vertrag nicht und fängt an zu raten.“
>
> „Und beim Copilot?“
>
> „Der sucht ihn in SharePoint, wenn du drauf Zugriff hast. Kontrollier aber, ob er wirklich den richtigen Vertrag gefunden hat.“
