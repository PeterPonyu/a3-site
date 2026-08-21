export default function PageShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="llr-wrap">
      {kicker ? <p className="llr-kicker">{kicker}</p> : null}
      <h1 className="llr-title">{title}</h1>
      <div className="llr-lead">{children}</div>
    </div>
  );
}
