---
description: Agent, der Websites und Programme wie ein Mensch bedient, also klickt, tippt und den Bildschirm liest
english: Computer use / browser agent
aliases: [Browser-Agent, Computer Use]
---

Ein Computer-Agent ist ein [Agent](./Agent.md), der Websites und Programme so bedient, wie ein Mensch es tun würde: Er sieht den Bildschirm, klickt auf Schaltflächen, tippt in Felder und liest, was danach erscheint.

Die Mechanik läuft in einer Schleife aus Sehen und Handeln. Der Agent macht einen Screenshot oder liest die Struktur der Seite, überlegt, was der nächste sinnvolle Schritt ist, und führt ihn aus, zum Beispiel „klicke auf Anmelden“ oder „tippe die Rechnungsnummer in das Suchfeld“. Dann schaut er wieder hin und prüft, ob das Erwartete passiert ist. Das wiederholt sich, bis die Aufgabe erledigt ist. Technisch ist das eine besondere Form der [Werkzeugnutzung](./Werkzeugnutzung.md), bei der Maus, Tastatur und Bildschirm die Werkzeuge sind. Geht es nur um Websites, spricht man von einem Browser-Agenten (Browser Use), bei beliebigen Programmen von Computer Use.

Der große Vorteil liegt bei Systemen ohne Schnittstelle. Viele Unternehmen haben alte Programme, ein Lieferantenportal oder eine Behördenwebsite, die sich nur über die Oberfläche bedienen lassen. Ein Computer-Agent braucht dafür keine technische Anbindung, er nutzt dieselbe Oberfläche wie du. Beispiele: Lieferscheine aus einem Portal herunterladen, Daten aus einem Altsystem in Excel übertragen, Preise auf fünf Händlerseiten vergleichen. ChatGPT Agent, Claude und Copilot bieten solche Funktionen in unterschiedlicher Tiefe an.

Die Risiken sind größer als beim Chat. Der Agent bedient echte Systeme mit deinen Rechten. Klickt er falsch, hat er etwas bestellt, gelöscht oder abgeschickt. Dazu kommt, dass er alles liest, was auf dem Bildschirm steht, auch versteckte Anweisungen auf einer fremden Website. Das macht ihn anfällig für [Prompt Injection](./Prompt Injection.md). Deshalb gilt: Computer-Agenten nur mit eingeschränkten Konten laufen lassen, Passwörter und Zahlungsdaten selbst eingeben und kritische Aktionen über eine [Freigabe](./Freigabe.md) absichern. Beobachte die ersten Durchläufe am Bildschirm, bevor du dem Agenten eine Aufgabe unbeaufsichtigt überlässt. Computer-Agenten sind außerdem langsam und brechen ab, wenn sich eine Website anders verhält als erwartet, etwa durch ein Pop-up oder eine Bot-Abfrage.

_Typischer Irrtum:_ Ein Computer-Agent ist kein Makro, das immer dieselben Klicks wiederholt. Er entscheidet bei jedem Schritt neu anhand dessen, was er sieht. Das macht ihn flexibler, aber auch weniger vorhersehbar.

_Im Alltag:_

> „Unser Lieferantenportal hat keine Schnittstelle. Könnte da ein Agent die Lieferscheine für uns holen?“
>
> „Ja, ein Computer-Agent bedient das Portal über die Oberfläche wie du. Richte ihm aber ein eigenes Konto nur mit Leserechten ein und schau beim ersten Lauf zu.“
