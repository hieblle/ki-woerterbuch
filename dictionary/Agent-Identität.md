---
description: Mit wessen Rechten ein Agent handelt, deinem Konto, dem Konto des Erstellers oder einem eigenen Konto mit eigenen Rechten
english: Agent identity
aliases: [Agent ID, Agent-Konto, Dienstkonto, Berechtigungen des Agenten, Entra Agent ID]
---

Die Agent-Identität beantwortet die Frage, mit wessen Rechten ein [Agent](./Agent.md) handelt: mit deinem Benutzerkonto, mit dem Konto der Person, die ihn gebaut hat, oder mit einem eigenen Konto, das wie das eines Mitarbeitenden verwaltet wird. Davon hängt ab, welche Dateien der Agent lesen, welche Mails er senden und welche Systeme er verändern darf.

Die einfachste Form kennst du vom [Connector](./Connector.md): Der Agent arbeitet mit deinem Konto und sieht genau das, was du siehst. Das ist für persönliche Helfer sinnvoll. Er kann nicht mehr als du, und was er tut, läuft unter deinem Namen.

Schwieriger wird es bei Agenten, die für ein ganzes Team gebaut sind. Läuft ein Agent mit dem Konto seines Erstellers, bekommen alle Nutzer Antworten aus Dokumenten, die der Ersteller öffnen darf, auch wenn sie selbst keinen Zugriff hätten. Ein Agent für Fragen zur Gehaltsrichtlinie, den eine HR-Kollegin gebaut hat, verrät dann unter Umständen Einzelgehälter an jeden, der fragt. Das ist eine häufige Ursache für [Datenabfluss](./Datenabfluss.md) innerhalb des Unternehmens, ohne dass jemand etwas Böses wollte.

Deshalb bekommen Agenten zunehmend ein eigenes Konto mit eigenen, bewusst zugeschnittenen Rechten. Microsoft nennt das Entra Agent ID: Der Agent erscheint im Verzeichnis wie ein Mitarbeitender, mit Verantwortlichem, Rollen und Zugriffsrechten, die sich prüfen und entziehen lassen. In Copilot Studio ist das die Voraussetzung dafür, dass ein Agent selbstständig arbeitet, etwa nachts Anträge vorsortiert, ohne dass gerade ein Mensch angemeldet ist. Ein Agent mit eigenem Konto ist auch im [Trace](./Trace.md) als eigener Akteur erkennbar.

Ein eigenes Konto bringt Pflichten mit. Jemand muss für den Agenten verantwortlich sein, so wie eine Führungskraft für einen Mitarbeitenden. Seine Rechte gehören ins Berechtigungskonzept und in die regelmäßige Prüfung durch die [KI-Governance](./KI-Governance.md). Und es braucht einen Austrittsprozess: Wird der Agent abgeschaltet oder wechselt der Verantwortliche, müssen die Rechte entzogen oder übergeben werden, sonst arbeitet ein vergessenes Konto mit weitreichendem Zugriff weiter.

Für dich heißt das: Frag bei jedem Agenten, den du nutzt oder baust, mit wessen Rechten er läuft. Die Antwort entscheidet, was er sehen kann und wer verantwortlich ist, wenn etwas schiefgeht.

_Typischer Irrtum:_ Ein Agent mit eigenem Konto hat nicht automatisch mehr Rechte. Meist hat er weniger, dafür genau die passenden, und alle wissen, welche.

_Im Alltag:_

> „Unser Richtlinien-Agent hat einem Kollegen den Entwurf für die neue Bonusregelung gezeigt. Der liegt in einem Ordner, auf den nur HR Zugriff hat.“
>
> „Dann läuft der Agent mit dem Konto der Person, die ihn gebaut hat. Er braucht eine eigene Identität mit Zugriff nur auf die freigegebenen Richtlinien.“
