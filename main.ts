import { mkdirSync, writeFileSync } from "node:fs";

// Say What Actually Broke — one single-line error message.
// The line names the real failure (a declined card), says what to do
// next (check the card and try again), and keeps the joke to one read.
const ENTRY =
  "Your card was declined \u2014 not your taste, just your bank. Check the card and try again; your order is still here, holding your place in line.";

// Validate before writing anything.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("Entry must have no surrounding whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters).`);
