const fs = require('fs');
const path = require('path');

// Define file paths
const sample = path.join(__dirname, 'sample.txt');
const output = path.join(__dirname, 'output.txt');

// Read, modify, and write the file content
fs.readFile(sample, 'utf8', (err, data) => {
    if (err) return console.error('Error reading the file:', err);
    
    console.log('File content', data);

    fs.writeFile(output, data.toUpperCase(), 'utf8', (err) => {
        if (err) return console.error('Error writing to the file:', err);

        console.log('Modified content written to:', output);
    });
});
