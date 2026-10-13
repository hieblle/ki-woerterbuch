---
description: Vertrauliche Daten gelangen über KI-Werkzeuge zum Anbieter, ins Training oder in Antworten für andere
english: Data leakage
aliases: [Data Leakage, Datenleck]
---

Datenabfluss bedeutet, dass vertrauliche Informationen über ein KI-Werkzeug an Stellen gelangen, an die sie nicht gehören. Das kann der Anbieter sein, der Trainingsdatensatz eines Modells oder die Antwort, die eine andere Person bekommt.

Der häufigste Weg ist das Eintippen. Du kopierst einen Kundenvertrag, eine Gehaltsliste oder eine Kalkulation in ein Gratis-Tool, um eine Zusammenfassung zu bekommen. Bei vielen kostenlosen Angeboten darf der Anbieter solche Eingaben in der Regel zur Verbesserung seiner Modelle verwenden. Die Daten liegen dann auf fremden Servern, und du hast keinen Einfluss mehr darauf. Eine [Business-Lizenz](./Business-Lizenz.md) sichert üblicherweise vertraglich zu, dass Eingaben nicht fürs [Training](./Training.md) genutzt werden und innerhalb der Firma bleiben. Deshalb macht die Lizenz einen Unterschied, auch wenn das Werkzeug gleich aussieht.

Der zweite Weg sind [Connectoren](./Connector.md) mit zu vielen Berechtigungen. Microsoft 365 Copilot zeigt dir alles, worauf dein Konto Zugriff hat. Wenn eine Gehaltsliste seit Jahren in einem offenen SharePoint-Ordner liegt, hat sie früher niemand gefunden. Jetzt findet die KI sie auf die Frage „Was verdient die Abteilungsleitung?“. Die Daten sind nicht neu geflossen, aber die Lücke wird sichtbar. Ähnliches gilt für einen Agenten, der mit Leserechten auf das ganze Laufwerk ausgestattet ist.

Du merkst es meist gar nicht, das ist das Problem. Hinweise sind Antworten, die Interna enthalten, die du nie eingegeben hast, oder Kollegen, die über Copilot Dokumente sehen, die nicht für sie gedacht waren. Was du dann tust: An IT oder Datenschutz melden, den Zugriff auf den Ordner korrigieren und bei [personenbezogenen Daten](./Personenbezogene Daten.md) die Meldefristen der DSGVO prüfen lassen. Vorbeugend gilt, Vertrauliches nur in freigegebene Werkzeuge zu geben, so wenig Berechtigungen wie nötig zu vergeben und bei Unsicherheit die [KI-Richtlinie](./KI-Richtlinie.md) zu lesen.

_Typischer Irrtum:_ „Ich habe den Namen weggelassen, also ist es anonym.“ Ein Vertrag mit Lieferumfang, Preis und Laufzeit lässt sich oft trotzdem zuordnen.

_Im Alltag:_

> „Ich schmeiß das Angebot vom Lieferanten kurz in mein privates ChatGPT, damit ich die Zahlungsbedingungen verstehe.“
>
> „Mach das lieber im Copilot über dein Firmenkonto. Im privaten Gratis-Konto kann das ein Datenabfluss sein, und das Angebot ist vertraulich.“
