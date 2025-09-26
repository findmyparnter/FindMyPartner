import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Static Next.js Blog',
  description: 'Terms of service and conditions for using our blog and accessing our content.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using this website, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on this 
              website for personal, non-commercial transitory viewing only. This is the grant 
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to decompile or reverse engineer any software on the website;</li>
              <li>remove any copyright or other proprietary notations from the materials.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on this website are provided on an 'as is' basis. We make no 
              warranties, expressed or implied, and hereby disclaim and negate all other 
              warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall our company or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on our website.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Revisions</h2>
            <p className="text-gray-700 mb-6">
              We may revise these terms of service at any time without notice. By using this 
              website, you are agreeing to be bound by the current version of these terms of service.
            </p>
            
            <div className="bg-primary-50 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Questions?</h3>
              <p className="text-primary-700">
                If you have any questions about these terms of service, please contact us 
                through our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}