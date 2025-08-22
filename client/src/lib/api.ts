import { BlogPost } from "@/types/schema";
import { ContentLoader } from "@/lib/content-loader";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";

// API client that can use either markdown files or static data
export const apiClient = {
  // Get all blog posts - tries markdown files first, falls back to static data
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      return await ContentLoader.loadPosts();
    } catch (error) {
      console.warn('Failed to load markdown posts, using static data:', error);
      return getAllBlogPosts();
    }
  },

  // Get a single blog post by slug - tries markdown files first, falls back to static data
  async getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
      return await ContentLoader.getPostBySlug(slug);
    } catch (error) {
      console.warn('Failed to load markdown post, using static data:', error);
      return getBlogPostBySlug(slug);
    }
  }
};