---
description: Die KI liefert selbstbewusst falsche Inhalte, etwa erfundene Zahlen, Quellen, Paragraphen oder Personen
english: Hallucination
---

Eine Halluzination ist eine Antwort, die überzeugend klingt, aber falsch ist. Das Modell erfindet dabei Zahlen, Quellen, Paragraphen oder Personen, ohne das zu kennzeichnen. Der Ton bleibt derselbe wie bei einer richtigen Antwort, deshalb fällt der Fehler beim Lesen nicht auf.

Der Grund liegt in der Arbeitsweise. Ein [Sprachmodell](./Sprachmodell.md) berechnet, welches Wort am wahrscheinlichsten als nächstes folgt. Es prüft nicht, ob eine Aussage stimmt. Wenn ihm die passende Information fehlt, füllt es die Lücke mit etwas, das plausibel klingt.

Es gibt zwei Arten. Bei der ersten fehlt dem Modell das Wissen, etwa weil das Thema nach dem [Wissensstand](./Wissensstand.md) liegt oder zu speziell ist. Dann entstehen erfundene Fakten, zum Beispiel ein Gerichtsurteil mit Aktenzeichen, das es nie gab. Bei der zweiten Art weicht das Modell vom Material ab, das du ihm mitgegeben hast. Du lädst einen Vertrag hoch, und die Zusammenfassung nennt eine Kündigungsfrist, die im Dokument nicht steht. Das hängt oft mit [Kontextverlust](./Kontextverlust.md) zusammen.

Du merkst es an Details, die du nicht nachschlagen kannst. Quellen ohne Link oder mit einem Link, der ins Leere führt. Zahlen, die auffällig glatt sind. Aussagen, die auf Nachfrage plötzlich anders lauten. Wenn du bei einem Punkt stutzt, frag nach: „Woher stammt diese Angabe?“ Ein Modell, das dann umschwenkt, hatte keine Quelle.

Was du dann tust, hängt von der Art ab. Gegen erfundene Fakten hilft, dem Modell Material zu geben, etwa über die [Websuche](./Websuche.md) oder hochgeladene Dokumente, und eine [Quellenangabe](./Quellenangabe.md) zu verlangen, die du stichprobenartig öffnest. Gegen Abweichungen vom Material hilft, die Aufgabe kleiner zu machen und die Vorgabe „Nur aus dem Dokument, sonst sag, dass es fehlt“ mitzugeben. Danach hältst du die Antwort gegen das Original. In Microsoft 365 Copilot kannst du bei Antworten aus Dateien auf die Verweise klicken und die Stelle direkt prüfen.

_Typischer Irrtum:_ Viele halten eine Halluzination für einen seltenen Ausrutscher. Sie ist aber die normale Arbeitsweise des Modells, die nur manchmal sichtbar daneben liegt.

_Im Alltag:_

> „Copilot hat mir drei Studien zur Fluktuation in der Pflege genannt, mit Autoren und Jahr. Die nehme ich in die Präsentation.“
>
> „Hast du eine davon geöffnet? Ohne Websuche kann das eine Halluzination sein. Lass dir die Links geben und prüf mindestens zwei, bevor sie auf eine Folie kommen.“
