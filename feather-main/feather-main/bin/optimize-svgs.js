import fs from 'fs';
import path from 'path';

import optimizeSvg from './optimize-svg';

const IN_DIR = path.resolve(__dirname, '../icons');

console.log(`Optimizing SVGs in ${IN_DIR}...`);

fs.readdirSync(IN_DIR)
  .filter(file => path.extname(file) === '.svg')
  .forEach(svgFile => {
    const svg = fs.readFileSync(path.join(IN_DIR, svgFile));
    optimizeSvg(svg).then(svg =>
      fs.writeFileSync(path.join(IN_DIR, svgFile), svg),
    );
  });
