---
description: Dauerhafte Vorgaben, die die KI in jedem Chat beachtet, etwa Sprache, Ton oder deine Rolle im Unternehmen
english: System prompt / Custom instructions
aliases: [Systemprompt, Custom Instructions]
---

Anweisungen sind Vorgaben, die nicht nur für einen Chat gelten, sondern für jeden. Du legst sie einmal fest, und die KI liest sie im Hintergrund vor jeder Antwort mit. Typische Inhalte: „Antworte auf Deutsch“, „Duze mich“, „Ich arbeite im Einkauf eines Maschinenbauers“, „Keine Aufzählungen, lieber Fließtext“. In ChatGPT heißt das Custom Instructions, bei Claude gibt es Projektanweisungen, bei Gemini und Microsoft 365 Copilot ähnliche Einstellungen.

Technisch handelt es sich um einen Systemprompt (System prompt). Das ist ein Text, den der Anbieter oder dein Unternehmen vor deinen eigentlichen [Prompt](./Prompt.md) stellt, ohne dass du ihn im Chat siehst. Jedes KI-Produkt hat so einen Systemprompt. Er legt fest, wie sich der Assistent verhält, was er nicht tun soll und wie er sich nennt. Deine persönlichen Anweisungen werden daran angehängt.

In Unternehmen setzt oft die IT-Abteilung einen Teil dieser Anweisungen. Bei Microsoft 365 Copilot kann der Administrator zum Beispiel vorgeben, dass bestimmte Datenquellen nicht durchsucht werden oder dass Antworten einen Hinweis zur Prüfpflicht enthalten. Du siehst diese Vorgaben nicht, bemerkst sie aber, wenn Copilot etwas konsequent verweigert oder immer gleich formuliert. Wenn du dich wunderst, frag die IT, was hinterlegt ist.

Anweisungen sparen Arbeit, weil du den immer gleichen [Kontext](./Kontext.md) nicht in jeden Chat tippen musst. Wer in der Personalabteilung arbeitet, hinterlegt einmal „Ich bin HR-Referentin bei einem Logistikunternehmen mit 400 Beschäftigten, alle Texte sollen sachlich und geschlechtergerecht sein“ und bekommt ab dann passendere Vorschläge. Für wiederkehrende Aufgaben mit vielen Details ist eine [Prompt-Vorlage](./Prompt-Vorlage.md) oft die bessere Wahl, weil sie nur dann greift, wenn du sie brauchst.

Anweisungen sind kein Gesetz. Das Modell befolgt sie meistens, aber nicht immer, besonders wenn der Chat lang wird oder dein Prompt etwas anderes verlangt. Wenn eine Anweisung ignoriert wird, wiederhole sie direkt im Chat.

_Typischer Irrtum:_ Viele denken, Anweisungen seien nur etwas für Technikinteressierte. Tatsächlich sind sie die einfachste Einstellung mit dem größten Effekt: drei Sätze über dich und deine Arbeit, einmal eingetragen.

_Im Alltag:_

> „Ich muss ChatGPT jedes Mal neu sagen, dass er mich duzen und kurz antworten soll. Nervt.“
>
> „Trag das in die Anweisungen ein, bei ChatGPT heißt das Custom Instructions. Dann gilt das in jedem neuen Chat automatisch.“
