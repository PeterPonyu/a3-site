'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { badgeEntries, isExternalHref } from '@/lib/badges';
import { ROUTES, SITE } from '@/lib/site';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';

  return (
    <header className="llr-head" data-chrome="llr-strip">
      <div className="llr-head-row">
        <Link href="/" className="llr-mark">
          <span className="llr-mark-box" aria-hidden="true">
            {SITE.mark}
          </span>
          <span>{SITE.shortName}</span>
        </Link>
        <nav className="llr-nav" aria-label="LLR strip">
          {ROUTES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? 'is-on' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="llr-meta">
          {SITE.externalLeaves.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          {badgeEntries().map(({ key, badge }) =>
            badge.enabled && badge.href ? (
              <a
                key={key}
                href={badge.href}
                {...(isExternalHref(badge.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {badge.label}
              </a>
            ) : (
              <span key={key} className="llr-chip-off" aria-disabled="true" title={badge.disabledReason}>
                {badge.label}
              </span>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
