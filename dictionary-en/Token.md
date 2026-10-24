---
title: Token
description: The unit in which a language model reads and writes, roughly a part of a word; it sets cost, speed and limits
aliases: [Tokens, Subword]
---

A token is the smallest unit in which a [language model](./Sprachmodell.md) reads and writes text. A token is usually part of a word, sometimes a whole short word, sometimes just a punctuation mark.

An example makes this concrete. The German sentence “Die Rechnung ist überfällig.” (“The invoice is overdue.”) has four words. For the model it is about six tokens: “Die”, “Rechnung”, “ist”, “über”, “fällig” and the full stop. Common German words like “und” or “nicht” are one token. Rare or long words like “Lieferantenbewertung” are split into several parts. As a rule of thumb for German: one word is about one and a half to two tokens. English text needs fewer tokens than German, because the models were trained on more English text.

Tokens determine three things in everyday work. First, the limit of what the model can process at once. The [context window](./Kontextfenster.md) is measured in tokens, and a 40-page contract can hit that limit. Second, speed, because the model produces one token at a time, and a long answer takes correspondingly longer. Third, cost, because providers bill usage through their interfaces by token. With a license like Microsoft 365 Copilot you see none of this, but the limits still apply.

You usually only notice tokens when something no longer fits. The model cuts off a long summary, reports that the document is too large, or forgets the beginning of a long [chat](./Chat.md). Then it helps to shorten the text, split it into sections or provide only the relevant pages.

For writing prompts this means: every word costs tokens, but brevity is not a goal in itself. One extra clear sentence that prevents a misunderstanding saves more than it costs.

_Common misconception:_ A token is not the same as a word, and not the same as a character either. If you count words, you will end up far too low for German text.

_In practice:_

> “Copilot says my document is too long. It's only 60 pages.”
>
> “60 pages quickly adds up to more than a hundred thousand tokens, which blows the context window. Give it just the chapter you need.”
