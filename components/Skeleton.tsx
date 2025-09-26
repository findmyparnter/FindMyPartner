type Props = {
  type: 'card' | 'grid' | 'text' | 'image'
  count?: number
  className?: string
}

export default function Skeleton({ type, count = 1, className = '' }: Props) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded'

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`card ${className}`}>
            <div className={`${baseClasses} aspect-video mb-4`} />
            <div className="p-6">
              <div className={`${baseClasses} h-4 w-3/4 mb-2`} />
              <div className={`${baseClasses} h-4 w-1/2 mb-4`} />
              <div className={`${baseClasses} h-3 w-full mb-2`} />
              <div className={`${baseClasses} h-3 w-5/6`} />
            </div>
          </div>
        )
      
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="card">
                <div className={`${baseClasses} aspect-video mb-4`} />
                <div className="p-6">
                  <div className={`${baseClasses} h-4 w-3/4 mb-2`} />
                  <div className={`${baseClasses} h-4 w-1/2 mb-4`} />
                  <div className={`${baseClasses} h-3 w-full mb-2`} />
                  <div className={`${baseClasses} h-3 w-5/6`} />
                </div>
              </div>
            ))}
          </div>
        )
      
      case 'text':
        return (
          <div className={className}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className={`${baseClasses} h-4 w-full mb-2 last:mb-0`} />
            ))}
          </div>
        )
      
      case 'image':
        return <div className={`${baseClasses} ${className}`} />
      
      default:
        return <div className={`${baseClasses} ${className}`} />
    }
  }

  return <>{renderSkeleton()}</>
}