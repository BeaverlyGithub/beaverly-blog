
import { BlogPost } from "@/types/schema";

// Content loader for Markdown files
export class ContentLoader {
  private static posts: BlogPost[] | null = null;

  // Parse frontmatter from markdown content
  private static parseFrontmatter(content: string): { frontmatter: any; content: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
      throw new Error('Invalid frontmatter format');
    }

    const frontmatterText = match[1];
    const markdownContent = match[2];
    
    // Simple YAML parser for frontmatter
    const frontmatter: any = {};
    const lines = frontmatterText.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex === -1) continue;
      
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1)
          .split(',')
          .map(item => item.trim().replace(/['"]/g, ''))
          .filter(item => item.length > 0);
      }
      
      frontmatter[key] = value;
    }
    
    return { frontmatter, content: markdownContent };
  }

  // Load all blog posts from markdown files
  static async loadPosts(): Promise<BlogPost[]> {
    if (this.posts) {
      return this.posts;
    }

    try {
      // In a real implementation, you'd dynamically import all .md files
      // For now, we'll manually import the ones we have
      const postModules = [
        () => import('/content/posts/how-chilla-works.md?raw'),
        () => import('/content/posts/ai-trading-algorithms-explained.md?raw'),
      ];

      const posts: BlogPost[] = [];

      for (const importPost of postModules) {
        try {
          const module = await importPost();
          const content = module.default;
          const { frontmatter, content: markdownContent } = this.parseFrontmatter(content);
          
          posts.push({
            id: frontmatter.id,
            slug: frontmatter.slug,
            title: frontmatter.title,
            description: frontmatter.description,
            content: markdownContent,
            author: frontmatter.author,
            pubDate: new Date(frontmatter.pubDate),
            tags: frontmatter.tags || []
          });
        } catch (error) {
          console.warn('Failed to load blog post:', error);
        }
      }

      // Sort by publication date (newest first)
      posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
      
      this.posts = posts;
      return posts;
    } catch (error) {
      console.error('Failed to load blog posts:', error);
      // Fallback to static data
      const { getAllBlogPosts } = await import('@/data/blog-posts');
      return getAllBlogPosts();
    }
  }

  // Get a single post by slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.loadPosts();
    return posts.find(post => post.slug === slug) || null;
  }

  // Clear cache (useful for development)
  static clearCache(): void {
    this.posts = null;
  }
}
