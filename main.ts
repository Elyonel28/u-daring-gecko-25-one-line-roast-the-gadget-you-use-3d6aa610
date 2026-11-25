// One-Line Roast: The Gadget You Use Every Day
// make.fun bounty u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// The program writes a single original roast line to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
// Node 22, standard library only, no network.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The roast: a wireless charger is a gadget used every day, and its one
// famous flaw is alignment — a millimetre off and it charges nothing while
// still warming the phone. "Solar eclipse" gives the angle a vivid, fresh
// image; "warm coaster" lands the punchline on a concrete detail.
const ROAST =
  "My wireless charger only works if I set my phone down at the exact angle of a solar eclipse — one millimetre off and it is just a warm coaster.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ROAST].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (!ROAST.trim()) {
    throw new Error("roast must not be only whitespace");
  }
  if (ROAST.includes("\n")) {
    throw new Error("roast must be a single line");
  }

  // In the grading sandbox /output is a mounted directory; locally we fall
  // back to output/ next to the repository root. Only use /output when the
  // sandbox already mounted it — never create it ourselves.
  const targetDir = existsSync("/output")
    ? "/output"
    : join(process.cwd(), "output");
  mkdirSync(targetDir, { recursive: true });
  const target = join(targetDir, "entry.txt");
  writeFileSync(target, ROAST, "utf8");
  console.log(`wrote ${chars} characters to ${target}`);
}

main();
