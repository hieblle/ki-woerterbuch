---
description: Vorkonfigurierte KI-Helfer für wiederkehrende Aufgaben, etwa Custom GPTs, Claude-Projekte, Gems oder Copilot Agents
english: Custom GPTs / Copilot agents
aliases: [Custom GPT, Projekte, Gems]
---

Eigene Assistenten sind KI-Helfer, die du einmal für eine wiederkehrende Aufgabe einrichtest und danach immer wieder aufrufst. Statt jedes Mal zu erklären, was du brauchst, steckt die Erklärung schon drin. Bei ChatGPT heißen sie Custom GPTs, bei Claude Projekte, bei Gemini Gems und bei Microsoft 365 Copilot Agents, die du im Agent Builder zusammenstellst.

Drei Dinge stecken in so einem Assistenten. Erstens die [Anweisungen](./Anweisungen.md): ein fester Text, der beschreibt, was der Assistent tun soll, in welchem Ton und mit welchen Regeln. Zweitens Wissen: Dokumente, die du hinterlegst, etwa die Reiserichtlinie, Produktdatenblätter oder Textbausteine für Angebote. Drittens Werkzeuge: Zugriff auf Websuche, auf bestimmte SharePoint-Ordner oder auf andere Systeme, siehe [Connector](./Connector.md).

Ein Beispiel aus dem Einkauf: Du baust einen Assistenten „Lieferantenanfrage“, der eure Standardfragen, das Anschreiben-Muster und die Einkaufsbedingungen kennt. Ein Kollege gibt nur noch den Lieferanten und den Artikel ein und bekommt eine fertige Anfrage im Firmenton. Im HR-Bereich ist ein Assistent denkbar, der Fragen zu Urlaub und Gleitzeit aus dem Betriebshandbuch beantwortet, mit dem Hinweis, dass die Personalabteilung das letzte Wort hat.

Der Vorteil liegt in der Wiederholbarkeit. Alle im Team bekommen Antworten auf derselben Grundlage, und eine gute [Prompt-Vorlage](./Prompt-Vorlage.md) muss nicht mehr herumgeschickt werden, sie ist eingebaut. Der Nachteil: Wer den Assistenten gebaut hat, trägt Verantwortung für das, was drinsteckt. Veraltet die hinterlegte Richtlinie, antwortet der Assistent monatelang falsch, und niemand merkt es.

Du erkennst einen schlecht gebauten Assistenten daran, dass er allgemein bleibt oder Dinge erfindet, die nicht in seinen Dokumenten stehen. Dann sind meist die Anweisungen zu vage oder die Wissensdateien unvollständig. Hilfreich ist eine Anweisung wie „Antworte nur auf Basis der hinterlegten Dokumente und sag, wenn etwas nicht drinsteht.“

_Typischer Irrtum:_ „Ein eigener Assistent ist ein eigenes, trainiertes Modell.“ Nein, es ist dasselbe Modell wie im normalen Chat, nur mit festen Anweisungen und mitgegebenen Dokumenten.

_Im Alltag:_

> „Ich erklär dem Copilot jedes Mal neu, wie unsere Angebote aussehen sollen.“
>
> „Bau dir einen eigenen Assistenten im Agent Builder. Anweisungen rein, zwei Musterangebote als Wissen dazu, und das ganze Team kann ihn nutzen.“
