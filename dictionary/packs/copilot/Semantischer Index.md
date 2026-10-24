---
description: Automatisch erzeugter Index über die Microsoft-365-Daten, mit dem Copilot nach Bedeutung statt nur nach Wörtern sucht
english: Semantic Index
aliases: [Semantic Index for Copilot, Semantische Indizierung, Semantic Indexing]
---

Der semantische Index ist eine Suchschicht, die Microsoft automatisch über die Daten in [Microsoft Graph](./Microsoft Graph.md) legt. Er sorgt dafür, dass [Microsoft Copilot](./Microsoft Copilot.md) Inhalte nach Bedeutung findet und nicht nur nach exakten Wörtern. Fragst du nach „Kündigungsfrist“, findet er auch ein Dokument, in dem nur „Vertragsende nach drei Monaten“ steht.

Technisch arbeitet der Index mit [Embeddings](./Embeddings.md): Texte werden in Zahlenreihen übersetzt, und ähnliche Inhalte liegen in diesem Zahlenraum nahe beieinander. Dazu kommt die klassische Wortsuche. Beides zusammen liefert das Material, das Copilot vor dem Sprachmodell in den Prompt einbaut. Das Muster dahinter heißt [RAG](./RAG.md): erst suchen, dann antworten.

Es gibt zwei Ebenen. Der Nutzer-Index umfasst dein persönliches Arbeitsumfeld: dein Postfach, deine Dateien, Dokumente, in denen du erwähnt wirst. Der Tenant-Index umfasst organisationsweit Dateien auf SharePoint, die für mehrere Personen zugänglich sind, sowie Daten aus [Copilot Connectors](./Copilot Connectors.md). Indexiert werden unter anderem Word, PowerPoint, PDF, OneNote und SharePoint-Seiten. Neue Mails erscheinen fast sofort, neue SharePoint-Dokumente in der Regel innerhalb eines Tages.

Der Index ändert keine Rechte. Er merkt sich zu jedem Inhalt, wer ihn sehen darf, und liefert dir nur Treffer, die du ohnehin öffnen könntest. Ein Link „Jeder in der Organisation“ bringt eine Datei auch nicht automatisch in den Tenant-Index. Erst wenn du den Link öffnest, landet sie in deinem Nutzer-Index. Wo Inhalte trotzdem zu breit sichtbar sind, liegt das an den Freigaben, nicht am Index, siehe [Oversharing](./Oversharing.md).

Für Admins wichtig: Der semantische Index lässt sich nicht abschalten, laut Microsoft ist er Teil der Microsoft-365-Suche. Einzelne Sites nimmst du heraus, indem du sie aus den Suchergebnissen ausschließt oder [Restricted Content Discovery](./Restricted Content Discovery.md) einsetzt. Gespeichert wird der Index in der Region, in der auch Postfach oder Site liegen, für Kunden der [EU Data Boundary](./EU Data Boundary.md) also in der EU.

Seit 2026 spricht Microsoft zusätzlich von Work IQ als Schicht, über die Agenten auf Daten, Kontext und Werkzeuge im Graph zugreifen. Stand Oktober 2026 ist der semantische Index weiterhin der Begriff für die Suche selbst, Work IQ eher der Überbegriff für den Zugriff von Agenten.

_Typischer Irrtum:_ Viele denken, Copilot lese bei jeder Frage alle Dateien der Firma. Tatsächlich fragt es den Index und bekommt nur eine Handvoll passender Ausschnitte.

_Im Alltag:_

> „Ich habe nach ‚Onboarding-Checkliste‘ gefragt und Copilot hat mir ein Dokument namens ‚Erste Woche neue Kollegen‘ gezeigt. Wie kommt das?“
>
> „Das ist der semantische Index. Er sucht nach Bedeutung, nicht nach Dateinamen. Schau trotzdem rein, ob es die aktuelle Fassung ist.“
