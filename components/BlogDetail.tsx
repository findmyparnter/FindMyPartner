'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
import { Blog } from '@/types/blog'
import AnimatedImage from './AnimatedImage'
import ProfileCard from './ProfileCard'
import SuggestionsSidebar from './SuggestionsSidebar'
import ShareButton from './ShareButton'
import BottomSheet from './BottomSheet'
import { Calendar, Clock, Tag, User } from 'lucide-react'

type Props = {
  blog: Blog
  relatedBlogs: Blog[]
}

export default function BlogDetail({ blog, relatedBlogs }: Props) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  return (
    <article className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-700 bg-primary-50 rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blog.readingTime}</span>
              </div>
            </div>

            {/* Share button */}
            <ShareButton title={blog.title} />
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <AnimatedImage
              src={blog.thumbnail}
              alt={blog.title}
              width={800}
              height={450}
              className="w-full h-auto rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    img: ({ node, ...props }) => (
                      <AnimatedImage
                        src={props.src || ''}
                        alt={props.alt || ''}
                        width={800}
                        height={450}
                        className="rounded-lg"
                      />
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block space-y-8">
            <ProfileCard person={blog.person} />
            <SuggestionsSidebar relatedBlogs={relatedBlogs} />
          </div>
        </div>

        {/* Mobile Profile Card */}
        <div className="lg:hidden mt-12">
          <ProfileCard person={blog.person} />
        </div>

        {/* Mobile Suggestions Button */}
        {relatedBlogs.length > 0 && (
          <div className="lg:hidden mt-8 text-center">
            <button
              onClick={() => setIsBottomSheetOpen(true)}
              className="btn-primary focus-outline"
            >
              View Related Articles ({relatedBlogs.length})
            </button>
          </div>
        )}

        {/* Mobile Bottom Sheet */}
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
          title="Related Articles"
        >
          <SuggestionsSidebar relatedBlogs={relatedBlogs} isMobile />
        </BottomSheet>
      </div>
    </article>
  )
}