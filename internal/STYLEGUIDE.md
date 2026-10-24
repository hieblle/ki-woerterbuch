# Schreibregeln für Einträge

Zielgruppe: Mitarbeitende in Unternehmen ohne technisches Vorwissen, die KI-Werkzeuge
(ChatGPT, Microsoft 365 Copilot, Claude, Gemini) im Arbeitsalltag nutzen wollen.
Herausgeber: dbrains academy (Linz). Anrede: Du.

## Dateiformat

Jeder Begriff ist eine Datei `dictionary/<Begriff>.md`. Der Dateiname ist exakt der
Begriffsname aus `internal/Curriculum.md` (mit Umlauten, Leerzeichen, Bindestrichen).

```markdown
---
description: Kurzdefinition in einem Satz, höchstens 140 Zeichen, ohne Punkt am Ende
english: Englischer Fachbegriff (optional, weglassen wenn identisch)
aliases: [Synonym 1, Synonym 2]
---

Erster Absatz: Was ist das, in einem oder zwei klaren Sätzen. Der erste Satz muss
allein verständlich sein.

Weitere Absätze: Wie funktioniert es, woran erkennt man es, was bedeutet es im
Arbeitsalltag. Verlinke andere Begriffe beim ersten Vorkommen so:
[Kontextfenster](./Kontextfenster.md). Nur Begriffe aus dem Curriculum verlinken.

_Typischer Irrtum:_ Ein Satz, der eine verbreitete Fehlannahme benennt und richtigstellt.

_Im Alltag:_

> „Eine Aussage oder Frage, wie sie im Büro fällt.“
>
> „Die Antwort einer Kollegin oder eines Kollegen, die den Begriff richtig einsetzt.“
```

## Pflichtteile

- Frontmatter mit `description` (höchstens 140 Zeichen).
- Mindestens 180, höchstens 450 Wörter im Fließtext (ohne Frontmatter).
- Genau ein Block `_Im Alltag:_` mit zwei bis vier Blockquote-Zeilen (abwechselnd
  Frage/Antwort). Anführungszeichen „…“ verwenden.
- Mindestens zwei Links auf andere Einträge. Links nur beim ersten Vorkommen.
- `_Typischer Irrtum:_` ist optional, aber bei Begriffen mit verbreiteten Missverständnissen erwünscht.

## Stil

- Einfache Sprache. Keine Fachwörter ohne Erklärung. Ein Gedanke pro Satz.
- Konkrete Beispiele aus Büro, HR, Vertrieb, Verwaltung, Produktion, Einkauf.
- Produkte als Beispiele nennen (ChatGPT, Microsoft 365 Copilot, Claude, Gemini), mit
  leichtem Fokus auf Microsoft 365 Copilot, weil viele Unternehmen damit arbeiten.
  Keine Werbung, keine Preise, keine Versionsnummern.
- Keine Superlative, keine Dramatisierung, keine Floskeln wie „revolutionär“ oder „spannend“.
- Keine Gedankenstriche als Satzzeichen (kein „—“ und kein „ – “). Kommas, Punkte, Doppelpunkte.
- Tabellen nur für echte Stufen oder Vergleiche (z. B. Risikoklassen, Autonomiegrade).
- Englischen Begriff beim ersten Vorkommen in Klammern nennen, wenn er im Alltag vorkommt.
- Rechtliche Aussagen vorsichtig formulieren („in der Regel“, „prüfen lassen“), keine Rechtsberatung.
- Wo ein Begriff ein Symptom hat (Halluzination, Kontextverlust), das Symptom beschreiben:
  Woran merke ich es, was tue ich dann.

## Erweiterungen (Pakete)

Produktspezifische Begriffe liegen in Paketen, zum Beispiel `dictionary/packs/copilot/`. Jedes Paket hat ein
Curriculum unter `internal/packs/<paket>.md` mit Frontmatter (`title_de`, `title_en`, `stand_de`, `stand_en`,
`description_de`, `description_en`, optional `chapters_en`) und denselben Kapitelzeilen wie das Hauptcurriculum.

- Paketeinträge dürfen auf Begriffe des Hauptwörterbuchs und des eigenen Pakets verlinken.
- Einträge des Hauptwörterbuchs verlinken nie auf Paketbegriffe. Das Hauptwörterbuch bleibt ohne Paket vollständig.
- Ein Paketbegriff darf nicht denselben Namen haben wie ein Hauptbegriff. Produktspezifische Varianten bekommen
  den Produktnamen in den Begriff (z. B. „Grounding in Copilot“ statt „Grounding“).
- Produktfakten mit Quelle aus der Herstellerdokumentation absichern. Keine Preise, aber Lizenz- und
  Abrechnungsmechanik darf beschrieben werden. Frühere Produktnamen als Aliase aufnehmen.
- Im Text den Stand nennen, wenn eine Funktion neu ist oder sich gerade ändert („Stand Oktober 2026“).

## Englische Fassung

Jeder Eintrag hat eine englische Fassung unter `dictionary-en/` mit demselben relativen Pfad und demselben
Dateinamen (deutscher Begriff als Schlüssel). Beispiel: `dictionary/Kontextfenster.md` und
`dictionary-en/Kontextfenster.md`.

- Frontmatter: `title` (englischer Anzeigename, Pflicht), `description` (höchstens 140 Zeichen), `aliases`.
  Kein Feld `english`.
- Links behalten den deutschen Dateinamen als Ziel: `[context window](./Kontextfenster.md)`.
- Marker heißen `_Common misconception:_` und `_In practice:_`. Dialogzeilen mit englischen Anführungszeichen “…”.
- Anrede „you“, gleicher Ton wie im Deutschen: einfach, konkret, keine Superlative, keine Gedankenstriche.
- Keine wörtliche Übersetzung, sondern eine Fassung, die ein englischsprachiger Leser natürlich findet.
  Beispiele und Produkte bleiben dieselben.
