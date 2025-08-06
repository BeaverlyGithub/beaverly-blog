// Simple static development server
const { exec } = require('child_process');
const path = require('path');

console.log('Starting static development server...');

// Change to client directory and start vite dev server
process.chdir(path.join(__dirname, 'client'));
exec('npm run dev', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  if (stderr) console.error(stderr);
});