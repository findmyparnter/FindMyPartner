// app/blogs/[slug]/page.tsx
import { blogs, getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, Phone } from "lucide-react";

// This is the key function that was missing!
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | Your Blog Name`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `/blogs/${blog.slug}`,
      images: [
        {
          url: blog.thumbnail,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.thumbnail],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
  const relatedBlogs = blog ? getRelatedBlogs(blog, 3) : [];

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-video sm:aspect-[2/1] overflow-hidden">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blog.readingTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blog.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        </article>

        {/* Author/Person Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            About the Author
          </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={blog.person.image}
              alt={blog.person.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.person.name}
              </h4>
              <p className="text-gray-600 mb-3">{blog.person.about}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>Age: {blog.person.age}</span>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {blog.person.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedBlog.thumbnail}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
