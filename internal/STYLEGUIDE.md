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
