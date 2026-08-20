import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Home. shared chrome.page-shell */
export default function A3HomePage() {
  return <RepoLanding pageId={PAGE_BINDINGS.home.pageId} />;
}
