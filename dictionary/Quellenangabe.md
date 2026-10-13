---
description: Antworten, die auf konkrete Dokumente oder Links verweisen, damit du die Aussage nachprüfen kannst
english: Grounding / citations
aliases: [Grounding, Zitate]
---

Eine Quellenangabe ist der Verweis in einer KI-Antwort auf das Dokument, die Mail oder die Webseite, aus der eine Aussage stammt. Sie erscheint als Fußnote, Link oder Dateiname und macht es möglich, die Antwort zu prüfen, statt sie glauben zu müssen.

Quellenangaben entstehen, wenn das Modell mit Material arbeitet, das es tatsächlich vor sich hat. Bei der [Websuche](./Websuche.md) sind das gefundene Seiten, bei [RAG](./RAG.md) die herausgesuchten Dokumentabschnitte, beim Upload die angehängte Datei. Fachleute sprechen von Grounding: Die Antwort ist in konkreten Quellen „verankert“. Microsoft 365 Copilot zeigt unter vielen Antworten nummerierte Verweise auf die verwendeten Mails und Dateien, ChatGPT, Gemini und Claude blenden bei Websuche Links ein.

Der Nutzen liegt auf der Hand. Ohne Quelle kannst du nur raten, ob eine Zahl aus dem aktuellen Vertrag oder aus dem [Trainingswissen](./Trainingswissen.md) des Modells stammt. Mit Quelle öffnest du das Dokument, suchst die Stelle und siehst in einer Minute, ob die Aussage stimmt. Das ist der Kern von [Mensch prüft](./Mensch prüft.md): nicht alles nachrechnen, aber die Herkunft kontrollieren, bevor etwas nach außen geht.

Vorsicht trotzdem: Auch Quellen können erfunden sein. Ein Modell ohne Websuche oder RAG kann aus seinem Trainingswissen heraus überzeugend klingende Titel, Autoren und Links produzieren, die es nicht gibt. Das ist eine Form der [Halluzination](./Halluzination.md). Du erkennst es daran, dass der Link ins Leere führt, das Dokument nicht existiert oder die zitierte Stelle etwas anderes sagt. Deshalb die Regel: Link öffnen, Stelle lesen. Eine Quelle, die du nicht aufgerufen hast, ist keine Prüfung.

Ein zweiter Fehler ist leiser. Die Quelle existiert, aber sie ist die falsche: eine alte Version, ein Entwurf, ein Dokument zu einem anderen Produkt. Hier hilft ein Blick auf Datum und Dateipfad.

Im Alltag lohnt es sich, Quellen aktiv einzufordern. Ein Zusatz wie „Gib zu jeder Aussage an, aus welchem Dokument sie stammt“ im [Prompt](./Prompt.md) macht die Antwort prüfbar und zeigt, wo das Modell keine Grundlage hatte.

_Typischer Irrtum:_ „Wenn Links dabei sind, ist die Antwort belegt.“ Erst wenn du den Link geöffnet und die Stelle gefunden hast, ist sie belegt.

_Im Alltag:_

> „Copilot sagt, die Lieferfrist wurde auf 14 Tage verkürzt, mit Quelle.“
>
> „Welche Datei zitiert er? Mach sie auf und schau, ob das die unterschriebene Version ist oder der Entwurf vom Einkauf.“
>
> „Der Entwurf.“
>
> „Dann gilt die Quellenangabe für den Entwurf, nicht für den Vertrag. Frag nochmal nach der unterschriebenen Fassung.“
