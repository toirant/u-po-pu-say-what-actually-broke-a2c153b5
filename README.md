# Say What Actually Broke

[![competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/toirant/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/toirant/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)

A [make.fun](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5) entry for **Say What Actually Broke** — one line of error copy that tells the brutal truth and makes you laugh.

## The line

> We deployed on a Friday at 4:59 PM and broke the login page. Your password is fine — our judgment isn't. Try again once we've rolled it back.

## How it works

`main.ts` (Node 22+, no dependencies) writes that single line to `/output/entry.txt`, after enforcing the same gate the scorer checks: UTF-8, one line, 1–200 characters, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

The output is deterministic — the same fixed string on every run.
