---
description: Betriebsart, in der das Modell vor der Antwort länger rechnet; besser bei kniffligen Aufgaben, langsamer, nicht immer nötig
english: Reasoning / Thinking mode
aliases: [Denkmodus, Reasoning-Modell]
---

Im Reasoning-Modus (auch Denkmodus oder Thinking Mode) arbeitet ein [Modell](./Modell.md) vor der eigentlichen Antwort einen Zwischenschritt ab. Es erzeugt zuerst einen inneren Entwurf, in dem es die Aufgabe zerlegt, Varianten durchgeht und sich selbst korrigiert, und formuliert dann erst die Antwort.

Erkennbar ist das an einem Schalter oder einer Modellauswahl. ChatGPT, Claude und Gemini bieten Knöpfe mit Namen wie „Think“ oder „Denken“ oder eigene Reasoning-Modelle in der Modellliste. Microsoft 365 Copilot bietet je nach Lizenz einen Modus für gründlichere Antworten. Während das Modell nachdenkt, siehst du meist einen Hinweis wie „Denkt nach“ und manchmal eine Zusammenfassung der Zwischenschritte.

Technisch ist der Zwischenschritt nichts anderes als zusätzlicher Text, den das [Sprachmodell](./Sprachmodell.md) für sich selbst erzeugt. Weil es Wort für Wort arbeitet, hilft es ihm, Teilergebnisse aufzuschreiben, bevor es das Endergebnis nennt. Das ist dasselbe Prinzip wie beim Prompting-Kniff [Schritt für Schritt](./Schritt für Schritt.md), nur dass das Modell es von sich aus tut und dafür viel mehr Platz bekommt.

Der Nutzen zeigt sich bei Aufgaben mit mehreren Abhängigkeiten. Eine Angebotskalkulation mit Rabattstaffeln, die Prüfung, ob ein Vertragsentwurf drei Bedingungen gleichzeitig erfüllt, eine Schichtplanung mit Einschränkungen oder die Analyse widersprüchlicher Angaben in mehreren Dokumenten. Hier macht das Standardmodell öfter Flüchtigkeitsfehler, der Reasoning-Modus findet sie häufiger selbst.

Der Preis ist Zeit. Eine Antwort dauert statt Sekunden gern eine halbe Minute oder länger, und in manchen Lizenzen ist die Anzahl solcher Anfragen begrenzt. Für eine kurze Mail, eine Übersetzung oder eine Zusammenfassung bringt der Modus nichts außer Wartezeit. Eine einfache Regel: Wenn du die Aufgabe selbst auf einem Zettel vorrechnen müsstest, lohnt sich der Reasoning-Modus. Wenn du sie aus dem Stand beantworten könntest, nicht.

Auch im Reasoning-Modus bleibt das Ergebnis ein Entwurf. Das Modell rechnet gründlicher, aber es kann sich in den Zwischenschritten genauso irren wie in der Antwort. Die Prüfung durch dich entfällt nicht, siehe [Mensch prüft](./Mensch prüft.md).

_Typischer Irrtum:_ Der Reasoning-Modus macht das Modell nicht klüger im Sinne von mehr Wissen. Es hat denselben Wissensstand, es nutzt nur mehr Rechenzeit, um das vorhandene Wissen sauberer zu kombinieren.

_Im Alltag:_

> „Soll ich für die Staffelpreise im Angebot den Denkmodus einschalten?“
>
> „Ja, das ist genau der Fall dafür. Mehrere Bedingungen, die zusammenpassen müssen. Für die Begleitmail danach brauchst du ihn nicht.“
