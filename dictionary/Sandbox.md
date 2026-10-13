---
description: Abgeschirmte Umgebung mit Testdaten und eingeschränkten Rechten, in der ein Agent arbeitet, ohne Produktivsysteme zu erreichen
aliases: [Testumgebung]
---

Eine Sandbox (Testumgebung) ist ein abgeschirmter Bereich, in dem ein [Agent](./Agent.md) arbeiten kann, ohne echte Systeme zu erreichen. Er bekommt Testdaten statt Kundendaten, eingeschränkte Rechte statt deiner Rechte und keinen Zugang zu Produktivsystemen wie dem echten SharePoint, dem CRM oder dem Mailserver.

Der Name kommt vom Sandkasten: Was darin passiert, bleibt darin. Macht der Agent einen Fehler, löscht er den falschen Ordner oder schickt eine Mail an alle, dann trifft das Kopien, Testadressen oder ein leeres Konto. Nichts davon hat Folgen für Kunden, Kollegen oder die Buchhaltung. Das begrenzt den Schaden auf den Bereich, in dem ein Fehler nichts kostet, und genau dort probierst du Neues aus.

Ein Beispiel: Die Personalabteilung will einen Agenten, der Bewerbungen aus dem Postfach sortiert und im Bewerberordner ablegt. Statt ihn gleich im echten SharePoint laufen zu lassen, richtet die IT einen Test-Tenant ein, also eine zweite, getrennte Microsoft-365-Umgebung mit zwanzig erfundenen Bewerbungen und einem Testpostfach. Dort läuft der Agent zwei Wochen. Legt er Dateien falsch ab oder verwechselt Namen, sieht man es, ohne dass echte Bewerberdaten betroffen sind. Erst danach bekommt er Zugriff auf das echte System, zunächst nur mit Leserechten.

Technisch gibt es Sandboxes auf mehreren Ebenen. Coding-Agenten wie Claude Code oder GitHub Copilot führen Programme in einem abgeschotteten Container aus, der nach dem Lauf verschwindet. [Computer Use](./Computer Use.md) läuft idealerweise in einem eigenen Browser mit eigenem Konto. Copilot Studio und Microsoft 365 bieten Testumgebungen für Agenten, bevor sie für die Firma veröffentlicht werden. Immer gilt dasselbe Prinzip: getrennte Daten, getrennte Rechte, getrennte Wirkung.

Die Sandbox ist der natürliche erste Schritt, bevor der [Autonomiegrad](./Autonomiegrad.md) steigt. Was in der Sandbox zuverlässig funktioniert, darf nach und nach an echte Daten, am besten zuerst nur lesend und mit [Freigabe](./Freigabe.md) für alles, was schreibt. Eine Sandbox gehört deshalb zu den wichtigsten [Guardrails](./Guardrails.md).

_Typischer Irrtum:_ Eine Kopie der echten Kundendatenbank ist keine Sandbox. Die Rechte sind zwar eingeschränkt, aber die [personenbezogenen Daten](./Personenbezogene Daten.md) sind echt, und ein [Datenabfluss](./Datenabfluss.md) wäre genauso schlimm wie im Produktivsystem.

_Im Alltag:_

> „Können wir den Rechnungsagenten nicht einfach im echten SharePoint testen? Dann sehen wir gleich, ob er funktioniert.“
>
> „Lieber im Test-Tenant mit Kopien von zehn alten Rechnungen. Wenn er dort etwas falsch ablegt, kostet das nichts. Im echten System suchen wir danach wochenlang.“
