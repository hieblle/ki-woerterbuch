---
description: Frei veröffentlichtes KI-Modell, das jeder herunterladen und im eigenen Rechenzentrum oder auf dem eigenen Rechner betreiben darf
aliases: [Lokale KI, Open Source, On-Premises, Llama, Mistral]
---

Ein Open-Source-Modell ist ein [Sprachmodell](./Sprachmodell.md), das der Hersteller frei veröffentlicht (ein offen verfügbares Modell): Jeder darf es herunterladen und auf eigenen Rechnern betreiben. Damit läuft die KI nicht beim Anbieter in der Cloud, sondern auf einem Rechner, den das Unternehmen selbst kontrolliert: im eigenen Rechenzentrum, auf einem Server beim IT-Dienstleister oder auf deinem Laptop. Man spricht dann von lokaler KI oder On-Premises (im eigenen Haus). Deine Eingaben verlassen das Haus nicht.

Bekannte Open-Source-Modelle kommen von Meta mit Llama, von Mistral aus Frankreich oder von Alibaba mit Qwen. Dazu kommen Werkzeuge wie Ollama oder LM Studio, mit denen auch ein normaler Rechner ein kleines Modell ausführen kann. Große Modelle brauchen allerdings teure Grafikkarten, und das lohnt sich erst ab einer gewissen Nutzung.

Sinnvoll ist ein Open-Source-Modell im eigenen Haus, wenn Daten das Unternehmen nicht verlassen dürfen oder sollen. Beispiele: Patientendaten, Konstruktionspläne, Verträge mit strengen Geheimhaltungsklauseln, Personalakten. Auch Behörden und Banken setzen aus diesem Grund darauf. Ein weiterer Grund ist Unabhängigkeit: Das Modell ändert sich nicht über Nacht, weil der Anbieter eine neue Version ausrollt, und die Kosten hängen nicht von dessen Preisliste ab.

Die Nachteile sind spürbar. Open-Source-Modelle sind in der Regel weniger leistungsfähig als die großen Cloud-Modelle von OpenAI, Anthropic, Google oder Microsoft, vor allem bei schwierigen Aufgaben, langen Dokumenten und beim Schlussfolgern. Ein fertiger [KI-Assistent](./KI-Assistent.md), der in Word und Outlook sitzt, fehlt; das muss die IT selbst bauen oder zukaufen. Jemand muss das System betreiben, aktualisieren und absichern. Und die Fehler, die alle Sprachmodelle machen, etwa [Halluzination](./Halluzination.md), gibt es lokal genauso.

Für dich im Büro ändert sich wenig an der Bedienung. Ein Open-Source-Modell hat auch ein Chatfenster. Du merkst den Unterschied daran, dass Antworten manchmal kürzer, langsamer oder ungenauer sind, und daran, dass keine Websuche dabei ist, wenn die IT sie nicht angebunden hat.

_Typischer Irrtum:_ „Open Source im eigenen Haus ist automatisch sicher.“ Die Daten bleiben im Haus, aber wer im Haus darauf zugreift und ob das Modell eingebaute Schwächen hat, bleibt Thema. Ein Open-Source-Modell verschiebt die Verantwortung zur eigenen IT, es beseitigt sie nicht.

_Im Alltag:_

> „Dürfen wir die Konstruktionsunterlagen in ChatGPT laden, damit er die Stückliste prüft?“
>
> „Nein, die bleiben im Haus. Die IT hat dafür ein Open-Source-Modell aufgesetzt, das läuft auf unserem Server. Die ist etwas langsamer, aber die Daten gehen nirgendwohin.“
