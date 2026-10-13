---
description: Das Datum, bis zu dem ein Modell trainiert wurde; was danach passiert ist, kennt es ohne Websuche nicht
aliases: [Wissensstand, Wissensstichtag, Trainingsstichtag]
---

Der Knowledge Cutoff (auf Deutsch Wissensstand oder Wissensstichtag) ist das Datum, bis zu dem die Texte reichen, mit denen ein [Modell](./Modell.md) trainiert wurde. Alles, was danach passiert ist, kennt das Modell aus eigenem Wissen nicht.

Der Grund liegt im [Training](./Training.md). Das Modell liest seine Texte einmal, vor der Auslieferung, und wird dann nicht mehr verändert. Ein Modell mit Knowledge Cutoff im Frühjahr kennt die Gesetzesänderung vom Herbst nicht, den neuen Geschäftsführer eures Lieferanten nicht und auch nicht das Produkt, das ihr im Sommer eingeführt habt. Der Stichtag liegt meist einige Monate vor der Veröffentlichung, weil das Training Zeit braucht.

Das Symptom ist leicht zu übersehen, weil das Modell nicht „ich weiß das nicht“ sagt. Es antwortet mit dem Stand, den es hat, und zwar genauso sicher wie bei allem anderen. Fragst du nach dem aktuellen Mindestlohn, dem gültigen Steuersatz oder der neuesten Fassung einer Norm, bekommst du möglicherweise einen alten Wert, ohne Hinweis. Manchmal mischt das Modell auch alt und neu, weil es aus beiden Zeiträumen Texte gelesen hat.

Du merkst es an Antworten, die plausibel, aber veraltet sind, oder daran, dass das Modell ein Ereignis nicht kennt, das du kennst. Dann hilft eines von zwei Dingen. Entweder du schaltest die [Websuche](./Websuche.md) zu, die viele Werkzeuge anbieten, dann holt sich das Modell aktuelle Seiten dazu. Oder du gibst die aktuelle Information selbst mit, etwa das Rundschreiben oder die neue Preisliste als Datei. Das Modell arbeitet dann mit deinem [Kontextwissen](./Kontextwissen.md) statt mit seinem alten Trainingswissen.

Für den Alltag heißt das: Bei allem, was sich ändert, also Preise, Gesetze, Personen, Produkte, Termine, solltest du den Knowledge Cutoff im Kopf haben und die Quelle mitgeben oder nachprüfen. Bei stabilen Themen, etwa wie man eine Mail höflich formuliert oder eine Excel-Formel aufbaut, spielt er kaum eine Rolle.

_Typischer Irrtum:_ Ein Modell mit Websuche hat keinen späteren Knowledge Cutoff. Es schlägt nur bei Bedarf nach, und nur, wenn die Suche eingeschaltet ist und das Modell erkennt, dass es suchen sollte.

_Im Alltag:_

> „Ich habe Gemini nach dem aktuellen Kollektivvertrag gefragt, der nennt noch die alten Beträge.“
>
> „Knowledge Cutoff. Das Modell kennt nur, was bis zu seinem Stichtag veröffentlicht war. Lad den aktuellen Kollektivvertrag hoch oder schalt die Websuche ein.“
