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
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
        favorited
          ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
          : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
      }`}
    >
      <span aria-hidden="true">{favorited ? "♥" : "♡"}</span>
      {favorited ? "Saved to favorites" : "Save to favorites"}
    </button>
  );
}
