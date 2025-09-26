import { blogs, paginateBlogs } from "@/data/blogs";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";
import { Metadata } from "next";
import LocationPage from "@/components/LocationsPage";

export const metadata: Metadata = {
  title: "Home | Static Next.js Blog",
  description:
    "Welcome to our modern blog featuring articles about web development, programming, and technology.",
  openGraph: {
    title: "Static Next.js Blog",
    description:
      "Modern blog featuring web development articles and programming tutorials.",
    type: "website",
    url: "/",
  },
};

export default function Home() {
  const { blogs: latestBlogs } = paginateBlogs(1, 6);

  return (
    <>
      <Hero />
      <LocationPage />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest insights on web development, programming, and
              technology trends.
            </p>
          </div>
          <BlogGrid blogs={latestBlogs} />
          <div className="text-center mt-12">
            <a
              href="/blogs"
              className="btn-primary focus-outline"
              aria-label="View all blog articles"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
