import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Limits. chrome.llr-strip */
export default function A3ClaimsPage() {
  return <RepoLanding pageId={PAGE_BINDINGS.claims.pageId} />;
}
