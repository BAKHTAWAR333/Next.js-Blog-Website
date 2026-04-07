export default function About() {
  return (
    <div className="about-content">
      <h1>About This Blog</h1>
      <p>
        Welcome to MyNextBlog, a modern blog built with Next.js and the Pages Router.
        This project demonstrates best practices for building static websites with
        dynamic content using Next.js.
      </p>
      
      <h2>Features</h2>
      <ul>
        <li> File-based routing with Pages Router</li>
        <li> Static Site Generation (SSG) for blog posts</li>
        <li> Responsive design with CSS Grid and Flexbox</li>
        <li> Reusable React components</li>
        <li> Clean and modern UI</li>
        <li> Dynamic routes for blog posts</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li>Next.js 14 with Pages Router</li>
        <li>React 18</li>
        <li>CSS3 with modern features</li>
        <li>React Icons</li>
      </ul>
      
      <h2>Project Structure</h2>
      <p>
        The project follows Next.js best practices with a components folder for
        reusable UI pieces, pages folder for routing, and data folder for content
        management. Each page is properly structured with appropriate meta tags
        and semantic HTML.
      </p>
    </div>
  );
}