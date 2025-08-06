import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { BlogPost } from "@shared/schema";
import PostCard from "@/components/blog/post-card";
import SEOHead from "@/components/seo-head";

export default function BlogHome() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Blog Posts</h1>
          <p className="text-gray-400">Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  const featuredPost = posts?.[0];
  const sidePosts = posts?.slice(1, 3) || [];
  const morePosts = posts?.slice(3) || [];

  return (
    <>
      <SEOHead
        title="Beaverly Blog - Chilling with AI and Building Wealth"
        description="Official blog from Beaverly® — Chilling with AI and building wealth through intelligent automation."
        url="https://blog.beaverlyai.com"
      />
      
      <main className="min-h-screen" data-testid="blog-home">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text" data-testid="blog-title">
              Beaverly Blog
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Official insights from Beaverly® — Chilling with AI and building wealth through intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 bg-gray-800 rounded-full">AI Trading</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">Fintech Innovation</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">Automated Investing</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">Financial Technology</span>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-testid="latest-insights-title">
              Latest Insights
            </h2>
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-8 animate-pulse">
                    <div className="h-4 bg-gray-700 rounded mb-4"></div>
                    <div className="h-6 bg-gray-700 rounded mb-4"></div>
                    <div className="h-16 bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {/* Featured Post */}
                  {featuredPost && (
                    <article className="md:col-span-2 lg:col-span-2" data-testid="featured-post">
                      <PostCard post={featuredPost} featured />
                    </article>
                  )}

                  {/* Side Posts */}
                  <div className="space-y-8">
                    {sidePosts.map((post) => (
                      <article key={post.id} data-testid={`side-post-${post.slug}`}>
                        <PostCard post={post} compact />
                      </article>
                    ))}
                  </div>
                </div>

                {/* More Posts List */}
                {morePosts.length > 0 && (
                  <div className="border-t border-gray-700 pt-12">
                    <h3 className="text-xl font-semibold mb-8" data-testid="more-articles-title">
                      More Articles
                    </h3>
                    <div className="space-y-6">
                      {morePosts.map((post) => (
                        <article key={post.id} data-testid={`more-post-${post.slug}`}>
                          <PostCard post={post} list />
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h3>
                <p className="text-gray-400">Check back soon for the latest insights from Beaverly.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
