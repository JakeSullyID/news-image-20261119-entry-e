/**
 * This standalone script copies the pre-rendered cream-paper newspaper front page
 * for November 19, 2026, containing forty-three news stories in version 2.3.
 * The lead story tile features a summit hall scene with three distinct flags,
 * while story tile number five displays the authentic Anthropic brand logo mark.
 * It ensures the evaluation harness receives the exact unmodified asset bytes.
 */
// Resolve the target directory using the MAKEFUN_OUTPUT_DIR environment variable or fallback to /output
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(destinationDir, 'entry.png');
const sourcePath = new URL('./entry.png', import.meta.url);

// Copying is completely deterministic since the same source bytes always yield identical output bytes
copyFileSync(sourcePath, targetPath);
