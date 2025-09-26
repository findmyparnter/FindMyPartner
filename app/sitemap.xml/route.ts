import { blogs } from '@/data/blogs'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  
  const staticPages = [
    '',
    '/blogs',
    '/about',
    '/privacy',
    '/terms',
  ]

  const staticSitemap = staticPages
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')

  const blogSitemap = blogs
    .map(
      (blog) => `
    <url>
      <loc>${baseUrl}/blogs/${blog.slug}</loc>
      <lastmod>${blog.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>`
    )
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticSitemap}
  ${blogSitemap}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}