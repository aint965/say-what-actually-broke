# Say What Actually Broke

> Your card was declined — not your taste, just your bank. Check the card and try again; your order is still here, holding your place in line.

## Why this line works

- **It names the real failure in plain words.** The card was declined — no vague "something went wrong", no apology in generalities. The reader instantly knows what broke.
- **It tells the reader what to do next.** Check the card and try again, and the reassurance that the order is still held removes the fear that the work is lost.
- **It is funny on a single read.** "Not your taste, just your bank" flips the blame from the shopper to the bank in one twist — the kind of line a reader repeats out loud to a colleague.
- **It would survive in a real product dialog.** It is polite, contains no shock value and no profanity, and a team could paste it into a checkout error dialog without embarrassment.

## How it works

`main.ts` (Node 22) holds the single error line as a constant, validates it first — 1–200 characters, a single line, no surrounding whitespace, no trailing newline — then creates `/output` with `mkdirSync` and writes exactly that line to `/output/entry.txt`. It makes no network access and reads nothing outside this repository, so running it twice produces a byte-identical file.

## Competition

Entry for [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) on make.fun.

[![Competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/aint965/say-what-actually-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/aint965/say-what-actually-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
