const fs = require('fs');

fs.readFile('Assignment1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error to read the file:', err);
    return;
  }
  console.log('File contents:');
  console.log(data);
});

console.log('Reading file...');
