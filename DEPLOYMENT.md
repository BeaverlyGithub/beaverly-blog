# Deployment Guide

This project is now a **pure static React application** that can be deployed anywhere without any backend requirements.

## Static Deployment (Works Everywhere)

### For Vercel, Netlify, GitHub Pages, or any static host:

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/public` folder**

The application uses hardcoded blog data and will work immediately on any static hosting platform.

### Platform-Specific Instructions:

#### Vercel
- Connect your repository
- Build command: `npm run build`
- Output directory: `dist/public`
- The included `vercel.json` handles SPA routing

#### Netlify
- Connect your repository  
- Build command: `npm run build`
- Publish directory: `dist/public`
- The included `netlify.toml` handles redirects

#### GitHub Pages
```bash
npm run build
# Deploy the dist/public folder to gh-pages branch
```

#### Other Static Hosts (Surge, Firebase, S3, etc.)
- Build command: `npm run build`
- Deploy folder: `dist/public`
- Use the `static.json` for configuration if supported

## Full-Stack Deployment

For platforms that support Node.js backends:

1. **Build the full application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

### Platform-Specific Instructions:

#### Railway, Render, or Heroku
- Set build command: `npm run build`
- Set start command: `npm start`
- Ensure Node.js 20+ is specified

#### Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## Environment Variables

**No environment variables required!** 

The Google Analytics measurement ID (G-229WRH1KTN) is hardcoded for simplicity.

## Content Management

The application includes static blog content in `client/src/data/blog-posts.ts`. To add new posts:

1. Edit the `staticBlogPosts` array in that file
2. Follow the `BlogPost` interface structure defined in `client/src/types/schema.ts`
3. Add any images to `client/public/` or `attached_assets/`
4. Rebuild and redeploy

## Static Data Only

This is now a pure static application that always uses the data from `client/src/data/blog-posts.ts`. No backend or API required.

## Troubleshooting

### Blank Page on Deployment
- Ensure the build completed successfully
- Check that routing is configured (use the provided config files)
- Verify the correct build output directory is deployed

### Google Analytics Not Working
- Confirm the measurement ID is correct in `client/src/lib/analytics.ts`
- Check browser developer tools for any console errors
- Verify the site domain is added to your GA4 property

### Missing Blog Posts
- If using static deployment, posts come from `client/src/data/blog-posts.ts`
- If using full-stack deployment, check database connection and storage implementation

## Performance Optimization

The built application includes:
- Optimized assets and code splitting
- Compressed images and fonts
- Minified CSS and JavaScript
- Service worker for caching (if configured)

## Security Headers

The `static.json` includes security headers:
- Content Security Policy for Google Analytics
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options for MIME type protection

## Custom Domain Setup

After deployment:
1. Configure your custom domain in your hosting platform
2. Update the `url` fields in SEO components
3. Add the domain to your Google Analytics property
4. Ensure SSL/HTTPS is enabled