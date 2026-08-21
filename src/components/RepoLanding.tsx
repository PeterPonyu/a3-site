import RouteCards from '@/components/RouteCards';
import { SITE } from '@/lib/site';

export default function RepoLanding({
  pageId,
  showExplore = false,
}: {
  pageId: string;
  showExplore?: boolean;
}) {
  return (
    <div className="llr-wrap">
      <p className="llr-kicker">{SITE.kicker}</p>
      <h1 className="llr-title">{SITE.title}</h1>
      <p className="llr-lead">{SITE.lead}</p>
      <p className="llr-lead">{SITE.physicalObject}</p>
      <p className="llr-lead">
        <a href={SITE.github}>GitHub repository</a>
      </p>
      {showExplore ? <RouteCards /> : null}
      <p className="sr-only" data-page-id={pageId} data-chrome="chrome.llr-strip">
        {pageId}
      </p>
    </div>
  );
}
