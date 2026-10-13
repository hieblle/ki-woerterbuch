# KI-Wörterbuch für den Arbeitsalltag

Deutsches Glossar für KI-Begriffe, Zielgruppe: Mitarbeitende ohne Vorwissen. Herausgeber: dbrains academy.

## Struktur

- `dictionary/<Begriff>.md`: ein Eintrag pro Begriff. Format und Stil in `internal/STYLEGUIDE.md`.
- `internal/Curriculum.md`: Kapitel und Reihenfolge. Jeder Eintrag muss hier gelistet sein.
- `internal/README.template.md`: Vorlage für die README. `README.md` wird generiert, nicht von Hand bearbeiten.
- `internal/generate-readme.ts`: baut `README.md` aus Curriculum und Einträgen.
- `internal/validate.ts`: prüft Frontmatter, Länge, Links, Pflichtblöcke.
- `site/`: Graph-Website (Vite, 3d-force-graph). `site/scripts/build-data.ts` liest die Einträge ein.

## Arbeitsweise

- Neuen Begriff: Datei in `dictionary/` anlegen, in `internal/Curriculum.md` eintragen, `npm run validate`, `npm run generate`.
- Links zwischen Einträgen: `[Begriff](./Begriff.md)`, nur beim ersten Vorkommen.
- Nach Inhaltsänderungen immer `npm run validate && npm run generate` ausführen.
- Schreibregeln aus `internal/STYLEGUIDE.md` gelten für alle Einträge. Du-Anrede, einfache Sprache, keine Gedankenstriche.
