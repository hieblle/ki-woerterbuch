---
title: Non-Determinism
description: The same question does not always lead to the same answer from a language model; that is normal and not a fault
aliases: [Non-deterministic output, Randomness, Nicht-Determinismus]
---

Non-determinism means that a [language model](./Sprachmodell.md) does not always give the same answer to the same input. Ask Copilot the same question twice and you get two different texts. That is not a fault but part of how it works.

The reason lies in the mechanism. For each next word, the model calculates several candidates with different probabilities and then picks one of them, with a bit of randomness. After the first different word, the rest of the answer heads in a different direction. Providers build this randomness in on purpose, because otherwise the answers sound stiff and repetitive. In the chat there is no button that switches it off completely.

A calculator or an Excel formula is deterministic. Same input, same result, every time. A language model is not. If you do not know this, you quickly look for the mistake in yourself: “Yesterday it got this right, today it didn't, what did I enter differently?” Often nothing.

This has two consequences for checking results. First, you cannot conclude from one good run that the next will be good too. If a model checks a contract clause ten times and finds the error nine times, the tenth time still remains. The principle of [human-in-the-loop](./Human-in-the-Loop.md) therefore applies to every result, not just the first. Second, for important tasks it pays to compare several runs. If three summaries agree on the key points, that is a good sign. If they differ, you know where to look more closely.

For templates this means: a [prompt template](./Prompt-Vorlage.md) that worked well in testing delivers similar, but not identical, results in use. The more precisely you specify the [output format](./Ausgabeformat.md), such as a table with fixed columns or a list with at most five points, the smaller the variation. But the format cannot pin down the content.

You can also make use of non-determinism. If you have three versions of a subject line or a heading generated, you get three real alternatives and can pick the best.

_Common misconception:_ A different answer to the same question is not a sign that the tool is broken or that someone has changed the settings.

_In practice:_

> “I used the same prompt as Sabine, but my table looks completely different.”
>
> “That's non-determinism, every run turns out a bit different. Specify the columns, then it gets more stable. It will never be identical.”
