import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Home. chrome.llr-strip */
export default function A3HomePage() {
  return <RepoLanding pageId={PAGE_BINDINGS.home.pageId} showExplore />;
}
