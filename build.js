const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// set directories and paths
const tablesDir = path.join(__dirname, 'tables');
const indexFile = path.join(tablesDir, 'index.json');

// Process all compression table files and generate an index file
(async () => {
  const allEntries = [];
  process.stdout.write('Processing:');
  fs.readdirSync(tablesDir).forEach(filename => {
    // skip non-YAML files
    if(!filename.endsWith('.yml')) {
      return;
    }

    const methodFile = path.join(tablesDir, filename);
    const methodData = fs.readFileSync(methodFile, 'utf-8');
    process.stdout.write(' ' + filename);

    try {
      const method = yaml.load(methodData);
      method.id = parseInt(filename.slice(0, -4));
      allEntries.push(method);
    } catch(e) {
        console.error('\n\n❌ ERROR: Failed to parse', filename, e);
        process.exit(1);
    }
  });

  if(allEntries.length > 0) {
    fs.writeFileSync(indexFile, JSON.stringify(allEntries, null, 2), 'utf-8');
    console.log('\n\nGenerated /tables/index.json.');
  } else {
    console.error('\n\n❌ ERROR: No compression tables found in tables directory');
    process.exit(1);
  }

})();
