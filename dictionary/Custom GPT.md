---
description: Vorkonfigurierter KI-Helfer für eine wiederkehrende Aufgabe, bei Copilot Agent, bei Gemini Gem, bei Claude Projekt genannt
aliases: [Eigene Assistenten, Copilot Agent, Gem, Projekt]
---

Ein Custom GPT ist ein KI-Helfer, den du einmal für eine wiederkehrende Aufgabe einrichtest und danach immer wieder aufrufst (ein eigener, vorkonfigurierter Assistent). Statt jedes Mal zu erklären, was du brauchst, steckt die Erklärung schon drin. Der Name stammt von ChatGPT. Bei Microsoft 365 Copilot heißen solche Helfer Agents, die du im Agent Builder zusammenstellst, bei Gemini Gems und bei Claude Projekte. Gemeint ist immer dasselbe, und dieser Eintrag verwendet Custom GPT als Sammelbegriff.

Drei Dinge stecken in so einem Custom GPT. Erstens der [Systemprompt](./Systemprompt.md): ein fester Text, der beschreibt, was der Helfer tun soll, in welchem Ton und mit welchen Regeln. Zweitens Wissen: Dokumente, die du hinterlegst, etwa die Reiserichtlinie, Produktdatenblätter oder Textbausteine für Angebote. Drittens Werkzeuge: Zugriff auf Websuche, auf bestimmte SharePoint-Ordner oder auf andere Systeme, siehe [Connector](./Connector.md).

Ein Beispiel aus dem Einkauf: Du baust einen Custom GPT „Lieferantenanfrage“, der eure Standardfragen, das Anschreiben-Muster und die Einkaufsbedingungen kennt. Ein Kollege gibt nur noch den Lieferanten und den Artikel ein und bekommt eine fertige Anfrage im Firmenton. Im HR-Bereich ist ein Custom GPT denkbar, der Fragen zu Urlaub und Gleitzeit aus dem Betriebshandbuch beantwortet, mit dem Hinweis, dass die Personalabteilung das letzte Wort hat.

Der Vorteil liegt in der Wiederholbarkeit. Alle im Team bekommen Antworten auf derselben Grundlage, und eine gute [Prompt-Vorlage](./Prompt-Vorlage.md) muss nicht mehr herumgeschickt werden, sie ist eingebaut. Der Nachteil: Wer den Custom GPT gebaut hat, trägt Verantwortung für das, was drinsteckt. Veraltet die hinterlegte Richtlinie, antwortet der Helfer monatelang falsch, und niemand merkt es.

Du erkennst einen schlecht gebauten Custom GPT daran, dass er allgemein bleibt oder Dinge erfindet, die nicht in seinen Dokumenten stehen. Dann ist meist der Systemprompt zu vage oder die Wissensdateien sind unvollständig. Hilfreich ist eine Anweisung wie „Antworte nur auf Basis der hinterlegten Dokumente und sag, wenn etwas nicht drinsteht.“

_Typischer Irrtum:_ „Ein Custom GPT ist ein eigenes, trainiertes Modell.“ Nein, es ist dasselbe Modell wie im normalen Chat, nur mit festen Anweisungen und mitgegebenen Dokumenten.

_Im Alltag:_

> „Ich erklär dem Copilot jedes Mal neu, wie unsere Angebote aussehen sollen.“
>
> „Bau dir einen Agent im Agent Builder, das ist bei Copilot das Gegenstück zum Custom GPT. Anweisungen rein, zwei Musterangebote als Wissen dazu, und das ganze Team kann ihn nutzen.“
