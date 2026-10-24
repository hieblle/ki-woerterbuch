# KI-Wörterbuch für den Arbeitsalltag

Deutsches Glossar für KI-Begriffe, Zielgruppe: Mitarbeitende ohne Vorwissen. Herausgeber: dbrains academy.

## Struktur

- `dictionary/<Begriff>.md`: ein Eintrag pro Begriff (deutsch). Format und Stil in `internal/STYLEGUIDE.md`.
- `dictionary-en/<Begriff>.md`: englische Fassung mit demselben Dateinamen (deutscher Begriff als Schlüssel).
- `dictionary/packs/<paket>/`, `dictionary-en/packs/<paket>/`: Erweiterungen mit produktspezifischen Begriffen (z. B. `copilot`).
- `internal/Curriculum.md`: Kapitel und Reihenfolge des Hauptwörterbuchs. `internal/packs/<paket>.md`: Curriculum je Erweiterung.
- `internal/templates/`: Vorlagen für die generierten READMEs (`README.md`, `README.en.md`, `README-<paket>.md`, `README-<paket>.en.md`). Generierte Dateien nicht von Hand bearbeiten.
- `internal/generate-readme.ts`: baut alle READMEs. `internal/validate.ts`: prüft Frontmatter, Länge, Links, Pflichtblöcke, Paketregeln (mit `--require-en` auch fehlende Übersetzungen).
- `site/`: Graph-Website (Vite, 3d-force-graph). `site/scripts/build-data.ts` erzeugt je Sprache eine JSON-Datei, `site/src/i18n.ts` enthält die Oberflächentexte.

## Arbeitsweise

- Neuen Begriff: Datei in `dictionary/` und `dictionary-en/` anlegen, in `internal/Curriculum.md` (oder im Paket-Curriculum) eintragen, `npm run validate`, `npm run generate`.
- Hauptbegriffe verlinken nie auf Paketbegriffe. Paketbegriffe dürfen auf Hauptbegriffe verlinken.
- Links zwischen Einträgen: `[Begriff](./Begriff.md)`, nur beim ersten Vorkommen.
- Nach Inhaltsänderungen immer `npm run validate && npm run generate` ausführen.
- Schreibregeln aus `internal/STYLEGUIDE.md` gelten für alle Einträge. Du-Anrede, einfache Sprache, keine Gedankenstriche.
