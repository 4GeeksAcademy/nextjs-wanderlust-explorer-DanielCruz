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
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <ExperienceDetailEffects title={experience.title} />
      <Link
        href="/experiences"
        className="mb-6 inline-flex text-sm font-medium text-teal-700 hover:text-teal-800"
      >
        ← Back to experiences
      </Link>

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] bg-stone-100 lg:aspect-auto lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <span className="inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              {experience.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {experience.title}
            </h1>

            <p className="mt-3 text-base text-stone-600">{experience.destination}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 font-semibold text-stone-900">
                <span className="text-stone-400">★</span>
                {experience.rating.toFixed(1)}
              </div>
              <p className="font-semibold text-stone-900">
                From ${experience.price.toFixed(0)} per person
              </p>
            </div>

            <div className="mt-6">
              <FavoriteButton
                experienceId={experience.id}
                experienceTitle={experience.title}
              />
            </div>

            <div className="mt-8 border-t border-stone-200 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                About this experience
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <aside className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-stone-900">Ready to explore?</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-stone-600">
          Save this experience or continue browsing curated trips around the world.
        </p>
        <Link
          href="/experiences"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Browse more experiences
        </Link>
      </aside>
    </div>
  );
}
