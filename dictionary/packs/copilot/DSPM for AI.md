---
description: Purview-Oberfläche, die zeigt, wie KI im Unternehmen genutzt wird, welche Daten dabei fließen und welche Risiken bestehen
english: DSPM for AI
aliases: [Data Security Posture Management for AI, Microsoft Purview AI Hub, AI Hub, DSPM for AI (classic), AI observability]
---

DSPM for AI (Data Security Posture Management for AI) ist die zentrale Oberfläche in Microsoft Purview, auf der du siehst, wie KI in deinem Unternehmen genutzt wird und welche Daten dabei im Spiel sind. Der Name ist sperrig, die Idee ist einfach: ein Überblick über die KI-Nutzung plus Empfehlungen, was du zum Schutz der Daten tun solltest. Gestartet ist die Funktion 2024 als Microsoft Purview AI Hub.

Die Oberfläche hat mehrere Bereiche. Die Übersicht zeigt, wie viele Interaktionen mit [Microsoft Copilot](./Microsoft Copilot.md), Agenten und anderen KI-Apps es gab und wie oft dabei sensible Informationen auftauchten. Berichte unterteilen nach drei Kategorien: Copilot und Agenten, registrierte Unternehmens-KI wie ChatGPT Enterprise oder Claude Enterprise, und sonstige KI-Apps. Letztere werden über die Browser-Aktivität erkannt, zum Beispiel wenn jemand die private Version von ChatGPT oder Gemini aufruft. Damit ist DSPM for AI das Werkzeug, mit dem ein Unternehmen [Schatten-KI](./Schatten-KI.md) sichtbar macht, statt nur zu vermuten, dass es sie gibt.

Der Activity Explorer listet einzelne KI-Interaktionen auf, mit den erkannten sensiblen Informationstypen. Prompt und Antwort im Wortlaut sieht nur, wer eine entsprechende Rolle hat. Die Empfehlungen führen zu Ein-Klick-Richtlinien, etwa „Sensible Daten vor der Verarbeitung durch Copilot schützen“ über [DLP](./DLP.md) oder „Riskante KI-Nutzung erkennen“ über das Insider-Risikomanagement.

Besonders nützlich sind die Datenrisikobewertungen. Purview prüft automatisch jede Woche die hundert meistgenutzten SharePoint-Sites darauf, ob dort zu breit geteilte oder unzureichend gelabelte Inhalte liegen. Das ist der direkte Weg, [Oversharing](./Oversharing.md) zu finden, bevor Copilot es in Antworten sichtbar macht. Aus der Bewertung heraus kannst du Gegenmaßnahmen anstoßen: Zugriff per Label einschränken, eine Site aus der Copilot-Suche nehmen, eine Zugriffsüberprüfung starten oder den Site-Besitzer benachrichtigen.

Stand Oktober 2026 gibt es zwei Generationen. Die ältere heißt jetzt „DSPM for AI (classic)“ und wird nicht mehr weiterentwickelt. Die neue heißt schlicht „Data Security Posture Management“ und enthält eine Seite „AI observability“, die auch Agenten aus [Microsoft Agent 365](./Microsoft Agent 365.md) mit einer eigenen Risikostufe zeigt.

_Typischer Irrtum:_ DSPM for AI blockiert selbst nichts. Es zeigt, empfiehlt und legt auf Wunsch Richtlinien an, die eigentliche Durchsetzung übernehmen DLP, Labels und die anderen Purview-Werkzeuge.

_Im Alltag:_

> „Wir wissen ehrlich gesagt nicht, welche KI-Tools die Leute neben Copilot noch benutzen.“
>
> „Schau in DSPM for AI. Unter ‚Other AI apps‘ siehst du, welche KI-Websites aus dem Firmenbrowser aufgerufen werden und ob dabei sensible Daten eingegeben wurden. Dafür müssen die Geräte eingebunden sein und die Browser-Erweiterung muss laufen.“
