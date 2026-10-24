---
description: Der Anweisungstext eines Agenten in Copilot Studio, der Rolle, Ton, Grenzen und Vorgehen festlegt
english: Instructions
aliases: [Anweisungen, Agent Instructions, Agentenanweisungen]
---

Instructions (Anweisungen) sind der Text, mit dem du einem Agenten in [Copilot Studio](./Copilot Studio.md) sagst, wer er ist, was er tun soll und was nicht. Technisch ist das der [Systemprompt](./Systemprompt.md) des Agenten: Er wird dem Sprachmodell bei jeder Anfrage unsichtbar vorangestellt. Du findest das Feld auf der Übersichtsseite des Agenten.

Bei [generativer Orchestration](./Generative Orchestration.md) sind die Instructions die zentrale Steuerung. Der Agent entscheidet anhand der Instructions und der Beschreibungen von [Topics](./Topics.md), [Tools](./Tools.md) und Wissensquellen, welche Schritte er geht. Steht in den Instructions „Prüfe zuerst im Handbuch, bevor du ein Ticket anlegst“, hält sich der Agent in der Regel daran. Steht nichts dazu, entscheidet er selbst.

Microsoft gibt einen Leitfaden für gute Instructions. Schreib einfach und aktiv, in kurzen Sätzen oder nummerierten Schritten. Nenne Tools und Topics mit genau dem Namen, den sie in Copilot Studio tragen. Beschreibe nicht nur, was ein Tool kann, sondern auch, wofür es nicht gedacht ist. Lege fest, was der Agent bei Unsicherheit tut, etwa „Wenn die Antwort nicht in den Wissensquellen steht, sag das und verweise auf HR“. Lege Ton und Sprache fest, etwa Du oder Sie. Und sag, wie Quellen angegeben werden sollen, zum Beispiel „Nenne immer die Quelle im Text“.

Ein paar Mechaniken lohnt es sich zu kennen. Mit einem Schrägstrich „/“ im Textfeld verweist du direkt auf ein Tool, eine Variable, eine Power-Fx-Formel oder einen verbundenen Agenten, statt den Namen frei zu tippen. Das Wort „reason“ in einem Schritt weist den Agenten an, für diesen Schritt ein Reasoning-Modell zu nutzen, sofern Deep Reasoning in deiner Umgebung aktiv ist. Neben den Agent Instructions gibt es weitere Anweisungsfelder: Payload Instructions bei [Event Triggern](./Event Trigger.md), Prompt Instructions im [Prompt Tool](./Prompt Tool.md) und eigene Instructions je Child Agent.

Instructions ersetzen keine Sicherheitsmaßnahmen. Ein Satz wie „Gib keine Gehaltsdaten heraus“ ist ein Wunsch an das Modell, keine Zugriffskontrolle, und gegen [Prompt Injection](./Prompt Injection.md) schützt er nur begrenzt. Was der Agent nicht sehen soll, darf nicht in seinen Wissensquellen liegen. Teste Änderungen an den Instructions im [Test Panel](./Test Panel und Activity Map.md) mit denselben Fragen wie vorher, weil ein neuer Satz auch anderes Verhalten verschieben kann.

_Typischer Irrtum:_ Längere Instructions sind nicht automatisch bessere. Widersprüchliche oder zu viele Regeln machen den Agenten unberechenbarer, nicht genauer.

_Im Alltag:_

> „Der Agent erfindet Antworten, wenn im SharePoint nichts steht. Kann ich das abstellen?“
>
> „Schreib es in die Instructions: ‚Antworte nur aus den Wissensquellen. Wenn dort nichts steht, sag das und nenne den Ansprechpartner.‘ Danach mit zehn alten Fragen testen.“
