import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types/schema";
import { renderMarkdown } from "@/lib/markdown";
import SEOHead from "@/components/seo-head";
import { apiClient } from "@/lib/api";
import { calculateReadingTime } from "@/lib/reading-time";

export default function BlogPostPage() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost | null>({
    queryKey: ["blog-post", slug],
    queryFn: () => apiClient.getBlogPost(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-primary mx-auto mb-4"></div>
          <p className="text-secondary">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Article Not Found</h1>
          <p className="text-secondary mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-accent-primary hover:text-accent-secondary transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <SEOHead
        title={`${post.title} | Beaverly Blog - Chilla Trading Bot`}
        description={post.description}
        url={`https://blog.beaverlyai.com/blog/${post.slug}`}
        keywords="chilla, beaverly, beaverly ai, AI trading, forex automation, MT5 bot, trading bot, financial co-pilot, forex trading, investment, stock trading, ai co-pilot"
      />
      
      <main className="min-h-screen" data-testid="blog-post">
        {/* Back Navigation */}
        <nav className="section-small">
          <div className="container-narrow">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300"
              data-testid="back-to-blog"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </nav>

        {/* Article Header */}
        <header className="section">
          <div className="container-narrow">
            <div className="text-center mb-8 fade-in-up">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-tertiary text-muted rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight" data-testid="post-title">
                {post.title}
              </h1>
              
              {/* Description */}
              <p className="text-large text-secondary mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="post-description">
                {post.description}
              </p>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-2" data-testid="post-author">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2" data-testid="post-date">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.pubDate.toString())}
                </span>
                <span className="flex items-center gap-2" data-testid="post-reading-time">
                  <Clock className="w-4 h-4" />
                  {readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="section">
          <div className="container-narrow">
            <div 
              className="blog-content fade-in-up"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              data-testid="post-content"
            />
          </div>
        </article>

        {/* Article Footer */}
        <footer className="section border-t border-primary">
          <div className="container-narrow">
            <div className="text-center fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Investing?</h3>
              <p className="text-secondary mb-8">
                Discover how Beaverly's AI-powered ecosystem can automate your trading and optimize your portfolio.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://beaverlyai.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                  data-testid="main-site-cta"
                >
                  Explore Beaverly
                </a>
                <Link 
                  href="/blog" 
                  className="btn btn-secondary btn-large"
                  data-testid="more-articles-link"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}