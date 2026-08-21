import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Axes. chrome.llr-strip */
export default function A3EvidencePage() {
  return <RepoLanding pageId={PAGE_BINDINGS.evidence.pageId} />;
}
