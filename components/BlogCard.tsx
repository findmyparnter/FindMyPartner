"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedImage from "./AnimatedImage";
import { Blog } from "@/types/blog";
import { ArrowRight } from "lucide-react";

type Props = {
  blog: Blog;
  index?: number;
};

export default function BlogCard({ blog, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10]">
          <AnimatedImage
            src={blog.thumbnail}
            alt={blog.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Overlay icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 0,
              scale: 0.8,
              y: 10,
            }}
            whileHover={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ArrowRight className="w-5 h-5 text-gray-900" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
