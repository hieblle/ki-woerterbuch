---
description: Wissensquellen eines Copilot-Studio-Agenten, etwa SharePoint, Dateien, Websites oder Dataverse, auf die er Antworten stützt
aliases: [Wissensquellen, Knowledge Sources, Wissen, Ungrounded Responses]
---

Knowledge (in der deutschen Oberfläche „Wissen“) ist der Bereich in [Copilot Studio](./Copilot Studio.md), in dem du festlegst, woraus dein [Agent](./Agent.md) seine Antworten holt. Die einzelnen Quellen heißen Wissensquellen (knowledge sources). Technisch ist das [Grounding](./Grounding.md): Der Agent sucht in den Quellen und formuliert aus den Treffern eine Antwort mit Quellenangaben, statt aus dem Trainingswissen des Modells zu antworten. Das Verfahren dahinter ist [RAG](./RAG.md).

Als Wissensquellen kannst du anbinden: öffentliche Websites (durchsucht per Bing, auf deine Domains begrenzt), hochgeladene Dateien, SharePoint-Seiten und OneDrive-Ordner, Dataverse-Tabellen, Unternehmensdaten über [Copilot Connectors](./Copilot Connectors.md) im [Microsoft Graph](./Microsoft Graph.md), Azure AI Search sowie in der Vorschau Geschäftssysteme über [Power Platform Connectors](./Power Platform Connectors.md). Welche Quellen es gibt, hängt vom [Harness](./Harness.md) ab.

Rechte bleiben erhalten. Bei SharePoint, Dataverse und Connectors muss sich die Nutzerin anmelden, und der Agent antwortet nur aus Inhalten, die sie selbst öffnen dürfte. Hochgeladene Dateien dagegen liegen beim Agenten und sind für alle sichtbar, die ihn nutzen dürfen. Das ist der häufigste Grund für ungewollte Weitergabe: Jemand lädt ein internes Dokument hoch und teilt den Agenten mit der ganzen Firma.

Ein paar Einstellungen entscheiden über die Qualität. „Allow ungrounded responses“ erlaubt dem Agenten, ohne Treffer in den Quellen aus dem allgemeinen Modellwissen zu antworten. Für einen HR-Agenten, der nur aus dem Handbuch antworten soll, schaltest du das aus. „Web search“ ergänzt eine Bing-Suche. „Tenant graph grounding with semantic search“ nutzt den [Semantischen Index](./Semantischer Index.md) von Microsoft Copilot, setzt die Anmeldung mit Microsoft voraus und kostet für Nutzer ohne Copilot-Lizenz [Copilot Credits](./Copilot Credits.md). Dazu kommt eine Inhaltsmoderation in mehreren Stufen, die bei strenger Einstellung öfter „keine Antwort gefunden“ liefert.

Limits bei generativer Orchestrierung, Stand Oktober 2026: je 25 Websites und SharePoint-Adressen, Dataverse und Connectors unbegrenzt. Ab 25 Quellen filtert ein Modell vor, welche durchsucht werden. Viele Quellen machen Antworten nicht besser; veraltete Dokumente neben aktuellen führen zu Widersprüchen. Nimm lieber wenige, gepflegte Quellen und benenne eine Person, die sie aktuell hält.

Bei klassischer Orchestrierung greifen Wissensquellen nur, wenn kein [Topic](./Topics.md) passt, über [Generative Answers](./Generative Answers.md). Bei generativer Orchestrierung durchsucht der Agent das Wissen direkt als eingebautes Werkzeug.

_Typischer Irrtum:_ Wissen wird nicht ins Modell „eingelernt“. Der Agent liest zur Laufzeit in den Quellen nach. Änderst du das Dokument, ändert sich die Antwort, ohne dass du den Agenten neu bauen musst.

_Im Alltag:_

> „Der Agent erfindet Fristen, die so nicht in unserer Reiserichtlinie stehen.“
>
> „Prüf, ob ‚Allow ungrounded responses‘ an ist. Schalt es aus, dann sagt er bei fehlenden Treffern, dass er nichts findet, statt aus dem Modellwissen zu raten.“
