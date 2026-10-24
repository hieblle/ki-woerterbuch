---
title: Tool Use
description: An AI’s ability to search, calculate, read files or call programs on its own instead of only writing text
aliases: [Function calling, Tools, Werkzeugnutzung, Tool calling]
---

Tool use (also called function calling) means that an AI does not just write text but can do things itself: search the web, calculate, read a file, send an email or run a program.

The mechanics are simpler than they sound. The [language model](./Sprachmodell.md) itself cannot execute anything. It can only produce text. So it writes a call in an agreed format, for example: “Search SharePoint for quote monitors 2026.” The software around it recognises this call, actually runs the search and returns the result to the model as text. The model reads the result and decides how to proceed. Usually all you see of this is a note like “Searching SharePoint” or “Running calculation”.

This back and forth is what separates tool use from plain answering. Without a tool, the model guesses what is in your quote. With a tool, it reads the file. Without a tool, it does arithmetic in its head and sometimes gets it wrong. With a tool, it calls a calculator. That is why the risk of a [hallucination](./Halluzination.md) drops when the AI has tools that reach real data.

In everyday work you see tool use in Microsoft 365 Copilot when it draws on emails, calendar or files. ChatGPT uses web search, code execution and connected apps. Claude reads files, accesses [connectors](./Connector.md) and can work with connected systems. Which tools are available depends on the product, the license and the approvals from your IT department. The standard plug for such connections is called [MCP](./MCP.md). A tool gives access to a system, a [skill](./Skill.md) gives the agent the instructions for using it sensibly.

Tools also widen the room for error. A model can pick the wrong tool, pass the wrong details or misread the result. If a tool writes to the outside world, say an email or a database entry, the error is no longer just a sentence on the screen. That is why good products ask before such actions or let the agent work in a [sandbox](./Sandbox.md) first.

_Common misconception:_ When ChatGPT or Copilot “searched the web”, that was not the model itself. The model phrased a search request, a program ran the search, and the model read the hits.

_In practice:_

> “Copilot just calculated the total from three Excel files for me. Can it really do that, or did it guess?”
>
> “If it shows next to the answer that it read the files and did the calculation, that was tool use. Then it is usually right. Without that note, I would be careful.”
