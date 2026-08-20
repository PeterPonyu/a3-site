import { SITE } from '@/lib/site';

export default function RepoLanding({ pageId }: { pageId: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
        {SITE.kicker}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{SITE.title}</h1>
      <p className="mt-4 text-lg text-slate-700">{SITE.lead}</p>
      <p className="mt-8 text-slate-800">
        <a
          className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-700"
          href={SITE.github}
        >
          GitHub repository
        </a>
      </p>
      <p className="sr-only" data-page-id={pageId}>
        {pageId}
      </p>
    </div>
  );
}
