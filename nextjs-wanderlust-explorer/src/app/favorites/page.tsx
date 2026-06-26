"use client";

import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import ExperienceGrid from "@/components/ExperienceGrid";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteExperiences, favoriteCount, favoriteIds, toggleFavorite } =
    useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-8 lg:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Your shortlist
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Saved Favorites
        </h1>
        <p className="mt-3 max-w-2xl text-base text-stone-600 sm:text-lg">
          Your favorite experiences, all in one place.
        </p>
      </div>

      {favoriteCount === 0 ? (
        <EmptyState
          title="No saved experiences yet."
          description="Explore curated trips and tap the heart icon to save your favorites."
        >
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Explore Experiences
          </Link>
        </EmptyState>
      ) : (
        <>
          <div className="mb-8 rounded-3xl border border-stone-200 bg-gradient-to-r from-teal-50 via-white to-amber-50 p-6 shadow-sm sm:p-8">
            <p className="text-lg font-semibold text-stone-950">
              You have {favoriteCount} saved{" "}
              {favoriteCount === 1 ? "experience" : "experiences"}.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
              Keep exploring and build your perfect travel shortlist.
            </p>
            <Link
              href="/experiences"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Explore more experiences
            </Link>
          </div>

          <ExperienceGrid
            experiences={favoriteExperiences}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
          />
        </>
      )}
    </div>
  );
}
