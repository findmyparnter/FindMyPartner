'use client'

import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface AnimatedImageProps extends Omit<ImageProps, 'onLoad'> {
  className?: string
}

export default function AnimatedImage({ className = '', ...props }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0.7, 
        scale: isLoaded ? 1 : 0.95 
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full"
      />
    </motion.div>
  )
}