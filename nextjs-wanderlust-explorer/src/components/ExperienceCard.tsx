import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm">
          {experience.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-stone-900">
          <Link
            href={`/experiences/${experience.id}`}
            className="hover:text-teal-700"
          >
            {experience.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-stone-500">{experience.destination}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold text-stone-900">
              {experience.rating.toFixed(1)}
            </span>
            <span className="text-stone-400">★</span>
          </div>
          <p className="text-sm font-semibold text-stone-900">
            ${experience.price.toFixed(0)}
            <span className="font-normal text-stone-500"> / person</span>
          </p>
        </div>
      </div>
    </article>
  );
}
