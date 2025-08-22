
# Blog Post Content Guidelines

## File Structure
Each blog post should be a separate `.md` file in this directory with the following naming convention:
- Use kebab-case (lowercase with hyphens)
- Example: `how-chilla-works.md`, `ai-trading-explained.md`

## Frontmatter Format
Each post must start with YAML frontmatter:

```yaml
---
id: "unique-id"
slug: "url-friendly-slug"
title: "Your Post Title"
description: "Brief description for SEO and previews"
author: "Author Name"
pubDate: "YYYY-MM-DD"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

## Content Guidelines

### Text Formatting
- Use `#` for main title (H1)
- Use `##` for sections (H2)
- Use `###` for subsections (H3)
- **Bold text** with `**text**`
- *Italic text* with `*text*`
- `Inline code` with backticks

### Code Blocks
Use triple backticks with language specification:

```python
def example_function():
    return "Hello, World!"
```

### Images
Place images in `client/public/images/` and reference them:
```markdown
![Alt text](/images/your-image.jpg)
```

### Videos
Embed videos using HTML:
```html
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title"></iframe>
</div>
```

### Callout Boxes
Use blockquotes for callouts:
```markdown
> **Note**: This is an important callout box.
```

### Lists
- Use `-` or `*` for bullet points
- Use `1.` for numbered lists

## File Organization
- Keep posts focused and well-structured
- Use consistent formatting throughout
- Include relevant tags for categorization
- Write compelling descriptions for SEO
