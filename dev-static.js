#!/usr/bin/env node

// Simple development server for the static client
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Beaverly Blog (Static Mode)...');

// Change to client directory
process.chdir(path.join(__dirname, 'client'));

// Start Vite dev server
const vite = spawn('npx', ['vite', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (err) => {
  console.error('Failed to start dev server:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`Dev server exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down dev server...');
  vite.kill('SIGINT');
});

process.on('SIGTERM', () => {
  vite.kill('SIGTERM');
});