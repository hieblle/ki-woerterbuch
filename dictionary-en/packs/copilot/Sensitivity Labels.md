---
title: Sensitivity Labels
description: Classification labels from Microsoft Purview that Copilot shows in answers, inherits, and respects when content is encrypted
aliases: [Vertraulichkeitsbezeichnungen, Microsoft Purview Information Protection, Azure Information Protection, AIP, MIP]
---

Sensitivity labels are tags such as “Public”, “Internal” or “Highly confidential” that you attach to files, emails, teams and SharePoint sites. They come from Microsoft Purview Information Protection, formerly Azure Information Protection. A label can simply classify, or it can also protect: with a watermark, a header, or encryption that defines who may open, edit or copy the content. What [confidentiality](./Vertraulichkeit.md) means when working with AI in general is covered in the main entry.

In [Microsoft Copilot](./Microsoft Copilot.md), labels act in three places. First, encryption: Copilot can only process protected content if you personally hold the “View” and “Extract” rights. Without the extract right, Copilot may cite the file at most, but reproduces nothing from it. Labels with permissions defined by the user block Copilot and [agents](./Agent.md) entirely. Second, display: in Copilot Chat you see the label next to every cited file, and the answer itself carries the strictest label of all its sources. You can tell at once when a summary contains confidential material. Third, inheritance: if you create something with Copilot in Word, PowerPoint or Outlook from a labelled file, the new document takes over the label including its protection. With several sources, the strictest one wins.

Agents work similarly. If you upload files as knowledge in the [Agent Builder in Copilot](./Agent Builder in Copilot.md), the agent receives the strictest label of those files. Anyone without the extract right cannot use the agent.

A label alone does not remove a file from Copilot. If your company wants “Highly confidential” content never to serve as a source, it needs a rule in [DLP](./DLP.md) that reacts to the label. Labels provide the classification, DLP the enforcement. That is why Microsoft recommends rolling out labels broadly before introducing Copilot, including automatic labelling, for example for files containing personnel numbers or IBANs. It is the sustainable answer to [oversharing](./Oversharing.md), because the protection travels with the file rather than depending on where it is stored.

For you as a user this means: apply labels deliberately. A correctly labelled quote stays protected even when Copilot carries it into a presentation. And when a “Confidential” label shows up in a Copilot answer, pause before pasting it into a chat with a large group.

_Common misconception:_ Many people think a “Confidential” label hides a file from Copilot. Without encryption or a DLP rule it remains a source, just a marked one.

_In practice:_

> “Copilot built me a draft from the board paper, and now my document says ‘Highly confidential’. Can I remove that?”
>
> “The label was inherited because the source is marked that way. Leave it on. If your text no longer contains anything confidential you can downgrade it, but then you have to give a reason.”
