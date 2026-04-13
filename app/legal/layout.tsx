export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell max-w-3xl section">
      <article className="legal-doc">{children}</article>
    </div>
  );
}
