import { Link } from "wouter";
import { BlogPost } from "@shared/schema";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
  list?: boolean;
}

export default function PostCard({ post, featured, compact, list }: PostCardProps) {
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  const estimatedReadTime = Math.ceil(post.content.split(' ').length / 200);

  if (list) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <time dateTime={post.pubDate.toString()}>{formattedDate}</time>
              <span className="mx-2">•</span>
              <span>{estimatedReadTime} min read</span>
              <span className="mx-2">•</span>
              <span className="text-gray-400">{post.author}</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2 hover:text-gray-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm">{post.description}</p>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="text-gray-500 text-sm">
              <span className="px-2 py-1 bg-gray-800 rounded text-xs">
                {post.tags[0]}
              </span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  if (compact) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-gray-800 rounded-xl p-6 hover-lift cursor-pointer">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <time dateTime={post.pubDate.toString()}>{formattedDate}</time>
            <span className="mx-2">•</span>
            <span>{estimatedReadTime} min read</span>
          </div>
          <h3 className="text-lg font-semibold mb-3 text-white hover:text-gray-300 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-gray-800 rounded-xl p-8 hover-lift cursor-pointer">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <time dateTime={post.pubDate.toString()}>{formattedDate}</time>
          <span className="mx-2">•</span>
          <span>{estimatedReadTime} min read</span>
          <span className="mx-2">•</span>
          <span className="text-white font-medium">{post.author}</span>
        </div>
        <h3 className={`font-bold mb-4 text-white hover:text-gray-300 transition-colors ${
          featured ? "text-2xl" : "text-xl"
        }`}>
          {post.title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
