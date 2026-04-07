export const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easy and fun. It provides features like server-side rendering, static site generation, and file-based routing out of the box.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li>Automatic code splitting for faster page loads</li>
        <li>Built-in CSS and Sass support</li>
        <li>API routes for building backend endpoints</li>
        <li>Image optimization and fast refresh</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      <p>Then navigate to your project folder and start the development server:</p>
      <pre><code>cd my-app
npm run dev</code></pre>
    `,
    date: "2024-01-15",
    author: "John Doe"
  },
  {
    slug: "understanding-nextjs-routing",
    title: "Understanding Next.js Routing",
    excerpt: "Deep dive into the Pages Router and how to create dynamic routes in Next.js.",
    content: `
      <p>Next.js uses a file-based routing system where pages are created based on the file structure in the pages directory.</p>
      
      <h2>Basic Routing</h2>
      <p>Create a file in the pages directory - it automatically becomes a route. For example:</p>
      <ul>
        <li>pages/index.js → /</li>
        <li>pages/about.js → /about</li>
        <li>pages/blog.js → /blog</li>
      </ul>
      
      <h2>Dynamic Routes</h2>
      <p>Use square brackets to create dynamic routes. For example, pages/blog/[slug].js will match routes like /blog/post-1.</p>
      
      <h2>Nested Routes</h2>
      <p>Create folders to organize nested routes. For example, pages/blog/first.js creates the route /blog/first.</p>
    `,
    date: "2024-01-20",
    author: "Jane Smith"
  },
  {
    slug: "building-components-in-nextjs",
    title: "Building Reusable Components",
    excerpt: "Learn how to create and organize React components in your Next.js application.",
    content: `
      <p>Components are the building blocks of any React application. In Next.js, we organize components in a components folder at the root level.</p>
      
      <h2>Creating Components</h2>
      <p>Components can be functional or class-based. Here's an example of a functional component:</p>
      <pre><code>const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;</code></pre>
      
      <h2>Component Organization</h2>
      <p>Group related components together and use index files for cleaner imports. For example:</p>
      <ul>
        <li>components/Layout.js - Wrapper component for consistent layout</li>
        <li>components/Header.js - Navigation header</li>
        <li>components/Footer.js - Page footer</li>
      </ul>
      
      <h2>Props and State</h2>
      <p>Use props to pass data down and state for component-specific data management. Leverage React hooks like useState and useEffect for side effects.</p>
    `,
    date: "2024-01-25",
    author: "Mike Johnson"
  }
];