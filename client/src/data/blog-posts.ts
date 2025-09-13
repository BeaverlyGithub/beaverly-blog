import { BlogPost } from "@/types/schema";

// Static blog post data for deployment without backend
export const staticBlogPosts: BlogPost[] = [];

// Helper function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return staticBlogPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
};

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return staticBlogPosts.find(post => post.slug === slug);
};