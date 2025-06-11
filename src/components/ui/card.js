export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-indigo-400/10 backdrop-blur shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}