const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/asset');
const outputDir = path.join(__dirname, 'public/asset-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Gallery images to optimize (1-6.png)
const galleryImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    for (const filename of galleryImages) {
        const inputPath = path.join(inputDir, filename);
        const outputPath = path.join(outputDir, filename.replace('.png', '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${filename} - file not found`);
            continue;
        }

        const inputStats = fs.statSync(inputPath);
        const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

        try {
            await sharp(inputPath)
                .resize(800, 600, {
                    fit: 'cover',
                    withoutEnlargement: true
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(0);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${filename} → ${outputSizeKB} KB (was ${inputSizeMB} MB, -${reduction}%)`);
        } catch (error) {
            console.log(`❌ Error processing ${filename}:`, error.message);
        }
    }

    console.log('\n✨ Done! Optimized images are in public/asset-optimized/');
    console.log('📝 Remember to update Hero.tsx to use the new paths!');
}

optimizeImages();
