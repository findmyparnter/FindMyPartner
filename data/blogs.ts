import { Blog } from '@/types/blog';

/* 
 * DEVELOPER NOTES:
 * - To add/edit blog posts, modify the blogs array below
 * - Each blog must have a unique 'id' and 'slug'
 * - Images should be placed in /public/images/
 * - Use dummy phone numbers - no real personal data
 * - Content can be markdown or HTML strings
 * - After changes, run 'npm run build' to regenerate static pages
 */

export const blogs: Blog[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, the React framework for production.',
    content: `
# Getting Started with Next.js 14

Next.js has revolutionized the way we build React applications. With version 14, we get even more powerful features and improvements.

## Key Features

- **App Router**: The new app directory structure
- **Server Components**: Improved performance
- **Streaming**: Better user experience
- **TypeScript**: First-class support

## Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 14 is a game-changer for React developers. Start building today!
    `,
    thumbnail: '/images/placeholder-1.jpg',
    author: 'John Smith',
    date: '2024-01-15T10:00:00Z',
    readingTime: '8 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    person: {
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      age: 32,
      about: 'Full-stack developer passionate about React and modern web technologies.',
      image: '/images/placeholder-1.jpg'
    }
  },
  {
    id: '2',
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript: Advanced Tips and Tricks',
    excerpt: 'Dive deep into TypeScript advanced features and learn how to write better, more maintainable code.',
    content: `
# Mastering TypeScript

TypeScript has become essential for large-scale JavaScript applications. Let's explore advanced concepts.

## Advanced Types

- Union types
- Intersection types  
- Conditional types
- Mapped types

## Best Practices

1. Use strict mode
2. Leverage type inference
3. Create reusable utility types
4. Use const assertions

TypeScript makes JavaScript development more predictable and maintainable.
    `,
    thumbnail: '/images/placeholder-2.jpg',
    author: 'Sarah Johnson',
    date: '2024-01-12T14:30:00Z',
    readingTime: '12 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    person: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 234-5678',
      age: 28,
      about: 'TypeScript enthusiast and senior frontend engineer with 6 years experience.',
      image: '/images/placeholder-2.jpg'
    }
  },
  {
    id: '3',
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS: Best Practices for Scalable Design Systems',
    excerpt: 'Learn how to build maintainable and scalable design systems using Tailwind CSS utility classes.',
    content: `
# Tailwind CSS Best Practices

Tailwind CSS provides a utility-first approach to styling. Here are best practices for scalable systems.

## Key Principles

- Utility-first approach
- Mobile-first responsive design
- Consistent spacing scale
- Color system organization

## Configuration

Customize your \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6'
      }
    }
  }
}
\`\`\`

Build better interfaces with Tailwind!
    `,
    thumbnail: '/images/placeholder-3.jpg',
    author: 'Mike Chen',
    date: '2024-01-10T09:15:00Z',
    readingTime: '6 min read',
    tags: ['Tailwind CSS', 'CSS', 'Design Systems'],
    person: {
      name: 'Mike Chen',
      phone: '+1 (555) 345-6789',
      age: 35,
      about: 'UI/UX designer and frontend developer specializing in design systems.',
      image: '/images/placeholder-3.jpg'
    }
  },
  {
    id: '4',
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: Techniques That Actually Work',
    excerpt: 'Discover proven techniques to optimize React applications for better performance and user experience.',
    content: `
# React Performance Optimization

Performance is crucial for user experience. Let's explore React optimization techniques.

## Core Techniques

- React.memo for component memoization
- useMemo and useCallback hooks
- Code splitting with React.lazy
- Virtualization for large lists

## Measuring Performance

Use React DevTools Profiler to identify bottlenecks:

1. Record user interactions
2. Analyze component render times
3. Identify unnecessary re-renders
4. Optimize accordingly

## Key Takeaways

- Profile before optimizing
- Focus on the biggest impact changes
- Don't over-optimize

Performance optimization is an ongoing process!
    `,
    thumbnail: '/images/placeholder-4.jpg',
    author: 'Emma Davis',
    date: '2024-01-08T16:45:00Z',
    readingTime: '10 min read',
    tags: ['React', 'Performance', 'Optimization'],
    person: {
      name: 'Emma Davis',
      phone: '+1 (555) 456-7890',
      age: 29,
      about: 'Performance engineer with expertise in React and modern JavaScript frameworks.',
      image: '/images/placeholder-4.jpg'
    }
  },
  {
    id: '5',
    slug: 'modern-css-features',
    title: 'Modern CSS Features You Should Be Using in 2024',
    excerpt: 'Explore the latest CSS features that can revolutionize how you write styles and build layouts.',
    content: `
# Modern CSS Features for 2024

CSS continues to evolve with powerful new features. Let's explore what's available now.

## Grid and Flexbox Advances

- \`aspect-ratio\` property
- \`gap\` in Flexbox
- Container queries
- \`:has()\` pseudo-class

## New Layout Methods

\`\`\`css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## Color Functions

- \`oklch()\` and \`oklab()\`
- Relative color syntax
- \`color-mix()\` function

Modern CSS is more powerful than ever!
    `,
    thumbnail: '/images/placeholder-5.jpg',
    author: 'Alex Rodriguez',
    date: '2024-01-05T11:20:00Z',
    readingTime: '7 min read',
    tags: ['CSS', 'Web Design', 'Frontend'],
    person: {
      name: 'Alex Rodriguez',
      phone: '+1 (555) 567-8901',
      age: 31,
      about: 'CSS specialist and frontend architect with deep knowledge of modern web standards.',
      image: '/images/placeholder-5.jpg'
    }
  },
  {
    id: '6',
    slug: 'javascript-async-patterns',
    title: 'JavaScript Async Patterns: From Callbacks to Async/Await',
    excerpt: 'Master asynchronous JavaScript programming with modern patterns and best practices.',
    content: `
# JavaScript Async Patterns

Asynchronous programming is fundamental to JavaScript. Let's master the patterns.

## Evolution of Async

1. **Callbacks** - The original pattern
2. **Promises** - Better error handling
3. **Async/Await** - Synchronous-like syntax

## Modern Patterns

\`\`\`javascript
// Concurrent execution
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);

// Error handling
try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  console.error('Failed to fetch:', error);
}
\`\`\`

## Best Practices

- Always handle errors
- Use Promise.all for concurrent operations
- Avoid mixing patterns
- Consider using libraries for complex scenarios

Async mastery is essential for modern JavaScript development!
    `,
    thumbnail: '/images/placeholder-6.jpg',
    author: 'David Kim',
    date: '2024-01-03T13:10:00Z',
    readingTime: '9 min read',
    tags: ['JavaScript', 'Async', 'Programming'],
    person: {
      name: 'David Kim',
      phone: '+1 (555) 678-9012',
      age: 33,
      about: 'JavaScript expert and technical lead specializing in async programming patterns.',
      image: '/images/placeholder-6.jpg'
    }
  },
  {
    id: '7',
    slug: 'web-accessibility-guide',
    title: 'Web Accessibility: Building Inclusive Digital Experiences',
    excerpt: 'Learn how to create accessible web applications that work for everyone, including users with disabilities.',
    content: `
# Web Accessibility Guide

Building inclusive web experiences is not just good practice—it's essential.

## Core Principles (WCAG)

1. **Perceivable** - Information must be presentable to users in ways they can perceive
2. **Operable** - Interface components must be operable
3. **Understandable** - Information and UI operation must be understandable
4. **Robust** - Content must be robust enough for various assistive technologies

## Practical Implementation

\`\`\`html
<!-- Semantic HTML -->
<button aria-label="Close dialog" onclick="closeModal()">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Proper form labels -->
<label for="email">Email Address</label>
<input id="email" type="email" required>
\`\`\`

## Testing Tools

- Screen readers (NVDA, JAWS)
- axe-core browser extension
- Lighthouse accessibility audit
- Keyboard navigation testing

Accessibility benefits everyone, not just users with disabilities!
    `,
    thumbnail: '/images/placeholder-1.jpg',
    author: 'Lisa Wang',
    date: '2024-01-01T08:30:00Z',
    readingTime: '11 min read',
    tags: ['Accessibility', 'UX', 'Web Standards'],
    person: {
      name: 'Lisa Wang',
      phone: '+1 (555) 789-0123',
      age: 27,
      about: 'Accessibility advocate and UX engineer dedicated to inclusive web design.',
      image: '/images/placeholder-1.jpg'
    }
  },
  {
    id: '8',
    slug: 'mobile-first-responsive-design',
    title: 'Mobile-First Responsive Design: A Modern Approach',
    excerpt: 'Master mobile-first design principles and create responsive layouts that work beautifully on all devices.',
    content: `
# Mobile-First Responsive Design

With mobile traffic dominating, mobile-first design is no longer optional.

## Mobile-First Strategy

Start with mobile constraints, then enhance for larger screens:

\`\`\`css
/* Mobile styles (base) */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
\`\`\`

## Key Principles

- Progressive enhancement
- Touch-friendly interfaces
- Readable typography
- Optimized images

## Testing Strategy

- Real device testing
- Browser dev tools
- Performance on slower networks
- Various screen orientations

Mobile-first ensures better performance and user experience across all devices!
    `,
    thumbnail: '/images/placeholder-2.jpg',
    author: 'Carlos Martinez',
    date: '2023-12-28T15:45:00Z',
    readingTime: '8 min read',
    tags: ['Responsive Design', 'Mobile', 'CSS'],
    person: {
      name: 'Carlos Martinez',
      phone: '+1 (555) 890-1234',
      age: 30,
      about: 'Mobile UX specialist with extensive experience in responsive design and PWAs.',
      image: '/images/placeholder-2.jpg'
    }
  },
  {
    id: '9',
    slug: 'git-workflow-best-practices',
    title: 'Git Workflow Best Practices for Team Collaboration',
    excerpt: 'Learn effective Git workflows and branching strategies for successful team collaboration and project management.',
    content: `
# Git Workflow Best Practices

Effective Git workflows are crucial for team collaboration and project success.

## Popular Workflows

### Git Flow
- Feature branches
- Release branches  
- Hotfix branches
- Master and develop branches

### GitHub Flow
- Simpler approach
- Feature branches off main
- Pull requests for all changes
- Deploy from main

## Best Practices

\`\`\`bash
# Descriptive commit messages
git commit -m "feat: add user authentication system

- Add login/logout functionality
- Implement JWT token handling
- Add password validation"

# Feature branch workflow
git checkout -b feature/user-dashboard
git add .
git commit -m "feat: implement user dashboard"
git push origin feature/user-dashboard
\`\`\`

## Key Guidelines

- Write clear commit messages
- Keep commits atomic and focused
- Use pull requests for code review
- Rebase vs merge strategy
- Protect main branch

Good Git practices lead to cleaner history and better collaboration!
    `,
    thumbnail: '/images/placeholder-3.jpg',
    author: 'Jennifer Lee',
    date: '2023-12-25T10:15:00Z',
    readingTime: '7 min read',
    tags: ['Git', 'Version Control', 'Team Collaboration'],
    person: {
      name: 'Jennifer Lee',
      phone: '+1 (555) 901-2345',
      age: 34,
      about: 'DevOps engineer and team lead with expertise in Git workflows and CI/CD processes.',
      image: '/images/placeholder-3.jpg'
    }
  },
  {
    id: '10',
    slug: 'api-design-principles',
    title: 'RESTful API Design: Principles and Best Practices',
    excerpt: 'Design robust and scalable RESTful APIs following industry standards and best practices.',
    content: `
# RESTful API Design Principles

Well-designed APIs are the backbone of modern applications. Let's explore best practices.

## REST Principles

1. **Stateless** - Each request contains all necessary information
2. **Cacheable** - Responses should be cacheable when appropriate
3. **Uniform Interface** - Consistent resource identification
4. **Layered System** - Architecture can be composed of hierarchical layers

## URL Design Patterns

\`\`\`
GET    /api/users           # Get all users
GET    /api/users/{id}      # Get specific user
POST   /api/users           # Create new user
PUT    /api/users/{id}      # Update user (full)
PATCH  /api/users/{id}      # Update user (partial)
DELETE /api/users/{id}      # Delete user
\`\`\`

## Response Standards

\`\`\`json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "timestamp": "2024-01-15T10:00:00Z",
    "version": "1.0"
  }
}
\`\`\`

## Status Codes

- 200 OK - Success
- 201 Created - Resource created
- 400 Bad Request - Client error
- 401 Unauthorized - Authentication required
- 404 Not Found - Resource not found
- 500 Internal Server Error - Server error

Great API design leads to better developer experience and easier integration!
    `,
    thumbnail: '/images/placeholder-4.jpg',
    author: 'Robert Johnson',
    date: '2023-12-22T12:00:00Z',
    readingTime: '10 min read',
    tags: ['API Design', 'REST', 'Backend'],
    person: {
      name: 'Robert Johnson',
      phone: '+1 (555) 012-3456',
      age: 36,
      about: 'Backend architect with 10+ years experience designing scalable APIs and microservices.',
      image: '/images/placeholder-4.jpg'
    }
  },
  {
    id: '11',
    slug: 'testing-strategies-frontend',
    title: 'Frontend Testing Strategies: Unit, Integration, and E2E',
    excerpt: 'Comprehensive guide to testing frontend applications with modern tools and methodologies.',
    content: `
# Frontend Testing Strategies

Robust testing ensures reliable applications. Let's explore testing strategies for frontend development.

## Testing Pyramid

1. **Unit Tests** (70%) - Test individual components
2. **Integration Tests** (20%) - Test component interactions  
3. **E2E Tests** (10%) - Test complete user flows

## Tools and Frameworks

### Unit Testing
- Jest + React Testing Library
- Vitest for modern projects
- Component testing with mount/render

### Integration Testing
- Testing user interactions
- API integration tests
- Browser compatibility testing

### E2E Testing  
- Playwright or Cypress
- Critical user journey testing
- Cross-browser validation

## Example Unit Test

\`\`\`javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

## Best Practices

- Test behavior, not implementation
- Write tests first (TDD)
- Keep tests simple and focused
- Use descriptive test names
- Mock external dependencies

Good testing practices lead to more maintainable and reliable applications!
    `,
    thumbnail: '/images/placeholder-5.jpg',
    author: 'Amanda Foster',
    date: '2023-12-20T14:30:00Z',
    readingTime: '12 min read',
    tags: ['Testing', 'Quality Assurance', 'Frontend'],
    person: {
      name: 'Amanda Foster',
      phone: '+1 (555) 123-4567',
      age: 29,
      about: 'QA engineer and testing specialist focused on automated testing and quality processes.',
      image: '/images/placeholder-5.jpg'
    }
  },
  {
    id: '12',
    slug: 'web-security-fundamentals',
    title: 'Web Security Fundamentals Every Developer Should Know',
    excerpt: 'Essential security practices and common vulnerabilities to protect your web applications and users.',
    content: `
# Web Security Fundamentals

Security should be built into every application from the ground up. Let's explore essential practices.

## Common Vulnerabilities (OWASP Top 10)

1. **Injection** - SQL, NoSQL, OS command injection
2. **Broken Authentication** - Session management issues
3. **Sensitive Data Exposure** - Inadequate data protection
4. **XML External Entities (XXE)** - XML processing vulnerabilities
5. **Broken Access Control** - Unauthorized access
6. **Security Misconfiguration** - Default/insecure configurations

## Security Headers

\`\`\`javascript
// Next.js security headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
];
\`\`\`

## Frontend Security Practices

- Input validation and sanitization
- Content Security Policy (CSP)
- Secure authentication flows
- HTTPS everywhere
- Regular dependency updates

## Authentication Best Practices

- Strong password policies
- Multi-factor authentication
- Secure session management
- JWT token security
- OAuth 2.0 implementation

## Key Takeaways

- Security is everyone's responsibility
- Stay updated on vulnerabilities
- Use security linting tools
- Regular security audits
- Implement defense in depth

Security is not optional—it's fundamental to building trustworthy applications!
    `,
    thumbnail: '/images/placeholder-6.jpg',
    author: 'Michael Brown',
    date: '2023-12-18T09:45:00Z',
    readingTime: '14 min read',
    tags: ['Security', 'Web Development', 'Best Practices'],
    person: {
      name: 'Michael Brown',
      phone: '+1 (555) 234-5678',
      age: 38,
      about: 'Cybersecurity consultant and full-stack developer specializing in application security.',
      image: '/images/placeholder-6.jpg'
    }
  }
];

// Helper functions for blog operations
export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};

export const getBlogsByTag = (tag: string): Blog[] => {
  return blogs.filter(blog => blog.tags.includes(tag));
};

export const getRelatedBlogs = (currentBlog: Blog, limit: number = 4): Blog[] => {
  return blogs
    .filter(blog => 
      blog.id !== currentBlog.id && 
      blog.tags.some(tag => currentBlog.tags.includes(tag))
    )
    .slice(0, limit);
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  blogs.forEach(blog => {
    blog.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const paginateBlogs = (page: number = 1, perPage: number = 12) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogs.length / perPage);
  
  return {
    blogs: paginatedBlogs,
    currentPage: page,
    totalPages,
    totalBlogs: blogs.length,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  };
};