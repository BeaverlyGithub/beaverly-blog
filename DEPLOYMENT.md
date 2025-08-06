# Deployment Guide

This project can be deployed in multiple ways depending on your hosting platform. The application has been configured to work as both a full-stack application and a static site.

## Static Deployment (Recommended for most platforms)

### For Vercel, Netlify, or other static hosts:

1. **Build the static site:**
   ```bash
   npm run build:static
   # or simply: vite build
   ```

2. **Deploy the `client/dist` folder**

The application will automatically detect when it's running in a static environment and use the built-in blog data instead of API calls.

### Platform-Specific Instructions:

#### Vercel
- Connect your repository
- Set build command: `vite build`
- Set output directory: `client/dist`
- The included `vercel.json` handles routing

#### Netlify
- Connect your repository  
- Set build command: `vite build`
- Set publish directory: `client/dist`
- The included `netlify.toml` handles redirects

#### GitHub Pages
```bash
npm run build:static
# Deploy the client/dist folder to gh-pages branch
```

#### Other Static Hosts
- Build command: `vite build`
- Deploy folder: `client/dist`
- Use the `static.json` for configuration

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

### Required for Google Analytics:
- `VITE_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID (already set to G-229WRH1KTN)

### Optional for Database (full-stack only):
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to 'production' for production builds

## Content Management

The application includes static blog content in `client/src/data/blog-posts.ts`. To add new posts:

1. Edit the `staticBlogPosts` array in that file
2. Follow the `BlogPost` interface structure
3. Rebuild and redeploy

## API Fallback

The application intelligently falls back between:
1. **Development**: Uses the Express.js API backend
2. **Static Deployment**: Uses the static blog data
3. **Full-Stack Production**: Uses the Express.js API with database

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