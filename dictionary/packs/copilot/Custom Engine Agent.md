---
description: Agent mit eigener Steuerlogik und eigenem Modell, der in Copilot und Teams erscheint, aber außerhalb gebaut und betrieben wird
aliases: [Custom-Engine-Agent, Custom Engine Agents]
---

Ein Custom Engine Agent ist ein [Agent](./Agent.md), bei dem dein Unternehmen oder ein Anbieter die komplette Maschine selbst baut: das Modell, die Steuerung und die Logik dahinter. In Copilot und Teams sieht er aus wie jeder andere Agent. Was er tut, passiert aber außerhalb von Copilot, zum Beispiel in Azure.

Der Unterschied zum [deklarativen Agenten](./Deklarativer Agent.md) liegt im Kern. Der deklarative Agent nutzt das Modell und den Orchestrator von Microsoft Copilot, also den Teil, der entscheidet, welche Quelle und welches Werkzeug als Nächstes dran ist. Beim Custom Engine Agent bringst du beides selbst mit. Das kann ein kleineres Modell sein, ein feinabgestimmtes Modell für deine Branche oder ein Modell eines anderen Anbieters. Du bestimmst auch, wie viel der Agent allein entscheiden darf, also seinen [Autonomiegrad](./Autonomiegrad.md).

Dafür gibt es zwei Bauwege. Entwickler nutzen das Microsoft 365 Agents SDK, einen Baukasten für .NET, Python oder JavaScript, oft zusammen mit Frameworks wie dem Microsoft Agent Framework oder LangChain. Fachbereiche mit Low-Code-Kenntnissen nutzen [Copilot Studio](./Copilot Studio.md) als Steuerung, denn ein Copilot-Studio-Agent mit eigener Orchestrierung ist aus Sicht von Copilot ebenfalls ein Custom Engine Agent. Am Ende wird der Agent paketiert, im [Agent Store](./Agent Store.md) der Organisation eingereicht und von einem Admin freigegeben.

Custom Engine Agents können Dinge, die deklarativen Agenten verwehrt sind. Sie arbeiten in Teams-Kanälen und Besprechungen mit mehreren Personen gleichzeitig. Sie können von sich aus Nachrichten schicken. Sie können mit anderen Agenten sprechen und auch außerhalb von Microsoft 365 laufen, etwa auf einer Website oder in einer eigenen App.

Der Preis dafür ist Verantwortung. Sicherheit, Datenschutz, [Guardrails](./Guardrails.md) und der verantwortungsvolle Umgang mit KI liegen nicht mehr bei Microsoft 365, sondern bei dem, der den Agenten baut und betreibt. Auch Betrieb, Kosten und Updates gehören dazu. Deshalb lohnt sich der Weg meist nur, wenn ein deklarativer Agent wirklich nicht reicht: bei eigenen Modellen, komplexen Abläufen oder Systemen, die tief in deine Prozesse greifen.

Ein deklarativer Agent lässt sich später in einen Custom Engine Agent umwandeln, Agenten aus dem Agent Builder allerdings nicht.

_Typischer Irrtum:_ „Custom“ heißt nicht „besser“. Für Nachschlage-Agenten und einfache Aufgaben ist ein deklarativer Agent schneller gebaut, günstiger im Betrieb und von Haus aus abgesichert.

_Im Alltag:_

> „Unser Dienstleister will den Service-Agenten als Custom Engine Agent bauen. Warum nicht einfach im Agent Builder?“
>
> „Weil er ein eigenes Modell für eure Produktdaten nutzen und im Teams-Kanal mit dem ganzen Service-Team arbeiten soll. Das geht nur so. Klärt aber vorher, wer Sicherheit und Betrieb verantwortet.“
