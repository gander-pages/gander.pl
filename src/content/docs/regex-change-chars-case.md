---
lastUpdated: 2023-04-11T01:08:30+02:00
title: RegEx change chars case
topic: misc
tags: [regex, case, uppercase, lowercase, initial, first, capital]
---

| pattern | info                | example          |
|---------|---------------------|------------------|
| `\U`    | uppercase           | `ABC DEF GHI`    |
| `\L`    | lowercase           | `abc def ghi`    |
| `\I`    | initial capitals    | `Abc Def Ghi`    |
| `\F`    | first capital       | `Abc def ghi`    |
| `\E`    | exit case changes   |                  |
| `\Xn`   | apply to reference  | `\U1` = `\U\1\E` |

Source: [Replacement Text Case Conversion](https://www.regular-expressions.info/replacecase.html)
