import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-stone-200 bg-white px-6 py-14 text-center shadow-sm sm:px-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-2xl ring-1 ring-teal-100">
          ✈
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Experience not found
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
          We couldn&apos;t find that experience
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-stone-600">
          The experience you&apos;re looking for may have been removed or the link
          may be incorrect.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          Back to experiences
        </Link>
      </div>
    </div>
  );
}
