const path = require('path');
const apidoc = require("apidoc");
const fs = require('fs');

// Get input path from command line or use default
const inputPath = process.argv[2] || path.resolve('habitica/website/server/');
// Save directly to root directory
const targetPath = process.cwd();
const outputFile = path.resolve(targetPath, 'api-spec.json');

console.log('Generating API documentation...');
console.log(`Input path: ${inputPath}`);
console.log(`Output file: ${outputFile}`);

const doc = apidoc.createDoc({
    src: inputPath,
    dryRun: true,
    silent: true,
    filters: {
      "^(.*)": function(userDefinedFilter, parsedFiles, parsedFilenames) {
        return parsedFiles.filter(doc => {
          // Enhanced v3 filtering
          return doc.url && 
                 doc.url.toLowerCase().startsWith('/api/v3/') && 
                 parsedFilenames.some(f => f.includes('api-v3'));  // Double-check file paths
        });
      }
    },
});

if (typeof doc === 'boolean') {
  console.error('Error: No valid apiDoc content!');
  process.exit(1);
}

// Write the file to root directory
fs.writeFileSync(
  outputFile,
  doc.data,
  { encoding: 'utf8' }
);

console.log('API specification has been successfully generated!');
console.log(`File saved to: ${outputFile}`);