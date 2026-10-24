---
title: AI Assistant
description: A chatbot that can also reach your files, emails and calendar and does work for you there
aliases: [AI assistant, KI-Assistent, Digital assistant, Work assistant]
---

An AI assistant is a [chatbot](./Chatbot.md) with access to your work environment: files, emails, calendar, chats and often company systems too. You ask a question and it fetches the information it needs itself, instead of you pasting it in.

The difference from a plain chat is access. In the basic version of ChatGPT, everything the AI is supposed to know has to be pasted into the window or uploaded. An AI assistant such as Microsoft 365 Copilot, on the other hand, sees your emails in Outlook, your files in OneDrive and SharePoint and your Teams chats. You can ask “What did Ms Berger write about the quote last week?” and get an answer that points to the email. Gemini in Google Workspace and Claude with connected services work in a similar way.

What the assistant sees depends on your permissions. It can only read files you would be allowed to open yourself. That sounds reassuring, but it has a flip side: if a folder in SharePoint was accidentally shared with everyone, the assistant will find it too. Many companies clean up their sharing settings before rolling an assistant out. More on this under [connector](./Connector.md).

Typical office tasks: summarize a week of emails, pull the open items out of a Teams meeting, build a draft from three documents, suggest a meeting slot. The assistant delivers drafts and summaries; it does not yet act on its own. Once it carries out several steps independently, say sending emails or creating tickets, we call it an [agent](./Agent.md).

You notice an assistant hitting its limits when it “cannot find” things that do exist. Usually a permission is missing, or the file sits somewhere it does not search, such as your local drive.

_Common misconception:_ “The assistant knows everything about our company.” It only knows what sits in the connected systems and what you are allowed to see. Paper files, network drives that are not connected and the knowledge in your colleagues’ heads stay hidden from it.

_In practice:_

> “I asked Copilot about the project, it says it can’t find anything on it.”
>
> “Is the minutes file still on your local drive? The AI assistant only sees what’s in SharePoint or OneDrive. Move it over and it’ll work.”
