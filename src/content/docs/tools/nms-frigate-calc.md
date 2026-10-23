---
lastUpdated: 2026-10-23T08:45:00+02:00
title: "No Man's Sky: Frigate Calc"
topic: games
tags: [nms, no mans sky, frigate, calc, calculator, fleet, game, mobile]
---

[No Man's Sky: Frigate Calc][calc]

## Description

[No Man's Sky](https://www.nomanssky.com/) is the game where the player explores a procedurally generated universe.

To be able to travel far, you need finances and resources. You can own a fleet of **frigates** to perform stand-alone 
missions in distant systems, thus obtaining finance and rare resources. You can buy frigates you meet in space. 
However, frigates have specific statistics that determine the cost of the expedition or the chance of obtaining resources.

Clever players have come up with a method of calculating the profitability of a given unit. 
It is quite simple and you can calculate it in your mind, but to minimize the risk of making a mistake, 
it is better to use a calculator. I found spreadsheets prepared for these calculations, 
but not a single interactive calculator that could be run on a smartphone for ease of use. 
That's why I created this [calculator][calc].

## How to use

1. Open the [calculator][calc] while inspecting a frigate in the game.
2. Enter the frigate's stats and traits. You can type several values separated by spaces,
   or enter a single total if you don't want to type each value.
3. The result updates as you type. The bar shows how profitable the frigate is:
   green means it's worth buying, yellow means it's average, red means avoid it.

You could do this math in your head, but the calculator saves you from remembering the formula.

## Source code

+ [gander-tools/nms-frigate-calc](https://github.com/gander-tools/nms-frigate-calc): the calculator app
+ [gander-tools/nms-lib](https://github.com/gander-tools/nms-lib): No Man's Sky library for frigate calculations

## Resources

+ [A Guide to Evaluating Frigate Stats](https://www.reddit.com/r/NoMansSkyTheGame/comments/knjokc/a_guide_to_evaluating_frigate_stats/)
+ [Frigate – No Man's Sky Wiki](https://nomanssky.fandom.com/wiki/Frigate)

## What's next

I still play No Man's Sky and use the calculator myself. I'm moving it to [nms-lib](https://github.com/gander-tools/nms-lib),
and I'm testing a few proof-of-concept helpers in [Gander Labs](https://github.com/gander-labs)
that may become new features once they are ready:

+ a planner for the resources needed to expand settlements,
+ a frigate log that helps you manage your fleet.
+ screenshot import: snap the frigate screen and let OCR read the stats for you.

[calc]: https://nms.gander.tools/
