// The poem about stopping — make.fun entry, revision v2.
// A short poem about agency: the power to stop and to stay.
// A hand turns a key halfway and leaves it in the lock; the evening,
// unopened, is kept rather than spent. Four exact images, one turn:
// stopping reframed as keeping.
// Writes the poem to /output/entry.txt (UTF-8, 211 characters, deterministic).
// Two runs write identical bytes; no network, no input read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Kept
I turn the key halfway
and leave it in the lock.
The hallway light hums.
The kettle ticks as it cools.
Your coat still hangs by the door,
one sleeve reaching for the dark.
I do not open. I keep the evening.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
