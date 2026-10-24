---
description: Einstellung in Copilot Studio, mit der du das primäre Sprachmodell eines Agenten wählst, auch Modelle externer Anbieter
english: Model selection
aliases: [Modellauswahl, Primäres KI-Modell, Primary AI Model, Orchestration Model, External Models, Externe Modelle]
---

Model Selection (Modellauswahl) ist die Einstellung in [Copilot Studio](./Copilot Studio.md), mit der du festlegst, welches [Sprachmodell](./Sprachmodell.md) dein Agent im Kern verwendet. Du findest sie auf der Übersichtsseite des Agenten unter „Model“. Das gewählte Modell heißt primäres Modell, früher Orchestration Model: Es plant bei [generativer Orchestration](./Generative Orchestration.md), welche Topics und Tools dran sind, und formuliert die Antworten.

Die Liste enthält Modelle von OpenAI, Anthropic, xAI und Mistral. Jedes Modell trägt Schlagworte, die die Einordnung erleichtern: Default für die Voreinstellung, General für Alltagsaufgaben, Deep für Reasoning-Modelle, Auto für Modelle, die selbst zwischen schnell und gründlich wechseln, dazu GA, Preview oder Experimental für den Reifegrad und Cross-geo, wenn Daten die Region verlassen können. Microsoft wechselt das Default-Modell regelmäßig. Das alte bleibt dann etwa einen Monat als Retired nutzbar, damit du prüfen kannst, ob dein Agent mit dem neuen genauso arbeitet.

Modelle von Anthropic, xAI und Mistral gelten als externe Modelle. Sie laufen nicht in Azure, sondern beim jeweiligen Anbieter. Deshalb müssen Administratoren sie erst freischalten: einmal im Power Platform Admin Center („Turn on external models“) und zusätzlich je Anbieter im Microsoft 365 Admin Center. Für Preview- und Experimental-Modelle gibt es einen eigenen Schalter pro Umgebung. Solange nichts freigeschaltet ist, siehst du diese Einträge grau oder gar nicht. Wer in der EU arbeitet, prüft außerdem das Cross-geo-Schlagwort, weil solche Modelle Daten außerhalb der Region verarbeiten können.

Neben dem primären Modell gibt es weitere Modelleinstellungen, die oft verwechselt werden. Deep Reasoning ist Stand Oktober 2026 eine Vorschaufunktion: Der Agent zieht für einzelne schwierige Schritte ein [Reasoning](./Reasoning.md)-Modell hinzu, entweder selbst oder weil in den [Instructions](./Instructions.md) das Wort „reason“ steht. Laut Microsoft ist sie nicht in allen Regionen verfügbar und kostet zusätzliche [Copilot Credits](./Copilot Credits.md). Das [Prompt Tool](./Prompt Tool.md) hat seine eigene Modellwahl, dort auch mit eigenen Modellen aus Azure AI Foundry. Und Agenten auf dem GitHub Copilot [Harness](./Harness.md) haben eine eigene Modellliste.

Ein Modellwechsel ist kein Knopf, den man nebenbei drückt. Antworten werden länger oder kürzer, Tools werden anders oft aufgerufen, Formulierungen ändern sich. Teste nach jedem Wechsel mit denselben Fragen wie vorher, zum Beispiel mit [Agent Evaluations](./Agent Evaluations.md), bevor der Agent für alle sichtbar ist.

_Typischer Irrtum:_ Ein größeres oder neueres Modell ist nicht automatisch die bessere Wahl. Für einen Nachschlage-Agenten mit klaren Wissensquellen reicht oft das Default-Modell, und es antwortet schneller.

_Im Alltag:_

> „Ich sehe bei uns kein Claude-Modell in der Liste. Haben wir das nicht?“
>
> „Externe Modelle muss die IT erst freischalten, im Power Platform Admin Center und im Microsoft 365 Admin Center. Frag dort nach, ob das für eure Umgebung gewollt ist.“
