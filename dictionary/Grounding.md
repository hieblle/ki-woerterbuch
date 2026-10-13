---
description: Antworten auf konkrete Dokumente oder Links stützen, sichtbar an Quellenangaben, damit du die Aussage nachprüfen kannst
aliases: [Quellenangabe, Zitate, Verweise]
---

Grounding heißt, dass eine KI-Antwort auf konkrete Quellen gestützt ist (auf Deutsch etwa: Verankerung in Quellen): auf ein Dokument, eine Mail oder eine Webseite, die das Modell beim Antworten tatsächlich vor sich hatte. Sichtbar wird das an Quellenangaben, also Fußnoten, Links oder Dateinamen in der Antwort. Sie machen es möglich, die Aussage zu prüfen, statt sie glauben zu müssen.

Grounding entsteht, wenn das Modell mit Material arbeitet, das in den Chat geholt wurde. Bei der [Websuche](./Websuche.md) sind das gefundene Seiten, bei [RAG](./RAG.md) die herausgesuchten Dokumentabschnitte, beim Upload die angehängte Datei. Microsoft 365 Copilot ist nach eigener Beschreibung „grounded in Microsoft Graph“: Bevor er antwortet, holt er passende Mails, Dateien und Teams-Nachrichten aus eurer Microsoft-Umgebung und zeigt unter vielen Antworten nummerierte Verweise auf die verwendeten Quellen. ChatGPT, Gemini und Claude blenden bei Websuche Links ein.

Der Nutzen liegt auf der Hand. Ohne Quelle kannst du nur raten, ob eine Zahl aus dem aktuellen Vertrag oder aus dem [Trainingswissen](./Trainingswissen.md) des Modells stammt. Mit Quelle öffnest du das Dokument, suchst die Stelle und siehst in einer Minute, ob die Aussage stimmt. Das ist der Kern von [Human-in-the-Loop](./Human-in-the-Loop.md): nicht alles nachrechnen, aber die Herkunft kontrollieren, bevor etwas nach außen geht.

Vorsicht trotzdem: Auch Quellen können erfunden sein. Ein Modell ohne Websuche oder RAG hat kein Grounding und kann aus seinem Trainingswissen heraus überzeugend klingende Titel, Autoren und Links produzieren, die es nicht gibt. Das ist eine Form der [Halluzination](./Halluzination.md). Du erkennst es daran, dass der Link ins Leere führt, das Dokument nicht existiert oder die zitierte Stelle etwas anderes sagt. Deshalb die Regel: Link öffnen, Stelle lesen. Eine Quelle, die du nicht aufgerufen hast, ist keine Prüfung.

Ein zweiter Fehler ist leiser. Die Quelle existiert, aber sie ist die falsche: eine alte Version, ein Entwurf, ein Dokument zu einem anderen Produkt. Hier hilft ein Blick auf Datum und Dateipfad.

Im Alltag lohnt es sich, Grounding aktiv einzufordern. Ein Zusatz wie „Gib zu jeder Aussage an, aus welchem Dokument sie stammt“ im [Prompt](./Prompt.md) macht die Antwort prüfbar und zeigt, wo das Modell keine Grundlage hatte.

_Typischer Irrtum:_ „Wenn Links dabei sind, ist die Antwort belegt.“ Erst wenn du den Link geöffnet und die Stelle gefunden hast, ist sie belegt.

_Im Alltag:_

> „Copilot sagt, die Lieferfrist wurde auf 14 Tage verkürzt, mit Quelle.“
>
> „Welche Datei zitiert er? Mach sie auf und schau, ob das die unterschriebene Version ist oder der Entwurf vom Einkauf.“
>
> „Der Entwurf.“
>
> „Dann ist die Antwort im Entwurf verankert, nicht im Vertrag. Frag nochmal nach der unterschriebenen Fassung.“
