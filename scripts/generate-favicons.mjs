#!/usr/bin/env node
/**
 * Generate favicon assets from SVG source
 * Run with: node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Source SVG - the primary icon
const svgPath = join(projectRoot, 'public/favicon.svg');
const svgBuffer = readFileSync(svgPath);

// Output paths
const faviconsDir = join(projectRoot, 'src/assets/favicons');

async function generateFavicons() {
  console.log('Generating favicons from:', svgPath);

  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(faviconsDir, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // Generate PNG sizes for ICO file
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buffer = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer });
    console.log(`✓ Generated ${size}x${size} PNG`);
  }

  // Create ICO file manually (simple ICO format)
  const icoBuffer = createIco(pngBuffers);
  writeFileSync(join(faviconsDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated favicon.ico');

  console.log('\nDone! Favicon assets updated.');
}

/**
 * Create a simple ICO file from PNG buffers
 * ICO format: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function createIco(images) {
  const numImages = images.length;

  // ICO header is 6 bytes
  // Each directory entry is 16 bytes
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = numImages * dirEntrySize;

  // Calculate offsets
  let offset = headerSize + dirSize;
  const entries = images.map(({ size, buffer }) => {
    const entry = {
      width: size === 256 ? 0 : size,
      height: size === 256 ? 0 : size,
      colors: 0,
      reserved: 0,
      planes: 1,
      bitsPerPixel: 32,
      size: buffer.length,
      offset: offset
    };
    offset += buffer.length;
    return { ...entry, buffer };
  });

  // Total size
  const totalSize = offset;
  const ico = Buffer.alloc(totalSize);

  // Write ICO header
  ico.writeUInt16LE(0, 0);      // Reserved
  ico.writeUInt16LE(1, 2);      // Type: 1 = ICO
  ico.writeUInt16LE(numImages, 4); // Number of images

  // Write directory entries
  let pos = 6;
  for (const entry of entries) {
    ico.writeUInt8(entry.width, pos);
    ico.writeUInt8(entry.height, pos + 1);
    ico.writeUInt8(entry.colors, pos + 2);
    ico.writeUInt8(entry.reserved, pos + 3);
    ico.writeUInt16LE(entry.planes, pos + 4);
    ico.writeUInt16LE(entry.bitsPerPixel, pos + 6);
    ico.writeUInt32LE(entry.size, pos + 8);
    ico.writeUInt32LE(entry.offset, pos + 12);
    pos += 16;
  }

  // Write image data
  for (const entry of entries) {
    entry.buffer.copy(ico, entry.offset);
  }

  return ico;
}

generateFavicons().catch(console.error);
