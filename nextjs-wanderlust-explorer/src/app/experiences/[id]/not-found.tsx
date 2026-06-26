import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-stone-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Experience not found
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
          We couldn&apos;t find that experience
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-stone-600">
          The experience you&apos;re looking for may have been removed or the link
          may be incorrect.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Back to experiences
        </Link>
      </div>
    </div>
  );
}
