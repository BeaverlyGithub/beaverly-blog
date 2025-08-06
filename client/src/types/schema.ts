// Blog post type for the static blog application
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  pubDate: Date;
  tags: string[];
}