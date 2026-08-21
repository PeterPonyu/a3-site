import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Protocol. chrome.llr-strip */
export default function A3MethodsPage() {
  return <RepoLanding pageId={PAGE_BINDINGS.methods.pageId} />;
}
