"use client";

import Link from "next/link";
import type { Route } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: Props) {
  // Return a typed Route so Next's typedRoutes accepts it
  const getPageUrl = (page: number): Route => `${basePath}/${page}` as Route;

  const getVisiblePages = (): number[] => {
    const pages: number[] = [];
    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages();

  return (
    <nav
      className="flex items-center justify-center space-x-2"
      aria-label="Pagination"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Link>
      ) : (
        <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center space-x-1">
        {/* First page */}
        {visiblePages[0] > 1 && (
          <>
            <Link
              href={getPageUrl(1)}
              className="px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
              aria-label="Go to page 1"
            >
              1
            </Link>
            {visiblePages[0] > 2 && (
              <span className="px-2 text-gray-400">...</span>
            )}
          </>
        )}

        {/* Visible pages */}
        {visiblePages.map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`px-3 py-2 text-sm font-medium rounded focus:outline-none ${
              page === currentPage
                ? "text-white bg-blue-600 border border-blue-600"
                : "text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            }`}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}

        {/* Last page */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="px-2 text-gray-400">...</span>
            )}
            <Link
              href={getPageUrl(totalPages)}
              className="px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
              aria-label={`Go to page ${totalPages}`}
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
          aria-label="Go to next page"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      ) : (
        <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </span>
      )}
    </nav>
  );
}
