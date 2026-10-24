---
description: Agent direkt auf einer SharePoint-Site oder Bibliothek, der Fragen zu deren Inhalten beantwortet und in Minuten erstellt ist
english: SharePoint Agent
aliases: [Agents in SharePoint, SharePoint Agents, Agent in SharePoint, .agent-Datei]
---

Ein SharePoint-Agent ist ein [Agent](./Agent.md), der direkt auf einer SharePoint-Site, einer Seite oder einer Dokumentbibliothek sitzt und Fragen zu genau diesen Inhalten beantwortet. Du brauchst dafür weder Copilot Studio noch die IT. Auf jeder Site, für die du berechtigt bist, gibt es bereits einen vorgefertigten Agenten, der die ganze Site kennt. Eigene Agenten erstellst du mit wenigen Klicks.

So geht es: Du öffnest eine Bibliothek, wählst „Agent erstellen“, gibst ihm einen Namen, legst fest, welche Ordner oder Dateien er kennen soll, und schreibst ein paar Sätze Anweisung, etwa „Beantworte Fragen zur Reisekostenrichtlinie und verweise bei Zweifeln an das Reisebüro.“ Fertig ist eine `.agent`-Datei in der Bibliothek. Kolleginnen und Kollegen öffnen sie und stellen Fragen, die Antworten kommen mit Verweisen auf die Quelldokumente. Den Agenten kannst du auch in einen Teams-Chat teilen und dort gemeinsam befragen.

Der große Vorteil ist die Nähe zu den Daten. Der Agent antwortet nur aus den Inhalten, die du ihm zugewiesen hast, und nur Personen, die diese Inhalte ohnehin sehen dürfen. Das ist [Grounding](./Grounding.md) auf eine klar umrissene Quelle. Eine Projektsite bekommt so ihren Projekt-Agenten, die HR-Bibliothek ihren Richtlinien-Agenten, der Vertriebsordner seinen Agenten für Produktblätter.

Dafür ist der Funktionsumfang bewusst klein. Ein SharePoint-Agent beantwortet Fragen. Er legt keine Tickets an, schickt keine Mails und kennt keine Systeme außerhalb von SharePoint. Wer mehr will, nimmt den [Agent Builder in Copilot](./Agent Builder in Copilot.md) oder [Copilot Studio](./Copilot Studio.md). Copilot Studio hat umgekehrt einen eigenen Kanal „SharePoint“, über den du einen vollwertigen Agenten auf einer Site veröffentlichst.

Zur Nutzung brauchst du eine Microsoft 365 Copilot-Lizenz, oder dein Unternehmen hat Pay-as-you-go für SharePoint-Agenten eingerichtet. Erstellen darf, wer eine Lizenz und Schreibrechte auf der Site hat. Site-Besitzer können Agenten für die ganze Site freigeben oder entfernen.

Stand Oktober 2026 stellt Microsoft die `.agent`-Dateien auf das allgemeine Agentenmodell von Copilot um. Ziel ist, dass SharePoint-Agenten auch in der Copilot-App auftauchen und zentral verwaltet werden. Bestehende Agenten funktionieren vorerst weiter, achte aber auf Hinweise im Admin Center und im Message Center.

Ein Fehler, den du vermeiden solltest: ein Agent auf einer Bibliothek, in der alte und neue Fassungen eines Dokuments nebeneinander liegen. Der Agent mischt dann Versionen. Räum die Quelle auf oder schränke ihn auf den Ordner mit den gültigen Dokumenten ein.

_Typischer Irrtum:_ Ein SharePoint-Agent macht keine Inhalte sichtbar, die vorher geschützt waren. Er macht aber schlecht gepflegte Berechtigungen schneller auffindbar, siehe [Oversharing](./Oversharing.md).

_Im Alltag:_

> „Das Projektteam fragt mich dauernd dasselbe zu den Unterlagen auf unserer Site. Lohnt sich dafür ein Agent?“
>
> „Mach einen SharePoint-Agenten auf die Bibliothek mit den freigegebenen Dokumenten. Das dauert fünf Minuten, und das Team fragt den Agenten statt dich.“
