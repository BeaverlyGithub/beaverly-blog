import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  
  try {
    console.log('Starting Vite development server...');
    
    const server = await createServer({
      configFile: path.resolve(__dirname, '../vite.config.ts'),
      root: path.resolve(__dirname, '../client'),
      server: {
        host: '0.0.0.0',
        port: port,
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, '../client/src'),
          "@shared": path.resolve(__dirname, '../shared'),
          "@assets": path.resolve(__dirname, '../attached_assets'),
        },
      },
    });

    await server.listen();
    console.log(`🚀 Vite server running on http://0.0.0.0:${port}`);
    
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();