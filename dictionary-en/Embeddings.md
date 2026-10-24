---
title: Embeddings
description: Strings of numbers that capture the meaning of a text, so a search for “leave request” also finds “request absence”
aliases: [Semantic search, Vector search, Vector database, Vectors]
---

Embeddings are long strings of numbers that an AI system converts a text into so that its meaning can be compared. Texts that mean the same thing get similar numbers, even if not a single word matches. The most important application is semantic search: if you search for “leave request”, it also finds a document that only says “request absence”.

Classic keyword search, the kind you know from Windows or the intranet, only checks whether a word appears. If the policy says “business trip” and you search for “work travel”, the results list stays empty. With embeddings it works differently: each passage of text is converted once into its string of numbers and stored. These numbers describe what the text is about. Texts with similar meaning end up “close to each other”.

A picture to go with it: imagine a huge shelf where all documents are arranged not alphabetically but by topic. Everything about travel ends up in one corner, everything about salary in another. Your question is also translated into an embedding and placed on the shelf. Whatever sits next to it is the hit. Because such strings of numbers are called “vectors” in technical terms, this is also known as vector search, and the shelf is called a vector database.

In everyday work, embeddings mostly stay hidden. They are the search step in [RAG](./RAG.md) and so in almost every company chatbot. Microsoft 365 Copilot uses them through the Microsoft Graph to find the emails and files that match your question. The [language model](./Sprachmodell.md) itself also works internally with similar strings of numbers, which is why it understands paraphrases so well.

The limit: closeness in meaning does not mean correctness. Two versions of the same policy sit right next to each other on the shelf, and the search can catch the old one. Very specific terms like an article number are often found better by keyword search, so good systems combine both. How you notice it: the chatbot delivers a passage that fits the topic but is not the one you wanted. Then it helps to ask more specifically or to use the exact term from the document.

_Common misconception:_ “The AI has read all our documents.” No. For each question it only receives the few passages the embedding search rated as relevant.

_In practice:_

> “I searched the intranet for ‘home office’ and found nothing, even though there is a policy.”
>
> “Here it is called ‘mobile working’. Ask Copilot. It searches by meaning using embeddings and finds it anyway.”
