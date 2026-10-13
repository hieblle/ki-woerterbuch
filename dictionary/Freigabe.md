---
description: Rückfrage eines Agenten vor einer kritischen Aktion wie Mail senden, Datei löschen oder Bestellung auslösen
english: Human approval / permission
aliases: [Permission, Bestätigung]
---

Eine Freigabe ist der Moment, in dem ein [Agent](./Agent.md) vor einer kritischen Aktion anhält und dich fragt: „Soll ich diese Mail jetzt senden?“ Erst nach deinem Ja macht er weiter.

Kritisch sind Aktionen, die sich nicht leicht rückgängig machen lassen oder nach außen wirken. Eine Mail an einen Kunden, das Löschen einer Datei, eine Bestellung, eine Terminabsage, eine Änderung im Personalsystem. Eine Suche in SharePoint oder das Lesen einer Datei braucht dagegen keine Freigabe, weil nichts passiert, wenn das Ergebnis unbrauchbar ist. Gute Produkte unterscheiden diese beiden Arten von Aktionen und fragen nur bei der ersten.

Im Produkt siehst du die Freigabe als Dialog. Microsoft 365 Copilot zeigt dir den Mailentwurf und wartet auf „Senden“. ChatGPT Agent hält an, bevor er im Browser ein Formular abschickt oder etwas kauft, und bittet dich zu übernehmen. Claude fragt vor Aktionen, die Daten verändern, und zeigt an, was genau passieren würde. Manche Systeme lassen dich einstellen, welche Aktionen immer eine Freigabe brauchen, welche gesperrt sind und welche der Agent allein erledigen darf, als Teil seiner [Guardrails](./Guardrails.md). Das ist der praktische Hebel für den [Autonomiegrad](./Autonomiegrad.md).

Die Rückfrage ist kein Mangel, sondern ein Sicherheitsnetz. Ein Agent arbeitet mehrere Schritte hintereinander und kann sich in einem davon irren: falscher Empfänger, falsche Datei, falsche Menge. Ohne Freigabe geht der Fehler raus. Mit Freigabe siehst du ihn, bevor er Folgen hat. Das kostet dich ein paar Sekunden, erspart aber Erklärungen beim Kunden oder in der Buchhaltung. Es ist dieselbe Logik wie beim Prinzip [Human-in-the-Loop](./Human-in-the-Loop.md): Die KI bereitet vor, der Mensch verantwortet.

Die Freigabe verliert ihren Wert, wenn du sie blind erteilst. Wer bei jeder Rückfrage sofort auf „Ja“ klickt, hat faktisch einen Agenten ohne Kontrolle. Lies, was der Agent vorhat, besonders bei Empfängern, Beträgen und Dateinamen. Wenn die Rückfragen zu häufig werden, ist das ein Hinweis, die Aufgabe kleiner zu schneiden oder unkritische Aktionen freizugeben, nicht alle.

_Typischer Irrtum:_ Dass ein Agent fragt, heißt nicht, dass er unsicher oder schlecht ist. Es heißt, dass er eine Aktion als folgenreich erkannt hat.

_Im Alltag:_

> „Der Agent fragt mich bei jeder Mail, ob er sie senden darf. Kann man das nicht abschalten?“
>
> „Kannst du, aber ich würde es lassen. Letzte Woche hätte er eine Preisliste an den falschen Kunden geschickt, und die Freigabe hat das aufgefangen.“
