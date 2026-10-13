---
description: KI als Schritt in einen festen Ablauf einbauen, etwa mit Power Automate, Zapier, n8n oder Copilot Studio
english: Workflow automation
aliases: [Automatisierung, Power Automate]
---

Workflow-Automatisierung bedeutet, KI in einen festen Ablauf einzubauen, der ohne dein Zutun startet und durchläuft. Werkzeuge dafür sind Power Automate, Zapier, n8n oder Copilot Studio.

Ein Workflow hat immer dieselben Bausteine. Der Trigger ist das Ereignis, das den Ablauf startet: eine neue Mail im Postfach, ein abgeschicktes Formular, eine Datei landet in einem Ordner, jeden Montag um acht Uhr. Dann folgen Schritte, die nacheinander ausgeführt werden. Einer davon ist der KI-Schritt, etwa „fasse den Mailtext zusammen“, „ordne die Anfrage einer Kategorie zu“ oder „entwirf eine Antwort“. Am Ende steht die Ausgabe: ein Eintrag in einer Liste, eine Nachricht in Teams, eine Mail an die zuständige Person.

Ein Beispiel aus der Verwaltung: Jede Rechnung, die im Postfach „rechnungen@“ ankommt, löst den Workflow aus. Ein Schritt speichert den Anhang in SharePoint. Der KI-Schritt liest Lieferant, Betrag und Fälligkeit aus und schreibt sie in eine Liste. Ein weiterer Schritt schickt der Buchhaltung eine Teams-Nachricht. So wird aus einem Chat, in dem du jede Rechnung einzeln hochlädst, ein Prozess, der von selbst läuft.

Der Unterschied zum [Agenten](./Agent.md) liegt in der Planung. Ein Workflow hat einen festen Ablauf, den ein Mensch vorher gebaut hat. Die KI entscheidet nur innerhalb ihres einen Schritts. Ein Agent plant den Ablauf selbst und wählt bei jedem Schritt, was als Nächstes sinnvoll ist. Workflows sind damit vorhersehbarer, günstiger und leichter zu prüfen. Agenten sind flexibler, aber schwerer zu kontrollieren. Für wiederkehrende, gleichförmige Aufgaben passt der Workflow, für Aufgaben mit jedes Mal anderem Weg eher der Agent. Beides lässt sich kombinieren: Ein Workflow kann als einen Schritt einen Agenten aufrufen, den du im [Agent Builder](./Agent Builder.md) gebaut hast.

Beim Bauen eines Workflows mit KI-Schritt lohnt sich dieselbe Sorgfalt wie beim [Prompting](./Prompting.md). Der KI-Schritt bekommt einen festen Prompt, der für alle Eingaben gelten muss. Teste ihn mit zehn echten Beispielen, bevor der Workflow live geht, und baue einen Prüfschritt ein, wenn die Ausgabe Folgen hat. Was im Chat ein kleiner Fehler ist, wiederholt sich im Workflow hundertfach. Im Unternehmen ist das die Abwägung zwischen [Augmentation](./Augmentation.md) und voller Automatisierung.

_Typischer Irrtum:_ Ein Workflow mit KI-Schritt ist kein Agent, auch wenn Produkte ihn so nennen. Der Ablauf ist festgelegt, die KI füllt nur eine Lücke darin aus.

_Im Alltag:_

> „Ich lade jeden Tag zwanzig Rechnungen in Copilot und lasse mir Betrag und Fälligkeit raussuchen. Geht das nicht automatisch?“
>
> „Bau dir dafür einen Workflow in Power Automate. Trigger ist die neue Mail, der KI-Schritt liest die Daten aus, die Ausgabe geht in eine Liste. Dann musst du nur noch prüfen.“
