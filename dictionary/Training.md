---
description: Der Lernvorgang vor der Auslieferung, bei dem ein Modell aus riesigen Textmengen lernt; im Chat lernt es danach nichts dazu
english: Training
---

Training ist der Vorgang, bei dem ein [Modell](./Modell.md) lernt, Texte zu erzeugen. Dafür liest es vor der Auslieferung riesige Mengen an Text, etwa Webseiten, Bücher, Fachartikel und Programmcode, und stellt sich so ein, dass es übliche Fortsetzungen vorhersagen kann.

Der Ablauf hat zwei Phasen. In der ersten lernt das [Sprachmodell](./Sprachmodell.md) nur, wie Sprache aufgebaut ist und welche Inhalte in den Texten stehen. In der zweiten bringen ihm Menschen bei, hilfreich zu antworten, Anweisungen zu befolgen und heikle Fragen abzulehnen. Beides passiert beim Anbieter, dauert Wochen bis Monate und kostet viel Rechenleistung. Dann ist das Modell fertig. Was es danach weiß, ist sein [Trainingswissen](./Trainingswissen.md), und das Datum, bis zu dem die Texte reichen, ist sein [Knowledge Cutoff](./Knowledge Cutoff.md).

Im Chat lernt das Modell nichts dazu. Das ist der Punkt, der im Büro am häufigsten missverstanden wird. Wenn du Copilot heute erklärst, wie eure Angebotsnummern aufgebaut sind, weiß es das morgen in einem neuen [Chat](./Chat.md) nicht mehr. Das Modell selbst bleibt unverändert, nur der sichtbare Verlauf im Fenster hält die Information fest. Willst du etwas dauerhaft mitgeben, brauchst du eine [Prompt-Vorlage](./Prompt-Vorlage.md), eine Anweisungsdatei oder einen eigenen Assistenten, siehe [Custom GPT](./Custom GPT.md).

Davon zu trennen ist die Frage, ob der Anbieter deine Eingaben für das Training künftiger Modelle verwendet. Das ist ein anderer Vorgang. Bei Privatkonten von ChatGPT oder Gemini kann das je nach Einstellung passieren. Bei Business-Lizenzen, etwa Microsoft 365 Copilot oder den Unternehmensangeboten von OpenAI und Anthropic, sichern die Anbieter in der Regel zu, dass Firmendaten nicht ins Training fließen. Ob das für dein Konto gilt, steht in den Vertragsbedingungen, und das sollten IT oder Datenschutz prüfen.

_Typischer Irrtum:_ „Ich habe dem Modell gestern beigebracht, dass unsere Firma Müller GmbH heißt.“ Hast du nicht. Du hast es in einem Chatverlauf erwähnt. Das Training war lange vorher abgeschlossen.

_Im Alltag:_

> „Darf ich die Kundenliste in ChatGPT einfügen? Dann lernt es die ja.“
>
> „Lernen tut es im Chat nichts, das Training ist abgeschlossen. Die Frage ist, ob der Anbieter die Daten später zum Training nutzen darf. Mit dem Privatkonto vielleicht, mit der Firmenlizenz laut Vertrag nicht. Nimm die Firmenlizenz.“
