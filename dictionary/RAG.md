---
description: Technik, bei der zu jeder Frage passende Firmendokumente herausgesucht und der KI als Kontext mitgegeben werden
english: Retrieval-Augmented Generation
aliases: [Retrieval-Augmented Generation, Retrieval]
---

RAG (Retrieval-Augmented Generation) ist eine Technik, bei der ein System zu jeder Frage die passenden Textstellen aus einem Dokumentenbestand heraussucht und sie dem Sprachmodell mitgibt. Das Modell antwortet dann auf Basis dieser Stellen statt nur aus dem [Trainingswissen](./Trainingswissen.md).

Der Ablauf hat zwei Schritte. Zuerst das Suchen (Retrieval): Deine Frage wird mit [Semantischer Suche](./Semantische Suche.md) gegen die abgelegten Dokumente abgeglichen, etwa eure Handbücher, Verträge oder das Intranet. Die treffendsten Abschnitte werden ausgewählt. Dann das Antworten (Generation): Diese Abschnitte landen als [Kontextwissen](./Kontextwissen.md) im Chat, und das Modell formuliert daraus die Antwort, oft mit [Quellenangabe](./Quellenangabe.md).

RAG ist die Basis vieler Firmen-Chatbots, etwa für den IT-Helpdesk, das HR-Portal oder die Produktdokumentation im Vertrieb. Microsoft 365 Copilot arbeitet nach demselben Prinzip: Über den Microsoft Graph sucht er in deinen Mails, Teams-Chats und SharePoint-Dateien und gibt dem Modell die Treffer mit. Du bekommst nur Inhalte, auf die du selbst Zugriff hast.

Der Vorteil gegenüber [Fine-Tuning](./Fine-Tuning.md): Neue Dokumente sind sofort verfügbar, ohne dass jemand das Modell nachtrainiert. Ändert sich die Reisekostenrichtlinie, wird die neue Version abgelegt und die alte entfernt.

RAG hat eine typische Schwachstelle: Die Suche findet das falsche Dokument. Du merkst das daran, dass die Antwort zwar sicher klingt, aber aus einer veralteten Version zitiert, ein anderes Produkt meint oder eine Quelle nennt, die zum Thema nicht passt. Manchmal findet die Suche auch gar nichts, und das Modell antwortet aus dem Trainingswissen, ohne das zu sagen. In beiden Fällen hilft dir die Quellenangabe: Öffne das zitierte Dokument und prüfe, ob es wirklich das richtige ist. Fehlt die Quelle, frag nach oder lade das passende Dokument selbst hoch.

_Typischer Irrtum:_ Viele glauben, ein Firmen-Chatbot sei auf die Firmendaten „trainiert“. Meist ist er das nicht, er sucht bei jeder Frage neu nach. Das erklärt auch, warum er schlecht abgelegte oder doppelte Dokumente verwechselt.

_Im Alltag:_

> „Der HR-Bot hat mir eine Kündigungsfrist genannt, die passt nicht zu meinem Vertrag.“
>
> „Schau, welches Dokument er als Quelle angibt. Bei RAG kommt es oft vor, dass er die alte Betriebsvereinbarung erwischt statt der aktuellen.“
>
> „Stimmt, die ist von 2021.“
>
> „Dann meld das an HR, die müssen die alte Version aus dem Bestand nehmen.“
