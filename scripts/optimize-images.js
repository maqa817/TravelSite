const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(process.cwd(), 'public/images');
const outputDir = path.join(process.cwd(), 'public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process all images in the input directory
async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      
      try {
        await sharp(inputPath)
          .resize(1200, 800, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Optimized: ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

optimizeImages().then(() => {
  console.log('Image optimization complete!');
}).catch(error => {
  console.error('Error during optimization:', error);
}); 