---
description: Auslöser in Copilot Studio, der einen Agenten durch ein Ereignis startet, etwa eine neue Mail, ein Formular oder einen Zeitplan
aliases: [Ereignistrigger, Ereignisauslöser, Event-Trigger, Wiederholungstrigger, Recurrence Trigger]
---

Ein Event Trigger (Ereignistrigger) ist ein Auslöser in [Copilot Studio](./Copilot Studio.md), der einen ganzen Agenten durch ein Ereignis startet. Das Ereignis kommt von außen: eine neue E-Mail, eine neue Zeile in einer Tabelle oder Datenbank, eine hochgeladene Datei, ein abgeschicktes Formular oder ein Zeitplan, etwa jeden Morgen um sieben Uhr. Sobald ein Agent einen solchen Trigger hat, ist er ein [autonomer Agent](./Autonomer Agent.md).

Verwechsle den Event Trigger nicht mit dem [Trigger](./Trigger.md) eines Topics. Ein Topic-Trigger entscheidet innerhalb eines Gesprächs, welches Thema dran ist, zum Beispiel weil der Nutzer „Urlaub beantragen“ schreibt. Der Event Trigger steht eine Ebene höher: Er startet den Agenten überhaupt erst, ohne dass jemand im Chat etwas schreibt.

So funktioniert es. Die Event Trigger stammen aus derselben Bibliothek wie die Auslöser in Power Automate, also aus den [Power Platform Connectors](./Power Platform Connectors.md). Du wählst im Agenten einen Trigger aus, etwa „Wenn eine neue E-Mail eintrifft“, und verbindest ihn mit dem Postfach. Tritt das Ereignis ein, baut Copilot Studio daraus eine Nachricht an den Agenten, die Trigger-Payload. Sie enthält die Daten des Ereignisses, zum Beispiel Betreff, Absender und Text der Mail. Du kannst der Payload eigene Anweisungen mitgeben, die nur für diesen Auslöser gelten. Allgemeine Regeln gehören in die [Instructions](./Instructions.md) des Agenten. Der Agent liest die Payload und wählt dann selbst seine [Tools](./Tools.md) und Topics, was [Generative Orchestration](./Generative Orchestration.md) voraussetzt.

Ein paar Stolperfallen. Event Trigger laufen mit den Zugangsdaten der Person, die den Agenten gebaut hat, nicht mit denen eines Nutzers. Copilot Studio zeigt vor dem Veröffentlichen einen Warnhinweis dazu. Die Tools, die der Agent in solchen Läufen nutzt, müssen deshalb ebenfalls mit Maker-Zugangsdaten arbeiten. Jede ausgelöste Nachricht zählt als Aktion und verbraucht [Copilot Credits](./Copilot Credits.md). Ein Wiederholungstrigger (Recurrence) alle zehn Minuten erzeugt also 144 Läufe am Tag, auch wenn es nichts zu tun gibt. Admins können bestimmte Trigger über Datenrichtlinien sperren, dann erscheinen sie ausgegraut. Und im Test-Panel lassen sich Ereignisse nur begrenzt nachstellen, teste also mit einem echten Testpostfach oder einer Testtabelle.

Microsoft empfiehlt, einen durch ein Ereignis gestarteten Lauf auf weniger als 15 Aktionen oder Topics in Folge zu begrenzen. Längere Ketten werden unzuverlässig und teuer.

_Typischer Irrtum:_ Ein Event Trigger ist kein Power-Automate-Flow. Der Flow führt feste Schritte aus, der Agent entscheidet nach dem Auslösen selbst, was zu tun ist. Beides lässt sich kombinieren.

_Im Alltag:_

> „Ich habe dem Agenten einen Trigger auf unser Bewerbungspostfach gegeben. Jetzt hat er Rechte, die ich gar nicht wollte.“
>
> „Event Trigger laufen immer mit den Rechten der Person, die den Agenten gebaut hat. Prüf, was dein Konto alles darf, und halte die Rechte des Agenten so klein wie möglich.“
