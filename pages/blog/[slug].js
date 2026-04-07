import { posts } from '../../data/posts';

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Post not found</div>;
  }
  
  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <div className="blog-meta">
        <span>{post.date}</span> | <span>By {post.author}</span>
      </div>
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

// Generate static paths for all posts
export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));
  
  return {
    paths,
    fallback: false
  };
}

// Get static props for each post
export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  
  return {
    props: {
      post
    }
  };
}