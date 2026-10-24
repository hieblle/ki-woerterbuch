---
description: Vertraulichkeitsbezeichnungen aus Microsoft Purview, die Copilot in Antworten anzeigt, vererbt und bei Verschlüsselung respektiert
english: Sensitivity Labels
aliases: [Vertraulichkeitsbezeichnungen, Vertraulichkeitslabels, Microsoft Purview Information Protection, Azure Information Protection, AIP, MIP]
---

Sensitivity Labels (Vertraulichkeitsbezeichnungen) sind Markierungen wie „Öffentlich“, „Intern“ oder „Streng vertraulich“, die du an Dateien, E-Mails, Teams und SharePoint-Sites hängst. Sie kommen aus Microsoft Purview Information Protection, früher Azure Information Protection. Ein Label kann nur kennzeichnen oder zusätzlich schützen: mit Wasserzeichen, Kopfzeile oder Verschlüsselung, die festlegt, wer den Inhalt öffnen, bearbeiten oder kopieren darf. Was [Vertraulichkeit](./Vertraulichkeit.md) im Umgang mit KI grundsätzlich bedeutet, erklärt der Hauptbegriff.

In [Microsoft Copilot](./Microsoft Copilot.md) wirken Labels an drei Stellen. Erstens bei der Verschlüsselung: Copilot kann einen geschützten Inhalt nur verarbeiten, wenn du selbst die Rechte „Anzeigen“ und „Extrahieren“ hast. Fehlt das Extrahieren-Recht, zitiert Copilot höchstens die Datei, gibt aber nichts aus ihr wieder. Labels mit vom Nutzer selbst festgelegten Rechten blockieren Copilot und [Agenten](./Agent.md) ganz. Zweitens bei der Anzeige: In Copilot Chat siehst du neben jeder zitierten Datei ihr Label, und die Antwort selbst trägt das strengste Label aller Quellen. So erkennst du sofort, wenn in einer Zusammenfassung vertrauliches Material steckt. Drittens bei der Vererbung: Erstellst du in Word, PowerPoint oder Outlook mit Copilot etwas aus einer gelabelten Datei, übernimmt das neue Dokument das Label samt Schutz. Bei mehreren Quellen gewinnt das strengste.

Für Agenten gilt Ähnliches. Lädst du im [Agent Builder in Copilot](./Agent Builder in Copilot.md) Dateien als Wissen hoch, bekommt der Agent das strengste Label dieser Dateien. Wer das Extrahieren-Recht nicht hat, kann den Agenten nicht nutzen.

Ein Label allein nimmt eine Datei nicht aus Copilot heraus. Wenn deine Firma will, dass „Streng vertraulich“ gar nicht erst als Quelle dient, braucht es eine Regel in [DLP](./DLP.md), die auf das Label reagiert. Labels liefern die Klassifizierung, DLP die Durchsetzung. Deshalb empfiehlt Microsoft, Labels vor dem Copilot-Rollout flächendeckend einzuführen, auch mit automatischer Vergabe, etwa für Dateien mit Personalnummern oder IBANs. Das ist der nachhaltige Weg gegen [Oversharing](./Oversharing.md), weil der Schutz an der Datei hängt und nicht am Ablageort.

Für dich als Nutzer heißt das: Setz Labels bewusst. Ein korrekt gelabeltes Angebot bleibt geschützt, auch wenn Copilot es in eine Präsentation übernimmt. Und wenn in einer Copilot-Antwort ein Label „Vertraulich“ auftaucht, überleg kurz, bevor du sie in einen Chat mit vielen Leuten kopierst.

_Typischer Irrtum:_ Viele glauben, ein Label „Vertraulich“ verstecke die Datei vor Copilot. Ohne Verschlüsselung oder DLP-Regel ist sie weiterhin eine Quelle, nur eben markiert.

_Im Alltag:_

> „Copilot hat mir einen Entwurf aus der Vorstandsvorlage gebaut, und jetzt steht auf meinem Dokument ‚Streng vertraulich‘. Kann ich das entfernen?“
>
> „Das Label wurde vererbt, weil die Quelle so markiert ist. Lass es dran. Wenn dein Text nichts Vertrauliches mehr enthält, kannst du es herunterstufen, aber dann musst du das begründen.“
