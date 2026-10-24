---
description: Entities erkennen Angaben wie Datum oder E-Mail in Nutzerantworten, Variables speichern Werte für den Gesprächsverlauf
english: Entities and variables
aliases: [Entitäten und Variablen, Entities, Variables, Slot Filling, Power Fx]
---

Entities und Variables sind die beiden Bausteine, mit denen ein Agent in [Copilot Studio](./Copilot Studio.md) Angaben aus einem Gespräch erkennt und festhält. Eine Entity (Entität) beschreibt eine Art von Information, etwa ein Datum, eine E-Mail-Adresse, einen Geldbetrag oder eine Auswahl aus einer Liste. Eine Variable ist der Behälter, in dem der erkannte Wert landet und später wiederverwendet wird.

Entities arbeiten in den Frage-Knoten eines [Topics](./Topics.md). Fragst du „Ab wann soll der Urlaub gelten?“, erkennt die vorgefertigte Entity für Datum auch Antworten wie „nächsten Montag“ und wandelt sie in ein echtes Datum um. Copilot Studio bringt viele solcher Prebuilt Entities mit: Alter, Datum, Dauer, E-Mail, Geld, Ort, Telefonnummer, Zahl und weitere. Eigene Custom Entities legst du als geschlossene Liste an, zum Beispiel die Standorte deines Unternehmens mit ihren Schreibvarianten, oder als regulären Ausdruck, etwa für das Format eurer Ticketnummern. Nennt die Person mehrere Angaben in einem Satz, füllt der Agent die passenden Variablen auf einmal. Das heißt Slot Filling.

Variables gibt es in vier Reichweiten. Topic-Variablen gelten nur innerhalb eines Topics. Globale Variablen gelten im ganzen Gespräch, zum Beispiel die gewählte Kostenstelle, die mehrere Topics brauchen. Systemvariablen füllt Copilot Studio selbst: den Text der letzten Nachricht, die Gesprächs-ID, Name und E-Mail der angemeldeten Person oder die Information, ob gerade im Test Panel getestet wird. Umgebungsvariablen kommen aus der Power Platform, etwa die Adresse eines Testsystems im Gegensatz zum Produktivsystem. Sie sind in Copilot Studio nur lesbar und werden über [Environments und Solutions](./Environments und Solutions.md) gepflegt. Jede Variable hat einen Typ wie Text, Zahl, Ja/Nein, Datum oder Tabelle.

Mit Variablen rechnest und vergleichst du über Power Fx, die Formelsprache der Power Platform. Eine Bedingung wie „Wenn Betrag größer 500, dann Freigabe-Topic“ ist so eine Formel. Variablen fließen auch als Eingaben in [Tools](./Tools.md) und [Agent Flows](./Agent Flows.md) und nehmen deren Ergebnisse entgegen. Während des Tests zeigt ein Variablen-Panel die aktuellen Werte, was bei der Fehlersuche hilft.

Eine Einschränkung, Stand Oktober 2026: Bei [generativer Orchestration](./Generative Orchestration.md) kannst du Custom Entities nicht als Eingaben für Tools und Topics nutzen. Dort beschreibst du die Eingabe in Worten, und der Agent füllt sie per KI aus dem Gespräch.

_Typischer Irrtum:_ Eine Variable ist kein [Memory](./Memory.md). Sie merkt sich nichts über das Gespräch hinaus. Wer Werte dauerhaft speichern will, braucht einen Agent Flow oder eine Datenquelle, keine globale Variable.

_Im Alltag:_

> „Der Agent fragt dreimal nach der Kostenstelle, in jedem Topic neu. Das nervt die Leute.“
>
> „Mach aus der Topic-Variable eine globale Variable. Dann gilt die Kostenstelle für das ganze Gespräch, und die anderen Topics lesen sie einfach aus.“
