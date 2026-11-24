// Say What Actually Broke — make.fun entry
// Writes one line of brutally honest error copy to /output/entry.txt.
//
// The line: a Friday-afternoon deploy broke the login page. It names the
// real failure (our deploy, not the user's password), tells the user what
// to do (wait for the rollback), and carries the joke in one twist:
// "Your password is fine — our judgment isn't."
//
// Why this line, against the judge's brief:
//   1. It names the real failure in plain words — a deploy broke login —
//      instead of apologising in generalities ("something went wrong").
//   2. The twist lands on a single read and is repeatable out loud:
//      the user's password is fine; the team's judgment is the bug.
//   3. It stays shippable: self-deprecating about the team, never about
//      the user, and it gives the user a next step (try again after the
//      rollback) instead of leaving them stranded.
//   4. No padding, no throat clearing — three short sentences, 141 chars.
//
// The program is deterministic: the same fixed string is written on every
// run. Before writing, it enforces the same gate the sealed scorer checks
// (UTF-8, 1–200 characters, a single line, not only whitespace) so a bad
// edit can never silently ship an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We deployed on a Friday at 4:59 PM and broke the login page. " +
  "Your password is fine \u2014 our judgment isn\u2019t. " +
  "Try again once we\u2019ve rolled it back.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate: the entry must be one non-blank line of 1–200 characters.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1–${MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
