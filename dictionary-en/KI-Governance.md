---
title: AI Governance
description: Settles who in the company decides on AI use, who is responsible for it and who checks that the rules are followed
aliases: [KI-Governance]
---

AI governance settles who in the company decides on the use of AI, who carries the responsibility and who checks that the rules are followed. The [AI policy](./KI-Richtlinie.md) says what is allowed. Governance says who determines that, who approves new tools and who steps in when something goes wrong.

This needs a few clear roles. Someone owns the topic overall, often a person from management or the head of IT. Someone reviews new tools before approval, usually together with data protection, IT security and the works council (see [works agreement](./Betriebsvereinbarung.md)). And every department has a contact person who knows which [use cases](./Use Case.md) are running there. In small companies, that can be two people. What matters is that responsibility is named, not the number of committees.

The approval process for new tools is the heart of it. Anyone who wants to use a new AI tool submits a short request with the use case, the types of data and the vendor. Three things are then checked. Which data leaves the company, and is that compatible with the [GDPR rules for AI](./DSGVO und KI.md)? Is there a contract with the vendor, for example a [business license](./Business-Lizenz.md) under which inputs are not used for training? And which risk class does the use fall into under the [EU AI Act](./EU AI Act.md)? The answer should come within a few days. If it takes months, [shadow AI](./Schatten-KI.md) emerges, because people do not wait.

The register of AI applications is a list of all approved tools and use cases. Each entry records who is responsible, which data is processed, which review is built in and when the entry was last checked. That sounds bureaucratic, but it is the only way to answer quickly when an authority or a customer asks. A table in SharePoint is enough for this.

Governance has to fit the size of the company. A business with thirty people does not need an ethics committee, but it does need one person who is allowed to say “yes” or “no”, and a list of what is in use.

_Common misconception:_ Governance is not the same as prohibition. Good governance makes approvals fast and traceable, so that employees can use tools officially instead of secretly.

_In practice:_

> “Marketing just went and got itself a new AI tool for images. Is that allowed?”
>
> “Under our governance it has to go through approval and into the register first. I'll ask whether that happened. If not, we catch up on it, that only takes two days here.”
