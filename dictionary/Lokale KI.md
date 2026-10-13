---
description: KI-Modelle, die im eigenen Rechenzentrum oder auf dem eigenen Rechner laufen, statt beim Anbieter in der Cloud
english: Local / open-source models
aliases: [Open-Source-Modell, On-Premises-KI]
---

Lokale KI bedeutet, dass das [Sprachmodell](./Sprachmodell.md) nicht beim Anbieter in der Cloud läuft, sondern auf einem Rechner, den das Unternehmen selbst kontrolliert: im eigenen Rechenzentrum, auf einem Server beim IT-Dienstleister oder auf deinem Laptop. Deine Eingaben verlassen das Haus nicht.

Möglich wird das durch Open-Source-Modelle. Firmen wie Meta mit Llama, Mistral aus Frankreich oder Alibaba mit Qwen veröffentlichen ihre Modelle so, dass jeder sie herunterladen und betreiben darf. Dazu kommen Werkzeuge wie Ollama oder LM Studio, mit denen auch ein normaler Rechner ein kleines Modell ausführen kann. Große Modelle brauchen allerdings teure Grafikkarten, und das lohnt sich erst ab einer gewissen Nutzung.

Sinnvoll ist lokale KI, wenn Daten das Unternehmen nicht verlassen dürfen oder sollen. Beispiele: Patientendaten, Konstruktionspläne, Verträge mit strengen Geheimhaltungsklauseln, Personalakten. Auch Behörden und Banken setzen aus diesem Grund darauf. Ein weiterer Grund ist Unabhängigkeit: Das Modell ändert sich nicht über Nacht, weil der Anbieter eine neue Version ausrollt, und die Kosten hängen nicht von dessen Preisliste ab.

Die Nachteile sind spürbar. Lokale Modelle sind in der Regel weniger leistungsfähig als die großen Cloud-Modelle von OpenAI, Anthropic, Google oder Microsoft, vor allem bei schwierigen Aufgaben, langen Dokumenten und beim Schlussfolgern. Ein fertiger [KI-Assistent](./KI-Assistent.md), der in Word und Outlook sitzt, fehlt; das muss die IT selbst bauen oder zukaufen. Jemand muss das System betreiben, aktualisieren und absichern. Und die Fehler, die alle Sprachmodelle machen, etwa [Halluzination](./Halluzination.md), gibt es lokal genauso.

Für dich im Büro ändert sich wenig an der Bedienung. Ein lokales Modell hat auch ein Chatfenster. Du merkst den Unterschied daran, dass Antworten manchmal kürzer, langsamer oder ungenauer sind, und daran, dass keine Websuche dabei ist, wenn die IT sie nicht angebunden hat.

_Typischer Irrtum:_ „Lokal ist automatisch sicher.“ Die Daten bleiben im Haus, aber wer im Haus darauf zugreift und ob das Modell eingebaute Schwächen hat, bleibt Thema. Lokale KI verschiebt die Verantwortung zur eigenen IT, sie beseitigt sie nicht.

_Im Alltag:_

> „Dürfen wir die Konstruktionsunterlagen in ChatGPT laden, damit er die Stückliste prüft?“
>
> „Nein, die bleiben im Haus. Die IT hat dafür eine lokale KI aufgesetzt, die läuft auf unserem Server. Die ist etwas langsamer, aber die Daten gehen nirgendwohin.“
