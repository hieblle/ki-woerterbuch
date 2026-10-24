---
title: RAG
description: A technique that retrieves matching company documents for each question and hands them to the AI as context
aliases: [Retrieval-Augmented Generation, Retrieval]
---

RAG (Retrieval-Augmented Generation) is a technique in which a system finds the matching passages in a collection of documents for each question and hands them to the language model. The model then answers based on these passages instead of relying only on its [parametric knowledge](./Trainingswissen.md).

The process has two steps. First, retrieval: your question is compared by meaning, using [embeddings](./Embeddings.md), with the stored documents, such as your manuals, contracts or intranet. The best-matching sections are selected. Then, generation: these sections go into the chat as [contextual knowledge](./Kontextwissen.md), and the model composes its answer from them, usually with source references, see [grounding](./Grounding.md).

RAG is the foundation of many company chatbots, for example for the IT helpdesk, the HR portal, or product documentation in sales. Microsoft 365 Copilot works on the same principle: through the Microsoft Graph it searches your emails, Teams chats and SharePoint files and passes the hits to the model. You only get content you have access to yourself.

The advantage over [fine-tuning](./Fine-Tuning.md): new documents are available immediately, without anyone retraining the model. If the travel expense policy changes, the new version is stored and the old one removed.

RAG has a typical weak spot: the search finds the wrong document. You notice it when the answer sounds confident but quotes from an outdated version, refers to a different product, or names a source that does not fit the topic. Sometimes the search finds nothing at all, and the model answers from parametric knowledge without saying so. In both cases the source reference helps you: open the cited document and check whether it really is the right one. If there is no source, ask for one or upload the right document yourself.

_Common misconception:_ Many people believe a company chatbot has been “trained” on company data. Usually it has not. It searches anew for every question. That also explains why it mixes up badly filed or duplicate documents.

_In practice:_

> “The HR bot gave me a notice period that does not match my contract.”
>
> “Look at which document it cites as the source. With RAG it often happens that it catches the old works agreement instead of the current one.”
>
> “You are right, that one is from 2021.”
>
> “Then report it to HR. They need to remove the old version from the collection.”
