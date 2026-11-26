---
lastUpdated: 2026-11-26T21:00:00+01:00
title: Hype Driven Development
description: What Hype Driven Development is, how to spot it, what it costs, and how to pick technologies for the problem instead of the trend.
topic: misc
tags: [hype, architecture, tech stack, decision making, software engineering]
---

**Hype Driven Development** is choosing technologies, frameworks or architecture because they are *trending*, not because they fit the problem. Decisions come from conferences, news on software vendors' websites and trending repositories, not from analysis. New technology is not bad. It is bad when we choose it *only because it is new*.

The name was coined by Marek Kirejczyk in [Hype Driven Development](https://medium.com/daftcode-blog/hype-driven-development-3469fc2e9b22) (Daftcode blog, 2016). He also proposed a remedy: *Solid Software Engineering*.

## Symptoms

- **The decision starts with a conference or a news post on a vendor's website.** The next sprint already has a "migrate to X" task.
- **The tool solves a problem you don't have.** Microservices for three users and one developer. Kubernetes for a landing page.
- **The arguments are about impressions.** "Everyone uses it", "it's the future". Nobody mentions your requirements.
- **No spike, no prototype.** The new thing goes straight to production.
- **Only one person really knows it**, and they are already eyeing the next shiny thing.
- **The previous hype is still in the repo.** The README has said "we're migrating" since 2019.

## Consequences

- The team slows down while learning the tool on a live project.
- Bugs come from the new stack, not from the business logic.
- Documentation and Stack Overflow answers are scarce, because the tool is two months old.
- Migrations, rewrites and technical debt nobody planned for.

## How to avoid it

1. **Start from the problem.** Write down what hurts today and what "better" means in numbers.
2. **Read beyond the README.** Check maturity, maintenance, licence and open issues.
3. **Build a spike outside the project.** A prototype is cheap, a rewrite is not.
4. **Give yourself a few days.** An idea often looks different after you sleep on it.
5. **Ask people who use it in production**, not only those who gave a talk about it.
6. **Count the cost of learning**, for example two stacks living side by side for a year.
7. **Boring is fine.** A tool the team has mastered often beats a trendy one.
8. **Record the decision** (an ADR is enough), so you can check later whether the reasons still hold.

## When new is fine

A new tool earns its place when it solves a measurable problem, is maintained, and a spike has confirmed it. That is not hype, that is engineering.

:::note[Why this article exists]
After a panel at a [conference](https://live.symfony.com/2026-warsaw-con/), I felt the urge to bring what I had heard straight into my project. The solutions I learned about look like the answer to my problems, but instead of rolling them out, I will give myself a few days to think it over and test them outside the project. This article explains why I do it this way.
:::
