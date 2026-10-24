---
title: Vibe Coding
description: Having software built through chat without writing code yourself, with coding agents like Claude Code, GitHub Copilot or Lovable
aliases: [Coding agent, AI coding, AI programming]
---

Vibe coding means having software built through chat without writing a single line of code yourself. You describe what the program should do, a coding agent writes and runs the code, and you say what still needs to change.

Behind it are [agents](./Agent.md) that specialise in programming: Claude Code, GitHub Copilot, Lovable, Replit or Codex in ChatGPT. They do not just write code but test it in a [sandbox](./Sandbox.md), read error messages and fix things, in the same loop as any other agent. The name comes from going with the feeling, the vibe, instead of understanding the code: does it work? Good. If not, you describe the problem and the agent tries again.

For non-developers this is a way to build small tools themselves. In controlling, an Excel analysis that used to take two hours of manual work every month becomes a small script that reads the files and produces the summary. In sales, a prototype for a quote calculator emerges in an hour. In administration, a form that writes requests into a list. Typical cases are things that were previously too small for IT.

The limit is where other people depend on the program. Maintenance: if the script stops working in three months because the Excel format changed, someone has to find the error, and you never read the code. Security: an agent writes code that works, not necessarily code that protects passwords or validates inputs. Company IT: a tool that accesses customer data, is distributed within the company or is connected to systems falls under the rules of IT and the [AI policy](./KI-Richtlinie.md), no matter who built it. Otherwise a new form of [shadow AI](./Schatten-KI.md) emerges: programs that run in the company but nobody is responsible for.

A good rule of thumb: vibe coding for things you use alone, that work with non-critical data and that you could throw away if needed. Anything that is meant to last goes to IT, and there the prototype is a good brief, because it shows what you need.

_Common misconception:_ The code running does not mean it is correct. A script can add up the total wrongly and still run without errors. Check the result against a case you have calculated by hand.

_In practice:_

> “I built a script with Claude Code that compiles the monthly report from five Excel files. Should I give it to the whole team?”
>
> “For yourself, great. If the team is going to work with it, show it to IT. They need to know it exists, and someone has to maintain it when the format changes.”
