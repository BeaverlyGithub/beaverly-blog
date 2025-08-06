import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
  list?: boolean;
}

export default function PostCard({ post, featured = false, compact = false, list = false }: PostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const readingTime = Math.ceil(post.content.length / 1000);

  if (list) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group" data-testid={`post-card-${post.slug}`}>
        <div className="border-b border-primary pb-6 hover:border-secondary transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary group-hover:text-accent-primary transition-colors duration-300 mb-2">
                {post.title}
              </h3>
              <p className="text-secondary text-sm mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.pubDate.toString())}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readingTime} min read
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags && post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-tertiary text-muted rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (compact) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group" data-testid={`post-card-${post.slug}`}>
        <article className="card card-compact hover-lift">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags && post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-tertiary text-muted rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-primary group-hover:text-accent-primary transition-colors duration-300 mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-secondary text-sm mb-4 line-clamp-3">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.pubDate.toString())}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readingTime} min read
            </span>
          </div>
        </article>
      </Link>
    );
  }

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group" data-testid={`post-card-${post.slug}`}>
        <article className="card card-large hover-lift">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags && post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-sm px-3 py-1 bg-tertiary text-muted rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent-primary transition-colors duration-300 mb-6 line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-large text-secondary mb-8 line-clamp-3 leading-relaxed">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.pubDate.toString())}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </span>
            </div>
            
            <span className="flex items-center gap-2 text-accent-primary font-medium group-hover:text-accent-secondary transition-colors duration-300">
              Read Article <ArrowRight size={16} />
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group" data-testid={`post-card-${post.slug}`}>
      <article className="card hover-lift">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags && post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-tertiary text-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-primary group-hover:text-accent-primary transition-colors duration-300 mb-4 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-secondary mb-6 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.pubDate.toString())}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </span>
          </div>
          
          <span className="flex items-center gap-1 text-accent-primary font-medium text-sm group-hover:text-accent-secondary transition-colors duration-300">
            Read <ArrowRight size={14} />
          </span>
        </div>
      </article>
    </Link>
  );
}
