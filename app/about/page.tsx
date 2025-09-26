import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Static Next.js Blog',
  description: 'Learn about our mission to share knowledge and insights about web development and programming.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Welcome to our blog, where we share insights, tutorials, and best practices 
              about modern web development and programming.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We believe in the power of knowledge sharing. Our team of experienced developers 
              and engineers writes in-depth articles covering the latest trends, tools, and 
              techniques in web development.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Cover</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Frontend frameworks like React, Next.js, and Vue.js</li>
              <li>Modern JavaScript and TypeScript development</li>
              <li>CSS techniques and design systems</li>
              <li>Web performance optimization</li>
              <li>Accessibility and inclusive design</li>
              <li>Backend development and API design</li>
              <li>DevOps and deployment strategies</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our content is created by experienced software engineers, UX designers, 
              and technology specialists who are passionate about sharing their knowledge 
              and helping others grow in their careers.
            </p>
            
            <div className="bg-primary-50 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Stay Updated</h3>
              <p className="text-primary-700">
                We publish new articles regularly covering the latest in web development. 
                Check back often or follow us for the latest updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}