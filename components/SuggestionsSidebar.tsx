'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Blog } from '@/types/blog'
import AnimatedImage from './AnimatedImage'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'

type Props = {
  relatedBlogs: Blog[]
  isMobile?: boolean
}

export default function SuggestionsSidebar({ relatedBlogs, isMobile = false }: Props) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = isMobile ? 3 : 4
  const totalPages = Math.ceil(relatedBlogs.length / itemsPerPage)
  
  const startIndex = currentPage * itemsPerPage
  const visibleBlogs = relatedBlogs.slice(startIndex, startIndex + itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  if (relatedBlogs.length === 0) return null

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Related Articles</h3>
        {totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={prevPage}
              className="p-1 text-gray-400 hover:text-gray-600 focus-outline rounded"
              aria-label="Previous related articles"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              className="p-1 text-gray-400 hover:text-gray-600 focus-outline rounded"
              aria-label="Next related articles"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {visibleBlogs.map((blog) => (
          <article key={blog.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <Link href={`/blogs/${blog.slug}`} className="block group focus-outline rounded">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <AnimatedImage
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={80}
                    height={60}
                    className="w-20 h-15 rounded-lg object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {blog.title}
                  </h4>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>{blog.author}</span>
                    <span className="mx-1">•</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{blog.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}