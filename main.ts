/**
 * This TypeScript utility script ships our competition entry for November 19, 2026.
 * It copies the cream-paper front page featuring 43 global news stories, including
 * the v2.2 update where the Rakshitha badminton upset replaces the previous item.
 * The evaluation judge will observe the exact byte-for-byte replica of this image.
 */
// The target directory is determined by the MAKEFUN_OUTPUT_DIR environment variable or falls back to /output.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceFile = new URL('./entry.png', import.meta.url);
const targetFile = join(destinationDir, 'entry.png');

// Execute deterministic file replication where identical input bytes yield identical output across runs.
copyFileSync(sourceFile, targetFile);
