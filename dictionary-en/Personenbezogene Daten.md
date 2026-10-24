---
title: Personal Data
description: Any information that can be linked to a specific person, even indirectly, and is therefore specially protected
aliases: [Personenbezogene Daten, PII, Personally identifiable information]
---

Personal data is any information that relates to an identified or identifiable person. It is the central concept of the General Data Protection Regulation, and it is broader than many people in the office assume.

Name, address, date of birth, phone number and employee ID obviously belong to it. The indirect cases are often underestimated. An email contains sender, recipient and usually names in the text. A photo from the team event shows recognisable faces. Meeting minutes record who said what. A performance review describes a person, even if the name at the top is missing. A customer number is personal data because your company can link it to a person. Even the statement “clerk in purchasing, on sick leave since March” is enough to identify someone in a small company.

For working with AI this means: almost every everyday document contains personal data. Anyone who copies an email into a [prompt](./Prompt.md) or uploads a file ([uploading documents](./Dokumente hochladen.md)) is processing it. Whether that is permitted depends on which tool you use and whether your company has set rules for it. More on this under [GDPR and AI](./DSGVO und KI.md).

The simplest safeguard is to anonymise before you prompt. Replace names with “Customer A” or “Employee X”, remove contact details, employee IDs and dates of birth, and leave out everything the task does not need. To answer a complaint, Copilot does not need to know who complained, only what it is about. In minutes you can replace speakers with roles. This takes a minute and takes the edge off most concerns. Real anonymisation can be hard, though: if only one person in the company holds the role described, everyone knows who is meant. Then the only option is to leave it out.

A special category is sensitive data such as health, religion, trade union membership or sexual orientation. As a rule this does not belong in an AI tool at all, not even the approved one. For everything stored about people, the rule of [confidentiality](./Vertraulichkeit.md) also applies. When in doubt, ask your data protection officer before entering anything.

_Common misconception:_ Many people think a text is anonymous once the names are gone. Identifiable is enough. If someone can recognise the person from the context, it is still personal data.

_In practice:_

> “I am uploading the notes from the performance review to Copilot so it can summarise the points.”
>
> “That is a conversation about a specific person, so it is personal data and sensitive on top. Take the name out first and leave out anything about health or private matters. Or ask whether we have even approved this for HR.”
