const fs = require('fs');
const path = require('path');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '/Wangshiqing-playability-analysis';
const outDir = path.join(__dirname, '..', 'out');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 修复所有 /images/ 路径（不包括已经包含 basePath 的路径）
  const imagePathRegex = /(["'])(\/images\/[^"']+)\1/g;
  content = content.replace(imagePathRegex, (match, quote, imagePath) => {
    if (!imagePath.startsWith(basePath)) {
      modified = true;
      return `${quote}${basePath}${imagePath}${quote}`;
    }
    return match;
  });

  // 修复 href 中的 /images/ 路径
  const hrefRegex = /href=(["'])(\/images\/[^"']+)\1/g;
  content = content.replace(hrefRegex, (match, quote, imagePath) => {
    if (!imagePath.startsWith(basePath)) {
      modified = true;
      return `href=${quote}${basePath}${imagePath}${quote}`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed paths in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      fixPathsInFile(filePath);
    }
  });
}

if (fs.existsSync(outDir)) {
  console.log(`Fixing paths in ${outDir} with basePath: ${basePath}`);
  walkDir(outDir);
  console.log('Path fixing completed!');
} else {
  console.error(`Output directory not found: ${outDir}`);
  process.exit(1);
}

