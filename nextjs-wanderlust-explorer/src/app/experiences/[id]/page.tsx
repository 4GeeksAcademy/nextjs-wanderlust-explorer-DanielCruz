import Link from "next/link";
import { notFound } from "next/navigation";
import ExperienceDetailEffects from "@/components/ExperienceDetailEffects";
import FavoriteButton from "@/components/FavoriteButton";
import { experiences } from "@/data/experiences";

type ExperienceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <ExperienceDetailEffects title={experience.title} />
      <Link
        href="/experiences"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">←</span>
        Back to experiences
      </Link>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-stone-100 sm:aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800 shadow-sm">
                {experience.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                {experience.title}
              </h1>
              <p className="mt-3 text-lg text-stone-600">{experience.destination}</p>

              <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-stone-100 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Rating
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-stone-950">
                    <span className="text-amber-500">★</span>
                    {experience.rating.toFixed(1)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Price
                  </p>
                  <p className="mt-1 text-lg font-semibold text-stone-950">
                    From ${experience.price.toFixed(0)} per person
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                  About this experience
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-600">
                  {experience.description}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                  What&apos;s included
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-stone-600">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-teal-600">✓</span>
                    Expert local guide throughout the experience
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-teal-600">✓</span>
                    Small-group format for a more personal journey
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-teal-600">✓</span>
                    Curated itinerary designed for discovery and comfort
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Experience summary
            </p>
            <p className="mt-4 text-3xl font-bold text-stone-950">
              ${experience.price.toFixed(0)}
              <span className="text-base font-medium text-stone-500"> / person</span>
            </p>
            <p className="mt-2 text-sm text-stone-600">
              {experience.destination} · {experience.category}
            </p>

            <div className="mt-6 space-y-3">
              <FavoriteButton
                experienceId={experience.id}
                experienceTitle={experience.title}
              />
              <button
                type="button"
                disabled
                className="inline-flex w-full items-center justify-center rounded-2xl bg-teal-600 px-4 py-3.5 text-sm font-semibold text-white opacity-95"
              >
                Check availability
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-stone-500">
              Demo-only booking panel. No payment or reservation logic is connected.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-stone-200 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-950">Ready to explore?</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Save this experience or continue browsing curated trips around the world.
            </p>
            <Link
              href="/experiences"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-800 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Browse more experiences
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
