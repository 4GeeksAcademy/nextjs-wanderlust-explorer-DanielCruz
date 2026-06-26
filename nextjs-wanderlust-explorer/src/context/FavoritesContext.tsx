"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/types/experience";

interface FavoritesContextValue {
  favoriteIds: string[];
  favoriteExperiences: Experience[];
  favoriteCount: number;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((favoriteId) => favoriteId !== id);
      }

      return [...currentIds, id];
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const favoriteExperiences = useMemo(() => {
    return favoriteIds
      .map((id) => experiences.find((experience) => experience.id === id))
      .filter((experience): experience is Experience => experience !== undefined);
  }, [favoriteIds]);

  const value = useMemo(
    () => ({
      favoriteIds,
      favoriteExperiences,
      favoriteCount: favoriteIds.length,
      isFavorite,
      toggleFavorite,
    }),
    [favoriteIds, favoriteExperiences, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
