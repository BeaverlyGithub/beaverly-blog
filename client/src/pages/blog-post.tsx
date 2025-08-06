import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { BlogPost } from "@shared/schema";
import { renderMarkdown } from "@/lib/markdown";
import SEOHead from "@/components/seo-head";
import { ArrowLeft, Share, Heart } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog/posts", slug],
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-white hover:text-gray-300 underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded mb-6 w-32"></div>
            <div className="h-12 bg-gray-700 rounded mb-6"></div>
            <div className="h-6 bg-gray-700 rounded mb-8 w-3/4"></div>
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-white hover:text-gray-300 underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <>
      <SEOHead
        title={`${post.title} | Beaverly Blog`}
        description={post.description}
        url={`https://blog.beaverlyai.com/blog/${post.slug}`}
      />
      
      <article className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" data-testid="blog-post">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            data-testid="back-to-blog"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12 text-center animate-slide-up">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
              <time dateTime={post.pubDate.toString()} data-testid="post-date">
                {formattedDate}
              </time>
              <span className="mx-2">•</span>
              <span data-testid="post-author">{post.author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight" data-testid="post-title">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto" data-testid="post-description">
              {post.description}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-8" data-testid="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div 
            className="blog-content animate-slide-up" 
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            data-testid="post-content"
          />

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-white" data-testid="author-name">{post.author}</p>
                  <p className="text-sm text-gray-400">Author at Beaverly</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid="share-button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.description,
                        url: window.location.href
                      });
                    }
                  }}
                >
                  <Share className="w-5 h-5" />
                </button>
                <button 
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  data-testid="like-button"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
