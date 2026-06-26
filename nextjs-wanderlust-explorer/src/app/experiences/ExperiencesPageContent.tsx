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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mb-8 lg:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Explorer
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Explore Experiences
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
          Find curated adventures, food tours, wellness retreats, and cultural trips.
        </p>
      </div>

      <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
        <div className="space-y-5">
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
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <p className="text-sm font-semibold text-stone-950">
            Showing {resultCount} of {totalCount} experiences
          </p>
          {hasActiveFilters ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {search.trim() ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-stone-200">
                  Search: {search}
                </span>
              ) : null}
              {category.trim() ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-stone-200">
                  Category: {category}
                </span>
              ) : null}
              {destination.trim() ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-stone-200">
                  Destination: {destination}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
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
