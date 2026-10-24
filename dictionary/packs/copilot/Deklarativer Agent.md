---
description: Agent, der Modell und Steuerung von Microsoft Copilot nutzt und nur über Instructions, Knowledge und Tools konfiguriert wird
english: Declarative Agent
aliases: [Declarative Agent, Copilot Chat Agent, Copilot Agent, Copilot Extension]
---

Ein deklarativer Agent ist ein [Agent](./Agent.md), der auf dem Modell und der Steuerung von Microsoft Copilot aufsetzt. Du baust kein eigenes KI-System, sondern beschreibst nur, was der Agent wissen, tun und lassen soll. „Deklarativ“ heißt: Du erklärst das Ziel, Copilot kümmert sich um den Rest.

Drei Bausteine machen einen deklarativen Agenten aus. [Instructions](./Instructions.md) (Anweisungen) legen fest, wer der Agent ist, wie er antwortet und was er nicht tun soll. [Knowledge](./Knowledge.md) (Wissen) nennt die Quellen, aus denen er antwortet: SharePoint-Bibliotheken, OneDrive-Ordner, Teams-Nachrichten oder Daten aus [Copilot Connectors](./Copilot Connectors.md). [Tools](./Tools.md) (Werkzeuge) erlauben ihm, etwas zu tun, zum Beispiel ein Ticket anzulegen oder eine Datenbank abzufragen, über ein [API-Plugin](./API-Plugin.md) oder einen MCP-Server. Dazu kommen Gesprächsstarter, also Beispielfragen, die Nutzer anklicken können.

Der Agent läuft dort, wo Copilot läuft: im Chat von [Microsoft Copilot](./Microsoft Copilot.md), in Teams, Word, Excel und Outlook. Du rufst ihn mit @ und seinem Namen auf. Weil er Modell, Sicherheit und Compliance von Microsoft 365 erbt, musst du nichts hosten und keine eigene Infrastruktur betreiben. Er sieht nur Daten, die der angemeldete Nutzer auch selbst sehen dürfte.

Gebaut wird ein deklarativer Agent ohne Code im [Agent Builder in Copilot](./Agent Builder in Copilot.md), mit mehr Möglichkeiten in [Copilot Studio](./Copilot Studio.md) oder von Entwicklern mit dem Microsoft 365 Agents Toolkit. In Copilot Studio heißen diese Agenten seit Oktober 2026 auch „Copilot Chat agents“. Frühere Namen waren „Copilot Agents“ und „Copilot Extensions“.

Zwei Grenzen solltest du kennen. Ein deklarativer Agent wird immer von einem Menschen im Chat gestartet. Er kann nicht von selbst auf eine neue E-Mail reagieren, dafür braucht es einen [autonomen Agenten](./Autonomer Agent.md). Und er nutzt das Modell, das Microsoft bereitstellt. Wer ein eigenes Modell oder eine eigene Steuerlogik braucht, baut einen [Custom Engine Agent](./Custom Engine Agent.md).

Für die meisten Aufgaben in Fachabteilungen reicht der deklarative Weg: ein Agent, der Fragen zur Reisekostenrichtlinie beantwortet, einer, der Angebotstexte aus der Produktdatenbank entwirft, einer, der Onboarding-Fragen aus dem Intranet beantwortet.

_Typischer Irrtum:_ Ein deklarativer Agent ist kein abgespeckter Agent. Er nutzt dasselbe Modell und dieselbe Steuerung wie Copilot selbst, nur mit deinen Anweisungen und deinem Wissen.

_Im Alltag:_

> „Die IT sagt, unser HR-Agent sei ein deklarativer Agent. Heißt das, er ist weniger gut?“
>
> „Nein. Er läuft auf dem normalen Copilot, nur mit euren Anweisungen und dem Mitarbeiterhandbuch als Wissen. Deshalb war er auch so schnell fertig.“
