
#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createPost(title) {
  if (!title) {
    console.error('Please provide a title for the blog post');
    console.log('Usage: npm run create-post "Your Blog Post Title"');
    process.exit(1);
  }

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  // Generate unique ID
  const id = Date.now().toString();

  // Get current date
  const pubDate = new Date().toISOString().split('T')[0];

  // Create template content
  const template = `---
id: "${id}"
slug: "${slug}"
title: "${title}"
description: "Brief description of your blog post for SEO and social media previews"
author: "Your Name"
pubDate: "${pubDate}"
tags: ["Tag1", "Tag2", "Tag3"]
---

# ${title}

Write your blog post content here using Markdown syntax.

## Section Example

This is how you create sections and subsections.

### Subsection Example

You can include:

- Bullet points
- **Bold text**
- *Italic text*
- \`Inline code\`
- [Links](https://example.com)

### Code Blocks

\`\`\`javascript
function example() {
  console.log("This is a code block");
}
\`\`\`

### Images

![Alt text](/images/your-image.jpg)

### Videos

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title"></iframe>
</div>

### Callouts

> **Note**: This is an important callout or note.

---

**Ready to get started?** [Call to action link](https://example.com)
`;

  // Ensure content directory exists
  const contentDir = join(process.cwd(), 'content', 'posts');
  mkdirSync(contentDir, { recursive: true });

  // Write the file
  const filename = `${slug}.md`;
  const filepath = join(contentDir, filename);
  
  try {
    writeFileSync(filepath, template);
    console.log(`✅ Created new blog post: ${filepath}`);
    console.log(`📝 Edit the file to add your content`);
    console.log(`🏷️  Don't forget to update the tags and description`);
  } catch (error) {
    console.error('❌ Failed to create blog post:', error.message);
    process.exit(1);
  }
}

// Get title from command line arguments
const title = process.argv.slice(2).join(' ');
createPost(title);
