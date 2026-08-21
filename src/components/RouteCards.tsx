import Link from 'next/link';
import { ROUTES } from '@/lib/site';

export default function RouteCards() {
  return (
    <div className="llr-stack">
      {ROUTES.map((route) => (
        <Link key={route.href} href={route.href} className="llr-card">
          <h3>
            {route.number} {route.label}
          </h3>
          <p>{route.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
