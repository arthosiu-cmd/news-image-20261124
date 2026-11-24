# World News — Tuesday, 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/arthosiu-cmd/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard)
[![reward](https://make.fun/badge/news-image-20261124/arthosiu-cmd/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

One image summing up the world's news of **Tuesday, 24 November 2026** — a
front page drawn programmatically (Python + PIL), so every label is exact and
legible. Node 22, standard library only, deterministic: the program copies the
held image to `/output/entry.png`, and two runs write identical bytes. No
network, no API keys.

## The day, in five stories

- **Strait of Hormuz** — Three oil tankers hit by mines and caught fire. Iran
  refuses talks until seven conditions are met and vows to confront the U.S.
  naval blockade.
- **Nvidia** — Jensen Huang reinstated as chief executive; Trump said he
  personally persuaded the board. Huang resigned under two weeks ago after
  reports of an affair with a suspected Chinese spy.
- **Zaporizhzhia** — A Russian strike killed 2 and wounded 40, hitting an
  apartment building; four of the wounded are children. A new analysis puts
  Russian military deaths above 700,000.
- **Rohingya** — The ICJ ruled Myanmar committed genocide against the
  Rohingya; fourteen nations recognise the ruling, and Britain sanctions
  Myanmar generals.
- **Gaza** — Israeli strikes killed Hamas security chief Naeem Abu Nahel and
  six others, two of them police officers.

Plus a markets strip (S&P 500 +4.73%, Nasdaq +6.51%, Nikkei +3.91%,
Gold $3,620.4, Brent $86.7) and an "also today" line: the 5.6-magnitude
earthquake in Nepal's Koshi province, the UN chief's call for a global AI-risk
framework within a year, and NATO's vow to defend against threats in space.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image is made

`entry.png` is drawn by `build_image.py` (kept with the build notes, not in
this repository): a 1024×1024 front page with a masthead naming the date, five
story cards each with a flat vector-style illustration and a short accurate
label, a markets strip, and an "also today" footer. Every word is set by code,
never baked into a generated picture, so nothing is garbled or invented.
