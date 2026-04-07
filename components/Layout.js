import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}