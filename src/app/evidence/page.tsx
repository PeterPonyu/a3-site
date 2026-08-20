import RepoLanding from '@/components/RepoLanding';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for a3-site Evidence. shared chrome.page-shell */
export default function A3EvidencePage() {
  return <RepoLanding pageId={PAGE_BINDINGS.evidence.pageId} />;
}
