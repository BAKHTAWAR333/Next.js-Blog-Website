import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              MyNextBlog
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}