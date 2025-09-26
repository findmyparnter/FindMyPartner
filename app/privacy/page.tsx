import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Static Next.js Blog',
  description: 'Our privacy policy explains how we handle your personal information and protect your privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2024</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              This is a static website that does not collect personal information. We do not use 
              cookies, tracking scripts, or analytics that identify individual users.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-6">
              Since we don't collect personal information, we don't use, store, or share any 
              personal data about our visitors.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our website is hosted on static hosting platforms. Please refer to your hosting 
              provider's privacy policy for information about server logs and basic access information.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy, please contact us through 
              our website's contact information.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. Any changes will be posted 
              on this page with an updated revision date.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Privacy Rights</h3>
              <p className="text-gray-700">
                Since we don't collect personal information, there are no personal data rights 
                to exercise. Your privacy is protected by design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}