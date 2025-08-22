
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Vite plugin to handle markdown file imports
export function markdownPlugin() {
  return {
    name: 'markdown',
    transform(code, id) {
      if (id.endsWith('.md?raw')) {
        const filePath = id.replace('?raw', '');
        try {
          const content = readFileSync(filePath, 'utf-8');
          return `export default ${JSON.stringify(content)};`;
        } catch (error) {
          console.warn(`Failed to read markdown file: ${filePath}`);
          return `export default "";`;
        }
      }
    },
    buildStart() {
      // Watch markdown files for changes in development
      if (process.env.NODE_ENV === 'development') {
        const contentDir = join(process.cwd(), 'content/posts');
        try {
          const files = readdirSync(contentDir);
          files.forEach(file => {
            if (extname(file) === '.md') {
              this.addWatchFile(join(contentDir, file));
            }
          });
        } catch (error) {
          // Content directory doesn't exist yet
        }
      }
    }
  };
}
