export default function Button({ children, onClick, href }) {
  if (href) {
    return (
      <a href={href} className="btn">
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}