// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EscortService</h3>
            <p className="text-gray-300 mb-4">
              A modern blog featuring insights, tutorials, and best practices
              for web development and programming.
            </p>
            <p className="text-sm text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav
              className="space-y-2"
              role="navigation"
              aria-label="Footer navigation"
            >
              <Link
                href={"/" as unknown as any}
                className="block text-gray-300 hover:text-white transition-colors duration-200 focus-outline rounded"
              >
                Home
              </Link>
              <Link
                href={"/blogs" as unknown as any}
                className="block text-gray-300 hover:text-white transition-colors duration-200 focus-outline rounded"
              >
                All Articles
              </Link>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href as unknown as any}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus-outline rounded"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Topics We Cover</h4>
            <div className="space-y-2 text-gray-300">
              <p>Next.js & React</p>
              <p>TypeScript & JavaScript</p>
              <p>CSS & Design Systems</p>
              <p>Web Performance</p>
              <p>Accessibility</p>
              <p>Best Practices</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} EscortService. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Static blog - No cookies, no tracking, no data collection
          </p>
        </div>
      </div>
    </footer>
  );
}
