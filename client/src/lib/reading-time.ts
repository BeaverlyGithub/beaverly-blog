/**
 * Calculate reading time for text content
 * @param content The text content to analyze
 * @returns Reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  // Remove markdown formatting and HTML tags for accurate word count
  const cleanText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Extract link text
    .replace(/[#*_~`]/g, '') // Remove markdown formatting
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words (average English word length is ~5 characters)
  const words = cleanText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Average reading speed is 200-250 words per minute, using 225 as middle ground
  const wordsPerMinute = 225;
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  // Minimum reading time of 1 minute
  return Math.max(1, readingTime);
}