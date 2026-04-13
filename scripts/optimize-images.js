import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const OUTPUT_DIR = 'public'; // We'll keep them in the same place but with different extensions

const imagesToOptimize = [
  'Gemini_Generated_Image_r59uc5r59uc5r59u.png',
  'NEpaligirl.png',
  'mascot-blue.png',
  'kathmandu-seo.png'
];

async function optimize() {
  for (const imgName of imagesToOptimize) {
    const inputPath = path.join(PUBLIC_DIR, imgName);
    const outputPath = path.join(OUTPUT_DIR, imgName.replace('.png', '.webp'));

    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${imgName}...`);
      await sharp(inputPath)
        .webp({ quality: 80 }) // 80 is a good balance for compression
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      const sizeKB = stats.size / 1024;
      console.log(`Created ${outputPath}: ${sizeKB.toFixed(2)} KB`);

      if (sizeKB > 500) {
        console.log(`Warning: ${imgName} is still over 500KB. Re-compressing...`);
        await sharp(inputPath)
          .webp({ quality: 60 })
          .toFile(outputPath);
        const newStats = fs.statSync(outputPath);
        console.log(`New size: ${(newStats.size / 1024).toFixed(2)} KB`);
      }
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }

  // Also optimize products
  const productImages = ['rolwaling.png'];
  for (const imgName of productImages) {
    const inputPath = path.join(PUBLIC_DIR, 'products', imgName);
    const outputPath = path.join(OUTPUT_DIR, 'products', imgName.replace('.png', '.webp'));

    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing product ${imgName}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Created ${outputPath}`);
    }
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
