import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked to handle image paths properly
marked.use({
  renderer: {
    image(href, title, text) {
      // Ensure image paths are properly resolved
      const imagePath = href.startsWith('/') ? href : `/${href}`;
      const titleAttr = title ? ` title="${title}"` : '';
      return `<img src="${imagePath}" alt="${text}"${titleAttr} loading="lazy" />`;
    }
  }
});

export function renderMarkdown(content: string): string {
  const html = marked(content);
  return DOMPurify.sanitize(html);
}