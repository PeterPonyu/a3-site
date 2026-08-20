import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Claims. shared chrome.page-shell */
export default function A3ClaimsPage() {
  return <RepoLanding pageId={PAGE_BINDINGS.claims.pageId} />;
}
