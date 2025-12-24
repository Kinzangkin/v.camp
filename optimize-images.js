const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/asset');
const outputDir = path.join(__dirname, 'public/asset-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Gallery images to optimize (supports both png and jpg)
const galleryImages = [
    { input: '1.png', output: '1.webp' },
    { input: '2.jpg', output: '2.webp' },
    { input: '3.png', output: '3.webp' },
    { input: '4.jpg', output: '4.webp' },
    { input: '5.png', output: '5.webp' },
    { input: '6.png', output: '6.webp' },
];

async function optimizeImages() {
    console.log('🖼️  Starting image optimization (NO CROPPING)...\n');

    for (const file of galleryImages) {
        const inputPath = path.join(inputDir, file.input);
        const outputPath = path.join(outputDir, file.output);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${file.input} - file not found`);
            continue;
        }

        const inputStats = fs.statSync(inputPath);
        const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

        try {
            // Get original image dimensions
            const metadata = await sharp(inputPath).metadata();
            console.log(`📐 ${file.input}: ${metadata.width}x${metadata.height}`);

            await sharp(inputPath)
                .resize(1200, 900, {
                    fit: 'inside',           // TIDAK CROP - muat dalam batas
                    withoutEnlargement: true // Jangan perbesar jika lebih kecil
                })
                .webp({ quality: 85 })       // Kualitas lebih tinggi
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(0);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${file.input} → ${file.output}: ${outputSizeKB} KB (was ${inputSizeMB} MB, -${reduction}%)\n`);
        } catch (error) {
            console.log(`❌ Error processing ${file.input}:`, error.message);
        }
    }

    console.log('✨ Done! Images optimized WITHOUT cropping.');
    console.log('📍 Output: public/asset-optimized/');
}

optimizeImages();
