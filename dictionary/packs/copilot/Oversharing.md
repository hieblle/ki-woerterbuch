---
description: Inhalte sind breiter freigegeben als nötig, und Copilot macht sie auf eine Frage hin sichtbar, obwohl es keine Rechte ändert
aliases: [Überfreigabe, Übermäßige Freigabe, Overshared Content]
---

Oversharing bedeutet, dass Inhalte für mehr Personen zugänglich sind, als es nötig wäre. Typische Ursachen: ein Link „Jeder in der Organisation“, eine Teams-Gruppe mit hunderten Mitgliedern, eine alte Projektsite ohne Besitzer oder eine Bibliothek, bei der jemand vor Jahren die Rechtevererbung aufgehoben hat. Solange niemand danach sucht, fällt das nicht auf. [Microsoft Copilot](./Microsoft Copilot.md) ändert das.

Der Grund liegt im Berechtigungsmodell. Copilot zeigt dir nur Inhalte, auf die du mindestens Leserechte hast. Jede Anfrage läuft in deinem Sicherheitskontext, und der [Semantische Index](./Semantischer Index.md) liefert nur Treffer, die du ohnehin öffnen dürftest. Copilot hebt also keine Rechte auf und erfindet keine Zugänge. Aber es findet in Sekunden, was früher nur fand, wer gezielt in der richtigen Site gesucht hätte. Fragt eine Mitarbeiterin „Wie viel verdient mein Teamleiter?“ und liegt eine Gehaltsliste auf einer Site mit Jeder-Link, liefert Copilot die Antwort. Microsoft formuliert es so: Generative KI verstärkt das Risiko von Oversharing, weil sie Inhalte schnell und ohne Suchen auffindbar macht.

Deshalb gilt Oversharing als das wichtigste Risiko bei der Einführung von Copilot. Nicht, weil Copilot unsicher wäre, sondern weil es die Freigabepraxis der vergangenen Jahre sichtbar macht. Jede Firma hat solche Altlasten, und die Einführung ist der Moment, sie aufzuräumen.

Dafür gibt es gestufte Werkzeuge. Kurzfristig nimmst du heikle Sites mit [Restricted Content Discovery](./Restricted Content Discovery.md) aus Copilot heraus. Mittelfristig findest du Problemstellen mit den Berichten von [SharePoint Advanced Management](./SharePoint Advanced Management.md) und lässt Site-Besitzer ihre Freigaben prüfen. Langfristig schützen [Sensitivity Labels](./Sensitivity Labels.md) und [DLP](./DLP.md) sensible Dateien unabhängig davon, wo sie liegen. Ein Sicherheits-Dashboard im Microsoft 365 Admin Center fasst den Stand zusammen.

Auch du als Nutzer trägst bei. Teile Dateien mit bestimmten Personen statt mit „Jeder“. Prüfe bei alten Sites, ob sie noch jemand braucht. Und wenn Copilot dir etwas zeigt, das du eigentlich nicht sehen solltest, melde es, statt es zu nutzen. Der Eintrag [Datenabfluss](./Datenabfluss.md) beschreibt, was passiert, wenn solche Inhalte das Haus verlassen.

_Typischer Irrtum:_ Viele glauben, Copilot sei schuld, wenn vertrauliche Daten auftauchen. Die Freigabe war schon vorher falsch, Copilot hat sie nur schneller gefunden.

_Im Alltag:_

> „Copilot hat mir eben die Bonusliste der Geschäftsführung zusammengefasst. Ich habe gar nicht danach gesucht.“
>
> „Dann liegt die Datei irgendwo mit einem Jeder-Link. Schick mir den Link, ich informiere den Site-Besitzer und die IT. Und bitte nicht weiterleiten.“
