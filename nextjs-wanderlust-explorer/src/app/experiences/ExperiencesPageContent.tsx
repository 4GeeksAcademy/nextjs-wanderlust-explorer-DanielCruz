"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceGrid from "@/components/ExperienceGrid";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { useFavorites } from "@/context/FavoritesContext";
import type { ExperienceCategory } from "@/types/experience";

export default function ExperiencesPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { favoriteIds, toggleFavorite } = useFavorites();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const {
    filteredExperiences,
    totalCount,
    resultCount,
    categoryOptions,
    destinationOptions,
  } = useExperienceFilters({
    experiences,
    search,
    category,
    destination,
  });

  const updateQueryParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        const trimmedValue = value.trim();
        if (trimmedValue) {
          params.set(key, trimmedValue);
        } else {
          params.delete(key);
        }
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const clearFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("category");
    params.delete("destination");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const hasActiveFilters = Boolean(
    search.trim() || category.trim() || destination.trim(),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Explore Experiences
        </h1>
        <p className="mt-2 text-stone-600">
          Browse curated activities across destinations worldwide.
        </p>
      </div>

      <div className="mb-6 space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6">
        <SearchBar
          value={search}
          onSearchChange={(value) => updateQueryParams({ search: value })}
        />
        <FilterBar
          categoryOptions={categoryOptions}
          destinationOptions={destinationOptions}
          selectedCategory={category as ExperienceCategory | ""}
          selectedDestination={destination}
          onCategoryChange={(value) => updateQueryParams({ category: value })}
          onDestinationChange={(value) =>
            updateQueryParams({ destination: value })
          }
        />
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-600">
          Showing {resultCount} of {totalCount} experiences
        </p>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <ExperienceGrid
        experiences={filteredExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
