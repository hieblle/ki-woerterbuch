---
description: Gesprächsabläufe in Copilot Studio, aus Knoten auf einer Leinwand gebaut, die einen Teil der Unterhaltung festlegen
aliases: [Themen, Thema, System Topics, Systemthemen, Custom Topics]
---

Ein Topic (in der deutschen Oberfläche „Thema“) ist ein vorgezeichneter Gesprächsabschnitt in [Copilot Studio](./Copilot Studio.md). Du legst damit fest, was der [Agent](./Agent.md) in einer bestimmten Situation Schritt für Schritt sagt, fragt und tut.

Ein Topic baust du auf der Authoring-Leinwand (authoring canvas) aus Knoten (nodes). Es gibt Knoten für eine Nachricht, eine Frage mit Antwortoptionen, eine Bedingung, das Setzen einer Variablen, den Aufruf eines [Tools](./Tools.md) und für den Wechsel in ein anderes Topic. Verbunden ergeben sie einen Ablauf, ähnlich einem Flussdiagramm. Ein Topic „Urlaubsantrag“ fragt zum Beispiel nach Zeitraum und Vertretung, prüft, ob der Zeitraum plausibel ist, und legt dann über ein Tool den Antrag im HR-System an.

Jedes Topic beginnt mit einem [Trigger](./Trigger.md). Er bestimmt, wann das Topic startet: durch bestimmte Phrasen der Nutzerin, durch die Entscheidung des Agenten bei [Generative Orchestration](./Generative Orchestration.md) oder durch ein Ereignis in der Unterhaltung. Topics können Eingaben annehmen und Ergebnisse zurückgeben. Bei generativer Orchestrierung füllt der Agent fehlende Eingaben aus dem Gesprächsverlauf oder fragt nach.

Copilot Studio unterscheidet zwei Arten. Custom Topics legst du selbst an. System Topics bringt jeder Agent mit, etwa „Conversation Start“ für die Begrüßung, „Fallback“, wenn nichts passt, „Escalate“ für die Übergabe an einen Menschen oder „End of Conversation“ für den Abschluss. System Topics kannst du anpassen und abschalten, aber nicht löschen.

Im Alltag brauchst du Topics vor allem dort, wo der Ablauf verbindlich sein muss: Pflichtfragen in fester Reihenfolge, eine Prüfung vor einer Buchung, eine Übergabe an den Support. Für reine Wissensfragen reichen meist [Knowledge](./Knowledge.md) und [Generative Answers](./Generative Answers.md), ohne dass du je ein Topic anfassen musst. Wer alles in Topics gießt, baut den starren Chatbot von früher nach.

Ein paar Stolperfallen: Topic-Namen dürfen keine Punkte enthalten, sonst gibt es Probleme beim Export in Solutions. Zwei Topics mit sehr ähnlichen Triggern führen dazu, dass der Agent nachfragt, welches gemeint ist. Im Code-Editor siehst du jedes Topic als YAML, was sich zum Kopieren zwischen Agenten eignet. Seit Juni 2026 gehören Topics zum Standard [Harness](./Harness.md) von Copilot Studio; der neuere GitHub Copilot Harness arbeitet ohne sie.

_Typischer Irrtum:_ Viele denken, ein Copilot-Studio-Agent besteht aus Topics. Mit generativer Orchestrierung sind Topics nur ein Baustein neben [Instructions](./Instructions.md), Knowledge und Tools und oft gar nicht nötig.

_Im Alltag:_

> „Unser Agent soll bei Störungsmeldungen immer erst nach Standort, Gerät und Dringlichkeit fragen. Reicht dafür eine Anweisung?“
>
> „Dafür würde ich ein Topic bauen. Drei Frageknoten in fester Reihenfolge, dann ein Tool, das das Ticket anlegt. So fragt er garantiert alles ab.“
