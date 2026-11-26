// Deadpan Forecasts for Cities That Do Not Exist
// Writes one weather line (114 characters) for the invented city of
// Crumblecote to the entry output path.
// Node.js standard library only. No network, no randomness: the entry is a
// fixed string, so both graded runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "In Crumblecote, hail the size of peas, falling politely in single file. 11 degrees, 30 percent chance of queueing.";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
