<<<<<<< HEAD
# FindMyPartner
=======
# Static Next.js Blog (frontend-only)

## Key principle
All site content is **static** and must be changed by a developer. Edit `/data/blogs.ts` and replace images in `/public/images/` then rebuild/deploy.

## Run locally
1. `npm install`
2. `npm run dev` (dev server)
3. `npm run build`
4. `npm start` (production)

## Add / edit blogs
- Edit `/data/blogs.ts`. Each blog must match the `Blog` type in `types/blog.ts`. Use unique `id` and `slug`.
- Replace thumbnails and person images in `/public/images/`.

## Sitemap
A static `sitemap.xml` is generated from `/data/blogs.ts` at build time and is available at `/sitemap.xml`.

## Notes
- No forms, no uploads, no admin UI. All updates require editing files.
- Accessibility: follow semantic HTML and keyboard focus states.

## Tech Stack
- **Next.js 14** (App Router) - React framework with static generation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with JIT compilation
- **Framer Motion** - Smooth animations and micro-interactions
- **React Markdown** - Safe markdown rendering with syntax highlighting

## Features
- ✅ Static Site Generation (SSG) for all pages
- ✅ SEO optimized with meta tags, OpenGraph, and JSON-LD structured data
- ✅ Fully responsive design (mobile-first approach)
- ✅ Accessibility compliant (WCAG guidelines)
- ✅ Paginated blog listing
- ✅ Related articles with client-side pagination
- ✅ Share functionality (Web Share API + clipboard fallback)
- ✅ Image optimization with Next.js Image component
- ✅ Skeleton loading states
- ✅ Mobile bottom sheet for related articles
- ✅ Focus management and keyboard navigation

## Project Structure
```
├── app/                    # Next.js App Router pages
├── components/            # React components
├── data/                  # Static data files
├── types/                 # TypeScript type definitions  
├── public/images/         # Static images
└── README.md
```

## Adding New Content

### Adding a New Blog Post
1. Open `/data/blogs.ts`
2. Add a new blog object to the `blogs` array:

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: 'Your Blog Title',
  excerpt: 'Brief description of the article',
  content: `
# Your Blog Content

Write your content in Markdown format...
  `,
  thumbnail: '/images/your-image.jpg',
  author: 'Author Name',
  date: '2024-01-15T10:00:00Z', // ISO format
  readingTime: '5 min read',
  tags: ['Tag1', 'Tag2'],
  person: {
    name: 'Author Name',
    phone: '+1 (555) 123-4567', // Use dummy numbers
    age: 30,
    about: 'Brief bio about the author',
    image: '/images/author-photo.jpg'
  }
}
```

### Adding Images
1. Place images in `/public/images/`
2. Reference them as `/images/filename.jpg` in your data
3. Use descriptive filenames
4. Optimize images for web (recommended: WebP format, <500KB)

### SEO Configuration
Each blog post automatically generates:
- Page title and meta description
- OpenGraph tags for social sharing  
- Twitter Card metadata
- JSON-LD structured data for search engines
- Canonical URLs

## Development Guidelines

### Accessibility
- All interactive elements are keyboard accessible
- Proper ARIA labels and semantic HTML
- Focus management and visible focus indicators
- Skip-to-content link for screen readers
- Alt text for all images

### Performance
- Static generation for fast loading
- Image optimization with Next.js Image
- Minimal JavaScript bundle
- Critical CSS inlined
- Lazy loading for images

### Code Organization
- Components are modular and reusable
- TypeScript for type safety
- Clear separation of concerns
- Consistent naming conventions

## Build and Deployment
```bash
npm run build    # Creates optimized production build
npm run start    # Serves the built application
npm run lint     # Code linting and type checking
```

The built site is completely static and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2017+ features
- CSS Grid and Flexbox
- Web APIs: Intersection Observer, Clipboard API

## Node.js Version
Recommended: Node.js 18+ for optimal compatibility with Next.js 14.

---

For questions or contributions, please refer to the codebase documentation and TypeScript types for guidance.
>>>>>>> origin/master
