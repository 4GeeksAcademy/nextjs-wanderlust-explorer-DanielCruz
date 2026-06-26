"use client";

import Link from "next/link";
import EmptyState from "@/components/EmptyState";
import ExperienceGrid from "@/components/ExperienceGrid";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteExperiences, favoriteCount, favoriteIds, toggleFavorite } =
    useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Saved Favorites
        </h1>
        <p className="mt-2 text-stone-600">
          {favoriteCount === 1
            ? "1 saved experience"
            : `${favoriteCount} saved experiences`}
        </p>
      </div>

      {favoriteCount === 0 ? (
        <EmptyState
          title="No saved experiences yet."
          description="Explore experiences and tap the heart icon to save your favorites."
        >
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Explore Experiences
          </Link>
        </EmptyState>
      ) : (
        <ExperienceGrid
          experiences={favoriteExperiences}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
