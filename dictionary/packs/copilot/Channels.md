---
description: Oberflächen, über die Nutzer einen veröffentlichten Copilot-Studio-Agenten erreichen, etwa Teams, Copilot oder eine Website
english: Channels
aliases: [Kanäle, Publish, Veröffentlichen, Demo-Website, Demo website, Custom website]
---

Channels (Kanäle) sind die Orte, an denen Nutzer mit einem Agenten aus [Copilot Studio](./Copilot Studio.md) sprechen. Solange du nur im Test Panel arbeitest, sieht niemand den Agenten. Erst „Publish“ (Veröffentlichen) schreibt den aktuellen Stand in alle verbundenen Kanäle. Vor dem ersten Publish kannst du keinen Kanal verbinden. Nach einer Änderung musst du erneut veröffentlichen, sonst läuft draußen weiter die alte Version. Laufende Gespräche bekommen die neue Fassung erst in der nächsten Sitzung.

Der wichtigste Kanal im Unternehmen heißt „Teams and Microsoft Copilot“ (früher „Microsoft Teams + Microsoft 365“). Er macht den Agenten als Teams-App verfügbar und optional per Häkchen auch in [Microsoft Copilot](./Microsoft Copilot.md), wo Nutzer ihn per @Erwähnung ansprechen. Voraussetzung ist die Anmeldung über [Authentication](./Authentication.md) mit Microsoft und ein [Sharing](./Sharing.md) an die Personen oder Gruppen, die ihn nutzen sollen. Im Teams-App-Store erscheint er zunächst unter „Built with Power Platform“ für die freigegebenen Nutzer. Reicht ihn der Ersteller zur Admin-Freigabe ein, landet er unter „Built for your org“ und kann per Richtlinie vorinstalliert und angepinnt werden. Ähnlich funktioniert der Weg in den [Agent Store](./Agent Store.md).

Weitere Kanäle: die Demo-Website, ein von Microsoft gehosteter Link, mit dem du Kolleginnen und Kollegen Feedback einholen kannst, aber ausdrücklich nicht für den Betrieb gedacht. Die Custom Website, bei der du ein Code-Schnipsel in deine eigene Website oder dein Intranet einbaust. Der SharePoint-Kanal, der den Agenten auf einer Site einbettet. Dazu WhatsApp, eine Mobile-App-Anbindung über Direct Line, Facebook, die Kanäle des Azure Bot Service wie Slack oder Telegram und die Telefonie für Sprachagenten. Welche Kanäle in deinem Tenant erlaubt sind, steuern Admins im Power Platform Admin Center über „Agent access channels“ und über Datenrichtlinien, die einzelne Kanäle sperren.

Zwei Stolperfallen: Verbundene Kanäle wandern nicht automatisch mit, wenn du den Agenten zwischen [Environments](./Environments und Solutions.md) transportierst, du verbindest sie in der Zielumgebung neu. Und derselbe Agent aus Entwicklung und Produktion kann in Teams gleich heißen. Ein Namenszusatz je Umgebung, Stand Oktober 2026 in der Vorschau, verhindert Verwechslungen.

_Typischer Irrtum:_ Veröffentlichen heißt nicht, dass alle im Unternehmen den Agenten sehen. Wer ihn nutzen darf, entscheidet das Sharing, der Kanal legt nur fest, wo.

_Im Alltag:_

> „Ich habe den Agenten veröffentlicht, aber in Teams findet ihn keiner.“
>
> „Hast du ihn im Kanal ‚Teams and Microsoft Copilot‘ verbunden und an die Abteilung freigegeben? Veröffentlichen allein reicht nicht, die Kollegen müssen ihn unter ‚Built with Power Platform‘ hinzufügen.“
