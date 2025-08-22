import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { BlogPost } from "@/types/schema";
import PostCard from "@/components/blog/post-card";
import SEOHead from "@/components/seo-head";
import { ArrowRight } from "lucide-react";
import { apiClient } from "@/lib/api";

export default function BlogHome() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: () => apiClient.getBlogPosts(),
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Blog Posts</h1>
          <p className="text-secondary">Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  const featuredPost = posts?.[0];
  const recentPosts = posts?.slice(1) || [];

  return (
    <>
      <SEOHead
        title="Beaverly updates - AI Financial Co-Pilot Insights"
        description="Official updates page from Beaverly®, the autonomous execution infrastructure for wealth."
        url="https://blog.beaverlyai.com"
        keywords="chilla, beaverly, beaverly ai, beverly, AI trading, forex automation, MT5 bot, trading bot, chill with your money, financial co-pilot, forex trading, free vps, best investment, investment, best investment company, legit investment, safe investment, grow my money, stock trading, ai co-pilot"
      />
      
      <main className="min-h-screen" data-testid="blog-home">
        {/* Hero Section */}
        <section className="hero-large">
          <div className="container">
            <div className="hero-content fade-in">
              <h1 className="hero-title" data-testid="blog-title">
                The Future of Finance
              </h1>
              <p className="hero-subtitle">
                Insights into AI-powered wealth automation, personal wealth co-pilot, and the next generation of financial technology from the team at Beaverly.
              </p>
              <div className="hero-actions">
                <a href="https://chilla.beaverlyai.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                  Start Chilling Now
                  <ArrowRight size={20} />
                </a>
                <a href="https://beaverlyai.com#about" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                  Learn About Chilla
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        {featuredPost && (
          <section className="section">
            <div className="container">
              <div className="fade-in-up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
                  <p className="text-large text-secondary max-w-2xl mx-auto">
                    Deep dive into our latest insights on AI automation and financial technology.
                  </p>
                </div>
                <article data-testid="featured-post" className="fade-in-up">
                  <PostCard post={featuredPost} featured />
                </article>
              </div>
            </div>
          </section>
        )}

        {/* Recent Articles Grid */}
        {recentPosts.length > 0 && (
          <section className="section section-alt">
            <div className="container">
              <div className="fade-in-up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4" data-testid="latest-insights-title">
                    Latest Insights
                  </h2>
                  <p className="text-large text-secondary max-w-2xl mx-auto">
                    Stay updated with our research on AI financial systems, market intelligence, and financial automation.
                  </p>
                </div>
                
                {isLoading ? (
                  <div className="grid-blog">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="card animate-pulse">
                        <div className="h-4 bg-tertiary rounded mb-4"></div>
                        <div className="h-6 bg-tertiary rounded mb-4"></div>
                        <div className="h-16 bg-tertiary rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid-blog">
                    {recentPosts.map((post, index) => (
                      <article 
                        key={post.id} 
                        data-testid={`recent-post-${post.slug}`}
                        className="fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <PostCard post={post} />
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="section">
          <div className="container">
            <div className="fade-in-up">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Automate And Scale?</h2>
                <p className="text-large text-secondary mb-8 max-w-2xl mx-auto">
                  Discover how Beaverly's AI-powered ecosystem can automate and help you scale effortlessly.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a 
                    href="https://chilla.beaverlyai.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-large"
                  >
                    Start Chilling Now
                    <ArrowRight size={20} />
                  </a>
                  <a href="https://beaverlyai.com#about" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-large">
                    Learn About Chilla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loading State */}
        {posts && posts.length === 0 && !isLoading && (
          <section className="section">
            <div className="container">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">No Articles Yet</h3>
                <p className="text-secondary mb-8">We're working on bringing you the latest insights. Check back soon!</p>
                <a href="https://beaverlyai.com#about" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Learn About Chilla
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
