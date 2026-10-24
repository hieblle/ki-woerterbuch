---
description: Purview-Richtlinien mit eigener Copilot-Location, die festlegen, welche Inhalte und Prompts Copilot verarbeiten darf
english: Data Loss Prevention
aliases: [Data Loss Prevention, Verhinderung von Datenverlust, Purview DLP, Microsoft 365 Copilot and Copilot Chat (DLP-Location)]
---

DLP (Data Loss Prevention, deutsch: Verhinderung von Datenverlust) ist der Teil von Microsoft Purview, der verhindert, dass vertrauliche Inhalte an Orte gelangen, an die sie nicht gehören. Für Copilot gibt es dafür eine eigene Richtlinien-Location mit dem Namen „Microsoft 365 Copilot and Copilot Chat“. Richtlinien an diesem Ort steuern in Echtzeit, was [Microsoft Copilot](./Microsoft Copilot.md), [Microsoft Copilot Chat](./Microsoft Copilot Chat.md) und Cowork verarbeiten dürfen.

Die Mechanik: Eine DLP-Richtlinie besteht aus einer Bedingung und einer Aktion. Die wichtigste Bedingung für Copilot ist „Inhalt trägt eine bestimmte Vertraulichkeitsbezeichnung“. Die Aktion dazu heißt „Copilot am Verarbeiten des Inhalts hindern“. Eine Datei mit dem Label „Streng vertraulich“ taucht dann vielleicht noch als Treffer in den Quellenangaben auf, ihr Inhalt fließt aber nicht in die Antwort ein. Öffnest du so eine Datei in Word, Excel oder PowerPoint, sind die Copilot-Funktionen dort abgeschaltet. Wie Labels funktionieren, erklärt der Eintrag [Sensitivity Labels](./Sensitivity Labels.md).

Dazu kommen Regeln für den Prompt selbst. Enthält deine Eingabe einen sensiblen Informationstyp, etwa Kreditkartennummern oder IBANs, kann die Richtlinie die Websuche für diesen Prompt sperren oder die Antwort ganz verweigern. Du siehst dann einen Hinweis mit einem Link, den dein Unternehmen auf eine eigene Erklärungsseite legen kann. Stand Oktober 2026 gibt es außerdem in der Vorschau eine Regel, die externe E-Mails vom [Grounding](./Grounding.md) ausschließt. Sie ist ausdrücklich als Schutz gegen [Prompt Injection](./Prompt Injection.md) gedacht, weil fremde Mails ein beliebter Weg sind, Copilot versteckte Anweisungen unterzuschieben.

Ein paar Grenzen solltest du kennen. Labels und sensible Informationstypen können nicht in derselben Regel stehen. Dateien, die du direkt im Chat hochlädst, werden nicht gescannt, nur der getippte Prompt. Änderungen an einer Richtlinie brauchen bis zu vier Stunden, bis sie überall greifen. Und Agenten aus [Copilot Studio](./Copilot Studio.md), die auf SharePoint-Wissen zugreifen, unterliegen denselben Einschränkungen wie Copilot selbst.

DLP ist damit ein zentrales Werkzeug gegen [Datenabfluss](./Datenabfluss.md) über KI. Es ersetzt aber keine saubere Berechtigungspflege. Was eine Person ohne Copilot sehen darf, darf sie mit DLP in der Regel auch weiterhin sehen, nur nicht mehr von Copilot zusammenfassen lassen.

_Typischer Irrtum:_ Die „Datenrichtlinien“ im Power Platform Admin Center sind nicht dasselbe wie Purview-DLP. Sie regeln, welche Connectors und Fähigkeiten ein Agent nutzen darf, Purview-DLP regelt, welche Inhalte Copilot verarbeiten darf.

_Im Alltag:_

> „Copilot hat mir gerade gesagt, es könne die Gehaltsliste nicht zusammenfassen, dabei habe ich Zugriff auf die Datei.“
>
> „Das ist die DLP-Richtlinie. Die Datei trägt das Label ‚Streng vertraulich‘, und für solche Dateien ist die Verarbeitung durch Copilot gesperrt. Öffnen kannst du sie weiterhin, nur Copilot bleibt draußen.“
