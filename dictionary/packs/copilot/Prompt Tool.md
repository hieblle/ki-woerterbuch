---
description: Tool in Copilot Studio, das einen einzelnen Modellaufruf mit festen Anweisungen, Eingaben und wählbarem Modell ausführt
english: Prompt tool
aliases: [Prompt Builder, Prompt-Builder, Prompt Assistant, AI Builder Prompts, Dynamic Prompt]
---

Das Prompt Tool ist ein [Tool](./Tools.md) in [Copilot Studio](./Copilot Studio.md), das genau einen Aufruf eines Sprachmodells ausführt: feste Anweisungen, dazu Eingaben aus dem Gespräch, heraus kommt ein Text oder eine strukturierte Antwort. Gebaut wird es im Prompt Builder, einem Editor mit Vorschau, in dem du die Anweisung schreibst, Platzhalter für Eingaben setzt und sofort testest.

Typische Einsätze sind klar umrissene Teilaufgaben. Aus einer eingehenden Reklamation Produkt, Fehler und Dringlichkeit herausziehen. Eine Kundenanfrage in eine von fünf Kategorien einordnen. Ein Protokoll in drei Sätzen zusammenfassen. Eine Antwort in den Ton deines Unternehmens umformulieren. Der Agent übergibt den Text an das Prompt Tool, bekommt das Ergebnis zurück und arbeitet damit weiter, zum Beispiel in einem [Agent Flow](./Agent Flows.md). Eingaben können Text, Bilder oder Dokumente sein. Optional hängst du eine Wissensquelle an, damit der Prompt mit [Grounding](./Grounding.md) auf Firmendaten antwortet statt nur aus dem Modellwissen.

Der Prompt Builder ist aus den AI Builder Prompts der Power Platform hervorgegangen, die unter Namen wie „Create text with GPT“ oder „Dynamic prompt“ liefen. Deshalb begegnet dir derselbe Baustein auch in Power Automate und Power Apps. In Copilot Studio ist er als Tool-Typ „Prompt“ eingebunden.

Eine Besonderheit ist die Modellwahl je Prompt. Du wählst aus den verwalteten Modellen, darunter GPT- und Claude-Varianten, oder bindest ein eigenes Deployment aus dem Azure AI Foundry Model Catalog an, etwa ein offenes Modell wie Llama oder Phi. Dieses „Bring your own model“ gilt nur für Prompts, nicht für das primäre Modell des Agenten, das über [Model Selection](./Model Selection.md) eingestellt wird. Eigene Foundry-Modelle werden über Azure abgerechnet, die verwalteten Modelle nach [Token](./Token.md) über [Copilot Credits](./Copilot Credits.md). Für jeden Prompt lässt sich die Inhaltsmoderation einzeln einstellen.

Der Unterschied zu den [Instructions](./Instructions.md) des Agenten: Die Instructions steuern das ganze Gespräch, ein Prompt Tool erledigt einen abgegrenzten Schritt mit immer gleicher Anweisung. Das macht es gut testbar. Du legst im Prompt Builder zehn Beispiel-Eingaben an und siehst sofort, ob die Ausgabe stimmt, bevor der Agent es nutzt.

_Typischer Irrtum:_ Ein Prompt Tool ist kein Chat. Es hat kein Gedächtnis zwischen zwei Aufrufen und sieht nur, was du ihm als Eingabe übergibst.

_Im Alltag:_

> „Unser Agent soll aus Lieferanten-E-Mails die Rechnungsnummer und den Betrag herausziehen. Muss das ins Instructions-Feld?“
>
> „Besser als eigenes Prompt Tool. Da schreibst du die Anweisung einmal, definierst die Ausgabefelder und testest sie mit echten E-Mails. Der Agent ruft es dann auf.“
