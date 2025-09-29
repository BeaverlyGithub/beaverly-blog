
let marked: any = null;
let DOMPurify: any = null;

// Try to load dependencies, but don't fail if they're missing
async function loadDependencies() {
  try {
    const markedModule = await import('marked');
    marked = markedModule.marked;
    
    const dompurifyModule = await import('dompurify');
    DOMPurify = dompurifyModule.default;
    
    // Configure marked to handle image paths properly
    if (marked) {
      marked.use({
        renderer: {
          image(href: any, title: any, text: string) {
            // Handle null, undefined, or non-string href values
            if (!href || typeof href !== 'string') return '';
            // Ensure image paths are properly resolved
            const imagePath = href.startsWith('/') ? href : `/${href}`;
            const titleAttr = title && typeof title === 'string' ? ` title="${title}"` : '';
            return `<img src="${imagePath}" alt="${text}"${titleAttr} loading="lazy" />`;
          }
        }
      });
    }
  } catch (error) {
    console.warn('Markdown dependencies not available, using fallback rendering');
  }
}

// Load dependencies immediately
loadDependencies();

export function renderMarkdown(content: string): string {
  if (!marked || !DOMPurify) {
    // Fallback: basic markdown-like rendering with proper image handling
    return content
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        // Ensure proper image path resolution
        const imagePath = src.startsWith('http') || src.startsWith('/') ? src : `/${src}`;
        return `<img src="${imagePath}" alt="${alt}" loading="lazy" onload="this.style.opacity=1" style="opacity:0;transition:opacity 0.3s" />`;
      })
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/---/g, '<hr>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(.+)$/gm, '<p>$1</p>');
  }
  
  const html = marked(content);
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'img', 'blockquote', 'hr', 'br'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'loading', 'onload', 'style']
  });
}
