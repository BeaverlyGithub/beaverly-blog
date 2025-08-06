import { BlogPost } from "@/types/schema";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";

// Pure static API client - always uses static data for deployment
export const apiClient = {
  // Get all blog posts from static data
  async getBlogPosts(): Promise<BlogPost[]> {
    return getAllBlogPosts();
  },

  // Get a single blog post by slug from static data
  async getBlogPost(slug: string): Promise<BlogPost | null> {
    return getBlogPostBySlug(slug);
  }
};