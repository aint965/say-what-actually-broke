import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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

// Read back what actually landed on disk and verify it byte-for-byte:
// a write that silently truncates, re-encodes, or appends a newline
// would otherwise ship a file that no longer matches the validated line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("Verification failed: /output/entry.txt does not match the entry.");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`Verification failed: written entry is ${written.length} characters, not 1-200.`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("Verification failed: written entry is not a single line.");
}
if (written !== written.trim()) {
  throw new Error("Verification failed: written entry has surrounding whitespace.");
}

console.log(`Wrote /output/entry.txt (${ENTRY.length} characters).`);
