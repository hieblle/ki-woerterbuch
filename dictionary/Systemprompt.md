---
description: Dauerhafte Vorgaben, die die KI in jedem Chat beachtet, etwa Sprache, Ton oder deine Rolle im Unternehmen
aliases: [Anweisungen, System Prompt, Custom Instructions]
---

Ein Systemprompt ist ein Text mit dauerhaften Vorgaben (Anweisungen), den die KI vor jeder Antwort im Hintergrund mitliest. Er gilt nicht nur für einen Chat, sondern für jeden. Den Teil, den du selbst festlegst, füllst du mit Sätzen wie: „Antworte auf Deutsch“, „Duze mich“, „Ich arbeite im Einkauf eines Maschinenbauers“, „Keine Aufzählungen, lieber Fließtext“. In ChatGPT heißt diese Einstellung Custom Instructions, bei Claude gibt es Projektanweisungen, bei Gemini und Microsoft 365 Copilot ähnliche Einstellungen.

Der Systemprompt hat mehrere Schichten. Den Grundstock schreibt der Anbieter: einen Text, der vor deinem eigentlichen [Prompt](./Prompt.md) steht, ohne dass du ihn im Chat siehst. Er legt fest, wie sich der Assistent verhält, was er nicht tun soll und wie er sich nennt. Jedes KI-Produkt hat so einen Systemprompt. Dein Unternehmen kann eigene Vorgaben ergänzen, und deine persönlichen Anweisungen werden daran angehängt.

In Unternehmen setzt oft die IT-Abteilung einen Teil des Systemprompts. Bei Microsoft 365 Copilot kann der Administrator zum Beispiel vorgeben, dass bestimmte Datenquellen nicht durchsucht werden oder dass Antworten einen Hinweis zur Prüfpflicht enthalten. Du siehst diese Vorgaben nicht, bemerkst sie aber, wenn Copilot etwas konsequent verweigert oder immer gleich formuliert. Wenn du dich wunderst, frag die IT, was hinterlegt ist.

Ein eigener Systemprompt spart Arbeit, weil du den immer gleichen [Kontext](./Kontext.md) nicht in jeden Chat tippen musst. Wer in der Personalabteilung arbeitet, hinterlegt einmal „Ich bin HR-Referentin bei einem Logistikunternehmen mit 400 Beschäftigten, alle Texte sollen sachlich und geschlechtergerecht sein“ und bekommt ab dann passendere Vorschläge. Für wiederkehrende Aufgaben mit vielen Details ist eine [Prompt-Vorlage](./Prompt-Vorlage.md) oft die bessere Wahl, weil sie nur dann greift, wenn du sie brauchst.

Ein Systemprompt ist kein Gesetz. Das Modell befolgt ihn meistens, aber nicht immer, besonders wenn der Chat lang wird oder dein Prompt etwas anderes verlangt. Wenn eine Anweisung ignoriert wird, wiederhole sie direkt im Chat.

_Typischer Irrtum:_ Viele denken, der Systemprompt sei nur etwas für Technikinteressierte. Tatsächlich ist er die einfachste Einstellung mit dem größten Effekt: drei Sätze über dich und deine Arbeit, einmal eingetragen.

_Im Alltag:_

> „Ich muss ChatGPT jedes Mal neu sagen, dass er mich duzen und kurz antworten soll. Nervt.“
>
> „Trag das in deinen Systemprompt ein, bei ChatGPT heißt das Custom Instructions. Dann gilt das in jedem neuen Chat automatisch.“
