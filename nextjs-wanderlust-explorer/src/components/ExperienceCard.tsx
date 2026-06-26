"use client";

import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function ExperienceCard({
  experience,
  isFavorite = false,
  onToggleFavorite,
}: ExperienceCardProps) {
  const favoriteLabel = isFavorite
    ? `Remove ${experience.title} from favorites`
    : `Add ${experience.title} to favorites`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-lg">
      <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/95 px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm backdrop-blur-sm">
          {experience.category}
        </span>
        {onToggleFavorite ? (
          <button
            type="button"
            aria-label={favoriteLabel}
            aria-pressed={isFavorite}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onToggleFavorite(experience.id);
            }}
            className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
              isFavorite
                ? "border-rose-200 bg-rose-50 text-lg text-rose-600"
                : "border-white/30 bg-white/95 text-lg text-stone-500 hover:text-rose-500"
            }`}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-stone-950">
          <Link
            href={`/experiences/${experience.id}`}
            className="transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            {experience.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-stone-500">{experience.destination}</p>

        <div className="mt-auto flex items-end justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
              Rating
            </p>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-stone-950">
              <span className="text-amber-500">★</span>
              {experience.rating.toFixed(1)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
              From
            </p>
            <p className="mt-1 text-lg font-bold text-stone-950">
              ${experience.price.toFixed(0)}
              <span className="text-sm font-medium text-stone-500"> / person</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
