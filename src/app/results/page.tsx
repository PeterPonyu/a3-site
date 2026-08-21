import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Scores. chrome.llr-strip */
export default function A3ResultsPage() {
  return <RepoLanding pageId={PAGE_BINDINGS.results.pageId} />;
}
