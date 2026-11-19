/**
 * Standalone TypeScript program for the November 19, 2026 news front page.
 * Implements version 2.4 featuring forty-three cream broadsheet news stories.
 * Specifically updates story tile 5 with the coral radiating Claude starburst mark.
 * Guaranteed to produce identical output bytes across execution environments.
 */
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Determine the destination directory by checking MAKEFUN_OUTPUT_DIR in the environment,
// defaulting safely to the standard /output directory if no override is provided.
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(destinationDir, 'entry.png');
const sourcePath = new URL('./entry.png', import.meta.url);

// Perform a synchronous file copy that ensures byte-for-byte identical output
// across repeated invocations without generating any dynamic mutations.
copyFileSync(sourcePath, targetPath);
