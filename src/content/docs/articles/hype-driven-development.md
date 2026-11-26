---
lastUpdated: 2026-11-26T16:45:00+01:00
title: "Hype Driven Development 🚀"
description: What Hype Driven Development is, how to spot it in your team, and how to pick technologies without riding the hype train.
topic: misc
tags: [hype, architecture, tech stack, decision making, software engineering]
---

> "We just got back from a conference. Let's rewrite everything in it!" 🎤✨

## 🦆 TL;DR

New tech isn't bad. Picking it *because it's new* is. Let the problem choose the tool, not the hype. 🙃

:::note[Why this article? 🎟️]
I thought about it at [SymfonyCon Warsaw 2026](https://live.symfony.com/2026-warsaw-con/). I came back with a list of solutions I had just learned about and decided to try them out. I know HDD well, and it always comes back like a boomerang 🪃 to remind me to sleep on an idea first. So yes, this one is also a note to myself. 😅
:::

**Hype Driven Development** (HDD) is choosing technologies, frameworks or architecture because they are *hot* 🔥, not because they fit the problem. Decisions come from blog posts, trending repos and conference talks instead of research and a sober look at the project.

The name was coined by Marek Kirejczyk in [Hype Driven Development](https://medium.com/daftcode-blog/hype-driven-development-3469fc2e9b22) on the Daftcode blog (2016). He also proposed the antidote: *Solid Software Engineering*.

## 🔍 Symptoms

You might be doing HDD if:

- 📰 **The decision starts with a tweet.** Someone read a post, saw a demo or came back from a meetup, and the next sprint already has "migrate to X".
- 🧩 **The tool solves a problem you don't have.** Microservices for an app with three users and one developer. Kubernetes for a landing page.
- 🗣️ **Arguments are about vibes.** "Everyone uses it", "Big Tech uses it", "it's the future". Nobody mentions *your* requirements.
- 🧪 **No spike, no prototype.** The new thing goes straight into production code.
- 🧑‍🎓 **Only one person really knows it**, and they are already looking at the next shiny thing.
- 🗿 **The previous hype is still in the repo.** Half of the code uses framework A, the other half framework B, and the README says "we're migrating" since 2019.

## 💥 Consequences

The promise is "we'll go faster". The reality often looks like this:

- 🐢 The team slows down while it learns the tool on a live project.
- 🐛 Bugs come from the new stack, not from the business logic.
- 🧱 Docs, libraries and Stack Overflow answers are thin, because the thing is two months old.
- 💸 Migrations, rewrites and a pile of tech debt nobody budgeted for.
- 😩 Demotivation: "just a few more days" to sort it out, every sprint.

## 🛡️ How to avoid it

1. 🎯 **Start from the problem.** Write down what hurts today and what "better" means in numbers.
2. 📚 **Read beyond the README.** Look at maturity, community, maintenance, licence and the number of open issues.
3. 🧪 **Build a spike.** A small prototype or a hackathon branch is cheap. A rewrite is not.
4. 👥 **Ask people who used it in production**, not only those who gave a talk about it.
5. ⚖️ **Count the cost of the team learning it** and of keeping two stacks during a migration.
6. 🥱 **Boring is fine.** A well-known tool the team masters often wins with a trendy one.
7. 📝 **Record the decision** (for example as an ADR) with the reasons, so you can check later whether they still hold.
