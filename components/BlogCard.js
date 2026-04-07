import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <h2>
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <div className="blog-meta">
        <span>{post.date}</span> | <span>By {post.author}</span>
      </div>
      <p className="blog-excerpt">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="btn">
        Read More →
      </Link>
    </article>
  );
}