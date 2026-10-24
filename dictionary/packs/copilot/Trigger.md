---
description: Startbedingung eines Topics in Copilot Studio, etwa bestimmte Phrasen der Nutzer oder die Entscheidung des Agenten
aliases: [Topic-Trigger, Trigger Phrases, Triggerausdrücke, Auslöser, Trigger Node]
---

Ein Trigger (deutsch: Auslöser) legt in [Copilot Studio](./Copilot Studio.md) fest, wann ein [Topic](./Topics.md) startet. Jedes Topic beginnt mit genau einem Trigger-Knoten. Ohne passenden Trigger bleibt das Topic unbenutzt, egal wie gut der Ablauf dahinter gebaut ist.

Die beiden wichtigsten Trigger-Arten hängen von der Orchestrierung ab. Bei klassischer Orchestrierung heißt der Trigger „User says a phrase“. Du hinterlegst Trigger Phrases (Triggerausdrücke), also fünf bis zehn Beispielsätze wie „Ich möchte Urlaub beantragen“ oder „Urlaub eintragen“. Schreibt jemand etwas Ähnliches, erkennt die Sprachverarbeitung das Topic. Bei [Generative Orchestration](./Generative Orchestration.md) heißt der Trigger „The agent chooses“. Statt Beispielsätzen schreibst du eine Beschreibung, was das Topic kann, und das [Sprachmodell](./Sprachmodell.md) entscheidet anhand von Beschreibung und Gesprächskontext, ob es das Topic aufruft. Beim Umschalten erzeugt Copilot Studio aus deinen Trigger Phrases automatisch eine erste Beschreibung.

Daneben gibt es Trigger für Ereignisse innerhalb der Unterhaltung: eine Nachricht geht ein, der Nutzer ist eine Weile inaktiv, ein anderes Topic leitet weiter, ein Plan der generativen Orchestrierung ist abgeschlossen oder eine KI-Antwort steht kurz vor dem Versand. Mit den letzten beiden kannst du Antworten des Agenten abfangen und prüfen, bevor sie rausgehen. [Child Agents](./Child Agents und Connected Agents.md) nutzen dieselben Trigger-Arten, ergänzt um Bedingung und Priorität.

Wichtig ist die Abgrenzung zum [Event Trigger](./Event Trigger.md). Ein Topic-Trigger wirkt innerhalb einer laufenden Unterhaltung. Ein Event Trigger startet den ganzen Agenten von außen, ohne dass jemand chattet, etwa bei einer neuen E-Mail oder nach Zeitplan. Das ist die Grundlage autonomer Agenten und ein eigener Eintrag.

Typische Stolperfallen: Trigger Phrases, die sich zwischen zwei Topics überschneiden, führen zur Rückfrage „Multiple Topics Matched“. Beschreibungen für „The agent chooses“ sollten sagen, was das Topic tut und wofür es nicht gedacht ist, sonst greift der Agent es bei unpassenden Anfragen auf. Und der Inaktivitäts-Trigger feuert im [Test Panel](./Test Panel und Activity Map.md) nicht zuverlässig; solche Fälle testest du besser im echten Kanal.

_Typischer Irrtum:_ Trigger Phrases sind keine Schlüsselwörter, die exakt vorkommen müssen. Sie sind Beispiele, aus denen das System die Absicht lernt. Zehn unterschiedliche Formulierungen helfen mehr als zwanzig fast gleiche.

_Im Alltag:_

> „Der Agent startet mein Topic für Reisekosten nicht, obwohl ich zehn Trigger Phrases eingetragen habe.“
>
> „Läuft der Agent mit generativer Orchestrierung? Dann zählt die Beschreibung, nicht die Phrasen. Schreib rein, dass das Topic Reisekostenabrechnungen einreicht, und teste nochmal.“
