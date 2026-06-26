import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white px-4 py-12 shadow-sm sm:px-12 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50 opacity-80" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-700">
          Wanderlust Labs
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
          Discover unforgettable travel experiences
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:mt-6 sm:text-lg">
          Browse curated adventures, cultural tours, food experiences, and
          wellness retreats from destinations around the world.
        </p>
        <div className="mt-10">
          <Link
            href="/experiences"
            className="inline-flex w-full items-center justify-center rounded-xl bg-stone-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Explore Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
