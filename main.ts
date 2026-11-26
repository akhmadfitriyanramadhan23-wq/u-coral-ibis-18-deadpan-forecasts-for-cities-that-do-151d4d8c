// Deadpan forecast for a city that does not exist.
// Entry for u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 160;

const ENTRY =
  "In Grindlewick, expect a high of 61, sideways rain, and a 40% chance of frogs. The 4:15 ferry is cancelled; the frogs are not. Bring an umbrella.";

// Gate: UTF-8, 1-160 characters, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry length ${[...ENTRY].length} outside 1-${MAX_CHARS}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
