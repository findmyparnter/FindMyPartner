// app/blogs/page.tsx
import { blogs, paginateBlogs, getAllTags } from "@/data/blogs";
import BlogGrid from "@/components/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Your Blog Name",
  description:
    "Browse our collection of articles about web development, programming, and technology.",
  openGraph: {
    title: "Articles | Your Blog Name",
    description:
      "Browse our collection of articles about web development, programming, and technology.",
    type: "website",
    url: "/blogs",
  },
};

export default function BlogsPage() {
  const { blogs: allBlogs } = paginateBlogs(1, blogs.length); // Get all blogs for now
  const allTags = getAllTags();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights on web development, programming, and technology
            trends from our community of expert developers and designers.
          </p>
        </div>

        {/* Tags Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Browse by Topic
          </h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <BlogGrid blogs={allBlogs} />

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <span className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {allBlogs.length}
              </span>{" "}
              articles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
