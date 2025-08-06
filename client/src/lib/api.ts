import { BlogPost } from "@shared/schema";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";

// Environment-aware API client that works in both development and production
const API_BASE_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : '';

// Check if we're in a static deployment environment
const isStaticDeployment = () => {
  if (typeof window === 'undefined') return false;
  
  // If there's no backend available, fall back to static data
  const isStatic = window.location.hostname !== 'localhost' && 
                  !window.location.hostname.includes('replit');
  
  return isStatic;
};

export const apiClient = {
  // Get all blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    // Use static data for deployment or fallback to API
    if (isStaticDeployment()) {
      return getAllBlogPosts();
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('API request failed, falling back to static data:', error);
      return getAllBlogPosts();
    }
  },

  // Get a single blog post by slug
  async getBlogPost(slug: string): Promise<BlogPost | null> {
    // Use static data for deployment or fallback to API
    if (isStaticDeployment()) {
      return getBlogPostBySlug(slug);
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog/posts/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('API request failed, falling back to static data:', error);
      return getBlogPostBySlug(slug);
    }
  }
};