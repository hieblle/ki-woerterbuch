---
description: Verpackte Anleitung mit Beispielen und Regeln, die ein Agent bei Bedarf lädt, um eine Aufgabe nach Firmenvorgabe zu erledigen
aliases: [Fähigkeit, Agent Skill]
---

Ein Skill (Fähigkeit) ist eine verpackte Anleitung, die ein [Agent](./Agent.md) bei Bedarf lädt: eine Schrittfolge, Beispiele, Regeln, oft auch Vorlagen oder kleine Hilfsprogramme. Ein Skill „Angebot nach Firmenvorlage erstellen“ enthält zum Beispiel die Vorlage, die Preislogik, drei gute Musterangebote und die Regel, dass Rabatte über zehn Prozent eine [Freigabe](./Freigabe.md) brauchen.

Der Unterschied zur [Prompt-Vorlage](./Prompt-Vorlage.md) liegt im Zeitpunkt. Eine Prompt-Vorlage ist ein statischer Text, den du selbst kopierst und einfügst. Ein Skill liegt in einer Bibliothek, und der Agent entscheidet selbst, wann er ihn braucht: Erkennt er, dass du ein Angebot willst, lädt er den Skill und arbeitet danach. Du musst nicht wissen, dass er existiert. Der Unterschied zum Werkzeug ([Tool Use](./Tool Use.md)) liegt in der Art: Ein Tool gibt Zugriff auf ein System, etwa SharePoint oder das CRM. Ein Skill sagt dem Agenten, wie er mit diesem Zugriff eine konkrete Aufgabe richtig erledigt. Tools sind die Hände, Skills das Wissen, wie man sie benutzt.

Im Alltag begegnen dir Skills in Claude, wo du sie als Dateien anlegst oder fertige aus einem Katalog aktivierst, etwa für Excel-Auswertungen oder Präsentationen. Bei Microsoft 365 Copilot übernehmen Anweisungen und Wissensquellen im [Agent Builder](./Agent Builder.md) eine ähnliche Rolle, ChatGPT kennt das Prinzip über [Custom GPTs](./Custom GPT.md). Die Idee ist überall dieselbe: Wissen, wie etwas bei euch gemacht wird, einmal aufschreiben, statt es in jedem Chat neu zu erklären.

Skills baut, wer die Aufgabe am besten kennt, nicht die IT. Die Vertriebskollegin, die seit Jahren Angebote schreibt, beschreibt den Ablauf, hängt die Vorlage und zwei gelungene Beispiele an und testet mit einem echten Fall. Geteilt wird im Team über einen gemeinsamen Ordner, eine Bibliothek im Produkt oder den Admin, der den Skill firmenweit freigibt. Wichtig: Ein Skill braucht einen Verantwortlichen, der ihn pflegt. Ändert sich die Firmenvorlage, muss auch der Skill nachziehen, sonst produziert der Agent monatelang Angebote im alten Format.

_Typischer Irrtum:_ Ein Skill macht den Agenten nicht klüger. Er gibt ihm nur das Wissen, das bisher nur in den Köpfen der Kolleginnen und Kollegen lag.

_Im Alltag:_

> „Ich erkläre dem Agenten jedes Mal neu, wie unsere Angebote aufgebaut sind. Das nervt.“
>
> „Pack das in einen Skill: Vorlage, zwei Beispiele, die Rabattregel. Dann lädt er das selbst, sobald jemand ein Angebot will, und das ganze Team kann ihn nutzen.“
