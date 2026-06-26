import Link from "next/link";
import { experiences } from "@/data/experiences";

const stats = [
  { value: "100+", label: "curated experiences" },
  { value: "5", label: "experience categories" },
  { value: "50+", label: "global destinations" },
];

const categories = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
] as const;

const featuredImages = [experiences[0], experiences[2], experiences[5], experiences[8]];

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
            <p className="inline-flex w-fit rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-800">
              Curated global experiences
            </p>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Discover unforgettable travel experiences
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              Browse curated adventures, cultural tours, food experiences, and
              wellness retreats from destinations around the world.
            </p>

            <div className="mt-8">
              <Link
                href="/experiences"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Explore Experiences
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-100 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-2xl font-bold text-stone-950">{value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-stone-500 sm:text-sm">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[320px] bg-stone-100 lg:min-h-full">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-3 sm:gap-3 sm:p-4">
              {featuredImages.map((experience, index) => (
                <Link
                  key={experience.id}
                  href={`/experiences?destination=${encodeURIComponent(experience.destination)}`}
                  aria-label={`View experiences in ${experience.destination}`}
                  className={`group relative block overflow-hidden rounded-2xl transition hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                    index === 0 ? "col-span-2 row-span-1" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className="h-full min-h-[140px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-stone-950/10 to-transparent transition-colors group-hover:from-stone-950/55" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
                    {experience.destination}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:mt-12">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-stone-950 sm:text-2xl">
            Browse by experience type
          </h2>
          <p className="mt-2 text-sm text-stone-600 sm:text-base">
            Start with a category and explore handpicked trips worldwide.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/experiences?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
