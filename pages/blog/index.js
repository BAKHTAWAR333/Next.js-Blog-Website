import { posts } from '../../data/posts';
import BlogCard from '../../components/BlogCard';

export default function BlogIndex() {
  return (
    <div>
      <h1 style={{ color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
        All Blog Posts
      </h1>
      <div className="blog-grid">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}