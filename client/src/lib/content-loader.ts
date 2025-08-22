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
      // Use the static data as our content source - this is simpler and more reliable
      // The create-post script will automatically update this file
      const { getAllBlogPosts } = await import('@/data/blog-posts');
      this.posts = getAllBlogPosts();
      return this.posts;
    } catch (error) {
      console.error('Failed to load blog posts:', error);
      return [];
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