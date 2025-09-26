// app/blogs/[slug]/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <div className="text-6xl font-bold text-gray-200 mb-6">📄</div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            The article you're looking for doesn't exist or may have been
            removed.
          </p>

          <div className="space-y-4">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse All Articles
            </Link>

            <div className="text-sm text-gray-500">
              or{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-500">
                go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
