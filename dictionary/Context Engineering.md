---
description: Gezielt zusammenstellen, welche Informationen die KI für eine Aufgabe bekommt, statt nur am Prompt zu feilen
aliases: [Kontext-Engineering, Kontextgestaltung]
---

Context Engineering (Kontextgestaltung) bedeutet, bewusst zu steuern, welche Informationen die KI für eine Aufgabe bekommt: welche Dokumente, welche Vorgaben, welche Beispiele, welche Vorgeschichte. Beim [Prompt Engineering](./Prompt Engineering.md) geht es um die Formulierung deiner Anfrage. Beim Context Engineering geht es um alles, was drumherum im [Kontext](./Kontext.md) liegt.

Der Begriff ist entstanden, weil die Grenzen des Prompts sichtbar wurden. Bei einer kurzen Frage reicht ein guter Satz. Bei einer Aufgabe wie „Erstelle den Quartalsbericht für den Vertrieb“ entscheidet nicht die Formulierung, sondern das Material: die richtigen Zahlen, die Berichtsvorlage vom letzten Quartal, die Liste der Kunden, die der Chef sehen will, und der Hinweis, dass zwei Zahlen vertraulich sind. Fehlt das, kann der beste Prompt nichts retten. Ist es da, reicht ein schlichter Auftrag.

Im Arbeitsalltag heißt Context Engineering vor allem auswählen. Nicht alles hochladen, was es gibt, sondern das, was für die Aufgabe zählt. Ein [Kontextfenster](./Kontextfenster.md) ist begrenzt, und zu viel Material führt zu [Kontextverlust](./Kontextverlust.md): Die KI übersieht dann genau den Absatz, auf den es ankommt. Gute Praxis ist, Material zu kürzen, Veraltetes wegzulassen und wichtige Vorgaben an den Anfang oder das Ende zu stellen. In Microsoft 365 Copilot steuerst du den Kontext, indem du konkrete Dateien und Mails anhängst, statt Copilot in allem suchen zu lassen.

Bei Agenten wird Context Engineering zur Hauptaufgabe. Ein [Agent](./Agent.md) arbeitet über viele Schritte, und bei jedem Schritt entscheidet sich, was er gerade sieht: den [Systemprompt](./Systemprompt.md), die passenden [Skills](./Skill.md), Suchergebnisse aus dem Firmenwissen über [RAG](./RAG.md), den bisherigen Verlauf. Wer einen Agenten baut, verbringt mehr Zeit damit, diese Zusammenstellung richtig zu machen, als mit dem Prompt selbst.

Für dich als Nutzerin oder Nutzer ist die Regel einfach: Bevor du am Prompt feilst, prüf, ob die KI das Material hat, das ein Mensch für die Aufgabe bräuchte. Meistens liegt der Fehler dort.

_Typischer Irrtum:_ Viele glauben, eine schlechte Antwort liege am falschen Prompt-Wortlaut. Häufiger fehlt schlicht das richtige Material im Kontext, oder es ist von zu viel Unwichtigem umgeben.

_Im Alltag:_

> „Ich hab den Prompt für die Angebotszusammenfassung jetzt fünfmal umformuliert, das Ergebnis bleibt oberflächlich.“
>
> „Lass den Prompt in Ruhe und schau auf den Kontext. Häng das Angebot als PDF an, dazu unsere Preisliste und die Mail vom Kunden mit seinen Anforderungen. Das ist Context Engineering, und das bringt mehr als jede Formulierung.“
