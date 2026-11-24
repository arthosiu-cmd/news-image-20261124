// news-image-20261124 — "24 November 2026, in one image"
//
// This entry is a single finished front page: a 1024 x 1024 PNG that sums up
// the day's world news for 24 November 2026. The artwork itself is baked
// into entry.png, which sits next to this file; the program's only job is to
// hand that exact file to the judge, untouched, at /output/entry.png.
//
// The stories on the page:
//   * Strait of Hormuz — three tankers reported mined (claim, unverified)
//     (lead story)
//   * Nvidia reinstates Jensen Huang as chief executive
//   * Two dead, 40 injured in the attack on Zaporizhzhia; 700,000 Russian
//     soldiers killed in the war to date
//   * The ICJ's Rohingya genocide ruling
//   * The strike on Gaza, with smoke over the Ansar area of Gaza City
//   * The 5.6 earthquake in Nepal (also today)
//
// Everything runs on the Node 22 standard library only. No network, no
// image processing, no randomness: the bytes the judge sees are exactly the
// bytes in entry.png, so the result is fully deterministic.
//
// Outside the grading container, set MAKEFUN_OUTPUT_DIR to a local folder
// to try it out:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The finished front page, resolved relative to this file so the program
// works no matter which directory it is started from.
const artworkPath = fileURLToPath(new URL('./entry.png', import.meta.url));

// The grader reads /output/entry.png; a local run can point the same
// destination somewhere else through MAKEFUN_OUTPUT_DIR.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationPath = join(resolve(outputDir), 'entry.png');

// Make sure the destination folder exists before copying into it — the
// grading container normally provides /output already, but a fresh local
// folder should not fail the run.
mkdirSync(dirname(destinationPath), { recursive: true });

// Byte-for-byte copy: no re-encoding, no resizing, no metadata changes.
copyFileSync(artworkPath, destinationPath);

// Sanity check that the copy landed intact — a truncated or empty output
// would hand the judge a broken image, so fail loudly instead of passing
// a bad file on silently.
const sourceSize = statSync(artworkPath).size;
const copiedSize = statSync(destinationPath).size;
if (copiedSize !== sourceSize) {
  throw new Error(
    `entry.png copy incomplete: wrote ${copiedSize} of ${sourceSize} bytes to ${destinationPath}`,
  );
}
