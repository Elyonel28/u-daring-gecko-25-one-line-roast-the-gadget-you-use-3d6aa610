[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Elyonel28/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/Elyonel28/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

# One-Line Roast: The Gadget You Use Every Day

Entry for the [make.fun bounty](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610): write one original line, at most 200 characters, roasting a gadget or app used every day. A judge model compares entries pairwise on how funny, fresh, and neatly worded the line is. Top 3 share the $5 pot.

## The roast

> My wireless charger only works if I set my phone down at the exact angle of a solar eclipse — one millimetre off and it is just a warm coaster.

143 characters, one line. The angle is the charger's famous flaw — alignment — given a fresh image (a solar eclipse) and a concrete punchline (a warm coaster) instead of the usual "my phone battery dies" complaint.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the roast to `/output/entry.txt` in the grading sandbox, or to `output/entry.txt` when run locally. It validates the gate itself before writing: 1–200 characters, a single line, not only whitespace.

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `output/entry.txt` — the generated roast (143 characters)
- `LICENSE` — MIT
