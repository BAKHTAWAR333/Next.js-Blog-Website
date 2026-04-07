import Link from 'next/link';
import { posts } from '../data/posts';
import BlogCard from '../components/BlogCard';

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>
          Welcome to MyNextBlog
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#fff', opacity: 0.9 }}>
          Your go-to destination for Next.js tutorials and web development insights
        </p>
      </div>
      
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: '#fff' }}>Recent Posts</h2>
          <Link href="/blog" className="btn">
            View All Posts →
          </Link>
        </div>
        
        <div className="blog-grid">
          {recentPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}