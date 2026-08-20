import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Methods. shared chrome.page-shell */
export default function A3MethodsPage() {
  return <RepoLanding pageId={PAGE_BINDINGS.methods.pageId} />;
}
