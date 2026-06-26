"use client";

import { useFavorites } from "@/context/FavoritesContext";

interface FavoriteButtonProps {
  experienceId: string;
  experienceTitle: string;
}

export default function FavoriteButton({
  experienceId,
  experienceTitle,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(experienceId);

  return (
    <button
      type="button"
      aria-label={
        favorited
          ? `Remove ${experienceTitle} from favorites`
          : `Add ${experienceTitle} to favorites`
      }
      aria-pressed={favorited}
      onClick={() => toggleFavorite(experienceId)}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
        favorited
          ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
          : "border-stone-200 bg-white text-stone-700 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
      }`}
    >
      <span aria-hidden="true">{favorited ? "♥" : "♡"}</span>
      {favorited ? "Saved to favorites" : "Save to favorites"}
    </button>
  );
}
