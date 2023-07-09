const fs = require('fs');
const path = require('path');

// Set up your directories
const rootDir = path.join(__dirname, 'src/error-translation-keys');

// Get all subdirectories
const dirs = fs
  .readdirSync(rootDir)
  .filter((file) => fs.lstatSync(path.join(rootDir, file)).isDirectory());

const exportStatements = [];

dirs.forEach((dir) => {
  const jsonPath = path.join(rootDir, dir, `${dir}.json`);
  const indexTsPath = path.join(rootDir, dir, 'index.ts');

  // Read .json file
  const jsonContent = fs.readFileSync(jsonPath, 'utf8');

  // Parse .json content into an object
  const errorKeys = JSON.parse(jsonContent);

  // Convert object into an array of `export const` lines
  const lines = Object.keys(errorKeys).map(
    (key) => `export const ${key} = '${key}';`
  );

  // Write lines to index.ts file
  fs.writeFileSync(indexTsPath, lines.join('\n'), 'utf8');

  // Add an export statement for this directory
  exportStatements.push(`export * from './src/error-translation-keys/${dir}';`);
});

// Write exports to index.ts at top level
fs.writeFileSync(
  path.join(__dirname, 'index.ts'),
  exportStatements.join('\n'),
  'utf8'
);
