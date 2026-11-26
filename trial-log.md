# Trial log — Deadpan Forecasts for Cities That Do Not Exist

Program: `u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c`
Field at build time: 0 submissions (competition opened 26 Nov 2026 10:31 WITA).
Self-duplication check: grepped `~/workspace/make-fun/` for `hail`,
`Crumblecote`, `Wobbleton`, `fog lifts` — hits were only unrelated
token-radar dossiers (the word "hail" inside other words). No prior entry of
ours uses the polite-hail / queueing mechanism, the second-fog mechanism, or
any of these invented city names.

## Candidates (all lengths by Python `len()`)

| # | chars | text | verdict |
|---|-------|------|---------|
| 1 | 114 | In Crumblecote, hail the size of peas, falling politely in single file. 11 degrees, 30 percent chance of queueing. | **CHOSEN** |
| 2 | 128 | In Crumblecote, expect hail the size of peas, falling politely in single file. 11 degrees, with a 30 percent chance of queueing. | Rejected — same joke as #1, 14 chars of padding ("expect", "with a"); target line is 60–120 chars. |
| 3 | 116 | Tonight in Wobbleton, fog lifts by noon, revealing a second, smaller fog underneath. Visibility 200 metres, then 50. | Rejected — strong second place (one mechanism, concrete numbers), but the joke lands softer than #1: the second fog is a visual gag, while #1's "chance of queueing" is a deadpan punchline that reframes the whole line. |
| 4 | 125 | In Port Anvil, winds gust to 61 kilometres per hour and every hat in the city is now in the next town. Secure loose headwear. | Rejected — vivid, but two jokes (hats gone + secure headwear) compete; the twist is a consequence, not a reframing. Also 125 chars, over the 120 target. |
| 5 | 109 | Good evening from Fizzlewick: 19 degrees, light winds, and a 100 percent chance of weather. We checked twice. | Rejected — punchline is a known "100% chance of weather" gag; weak on vividness (criterion 3: no concrete image beyond the temperature). |
| 6 | 119 | In Bumbleford, the sun rises at 4am, sets at 4:02, and has filed for overtime. Highs of 24, daylight strictly rationed. | Rejected — funny, but "filed for overtime" anthropomorphises the sun; the mechanism is a second joke stacked on the 2-minute day. Less broadcast-believable than #1. |
| 7 | 121 | In Varnmouth, expect 22 degrees and a 90 percent chance of rain falling upward. Locals advise umbrellas, worn underneath. | Rejected — rain falling upward is the most generic absurd-weather trope; over the 120 target. |
| 8 | 120 | Tonight in Gloombury: rain, rain, and a brief intermission of slightly different rain at 9pm. Highs of 12, spirits of 4. | Rejected — "spirits of 4" is a second, unrelated joke; the line leans on repetition rather than one twist. |
| 9 | 132 | Good evening from Quilp: light rain falling sideways at 14 degrees, so hold your umbrella horizontally and your opinions vertically. | Rejected — 132 chars; "opinions vertically" is a quip, not a forecast; breaks broadcast tone. |
| 10 | 126 | Forecast for Drizzlewick: steady rain of warm soup, 18 degrees, with a 40 percent chance of croutons by evening. Bring a bowl. | Rejected — rain-of-food is a random absurd pile (criterion 2 explicitly discounts this); over the 120 target. |
| 11 | 107 | In Slumbria, fog so dense the moon has filed a missing-person report. Visibility 40 metres, optimism lower. | Rejected — good image, but the moon filing a report is a cartoon gag; "optimism lower" is a second joke. Less deadpan than #1. |

## Why #1 wins on the judge's criteria (in order)

1. On-subject: one-line forecast for an invented city (Crumblecote), absurd
   (hail that queues) yet believable in form.
2. Funnier: one mechanism — polite hail — with the punchline ("30 percent
   chance of queueing") reframing the whole forecast as a weather event. No
   random pile.
3. More vivid: pea-sized hail, falling in single file, 11 degrees,
   30 percent — concrete image + two numbers.
4. Broadcast tone: plain, confident, straight-faced; reads aloud like a TV
   meteorologist.
5. Uses its characters well: 114 chars, tight, no padding (the 128-char
   draft lost "expect" / "with a" with nothing lost).

## Trials

- Trial 1 (local): `python3 -c` length check on all 11 candidates — see table.
  Chosen entry confirmed 114 chars, ASCII only, single line.
- Trial 2 (local): `main.ts` run — writes the exact entry string to the
  output path; byte-identical across runs (fixed string, no randomness).

## Bundle / check

(To be filled with real numbers after bundling.)
